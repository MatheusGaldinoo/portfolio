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
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Matheus Galdino');
    await expect(page.getByRole('article')).toHaveCount(4);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
    expect(overflow).toBe(false);
    await page.getByRole('link', { name: 'Ver projetos', exact: true }).click();
    await expect(page).toHaveURL(/#projetos$/);
    await page.locator('summary').first().click();
    await expect(page.getByText('Segurança na execução de código com Bubblewrap e integração de serviços.')).toBeVisible();
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
