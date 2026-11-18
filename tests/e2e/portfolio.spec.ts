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
    await expect(page.locator('#projetos article')).toHaveCount(4);
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

test('identidade do Hero e contraste no contato', async ({ page }) => {
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
  // User input cancels the pending Hero preview before navigating to the footer.
  await page.mouse.wheel(0, 1);
  await linkedIn.scrollIntoViewIfNeeded();
  await linkedIn.hover();
  await expect(linkedIn).toHaveCSS('color', 'rgb(244, 92, 40)');
});

test('prévia do Hero aguarda o zoom, revela os projetos e retorna', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  const result = await page.evaluate(async () => {
    const portrait = document.querySelector('#inicio .photo img')!;
    const zoom = portrait.getAnimations()[0];
    const title = document.getElementById('projects-title')!;
    const afterZoom = await zoom.finished.then(() => scrollY);
    let peak = 0;
    let revealed = false;
    const end = performance.now() + 2200;
    while (performance.now() < end) {
      await new Promise(requestAnimationFrame);
      peak = Math.max(peak, scrollY);
      const bounds = title.getBoundingClientRect();
      revealed ||= bounds.top >= 0 && bounds.bottom <= innerHeight;
    }
    return { afterZoom, peak, revealed, final: scrollY };
  });
  expect(result.afterZoom).toBe(0);
  expect(result.peak).toBeGreaterThan(40);
  expect(result.revealed).toBe(true);
  expect(result.final).toBe(0);
});

test('interação cancela a prévia pendente e âncoras não iniciam a prévia', async ({ page }) => {
  await page.clock.install();
  await page.goto('/');
  await page.keyboard.press('Escape');
  await page.locator('#inicio').evaluate(hero => {
    hero.getAnimations({ subtree: true }).forEach(animation => animation.finish());
  });
  await page.clock.runFor(2000);
  expect(await page.evaluate(() => scrollY)).toBe(0);
  await page.goto('/#projetos');
  await expect.poll(() => page.locator('#projetos').evaluate(section => {
    const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop);
    return Math.abs(section.getBoundingClientRect().top - offset);
  })).toBeLessThan(2);
  const position = await page.evaluate(() => scrollY);
  await page.clock.runFor(6000);
  expect(Math.abs(await page.evaluate(() => scrollY) - position)).toBeLessThan(2);
});

test('criptomoedas preservam movimento e preferência de movimento reduzido', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/#twinpulse');
  const coins = page.locator('.bitcoin-floats');
  const drift = () => coins.evaluate(element => parseFloat((element as HTMLElement).style.getPropertyValue('--drift')));
  const initial = await drift();
  await page.locator('#crypto').scrollIntoViewIfNeeded();
  await expect.poll(drift).not.toBe(initial);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect.poll(drift).toBe(0);
});

test('Campus, fotos, contatos e vídeo sob demanda', async ({ page }) => {
 await page.goto('/');
 await expect(page.getByRole('heading', { name: 'TEAjudo', exact: true })).toHaveCount(0);
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

test('TwinPulse mantém o laptop centralizado antes de liberar o Trading Bot', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/#twinpulse');
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))));
  const section = page.locator('#twinpulse');
  const laptop = page.locator('.laptop-mockup');
  const copy = section.locator('.project-copy');
  const start = await section.evaluate(element => element.getBoundingClientRect().bottom + scrollY - innerHeight);
  const jump = async (offset: number) => {
    await page.evaluate(async y => {
      scrollTo({ top: y, behavior: 'instant' });
      await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
    }, start + offset);
  };
  await jump(-200);
  await expect(copy).toHaveCSS('opacity', '1');
  const initialWidth = await laptop.evaluate(element => element.getBoundingClientRect().width);
  await jump(0);
  await expect(copy).toHaveCSS('opacity', '1');
  await expect.poll(() => laptop.evaluate(element => element.getBoundingClientRect().width)).toBeLessThan(initialWidth * 1.1);

  await jump(300);
  await expect.poll(() => laptop.evaluate(element => element.getBoundingClientRect().width)).toBeGreaterThan(initialWidth * 1.5);
  await expect(copy).toHaveCSS('opacity', '0');
  const focused = await laptop.boundingBox();
  expect(focused!.y).toBeGreaterThan(32);
  expect(focused!.y + focused!.height).toBeLessThan(868);
  expect(Math.abs(focused!.x + focused!.width / 2 - 720)).toBeLessThan(2);
  expect(Math.abs(focused!.y + focused!.height / 2 - 450)).toBeLessThan(2);
  expect(await laptop.evaluate(element => element.querySelector('.laptop-display')!.getBoundingClientRect().height / element.getBoundingClientRect().height)).toBeGreaterThan(.7);

  await jump(500);
  const held = await laptop.boundingBox();
  expect(Math.abs(held!.width - focused!.width)).toBeLessThan(1);
  expect(Math.abs(held!.y - focused!.y)).toBeLessThan(1);
  expect(await page.locator('#crypto').evaluate(element => element.getBoundingClientRect().top)).toBeGreaterThanOrEqual(900);
  await expect(page.locator('.pin-spacer > #twinpulse')).toHaveCount(1);

  await jump(900);
  expect(Math.abs((await laptop.boundingBox())!.width - focused!.width)).toBeLessThan(1);
  expect(await laptop.evaluate(element => element.getBoundingClientRect().bottom <= document.querySelector('#crypto')!.getBoundingClientRect().top)).toBe(true);
  await expect(page.locator('#crypto')).toBeInViewport();
  await jump(500);
  expect(Math.abs((await laptop.boundingBox())!.y - focused!.y)).toBeLessThan(1);
  await jump(-200);
  await expect(copy).toHaveCSS('opacity', '1');
  await expect.poll(() => laptop.evaluate(element => element.getBoundingClientRect().width)).toBeLessThan(initialWidth * 1.1);
});

test('TwinPulse remove a fixação em telas menores e com movimento reduzido', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/#twinpulse');
  const pin = page.locator('.pin-spacer > #twinpulse');
  await expect(pin).toHaveCount(1);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(pin).toHaveCount(0);
  await expect(page.locator('#twinpulse .project-copy')).toHaveCSS('opacity', '1');
  await expect(page.locator('.laptop-mockup')).toHaveCSS('transform', 'none');
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await expect(pin).toHaveCount(1);
  await page.setViewportSize({ width: 1024, height: 768 });
  await expect(pin).toHaveCount(0);
  await expect(page.locator('.laptop-mockup')).toHaveCSS('transform', 'none');
  await page.setViewportSize({ width: 1440, height: 450 });
  await expect(pin).toHaveCount(0);
  await expect(page.locator('.laptop-mockup')).toHaveCSS('transform', 'none');
});

for (const width of [375, 1440]) {
  test(`prévia com #inicio e clique neutro em ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/#inicio');
    await page.locator('.hero-description').click();
    const result = await page.evaluate(async () => {
      const hero = document.getElementById('inicio')!;
      // Exercise cancellation of one intro while the other finishes normally.
      hero.querySelector('.signature-stroke')!.getAnimations().forEach(animation => animation.cancel());
      hero.querySelector('.photo img')!.getAnimations().forEach(animation => animation.finish());
      let peak = 0;
      let revealed = false;
      const end = performance.now() + 2200;
      while (performance.now() < end) {
        await new Promise(requestAnimationFrame);
        peak = Math.max(peak, scrollY);
        const bounds = document.getElementById('projects-title')!.getBoundingClientRect();
        revealed ||= bounds.top >= 0 && bounds.bottom <= innerHeight;
      }
      return { peak, revealed, final: scrollY };
    });
    expect(result.peak).toBeGreaterThan(40);
    expect(result.revealed).toBe(true);
    expect(result.final).toBe(0);
  });
}
