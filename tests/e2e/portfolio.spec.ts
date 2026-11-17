import { test, expect } from '@playwright/test';
for (const width of [320, 375, 768, 1024, 1440]) {
  test(`conteúdo, recursos e layout em ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
    page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
    await page.goto('/');
    await page.evaluate(() => document.fonts.ready);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Matheus');
    await expect(page.locator('#projetos article')).toHaveCount(5);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
    expect(overflow).toBe(false);
    if (await page.getByRole('button', { name: 'Menu', exact: true }).isVisible()) await page.getByRole('button', { name: 'Menu', exact: true }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'Projetos', exact: true }).click();
    await expect(page).toHaveURL(/#projetos$/);
    await expect(page.locator('details')).toHaveCount(0);
    await expect(page.locator('#twinpulse .contributions li').filter({ hasText: 'Bubblewrap' })).toBeVisible();
    for (const photo of await page.locator('.photo img').all()) { await photo.scrollIntoViewIfNeeded(); await expect.poll(() => photo.evaluate(image => (image as HTMLImageElement).complete && (image as HTMLImageElement).naturalWidth > 0)).toBe(true); }
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await page.screenshot({ path: `test-results/portfolio-${width}.png`, fullPage: true });
    expect(errors).toEqual([]);
  });
}
test('menu mobile: teclado, Escape e seleção de âncora', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  const toggle = page.getByRole('button', { name: 'Menu' });
  await toggle.focus();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('navigation')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(toggle).toBeFocused();
  await expect(page.getByRole('navigation')).toBeHidden();
  await toggle.click();
  await page.getByRole('navigation').getByRole('link', { name: 'Projetos', exact: true }).click();
  await expect(page.getByRole('navigation')).toBeHidden();
  await expect(page).toHaveURL(/#projetos$/);
});
test('prefere movimento reduzido e preserva os detalhes', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
  await page.waitForTimeout(2100);
  expect(await page.evaluate(() => window.scrollY)).toBe(0);
  await expect(page.getByRole('link', { name: 'Explorar protótipo' })).toHaveCount(0);
});

test('identidade do Hero, motion de rolagem e contraste no contato', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);

  await expect(page.locator('.name-first')).toHaveCSS('color', 'rgb(245, 240, 230)');
  await expect(page.locator('.name-last')).toHaveCSS('color', 'rgb(244, 92, 40)');
  await expect(page.locator('.hero-scroll')).toHaveCount(0);
  await page.waitForTimeout(2800);
  expect(await page.evaluate(() => window.scrollY)).toBe(0);
  await expect(page.locator('#inicio #destaques')).toBeInViewport();
  await page.screenshot({ path: 'test-results/hero-final.png' });

  const heroNameTop = await page.locator('#hero-title').evaluate(element => element.getBoundingClientRect().top);
  expect(heroNameTop).toBeLessThan(220);

  const linkedIn = page.locator('.contact-links a').filter({ hasText: 'LinkedIn' });
  await linkedIn.scrollIntoViewIfNeeded();
  await linkedIn.hover();
  await expect(linkedIn).toHaveCSS('color', 'rgb(244, 92, 40)');
});

test('Campus, fotos, contatos e vídeo sob demanda', async ({ page }) => {
 await page.goto('/');
 await expect(page.getByRole('heading', { name: 'TEAjudo', exact: true })).toBeVisible();
 await expect(page.locator('#projetos')).toContainText('BeeThere');
 await expect(page.locator('#beethere video')).toHaveCount(0);
 await page.getByRole('button', {name:'Reproduzir apresentação do BeeThere'}).click();
 await expect(page.locator('#beethere video')).toBeVisible();
 await expect(page.locator('#contato a').first()).toHaveAttribute('href','mailto:matheus.galdino.souza@ccc.ufcg.edu.br');
 await expect(page.locator('.motion-control')).toHaveCount(0);
 await expect(page.getByRole('link',{name:/currículo/i})).toHaveCount(0);
 for (const photo of await page.locator('.photo img').all()) { await photo.scrollIntoViewIfNeeded(); await expect.poll(() => photo.evaluate(image => (image as HTMLImageElement).complete && (image as HTMLImageElement).naturalWidth > 0)).toBe(true); }
 const photos = await page.locator('.photo img').evaluateAll(images => images.every(image => (image as HTMLImageElement).complete && (image as HTMLImageElement).naturalWidth > 0));
 expect(photos).toBe(true);
});

test('destaques ficam visíveis no hero mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 580 });
  await page.goto('/');
  await expect(page.locator('#inicio #destaques')).toBeInViewport({ ratio: .95 });
});

test('TwinPulse expande a tela e libera a passagem para o Trading Bot nos dois sentidos', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/#twinpulse');
  const grid = page.locator('#twinpulse .project-grid');
  const laptop = page.locator('.laptop-mockup');
  const copy = grid.locator('.project-copy');
  const top = await grid.evaluate(element => element.getBoundingClientRect().top + scrollY);
  const height = await grid.evaluate(element => element.getBoundingClientRect().height);
  const jump = (offset: number) => page.evaluate(y => scrollTo({ top: y, behavior: 'instant' }), top + offset);
  await jump(-550);
  await expect(copy).toHaveCSS('opacity', '1');
  const initialWidth = await laptop.evaluate(element => element.getBoundingClientRect().width);
  await jump(-150);
  await expect(copy).toHaveCSS('opacity', '1');
  await expect.poll(() => laptop.evaluate(element => element.getBoundingClientRect().width)).toBeLessThan(initialWidth * 1.1);
  await jump(height - 610);
  await expect.poll(() => laptop.evaluate(element => element.getBoundingClientRect().width)).toBeGreaterThan(initialWidth * 1.5);
  expect(await laptop.evaluate(element => element.querySelector('.laptop-display')!.getBoundingClientRect().height / element.getBoundingClientRect().height)).toBeGreaterThan(.7);
  await jump(850);
  await expect.poll(() => laptop.evaluate(element => element.getBoundingClientRect().width)).toBeGreaterThan(initialWidth * 1.5);
  expect(await laptop.evaluate(element => element.getBoundingClientRect().bottom <= document.querySelector('#crypto')!.getBoundingClientRect().top)).toBe(true);
  await expect(page.locator('#twinpulse .pin-spacer')).toHaveCount(0);
  await jump(-550);
  await expect(copy).toHaveCSS('opacity', '1');
  await expect.poll(() => laptop.evaluate(element => element.getBoundingClientRect().width)).toBeLessThan(initialWidth * 1.1);
});
