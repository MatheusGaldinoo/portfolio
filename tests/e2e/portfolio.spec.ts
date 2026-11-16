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
    await expect(page.locator('#projetos article')).toHaveCount(3);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
    expect(overflow).toBe(false);
    if (await page.getByRole('button', { name: 'Menu', exact: true }).isVisible()) await page.getByRole('button', { name: 'Menu', exact: true }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'Projetos', exact: true }).click();
    await expect(page).toHaveURL(/#projetos$/);
    await expect(page.locator('details')).toHaveCount(0);
    await expect(page.getByText('Segurança na execução de código com Bubblewrap e integração de serviços.')).toBeVisible();
    for (const photo of await page.locator('.photo img').all()) { await photo.scrollIntoViewIfNeeded(); await expect.poll(() => photo.evaluate(image => (image as HTMLImageElement).complete && (image as HTMLImageElement).naturalWidth > 0)).toBe(true); }
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await page.screenshot({ path: `/tmp/portfolio-${width}.png`, fullPage: true });
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
  await expect(page.getByRole('link', { name: 'Explorar protótipo' })).toHaveAttribute('href', 'https://appeal-icing-05038539.figma.site');
  await expect(page.getByRole('link', { name: 'Visitar aplicação' })).toHaveAttribute('href', 'https://cars-stock.vercel.app');
});

test('Campus, fotos, contatos e vídeo sob demanda', async ({ page }) => {
 await page.goto('/');
 await expect(page.locator('#campus')).toContainText('TeAjudo');
 await expect(page.locator('#campus')).toContainText('BeeThere');
 await expect(page.locator('#campus video')).toHaveCount(0);
 await page.getByRole('button', {name:'Reproduzir apresentação do BeeThere'}).click();
 await expect(page.locator('#campus video')).toBeVisible();
 await page.getByRole('button',{name:'Reproduzir apresentação do TeAjudo no DLJ'}).click();
 await expect(page.getByLabel('apresentação do TeAjudo no DLJ')).toBeVisible();
 await expect.poll(() => page.getByLabel('apresentação do TeAjudo no DLJ').evaluate(el => (el as HTMLVideoElement).videoWidth), { timeout: 15000 }).toBeGreaterThan(0);
 await expect(page.locator('#contato a').first()).toHaveAttribute('href','mailto:matheus.galdino.souza@ccc.ufcg.edu.br');
 await expect(page.locator('.motion-control')).toHaveCount(0);
 await expect(page.getByRole('link',{name:/currículo/i})).toHaveCount(0);
 for (const photo of await page.locator('.photo img').all()) { await photo.scrollIntoViewIfNeeded(); await expect.poll(() => photo.evaluate(image => (image as HTMLImageElement).complete && (image as HTMLImageElement).naturalWidth > 0)).toBe(true); }
 const photos = await page.locator('.photo img').evaluateAll(images => images.every(image => (image as HTMLImageElement).complete && (image as HTMLImageElement).naturalWidth > 0));
 expect(photos).toBe(true);
});
