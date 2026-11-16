# Portfólio — Matheus Galdino

Primeira etapa local: navegação responsiva, Hero e quatro projetos selecionados. React 19, TypeScript, Vite e Tailwind CSS 4. Fontes empacotadas localmente; nenhuma API é necessária para visualizar a página.

## Executar

Requer Node.js 22.12+ (verificado com Node 24) e npm.

```sh
npm install
npm run dev
```

Abra a URL informada pelo Vite. Para verificar a produção:

```sh
npm run build
npm run preview
```

`npm run typecheck` verifica TypeScript. O build gera `dist/`. O lockfile permite instalações reproduzíveis com `npm ci`.

## Atualizar conteúdo

- Textos: `src/content/pt-BR/site.ts` e `projects.ts`.
- Currículo, GitHub e LinkedIn: `src/config/links.ts`. Valores `null` não produzem links. O currículo informa “em breve” enquanto ausente.
- Mídias: `src/config/media.ts`. Adicione o arquivo em `public/media`, ajuste dimensões, alt e enquadramento e marque `available: true`. Falhas de imagem exibem fallback.
- Identidade: `src/styles/tokens.css`; composição: `globals.css`.

Consulte `docs/media-guide.md` e `docs/ai-development.md`.

## Publicação futura na Vercel

Importe o repositório, selecione Vite, comando `npm run build`, saída `dist`. Não há variáveis de ambiente nem rotas de servidor. Esta etapa não foi publicada. Antes da publicação, fornecer mídias autorizadas, currículo e perfis; configurar domínio, URL canônica e imagem Open Graph reais; concluir a revisão visual em navegador.

## Fora desta etapa

Sobre, experiência dedicada, IA aplicada, reconhecimentos, contato, estudo de caso do portfólio e animações avançadas aguardam autorização. As informações essenciais de formação e vínculo constam no Hero.

## Testes de navegador

Com Google Chrome instalado, execute `npm run build` e `npm run test:e2e`. O Playwright inicia e encerra o preview automaticamente. Os testes cobrem cinco larguras (320, 375, 768, 1024 e 1440 px), overflow, console, recursos locais, âncoras, detalhes expansíveis, menu por teclado e movimento reduzido. Capturas são gravadas em `/tmp/portfolio-<largura>.png`. Os testes não verificam a disponibilidade dos destinos externos nem substituem uma auditoria completa WCAG.
