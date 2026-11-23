# Portfólio — Matheus Galdino

Portfólio estático em React 19, TypeScript e Vite, com Tailwind CSS 4 para a base de estilos e animações vinculadas à rolagem em CSS, com GSAP/ScrollTrigger em navegadores sem esse suporte. Não há backend nem variáveis de ambiente obrigatórias.

## Executar

Requer Node.js 22.12+ e npm.

```sh
npm ci
npm run dev
```

Para validar a versão de produção:

```sh
npm run build
npm run test:e2e
npm run preview
```

O build verifica TypeScript e gera `dist/`. `npm run typecheck` executa somente a verificação de tipos, incluindo símbolos e parâmetros não utilizados. Os testes exigem Google Chrome instalado e iniciam seu próprio preview na porta 4173.

## Organização

- `src/sections`: Hero, projetos, práticas de trabalho, conquistas e contato.
- `src/components`: apresentação dos projetos, mockups, vídeos, imagens, navegação e animações locais.
- `src/content/pt-BR/projects.ts`: textos e stacks de TwinPulse, Crypto Trading Bot, WhatsApp Chatbot, BeeThere e TEAjudo.
- `src/content/pt-BR/site.ts` e `journey.ts`: navegação e medalhas.
- `src/config`: links e referências compartilhadas de mídia.
- `src/styles/tokens.css` e `globals.css`: tokens, composição, estados e regras responsivas.

BeeThere e TEAjudo têm cards independentes com as respectivas apresentações do Campus Mobile.

## Interface e movimento

O Hero segue a versão da `main`, sem cards, CTA nem logos de vínculos. Os subtítulos dos projetos são laranja, sem fundo.

O Hero mostra o retrato, nome em Manrope com fallback para DM Sans, descrição e assinatura sobre fundo azul-marinho `#142449`. O laranja principal é `#f45c28`; os projetos mantêm seus fundos atuais, incluindo TwinPulse no azul escuro principal da paleta, chatbot verde e BeeThere creme.

A prévia de rolagem começa após a assinatura, retorna ao Hero e cancela com interação. Movimento reduzido, âncoras e rolagem prévia impedem a prévia. A partir de 768 px, os cards dos projetos se sobrepõem durante a rolagem. Cards altos só se fixam quando a última linha chega à tela. No celular e com movimento reduzido, os cinco projetos seguem o fluxo vertical. Em telas de toque estreitas, a rolagem se alinha por proximidade ao início do card. O laptop permanece estático.

A foto de equipe tem parallax; o retrato do Hero permanece fixo. Contribuições, tecnologias e conquistas entram em sequência. As seções alternam fundos escuros e claros: Hero em azul-marinho, projetos, conquistas e rodapé em preto; proof strip, Como trabalho e o encerramento em creme. As seções do `main` seguem o fluxo normal de rolagem, sem transições entre blocos. Conquistas mantém o visual e o conteúdo atuais, sem animações nas seções vizinhas; Como trabalho e o encerramento também ocupam no mínimo a altura da viewport. A frase “O código começa com uma pergunta.” revela a cor das letras conforme a rolagem, com o mesmo padrão de scrub de texto do Details.so. O contato usa ícones Lucide em vez de logos de aplicativos, e a marca d’água do rodapé acompanha a largura da linha inferior.

## Mídias

O retrato do Hero usa o JPEG original em `public/`; as versões WebP de 1024 e 1920 px e a assinatura em WebP ficam em `public/media/optimized/` como arquivos auxiliares. O Hero usa a assinatura PNG original com filtro azul-marinho. Os vídeos carregam sob demanda, após o botão de reprodução. O chatbot usa a demonstração editada.

Originais privados de vídeo ficam fora de `public/` e do Git. O script `scripts/edit-chatbot.ps1` mantém o fluxo de edição existente; `scripts/optimize-media.py` é uma ferramenta histórica e não participa do build.

## Verificação

A suíte cobre 320, 375, 768, 1024 e 1440 px, ausência de overflow, navegação por teclado, carregamento de recursos, hover, reprodução sob demanda, movimento reduzido, prévia do Hero, criptomoedas e empilhamento dos cards com laptop estático. Capturas e relatórios temporários ficam em `test-results/`.

Na refatoração, capturas e estilos calculados da versão anterior são usados como referência local. Não atualizar expectativas visuais apenas para acomodar uma regressão. O histórico das intervenções está em `docs/ai-development.md`.

## Publicação

A saída estática em `dist/` pode ser hospedada na Vercel com o comando `npm run build`. Metadados sociais estão em `index.html`. Build e testes locais não executam deploy nem push.
