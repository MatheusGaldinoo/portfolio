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

Os cards de vínculos do Hero têm fundo branco translúcido com desfoque, borda discreta, texto claro e hover suave. As logos mantêm as cores originais. Os subtítulos dos projetos são laranja, sem fundo. A prévia revela Projetos em branco sobre azul escuro, com tipografia igual à de Contato e um divisor horizontal no estilo da lista de tecnologias, integrado ao TwinPulse.

O Hero mostra o retrato, nome em Plus Jakarta Sans, assinatura, vínculos acadêmicos/profissionais e CTA. O laranja principal é `#f45c28`; os projetos mantêm seus fundos atuais, incluindo TwinPulse no azul escuro principal da paleta, chatbot verde e BeeThere creme.

A prévia de rolagem começa após o zoom do retrato e a assinatura, retorna ao Hero e cancela com interação. Ela aceita acesso por #inicio e cliques em áreas neutras. Navegação, rolagem e movimento reduzido cancelam a prévia; âncoras de outras seções não a iniciam. A partir de 768 px, os cards se sobrepõem durante a rolagem. Cards altos só se fixam quando a última linha chega à tela. No celular e com movimento reduzido, os cinco projetos seguem o fluxo vertical. Em telas de toque estreitas, a rolagem se alinha por proximidade ao início do card. O laptop permanece estático.

O retrato e a foto de equipe têm parallax. Contribuições, tecnologias e conquistas entram em sequência. A frase “O código começa com uma pergunta.” aparece antes de Contato.

## Mídias

O retrato do Hero tem versões WebP de 1024 e 1920 px. A assinatura usa WebP sem perdas, e a marca UFCG tem uma versão dimensionada para o Hero. Os originais estão em `public/`. Os vídeos carregam sob demanda, após o botão de reprodução. O chatbot usa a demonstração editada.

Originais privados de vídeo ficam fora de `public/` e do Git. O script `scripts/edit-chatbot.ps1` mantém o fluxo de edição existente; `scripts/optimize-media.py` é uma ferramenta histórica e não participa do build.

## Verificação

A suíte cobre 320, 375, 768, 1024 e 1440 px, ausência de overflow, navegação por teclado, carregamento de recursos, hover, reprodução sob demanda, movimento reduzido, prévia do Hero, criptomoedas e empilhamento dos cards com laptop estático. Capturas e relatórios temporários ficam em `test-results/`.

Na refatoração, capturas e estilos calculados da versão anterior são usados como referência local. Não atualizar expectativas visuais apenas para acomodar uma regressão. O histórico das intervenções está em `docs/ai-development.md`.

## Publicação

A saída estática em `dist/` pode ser hospedada na Vercel com o comando `npm run build`. Metadados sociais estão em `index.html`. Build e testes locais não executam deploy nem push.
