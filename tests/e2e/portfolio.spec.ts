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
    await expect(page.locator('#twinpulse .contributions li').first()).toBeVisible();
    await expect(page.locator('.project-list > *').nth(3)).toHaveAttribute('id', 'twinpulse');
    for (const photo of await page.locator('.photo img').all()) { await photo.scrollIntoViewIfNeeded(); await expect.poll(() => photo.evaluate(image => (image as HTMLImageElement).complete && (image as HTMLImageElement).naturalWidth > 0), { timeout: 15000 }).toBe(true); }
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

  expect(await page.evaluate(() => document.fonts.check('16px "Season Collection"'))).toBe(true);
  await expect(page.locator('body')).toHaveCSS('font-family', /DM Sans Variable/);
  await expect(page.locator('#hero-title')).toHaveCSS('font-family', /Season Collection/);
  await expect(page.locator('#projetos')).toBeVisible();
  await expect(page.locator('.hero-description')).toHaveCSS('font-family', /DM Sans Variable/);
  await expect(page.locator('.name-first')).toHaveCSS('color', 'rgb(245, 240, 230)');
  await expect(page.locator('.name-last')).toHaveCSS('color', 'rgb(244, 92, 40)');
  await expect(page.locator('.hero-scroll')).toHaveCount(0);
  await page.waitForTimeout(2800);
  expect(await page.evaluate(() => window.scrollY)).toBe(0);
  await expect(page.locator('.hero-cta')).toBeVisible();
  await page.screenshot({ path: 'test-results/hero-final.png' });

  const heroNameTop = await page.locator('#hero-title').evaluate(element => element.getBoundingClientRect().top);
  expect(heroNameTop).toBeLessThan(220);

  const linkedIn = page.locator('.contact-links-row a').filter({ hasText: 'LinkedIn' });
  // User input cancels the pending Hero preview before navigating to the footer.
  await page.mouse.wheel(0, 1);
  await linkedIn.scrollIntoViewIfNeeded();
  await expect.poll(async () => {
    await linkedIn.hover();
    return linkedIn.evaluate(element => getComputedStyle(element).color);
  }).toBe('rgb(244, 92, 40)');
});

test('temas das seções alternam entre escuro e claro', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  const backgrounds = await page.evaluate(() => {
    const color = (selector: string) => getComputedStyle(document.querySelector(selector)!).backgroundColor;
    return {
      hero: color('.hero-full > .photo'),
      proof: color('.proof-strip'),
      projects: color('.featured-projects'),
      work: color('.working-section'),
      achievements: color('.recognition-section'),
      closing: color('.closing-statement'),
      footer: color('.hebbia-footer'),
    };
  });
  expect(backgrounds).toEqual({
    hero: 'rgb(0, 0, 0)',
    proof: 'rgb(245, 240, 230)',
    projects: 'rgb(0, 0, 0)',
    work: 'rgb(245, 240, 230)',
    achievements: 'rgb(0, 0, 0)',
    closing: 'rgb(245, 240, 230)',
    footer: 'rgb(0, 0, 0)',
  });
});

test('conquistas permanece estática, sem transições antes ou depois', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);

  expect(await page.locator('main section[data-st-01]')).toHaveCount(0);
  for (const selector of ['#projetos', '#trabalho', '#conquistas', '.closing-statement']) {
    expect(await page.locator(selector).getAttribute('data-st-01')).toBeNull();
  }

  const styles = await page.evaluate(() => {
    const conquistas = document.querySelector<HTMLElement>('#conquistas')!;
    const closing = document.querySelector<HTMLElement>('.closing-statement')!;
    const after = getComputedStyle(conquistas, '::after');
    const transform = new DOMMatrix(getComputedStyle(closing).transform);
    return {
      afterContent: after.content,
      afterHeight: after.height,
      revealVar: getComputedStyle(conquistas).getPropertyValue('--st-reveal-y').trim(),
      closingPosition: getComputedStyle(closing).position,
      closingY: transform.m42,
      trabalhoHeight: Math.round(document.querySelector<HTMLElement>('#trabalho')!.getBoundingClientRect().height),
      closingHeight: Math.round(closing.getBoundingClientRect().height),
    };
  });

  expect(styles.afterContent).toBe('none');
  expect(styles.afterHeight).toBe('auto');
  expect(styles.revealVar).toBe('');
  expect(styles.closingPosition).toBe('relative');
  expect(styles.closingY).toBe(0);
  expect(styles.trabalhoHeight).toBeGreaterThanOrEqual(899);
  expect(styles.closingHeight).toBeGreaterThanOrEqual(899);
});

test('prévia do Hero aguarda o zoom, revela o proof strip e retorna', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  const result = await page.evaluate(async () => {
    const portrait = document.querySelector('#inicio .photo img')!;
    const zoom = portrait.getAnimations()[0];
    const proof = document.getElementById('destaques')!;
    const projects = document.getElementById('projetos')!;
    const afterZoom = await zoom.finished.then(() => scrollY);
    let peak = 0;
    let revealed = false;
    let showedProjects = false;
    const end = performance.now() + 2200;
    while (performance.now() < end) {
      await new Promise(requestAnimationFrame);
      peak = Math.max(peak, scrollY);
      const proofBounds = proof.getBoundingClientRect();
      const projectBounds = projects.getBoundingClientRect();
      revealed ||= proofBounds.top >= 0 && proofBounds.bottom <= innerHeight + 2;
      showedProjects ||= projectBounds.top < innerHeight && projectBounds.bottom > 0;
    }
    return { afterZoom, peak, revealed, showedProjects, final: scrollY };
  });
  expect(result.afterZoom).toBe(0);
  expect(result.peak).toBeGreaterThan(40);
  expect(result.revealed).toBe(true);
  expect(result.showedProjects).toBe(false);
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

test('Trading Bot não exibe ilustrações de criptomoedas', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/#crypto');
  await expect(page.locator('#crypto .bitcoin-floats')).toHaveCount(0);
  await expect(page.locator('#crypto img[src*="bitcoin"], #crypto img[src*="ethereum"], #crypto img[src*="solana"]')).toHaveCount(0);
});

test('Campus, fotos, contatos e vídeo sob demanda', async ({ page }) => {
 await page.goto('/');
 await page.keyboard.press('Escape');
 await expect(page.getByRole('heading', { name: 'TEAjudo', exact: true })).toHaveCount(0);
 await expect(page.locator('#projetos')).toContainText('BeeThere');
 await expect(page.locator('#beethere video')).toHaveCount(0);
 await page.getByRole('button', {name:'Reproduzir apresentação do BeeThere'}).click();
 await expect(page.locator('#beethere video')).toBeVisible();
 await expect(page.locator('#contato a').first()).toHaveAttribute('href','mailto:matheus.galdino.souza@ccc.ufcg.edu.br');
 await expect(page.locator('.footer-watermark text')).toHaveCSS('font-family', /Bowlby One SC/);
 await expect(page.locator('.motion-control')).toHaveCount(0);
 await expect(page.getByRole('link',{name:/currículo/i})).toHaveCount(0);
 for (const photo of await page.locator('.photo img').all()) { await photo.scrollIntoViewIfNeeded(); await expect.poll(() => photo.evaluate(image => (image as HTMLImageElement).complete && (image as HTMLImageElement).naturalWidth > 0), { timeout: 15000 }).toBe(true); }
 const photos = await page.locator('.photo img').evaluateAll(images => images.every(image => (image as HTMLImageElement).complete && (image as HTMLImageElement).naturalWidth > 0));
 expect(photos).toBe(true);
 await expect(page.locator('.working-section__background source[type="image/webp"]')).toHaveAttribute('srcset', '/media/optimized/campus-equipe-6766.webp');
 const backgroundSrc = await page.locator('.working-section__background img').evaluate(image => (image as HTMLImageElement).currentSrc);
 expect(backgroundSrc).toContain('campus-equipe-6766.webp');
 const heroMask = await page.locator('.hero-full').evaluate(element => getComputedStyle(element, '::after').backgroundImage);
 const workMask = await page.locator('.working-section').evaluate(element => getComputedStyle(element, '::after').backgroundImage);
 expect(workMask).not.toBe(heroMask);
 expect(workMask).toContain('rgba(0, 0, 0, 0.96)');
});



test('cards se sobrepõem como pastas e todos usam a altura do BeeThere', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/#crypto');
  const cards = page.locator('.project-list > *');
  await expect(cards).toHaveCount(4);
  await expect(cards.nth(3)).toHaveAttribute('id', 'twinpulse');
  await expect.poll(async () => cards.evaluateAll(nodes => new Set(nodes.map(node => Math.round(node.getBoundingClientRect().height))).size)).toBe(1);
  const [cryptoHeight, twinHeight] = await cards.evaluateAll(nodes => [nodes[0].getBoundingClientRect().height, nodes[3].getBoundingClientRect().height]);
  expect(Math.abs(cryptoHeight - twinHeight)).toBeLessThan(2);
  await page.locator('#whatsapp').evaluate(card => scrollBy({ top: card.getBoundingClientRect().top - 120, behavior: 'instant' }));
  const [top1, top2, top3] = await page.evaluate(() => ['#crypto', '#whatsapp', '#beethere'].map(id => document.querySelector(id)!.getBoundingClientRect().top));
  expect(top2).toBeGreaterThan(top1);
  expect(top3).toBeGreaterThan(top2);
  await expect(page.locator('.featured-projects > .container')).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(page.locator('#crypto')).toHaveCSS('position', 'relative');
  await page.setViewportSize({ width: 375, height: 700 });
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await expect.poll(async () => cards.evaluateAll(nodes => new Set(nodes.map(node => Math.round(node.getBoundingClientRect().height))).size)).toBe(1);
});

test('card ultrapassado ganha sombra progressiva', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/#crypto');
  const crypto = page.locator('#crypto');
  const shade = () => crypto.evaluate(el => parseFloat(getComputedStyle(el).getPropertyValue('--card-shade')) || 0);
  await expect.poll(shade).toBeLessThan(0.2);
  await page.locator('#whatsapp').evaluate(el => el.scrollIntoView({ block: 'start', behavior: 'instant' }));
  await expect.poll(shade).toBeGreaterThan(0.9);
  expect(Number(await crypto.evaluate(el => getComputedStyle(el, '::after').opacity))).toBeGreaterThan(0.9);
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
      let showedProjects = false;
      const end = performance.now() + 2200;
      while (performance.now() < end) {
        await new Promise(requestAnimationFrame);
        peak = Math.max(peak, scrollY);
        const proofBounds = document.getElementById('destaques')!.getBoundingClientRect();
        const projectBounds = document.getElementById('projetos')!.getBoundingClientRect();
        revealed ||= proofBounds.top >= 0 && proofBounds.bottom <= innerHeight + 2;
        showedProjects ||= projectBounds.top < innerHeight && projectBounds.bottom > 0;
      }
      return { peak, revealed, showedProjects, final: scrollY };
    });
    expect(result.peak).toBeGreaterThan(40);
    expect(result.revealed).toBe(true);
    expect(result.showedProjects).toBe(false);
    expect(result.final).toBe(0);
  });
}

test.describe('rolagem por toque', () => {
  test.use({ hasTouch: true, viewport: { width: 375, height: 812 } });

  test('permite ler o meio de um card alto e sair da pilha', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Escape');
    await page.locator('#crypto .contributions').evaluate(el => el.scrollIntoView({ block: 'center', behavior: 'instant' }));
    await expect(page.locator('html')).toHaveCSS('scroll-snap-type', /^y(?: proximity)?$/);
    await expect(page.locator('#crypto .contributions')).toBeInViewport();
    await page.locator('#closing-line').evaluate(el => el.scrollIntoView({ block: 'center', behavior: 'instant' }));
    await expect(page.locator('#closing-line')).toBeInViewport();
    await expect(page.locator('html')).toHaveCSS('scroll-snap-type', 'none');
  });
});
