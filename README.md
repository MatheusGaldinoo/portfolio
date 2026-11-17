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

## Reformulação completa

A versão atual inclui Sobre, trajetória profissional, Campus Mobile (TeAjudo e BeeThere), IA aplicada, conquistas e contato. As restrições da primeira etapa foram substituídas pela autorização de reformulação.

Paleta ivory cream / royal navy / signal orange; fontes Bowlby One SC e DM Sans. Contribuições sempre visíveis, logos locais, currículo em HTML imprimível, fotografias responsivas e vídeo carregado sob demanda. Configurações: `src/config/media.ts` e `links.ts`. Conteúdo complementar: `src/content/pt-BR/journey.ts`.

Consulte `docs/design-decisions.md` e `docs/media-guide.md`. As ilustrações dos projetos são conceituais em CSS. A integração de geração Higgsfield aguarda autenticação (`/home/matheus-galdino/.local/bin/higgsfield auth login`); nenhuma geração foi realizada. Antes da publicação, revisar legendas do vídeo, domínio/metadados sociais e detalhes adicionais do TeAjudo.

## Revisão editorial atual

Hero fotográfico de ponta a ponta; projetos com status abaixo do título, contribuições abertas e logos sem rótulos visuais. Experiência, formação e IA agrupadas. Campus/DLJ reúne fotos e apresentações. Conquistas reúne olimpíadas, certificações, monitoria inclusiva, letramento digital para idosos e esporte. Currículo e CTAs do Hero foram retirados da interface. Fotos sem zoom de hover ou molduras arredondadas.

Mídias atuais em `src/config/media.ts`; o vídeo TeAjudo aponta para a apresentação DLJ. Respeito a movimento reduzido, sem botão de pausa porque não há animação contínua. A configuração Higgsfield foi concluída; esta revisão utiliza arquivos reais e não gera imagens.

## Organização atual

A navegação fica sobre o Hero, com logos UFCG/VIRTUS e nome sublinhado em laranja. Principais Projetos reúne TwinPulse, Trading Bot e Leal Car’s Stock. BeeThere fica exclusivamente no Campus Mobile/DLJ. A seção de experiência foi retirada. Ícones locais representam stacks, métricas e contatos. A apresentação DLJ usa versão comprimida; o original de 261 MB fica local, ignorado pelo Git. Não há deploy automático associado a esta entrega.


## Revis?o final do portf?lio ? 2026-11-17

Hero com retrato original, nome em Manrope (Matheus creme, Galdino laranja) e assinatura animada em azul escuro. A pr?via de rolagem acontece ap?s a assinatura, respeita movimento reduzido e cancela com intera??o. Proof strip abaixo do hero: UFCG, VIRTUS e Campus Mobile, com texto antes das logos.

Projetos: TwinPulse, Crypto Trading Bot, WhatsApp Chatbot e BeeThere. T?tulo visual da se??o e numera??es removidos; Leal e TeAjudo fora da interface. Textos ? esquerda, m?dias ? direita no desktop. Mockups retos de MacBook e iPhone com os dois celulares de dimens?es iguais e v?deos sem recorte. Fotos usam arquivos originais; VIRTUS usa SVG. Foto medalha-opi atualizada, recortada ? altura do texto adjacente no desktop. Se??o Como trabalho inclui ciclos ?geis, colabora??o e programa??o com agentes. Contatos usam logos Gmail/WhatsApp e mant?m contraste no hover.

Demonstra??o do chatbot: 65 segundos, resolu??o 1220?2712, sem ?udio, digita??o acelerada em trechos selecionados e desfoque restrito ? regi?o do nome do grupo. Trecho de navega??o por outros chats removido. Original preservado em `private-media/`, ignorado pelo Git e fora de `public/`. Para reeditar: `powershell -ExecutionPolicy Bypass -File scripts/edit-chatbot.ps1` (Python e imageio-ffmpeg necess?rios). Apenas o v?deo editado e o poster s?o distribu?dos.

Entrega local; publica??o n?o realizada. Valida??o: build TypeScript/Vite e su?te Playwright responsiva.
