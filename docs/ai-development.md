# Registro real do desenvolvimento assistido

- Corrigida a aplicação da Season Collection: o token `--font-body` usava o nome errado ("Season Colection"), não havia `@font-face` e o Hero ainda forçava Manrope (duas regras: uma já corrigida e outra sobrescrevendo o título com DM Sans); a asserção E2E que esperava Manrope foi ajustada para a fonte real. O WOFF2 variável da versão trial foi hospedado em `public/fonts`, com pré-carregamento no HTML e fallback para DM Sans Variable. O `@font-face` cobre `wght` de 300 a 900; a licença de uso pessoal está registrada em `public/fonts/LICENSE.txt`. O pré-carregamento e a dependência sem uso do Plus Jakarta Sans foram removidos. Conforme definido pelo usuário, a Season Collection passou a ser usada apenas nos títulos (`--font-heading`); o corpo voltou para DM Sans Variable e o Bowlby One SC ficou restrito à marca d'água "MATHEUS GALDINO" do footer, a pedido do usuário. Ainda falta conferir o estágio da variável (Sans/Mix/Serif) com a referência enviada pelo usuário. Para publicação comercial, substituir o arquivo trial por uma versão licenciada.

- Removidos dados de experiência e IA sem consumidores, estilos da faixa antiga e o processamento de parallax sem elementos correspondentes. A revisão visual seguinte foi revertida.

- Hero com logos, graduação em andamento, zoom discreto e prévia dos projetos. TEAjudo detalha o trabalho de produto e pitch. Imagem social PNG de 1200 × 630 usa a foto original, com metadados Open Graph e Twitter. Trading Bot ganhou texto mais largo e ícone revelado na rolagem; laptop ampliado é centralizado dentro do TwinPulse.

- Destaques passaram para o hero e substituíram a prévia por rolagem. TwinPulse usa azul escuro em OKLCH; o laptop mantém a expansão na saída e recua ao voltar pela rolagem. Medalhas usam o nome da colocação alinhado à direita.

- Removidos o CTA do BeeThere, Campus, MediaFrame, SectionHeading, estilos do diálogo de captura e fontes Manrope e Space Grotesk sem uso. O hero pré-carrega o mesmo WOFF2 usado pelo CSS e preserva a prévia após a rúbrica. O laptop ganhou área útil de tela e animação sem espaçador na grade. A foto de trabalho recebeu recorte responsivo sem alterar o arquivo.

- Restaurados seletivamente a partir de `593e7c4`: laranja #f45c28, ritmo da prévia dos destaques, composição de criptomoedas, ícones de medalha e fundos creme. Preservada a correção da prévia para telas baixas. Reativado o laptop do TwinPulse com GSAP. A capa do TEAjudo foi extraída do último frame do MP4 em PNG, sem recompressão do vídeo.

- Projetos organizados na grade do chatbot, com stack na base e fundos reaproveitados da paleta. TEAjudo ganhou dois bullets com fatos já registrados. Conquistas passaram a usar a mesma estrutura de ícone, título e lista. A foto de trabalho recebeu um recorte panorâmico. O monograma animado deu lugar a zoom lento; a prévia passou a usar a posição real dos destaques e a altura visível do navegador.

- Revisão com Frontend Design e Impeccable: abertura com monograma e painéis, BeeThere em carvão, TwinPulse em azul-petróleo, texto de projetos ampliado e stack mais compacta. Ajustes de largura preservam a navegação vertical.

## 2026-11-16 — Planejamento e primeira implementação

O usuário forneceu trajetória, projetos, métricas, restrições e direção visual. A primeira resposta foi um planejamento sem implementação. Depois, o usuário autorizou somente setup React/TypeScript/Vite/Tailwind, tokens, navegação, Hero e projetos, citando Pomo e Uvra como preferências.

### Ações realizadas
- Consultado o conteúdo público de Profitize Build e as páginas Pomo e Uvra. A ferramenta disponibilizou estrutura e descrições textuais; não foi feita reprodução de código, download de bundles ou análise visual completa de movimento.
- Lida a skill Sites e a orientação para sites de apresentação. Aplicado fluxo local, respeitando o escopo e a ausência de autorização para publicação.
- Inspecionado o diretório, inicialmente sem aplicação. Implementação realizada por um único agente; não houve delegação a agentes paralelos.
- Escolhidos componentes reutilizáveis, conteúdo tipado independente, configuração de links e mídia e HTML nativo para detalhes expansíveis.
- Preservadas as distinções entre PoC, protótipo e aplicação publicada e o contexto dos resultados financeiros. URLs pessoais ausentes não foram inventadas.
- Escolhidos fallbacks tipográficos identificados para retrato e capturas ausentes. Nenhuma imagem pessoal foi gerada.
- Fontes instaladas como dependências locais para evitar requisições a serviços de fontes em tempo de execução.

### Decisões
A preferência pelas referências foi traduzida em hierarquia expressiva, áreas amplas de composição e ritmo entre projetos. As interações cinematográficas descritas nas páginas de referência ficaram fora do escopo solicitado. O Crypto recebeu composição baseada em métricas; BeeThere alterna posição de texto e mídia no desktop. Dados continuam na ordem narrativa no mobile.

### Validação
O resultado das verificações efetivamente executadas será registrado ao concluir esta etapa. Testes de build não comprovam qualidade visual, acessibilidade integral ou disponibilidade de aplicações externas.

### Resultados observados
- A instalação no sandbox falhou com EAI_AGAIN; o acesso de rede foi autorizado e a instalação foi concluída. npm informou zero vulnerabilidades nessa instalação.
- `npm run build` passou (TypeScript e Vite).
- Testes Playwright foram acrescentados para as cinco larguras solicitadas, menu por teclado, âncoras, detalhes e movimento reduzido, usando Google Chrome local.
- O primeiro teste usava correspondência textual exata que incluía um ícone “+”; o seletor foi corrigido para o elemento summary.
- A verificação do console identificou recurso 404; adicionar favicon e referência no HTML eliminou a falha na rodada seguinte.
- Capturas de desktop e mobile foram inspecionadas. Para evitar artefatos de elementos fixos em captura integral após rolagem, os testes retornam ao topo antes da imagem.
- Disponibilidade de sites externos, desempenho em condições reais e auditoria integral de acessibilidade não foram certificados nesta etapa.
- Rodada final: sete testes aprovados no Chrome, incluindo as cinco larguras, navegação mobile por teclado e movimento reduzido. Nenhum overflow horizontal ou erro de console foi observado nos cenários automatizados.

## Reformulação autorizada — identidade gráfica e página completa

- O usuário ampliou o escopo para todas as seções, solicitou contribuições sempre visíveis, logos, novas fontes, fotos, efeitos de rolagem e proporção visual 60/30/10 marfim/navy/laranja. Também pediu uma seção exclusiva Campus Mobile incluindo TeAjudo.
- Foram instaladas as skills design-taste-frontend (Leonxlnx/taste-skill) e higgsfield-generate (higgsfield-ai/skills), com aprovação. A Taste orientou ícones reais, hierarquia, fotografias e interação. Preferências explícitas do usuário prevaleceram sobre suas regras de composição, dados de contato, paleta e rolagem.
- Higgsfield CLI instalado com checksum verificado. `account status` informou ausência de workspace; `workspace list` falhou sem resposta e recomendou `higgsfield auth login`. Nenhuma geração foi submetida e nenhum crédito foi consumido por este trabalho. As ilustrações atuais são composições originais CSS, não resultados Higgsfield.
- Fotos JPG/JPEG e vídeo MP4 do usuário foram encontrados em public/media. Os originais foram preservados; Pillow gerou derivados WebP de 640 e 1440 px, corrigindo orientação EXIF. As referências e o vídeo foram centralizados em src/config/media.ts.
- Spencer Gabor foi consultado como referência de presença tipográfica, cor e linguagem gráfica, sem copiar imagens, código ou assinatura visual.
- Contribuições passaram de details expansíveis para listas visíveis. Campus Mobile ganhou dois artigos, TeAjudo na 13ª edição e BeeThere na 14ª; não foram inventadas funcionalidades do TeAjudo.
- Novas seções: Sobre, experiência, Campus Mobile, IA aplicada, conquistas e contato. Currículo HTML imprimível criado com base no currículo fornecido. Dados de contato reais autorizados foram usados.
- Movimento: entrada curta, hover e ampliação de duas áreas fotográficas conforme a rolagem; preferência de movimento reduzido e controle manual. Sem biblioteca de animação, scroll-jacking ou WebGL.
- Primeiro build passou. Sete testes passaram de imediato; o teste novo de fotos detectou que imagens lazy ainda não tinham carregado fora da tela. O teste foi ajustado para rolar até cada imagem e esperar seu carregamento real.
- Rodada funcional final (antes dos últimos ajustes de contraste/selos): oito testes aprovados, com as fotos carregadas, dois vídeos sob demanda e cinco larguras sem overflow. O build de produção passou.
- A Taste executou seu gate e retornou 108 achados na versão intermediária, incluindo regras próprias de template incompatíveis com a direção solicitada. O relatório completo foi preservado em docs/taste-review.md. Não houve waiver nem alegação de GATE PASS. Contraste de pequenos textos laranja foi reforçado; selos passaram para dentro dos frames; o controle de movimento já havia deixado de ser fixo.
- O vídeo TEAjudo-demonstracao.mp4, recebido na raiz durante o trabalho, foi incorporado sob demanda na seção Campus. O original e o outro vídeo de 261 MB foram preservados.
- Verificação após os ajustes finais: build de produção válido, oito testes Playwright aprovados e git diff --check sem erros. Captura integral com mídias carregadas revisada visualmente. Acessibilidade completa dos vídeos depende de legendas/transcrições revisadas.

## Revisão editorial — fotos abertas e menos seções

O usuário pediu a substituição do Hero por fotografia em tela inteira com texto sobreposto, menos cards e seções, texto mais conciso e remoção dos CTAs/currículo, zoom de hover e controle de movimento. A implementação agrupou experiência, formação e IA aplicada; Campus Mobile e apresentações DLJ; conquistas e atividades acadêmicas.

- Confirmado o login Higgsfield: workspace Private disponível e selecionado. Nenhuma geração submetida: nesta revisão o usuário pediu PNG real do Bitcoin e mídias próprias.
- PNG Bitcoin obtido de https://raw.githubusercontent.com/bitpay/bitcoin-brand/master/bitcoin.png (repositório bitpay/bitcoin-brand). Uso ilustrativo; não indica endosso.
- Print BeeThere localizado em public/Captura de tela de 2026-11-16 15-26-46-1.png e referenciado na configuração.
- Apresentação TeAjudo localizada em public/video_teajudo_dlj.mp4 e rotulada como participação no DLJ. Demonstração retirada do fluxo visual; arquivos originais preservados.
- Contribuições e status mantidos visíveis; tecnologias representadas por logos com alt e title, sem chips textuais.
- Rolagem nativa anima a abertura das fotografias e desloca os PNGs Bitcoin. prefers-reduced-motion desativa os efeitos. Sem loop contínuo que exija controle de pausa.
- Não foi executado novamente o gate de template Taste: esta revisão segue o pedido explícito de composição editorial aberta e mídias reais. O relatório anterior é histórico, não certificação da versão atual.

Validação desta revisão: build TypeScript/Vite aprovado, oito testes Playwright aprovados nas larguras 320, 375, 768, 1024 e 1440 px; sem overflow ou erros de console nos cenários monitorados. Capturas do Hero desktop/mobile revisadas visualmente. O teste de navegação foi corrigido para abrir o menu mobile antes de procurar seus links. Vídeos continuam sob demanda. A mídia DLJ original, de aproximadamente 261 MB, ainda requer compressão e revisão de legendas para publicação.

## Navegação integrada e consolidação dos projetos

A pedido do usuário: removido monograma, navegação sobre a fotografia, nome sublinhado em laranja e logos institucionais no Hero. TwinPulse passa a usar a captura mais recente fornecida. Status e logos ampliados; numeração junto ao título e listas visíveis de contribuições. BeeThere consolidado no Campus, sem duplicação na seleção. Seção de experiência removida e fotos reduzidas à abertura, Campus e premiação. Rodapé sem assinatura/retorno, contatos com ícones. Trading Bot inclui Render, métricas com calendário/pessoas/raio e ilustrações locais Bitcoin/Ethereum/Solana/cron. Nenhuma geração Higgsfield.

O push foi explicitamente solicitado. A apresentação DLJ original de 261 MB foi preservada localmente e excluída do Git; criada versão web H.264/AAC com FFmpeg temporário em /tmp, sem nova dependência do aplicativo. Os commits agrupam mídias/configuração, interface e verificação/documentação em Conventional Commits. Não houve publicação do site.

Validação antes do envio: build TypeScript/Vite aprovado, testes responsivos e funcionais aprovados em rodada anterior. A apresentação DLJ foi convertida também para pixel format yuv420p para compatibilidade H.264 no navegador; versão final de aproximadamente 75 MB. Acrescentado teste que espera videoWidth > 0, verificando a decodificação real em vez de apenas a existência do player. Componentes antigos não utilizados e currículo retirado da interface foram arquivados em /tmp/portfolio-retired, sem apagar mídia original do usuário.
Rodada final: 8/8 testes Playwright aprovados, incluindo decodificação do vídeo DLJ. Captura desktop do cabeçalho integrada à foto foi revisada. git diff --check sem erros.


## Revis?o final do portf?lio ? 2026-11-17

Hero com retrato original, nome em Manrope (Matheus creme, Galdino laranja) e assinatura animada em azul escuro. A pr?via de rolagem acontece ap?s a assinatura, respeita movimento reduzido e cancela com intera??o. Proof strip abaixo do hero: UFCG, VIRTUS e Campus Mobile, com texto antes das logos.

Projetos: TwinPulse, Crypto Trading Bot, WhatsApp Chatbot e BeeThere. T?tulo visual da se??o e numera??es removidos; Leal e TeAjudo fora da interface. Textos ? esquerda, m?dias ? direita no desktop. Mockups retos de MacBook e iPhone com os dois celulares de dimens?es iguais e v?deos sem recorte. Fotos usam arquivos originais; VIRTUS usa SVG. Foto medalha-opi atualizada, recortada ? altura do texto adjacente no desktop. Se??o Como trabalho inclui ciclos ?geis, colabora??o e programa??o com agentes. Contatos usam logos Gmail/WhatsApp e mant?m contraste no hover.

Demonstra??o do chatbot: 65 segundos, resolu??o 1220?2712, sem ?udio, digita??o acelerada em trechos selecionados e desfoque restrito ? regi?o do nome do grupo. Trecho de navega??o por outros chats removido. Original preservado em `private-media/`, ignorado pelo Git e fora de `public/`. Para reeditar: `powershell -ExecutionPolicy Bypass -File scripts/edit-chatbot.ps1` (Python e imageio-ffmpeg necess?rios). Apenas o v?deo editado e o poster s?o distribu?dos.

Entrega local; publica??o n?o realizada. Valida??o: build TypeScript/Vite e su?te Playwright responsiva.

Temas invertidos: proof strip creme com texto navy; projetos navy com textos creme, divisórias claras e acentos laranja. TwinPulse acompanha o fundo da seção.

Como trabalho: fotos originais virtus-predio.png e ufcg-predio.png à direita do texto, inteiras e sem compressão; faixa de ferramentas Antigravity (SVG oficial), Git e Docker. Layout empilhado no celular.

Revisão editorial: fontes consultadas — chat Perfis de IA e currículos locais curriculo-matheus-galdino.pdf / curriculo_matheus_galdino (3).pdf. Textos estruturados como resultado/evidência/ação, sem novas métricas. Cada projeto lista cinco tecnologias/ferramentas com nomes visíveis (sem logos inventadas para ferramentas sem asset). Fundos alternam navy/creme; acentos identificam os projetos. Prédios retirados da interface; Como trabalho dividido em colaboração e agentes. Arquivos originais preservados.

BeeThere: fundo original background-section-beethere.jpg em largura total com contraste creme; capa capa-video-beethere.jpg. Play dos vídeos apenas com ícone, nome preservado no aria-label. Removidas barras dos títulos, ressalvas editoriais e travessões; Pandas aparece uma vez como wordmark acessível.

Hero atualizado com Plus Jakarta Sans, CTA de projetos e laranja #cb8525 amostrado do microfone. Como trabalho cita Scrum, sprint e prompt engineering. Foto da medalha ampliada em 28px; textos aproveitam mais largura. BeeThere volta ao fundo creme; chatbot usa verde escuro. Logos locais Claude, ElevenLabs, LangGraph, Ollama (LobeHub) e Z-API (documentação oficial). Skill greensock/gsap-skills@gsap-scrolltrigger instalada e aplicada: laptop inicia a 45 graus, cresce conforme rolagem com scrub, mantém tela completa e segue à próxima seção; fallback sem animação para movimento reduzido. Desfoque do chatbot desde 58s da edição final em faixas específicas para o nome.

Revisão do mockup: laptop inicia ao lado do texto; ScrollTrigger fixa o grid por 560px, amplia e centraliza a tela, com movimento reduzido e layout estático no mobile. Tela sem bandas, com rolagem interna para conteúdo excedente e ampliação acessível. Teclado com cinco fileiras, teclas deslocadas e barra de espaço. BeeThere amarelo, WhatsApp com descrição creme, celulares à direita e áreas livres pretas. Removida stack de Como trabalho; Scrum, soft skills e Antigravity sublinhados. CTA afastado. Quatro projetos visíveis com cinco contribuições cada, incluindo pitch para investidores informado pelo usuário.

Paleta consolidada: único acento --orange #cb8525 para interface e medalhas; favicon alinhado. Logos oficiais preservam cores próprias. TwinPulse azul-petróleo #153e4b, chatbot verde #123d32 e BeeThere creme. Foto da medalha alinhada ao topo do grid; foto CampusMobile_20260202-226 original abaixo de Como trabalho. Novos sublinhados, CTA mais baixo, celulares deslocados 26px à esquerda e criptomoedas em coluna própria. Selecionado substitui semifinalista; 2× com multiplicador maior. Campus Mobile descrito como programa de inovação e empreendedorismo, com mentoria e capacitação, conforme https://www.institutoclaro.org.br/campus-mobile/sobre/.

Revisão a partir da referência visual: laptop prateado com teclado, alto-falantes e trackpad; rotação inicial nos três eixos converge para posição frontal com ScrollTrigger. Removidos botão, modal de ampliação e marca MacBook Pro. Grid reserva uma altura de tela durante o pin para evitar sobreposição da seção seguinte. TwinPulse e chatbot compartilham largura das colunas de texto. Métricas do bot em três cards. Fotos CampusMobile_20260202-225 e 226 ao lado de cada frente de Como trabalho. CTA com seta SVG para baixo.


Revisão editorial: descrições complementam os bullets; bullets do chatbot e trading bot preservados, métricas em cards removidas. BeeThere resumido mantendo cinco contribuições. Skills Incubator detalhado com práticas de comunicação, oratória e priorização fornecidas pelo autor. Título de formação e conquistas reduzido.


Como trabalho resumido em dois blocos à esquerda e uma única foto 225 à direita. Categorias acima dos projetos removidas; status usam o laranja único da paleta. TwinPulse usa azul-marinho e creme de Como trabalho, com captura original sem mockup nem animação de laptop.


Ajustes de hierarquia: API REST após Git; subtítulos de Como trabalho e marca Claude no laranja da paleta. Como trabalho usa a mesma escala de Formação e conquistas, com descrições em duas colunas e foto abaixo (uma coluna no celular).


Proof strip com quebra explícita em Ciência da / Computação; criptomoedas com inclinações alternadas. Textos dos projetos com celular têm altura mínima de 650 px no desktop, preservando expansão para conteúdo. Certificados e extracurriculares recebem ícones vetoriais acessíveis.


Revisão com Impeccable: ritmo de 16/28/36 px entre contribuições, descrição e ferramentas; ícones de stack maiores. TwinPulse em creme como variante reversível. Formação e conquistas sem título visual. Prévia pós-rúbrica revela o proof strip e retorna. TEAjudo retorna com apresentação DLJ em destaque. Seleção e contexto Campus Mobile reunidos em um bullet no BeeThere.


TEAjudo usa logo fornecida e azul #0872d2 extraído da marca, com Figma na stack. Vídeo existente preservado em HD 1280×720, sem recompressão, exibição limitada a 800px. Projetos alinham conteúdo acima e ferramentas abaixo. Como trabalho reorganizado em texto à esquerda e foto à direita. Z-API identificado visualmente apenas pela logo, com texto alternativo.

## 2026-11-17 — Refatoração com preservação da interface

Referência: estado local do commit `debe327`, sem novas alterações de design. Removidos dados e caminhos de renderização do Leal Car, campos não consumidos dos projetos, componentes de métricas/ícones/seta sem uso, configuração de `srcSet` não utilizada e entradas de stack não exibidas. As mídias originais, os arquivos não rastreados e os scripts de edição foram preservados.

BeeThere e TEAjudo passaram a consumir seus textos e tecnologias de `src/content/pt-BR/projects.ts`, mantendo conteúdo, status, ordem e DOM equivalentes. A animação das criptomoedas saiu dos efeitos globais de App e passou a usar refs locais em `CryptoIllustration`, com o mesmo cálculo de movimento e limpeza de listeners/observer. Removido o tratamento de `.scroll-photo`, que não existia na interface. No laptop, a função de easing é resolvida uma vez, sem mudar os valores ou a sequência da animação.

Limpeza de CSS por inventário de seletores e análise da cascata: 333 seletores sem elementos correspondentes e 369 declarações anteriores sobrescritas pelo mesmo seletor/propriedade/condição foram removidos. Ordem e condições das regras restantes preservadas. `globals.css` passou de 80.021 para 47.362 bytes; o CSS de produção passou de 82,17 para 53,89 kB (gzip: 16,59 para 11,45 kB). TypeScript agora verifica locais e parâmetros não utilizados. README reescrito para documentar o estado atual.

Comparação local em Chrome: dimensões e estilos calculados equivalentes em 320, 375, 768, 1024 e 1440 px. A primeira captura de 1440 px foi idêntica; diferenças residuais nas outras capturas ficaram na rasterização das imagens, sem diferenças de geometria ou estilo. Também foi executada a versão anterior em uma referência temporária para comparar cinco posições de scroll: laptop, texto, Trading Bot e criptomoedas tiveram valores idênticos de posição, tamanho, transformação e opacidade.

Os testes existentes tinham problemas de sincronização: a prévia automática podia interferir no hover, e o teste do laptop media o layout antes de as fontes e o ScrollTrigger estabilizarem, além de esperar opacidade total em um ponto onde ambas as versões já iniciavam a expansão. Os testes passaram a cancelar a prévia por interação antes do hover e a aguardar a atualização da geometria. Adicionadas verificações do ciclo completo da prévia, cancelamento, acesso por âncora, movimento das criptomoedas e troca para movimento reduzido. Nenhuma cor ou animação foi alterada para acomodar expectativas dos testes.

Validação final: `npm run build` aprovado, com TypeScript estrito; 14 testes Playwright aprovados; teste do laptop aprovado também em três repetições para conferir estabilidade; `git diff --check` sem problemas. A comparação final manteve zero diferenças de dimensões e estilos calculados nas cinco larguras.

Entrega local, sem commit, push ou publicação.

### Ajustes solicitados no Hero, trabalho e ícones

Foto de Como trabalho mantida no original `CampusMobile_20260202-225.jpeg` (6766 × 4386), agora inteira: removidas proporções forçadas, posição de recorte e animação de zoom no hover. Os três vínculos do Hero passaram a cards brancos com texto navy; nomes visíveis UFCG, VIRTUS e Campus Mobile retirados por já constarem nas logos, preservando a identificação nos textos alternativos. Ponto preto adicionado após Galdino. Retirados fundo e padding das caixas dos ícones de contato. Ícone de medalhas redesenhado como medalha com estrela e fita, preservando viewBox, traço e cor dos ícones de cursos e extracurriculares. Aplicada a skill Impeccable para refinamento pontual; conferência visual em desktop e mobile, sem alterar outras seções.

Build aprovado e ausência de overflow conferida em cinco larguras. Foto validada também com movimento habilitado: proporção natural, sem transform, scale ou transição; contatos com fundo transparente e padding zero. Na suíte, 13 cenários passaram; o cenário da prévia revelou que o tempo de carregamento consumia parte do relógio de teste. O relógio passou a ser pausado antes da navegação, e esse cenário passou em três repetições. ## 2026-11-21 — Suavização de Degradê, Enquadramento Hero, Headline e Harmonização de Tons

Ajustes executados:
1. **Transição do degradê do Hero**:
   - Ajustada a curva em [globals.css](file:///c:/Users/samue/OneDrive/%C3%81rea%20de%20Trabalho/Computacao/portfolio/src/styles/globals.css) para eliminar qualquer corte brusco com paradas progressivas de transparência (`rgba(0,0,0,1)` até `transparent 100%`).
2. **Posição da imagem do Hero**:
   - `object-position` ajustado para `88% 35%` (desktop) e `88% center` (mobile), afastando a pessoa confortavelmente para a direita e integrando-a com a difusão do degradê.
3. **Seção Headline / Manifesto**:
   - Altura vertical reduzida para `min-height: 40svh` e espaçamento compacto (`padding-block: clamp(48px, 6vw, 96px)`).
   - Frase limitada a no máximo duas linhas (`max-width: 900px`, quebra estruturada entre "O código começa" e "com uma pergunta.").
4. **Harmonização dos tons escuros**:
   - Fundo base mapeado para o mesmo preto da seção de contatos (`--surface-0: hsl(0, 0%, 0%)`).

Validação:
- Build de produção gerado com sucesso.
- 17 testes do Playwright aprovados com 100% de sucesso.

Solicitações atendidas:
1. **Tema Details.so**: Adaptação dos tokens de design para o esquema de cores escuro oficial de `details.so` (`--surface-0` até `--surface-4`, `--text-1`, `--text-2`, bordas `--border-1`, `--border-2` e sombras de alta fidelidade).
2. **Hero refinado**:
   - Remoção dos cards flutuantes sobre a fotografia do Hero.
   - Gradiente preto cobrindo com solidez quase toda a metade esquerda do Hero (`linear-gradient(90deg, rgba(0,0,0,.98) 0%, rgba(0,0,0,.96) 44%, rgba(0,0,0,.75) 52%, rgba(0,0,0,.2) 68%, transparent 80%)`), garantindo contraste e legibilidade impecáveis para o nome e o subtítulo editorial.
   - Posicionamento da imagem (`object-position: 78% 35%` no desktop e `78% center` no mobile) deslocando a fotografia ligeiramente à direita para que Matheus fique visível entre 61% e 95% do canvas, sem sofrer cortes na lateral direita e sem ser encoberto pelo gradiente.
3. **Retorno do Proof Strip**:
   - Reintegração do `ProofStrip` como faixa horizontal institucional logo abaixo do Hero, com divisórias sutis e logos de UFCG, VIRTUS e Campus Mobile com seus títulos formatados.
   - Ajuste da prévia de rolagem para animar suavemente até o título de Projetos após a assinatura e retornar.
4. **Rodapé com marca d'água fluida (estilo Hebbia)**:
   - Redimensionamento proporcional da marca d'água "MATHEUS GALDINO" para `clamp(24px, 5.6vw, 86px)` com margens de segurança laterais, eliminando completamente qualquer corte das letras iniciais ("Ma") e finais ("no") em telas de 320px a 1440px+.

Validação:
- `npm run build` aprovado sem erros de bundle ou TypeScript.
- Suíte completa de 17 testes do Playwright (`npx playwright test`) executada com 100% de sucesso.
- Verificação visual dos prints nos viewports de 320, 375, 768, 1024 e 1440 px confirmando ausência de overflow ou cortes.

### Laptop como foco da rolagem

Aplicada a skill GSAP ScrollTrigger para fixar a seção TwinPulse após a leitura da descrição (`bottom bottom`). O laptop cresce durante 180–260 px de rolagem e permanece ampliado e centralizado por mais 240–360 px, conforme a altura da janela. O espaço reservado pelo pin mantém o Trading Bot abaixo da seção; somente a primeira linha da galeria recebe esse espaço adicional, preservando as alturas dos outros projetos. Ao sair do pin, o laptop continua ampliado e acompanha a saída da seção; ao subir, a sequência é revertida.

Dimensões limitadas ao viewport e à largura disponível, com centralização que também considera janelas desktop baixas. Pin desativado abaixo de 1101 px de largura, abaixo de 500 px de altura e com movimento reduzido. `matchMedia.revert()` remove o pin e restaura o layout; carregamento da fonte e da captura atualiza as medidas. Conferência visual em 1440×900, 1280×720 e 1440×540, incluindo entrada, destaque, saída e retorno. Testes cobrem permanência na mesma posição entre dois pontos de scroll, ausência de sobreposição e limpeza ao alternar viewport/preferência de movimento.

Validação desta alteração: build TypeScript/Vite aprovado e 15 cenários Playwright aprovados. Entrega local, sem commit ou push.

Cards do Hero atualizados conforme solicitação para vidro fosco escuro: `rgba(15,23,42,.55)`, backdrop blur de 12 px (incluindo prefixo WebKit), borda de 1 px `rgba(255,255,255,.12)` e texto `#f8fafc`. Logos exibidas em branco por filtro CSS para contraste, preservando arquivos originais. Build aprovado e conferência visual em 375 e 1440 px, sem overflow horizontal. Demais edições locais do usuário preservadas.

Restauradas as cores das logos dos cards, com base creme para contraste, e inserida quebra de linha antes de Galdino. Projetos, Como trabalho e Formação e conquistas passaram a ter títulos visíveis de 32 px no estilo de Contato. A prévia mede a posição do título Projetos para revelá-lo inteiro na faixa creme antes de retornar ao Hero. Os cinco subtítulos usam o laranja da paleta sobre fundo azul-marinho. Removida a peça inferior solta do laptop e ampliada a distância de rolagem da transição para 240–340 px, com easing senoidal e o mesmo intervalo de destaque.


Removidos os fundos dos subtítulos, dos cards institucionais do Hero e das próprias logos, mantendo as cores originais dos arquivos. Cards recebem deslocamento de 3 px e realce discreto da borda no hover, apenas com ponteiro preciso e sem preferência por movimento reduzido. O gráfico do Trading Bot foi substituído por uma seta ascendente que se desenha na entrada da transição, conectada ao mesmo verde do chatbot. A passagem ocupa o rodapé do Trading Bot, sem sobrepor texto ou stack. Conferência visual em desktop e celular, fundos transparentes confirmados por estilos calculados, build aprovado.
Validação final: 15 testes Playwright aprovados, incluindo cinco larguras de tela, movimento reduzido, prévia do Hero e transição do laptop. Alterações locais, sem commit ou push.

Removidas a seta ascendente, a faixa curva e a reserva de espaco para a transicao entre Trading Bot e chatbot.
O cabeçalho Projetos passou a usar Plus Jakarta Sans, tamanho responsivo e um filete sobre a faixa creme. A prévia aguarda o fim real do zoom e da assinatura antes de revelar o título. Os cards receberam um halo creme atrás das logos, mantendo suas cores originais. O TEAjudo saiu da listagem atual, com componente e materiais preservados para reativação.
O halo individual das logos foi substituído por branco translúcido com desfoque no card inteiro.
Logos institucionais alinhadas à esquerda no Hero, com ampliação da marca VIRTUS em desktop e celular.
Corrigido o acionamento da prévia para aceitar #inicio e cliques neutros. O cancelamento passa a identificar controles, teclas de navegação e gestos de rolagem. Promise.allSettled permite concluir a espera mesmo quando uma animação introdutória é cancelada. Testes adicionados para celular e desktop com âncora inicial, clique neutro e cancelamento da assinatura.
Projetos passou ao estilo tipográfico de Contato, em branco sobre azul escuro, com divisor de 2 px sob o próprio título. Removido o padding inferior de 1 px do contêiner que expunha o fundo creme após o rodapé.
TwinPulse passou a usar o token navy (#142449), compartilhado com o azul escuro principal da aplicação.
Removido o sublinhado de Projetos. Cabeçalho integrado ao TwinPulse com menor intervalo vertical e divisor horizontal no estilo da borda de tech-list.
Entrega consolidada na branch refactor/portfolio em commits Conventional Commits. Build de produção aprovado e suíte completa com 17 testes aprovados em cinco larguras de tela.

## 20 de novembro de 2026 — movimento do portfólio

A branch feat/portfolio-motion partiu de origin/main (0df2610). Os cinco projetos ganharam cards independentes. A altura real de cada card determina quando ele pode se fixar na tela. O menu, as capas de vídeo, as listas de contribuições e a frase anterior ao contato ganharam transições. O mockup do TwinPulse passou a ser estático.

As referências visuais foram o empilhamento de Delta Cafés e o parallax de Preymaker, disponíveis na galeria do Details. O retrato ganhou duas versões WebP, e a preferência de movimento reduzido mantém uma leitura linear. A suíte de navegador cobre a sobreposição, a saída da pilha por toque, o acesso por teclado e cinco larguras de tela.

## 21 de novembro de 2026 — temas alternados e ajustes finais

A marca d’água do rodapé passou a ser um SVG com `textLength`, igualando a largura da linha divisória do contato. O contato trocou as logos de aplicativos por ícones Lucide. O texto de encerramento usa `data-scroll="scrub"` e interpola a cor das letras do cinza amornado para o tom final, preservando a laranja na segunda linha; com movimento reduzido, as cores finais aparecem sem animação. O `usePortfolioMotion` deixou de animar `#closing-line` para não conflitar com o scrub.

A sequência visual agora alterna temas de forma deliberada: Hero escuro, proof strip claro, projetos escuros, Como trabalho claro, conquistas escuras, encerramento claro e rodapé escuro. Para as seções claras, o texto usa `--ink` e o realce usa `--orange`, variante mais escura do laranja para manter contraste AA sobre o creme. Bordas e divisórias dessas seções também usam o azul escuro com baixa opacidade.

Validação local: build de produção aprovado e 18 testes Playwright passaram após os ajustes, incluindo a nova asserção de temas alternados. Nenhuma publicação automática.

## 22 de novembro de 2026 — transições entre seções

Foi experimentado um `src/hooks/sectionTransition01.ts` com `pin` e `reveal`, além dos atributos `data-st-y`, `data-st-opacity` e `data-st-overlay`. O parallax foi removido primeiro a pedido do usuário; depois, o próprio `pin` do Como trabalho e o `reveal` do encerramento passaram a causar falhas antes e depois de conquistas. O usuário escolheu desacoplar a seção, mantendo conteúdo e visual atuais.

Estado final: nenhuma seção do `main` usa `data-st-01`. O hook foi removido, `App` voltou a inicializar apenas `textReveal02` depois de `document.fonts.ready`, e o CSS de transição (`min-height` por atributo, override de `sticky`, pseudo-elemento de fundo e `will-change`) foi retirado. `#trabalho` recebeu `min-height: 100svh` em CSS para preservar a altura que antes vinha do atributo; `.closing-statement` já tinha altura própria. Conquistas segue o fluxo normal, sem z-index injetado, transform, variável `--st-reveal-y` ou `::after` de transição.

Validação local: build de produção aprovado e 18 testes Playwright passaram, incluindo a ausência de `data-st-01` no `main`, a ausência de pseudo-elemento e de variável de reveal em conquistas, `transform` neutro no encerramento e a altura mínima de Como trabalho e do encerramento. Nenhuma publicação automática.

## 22 de novembro de 2026 — Hero alinhado à main, sem cards

O usuário pediu o Hero como na `main`, mantendo só a ausência dos cards, e depois solicitou o CTA abaixo da descrição e a animação de zoom do retrato. `src/components/HeroSignature.tsx` voltou ao conteúdo da `main`. Em `src/sections/Hero.tsx`, o Hero recebeu o CTA “Conheça meus projetos” para `#projetos` e a lógica de prévia da `origin/main`, que espera o zoom do retrato e a assinatura antes de revelar os projetos. O `ProofStrip` de cards não foi incluído.

No CSS, o Hero preserva fundo `#142449` e tipografia `Manrope`/`DM Sans Variable` nesta branch, além do gradiente e enquadramento originais. Foi adicionada a animação `hero-portrait-zoom` com `transform-origin: 68% 40%`, respeitando `prefers-reduced-motion`. Os testes de prévia foram alinhados ao comportamento baseado no zoom.

Validação: `npm run build` aprovado (TypeScript e Vite) e testes Playwright executados localmente. Entrega local, sem commit ou publicação.

## 23 de novembro de 2026 — descrições próximas ao subtítulo dos projetos

A pedido do usuário, as descrições de TwinPulse, Crypto Trading Bot, WhatsApp AI Assistant, BeeThere e TEAjudo foram aproximadas do status/subtítulo exibido sob o título. A margem superior das descrições passou de 28–32 px para 12 px nos estados base e sobrescreventes de `ProjectCard.css`, `BeeThereProject.css` e `FeaturedProjects.css`. Nenhum texto, conteúdo, ordem ou outro espaçamento foi alterado.

Validação: `npm run build` aprovado (TypeScript e Vite). Entrega local, sem commit ou publicação.

## 23 de novembro de 2026 — CSS dividido por componente

O `src/styles/globals.css` foi separado em arquivos CSS co-localizados com cada componente ou seção. Permaneceram no global apenas base/reset, tokens, fontes e utilitários; `src/main.tsx` importa os arquivos na ordem que reproduz a cascata original, antes de `project-motion.css`. Nenhuma regra visual foi adicionada ou removida: a única alteração de texto foi a conversão de `background: none/transparent` para `background: 0 0`, equivalente e necessária para manter o `background-position` calculado após a separação.

Validação: `npm run build` aprovado (TypeScript e Vite). Comparação de estilos computados em 320, 375, 768, 1024 e 1440 px, com e sem `prefers-reduced-motion`, não encontrou diferenças além do progresso instantâneo de uma animação de traço. A suíte Playwright permaneceu com o mesmo resultado do baseline local (11 falhas pré-existentes e 7 passagens). Entrega local, sem commit ou publicação.

## 23 de novembro de 2026 — escala tipográfica e hierarquia de conquistas

A pedido do usuário, a skill `impeccable` foi aplicada à seção “Formação e conquistas” e, depois, estendida ao site inteiro. `src/styles/tokens.css` passou a expor cinco papéis tipográficos: `--type-small` (15 px), `--type-body` (17 px), `--type-emphasis` (22 px), `--type-heading` (`clamp(28px, 3vw, 40px)`) e `--type-display` (`clamp(48px, 8vw, 96px)`). Todos os valores literais de `font-size` nos CSS de `src` foram convertidos nesses tokens; o `<small>` do rodapé também passou a usar `--type-small`, evitando os 12 px padrão do navegador. Permaneceram como exceção apenas os `4px` e `0` das teclas do mockup do laptop, que são arte, não texto do site.

Em `src/sections/Recognition.css`, o título deixou de crescer para `--type-display` no mobile e usa `--type-heading` em todas as larguras. Os rótulos dos grupos ficaram em `--type-emphasis` com peso 700, os nomes dos itens em `--type-body` com peso 600 e o contexto em `--type-small` com peso 400 e cor `--text-2`. Nenhum texto, dado ou copy foi alterado.

Validação: `npm run build` aprovado (TypeScript e Vite). Auditoria dos estilos calculados em 320, 375, 768, 1024 e 1440 px confirmou apenas os cinco tamanhos de texto previstos, sem overflow horizontal; o item mais longo quebra em três linhas sem corte. O detector da skill apontou dois avisos pré-existentes em `LaptopMockup.css` (borda de destaque em elemento arredondado e `Arial` no teclado do mockup). A suíte Playwright manteve o baseline local de 11 falhas pré-existentes e 7 passagens. Entrega local, sem commit ou publicação.

## 23 de novembro de 2026 — cards de projetos uniformes

A pedido do usuário, os elementos equivalentes dos cinco cards passaram a compartilhar os mesmos estilos. O título de BeeThere saiu de `--type-display` e agora usa o mesmo `--type-heading` dos demais; status, descrição, contribuições e tecnologias também passaram a usar os mesmos tamanhos e espaçamentos. A largura da coluna de texto foi unificada à medida do Crypto Trading Bot, e a descrição ficou a 12 px do status. A lista de tecnologias ganhou o mesmo recuo superior em todos os cards.

As ilustrações de criptomoedas foram removidas por completo: componente, CSS, import e regras associadas. O teste de movimento das moedas foi substituído por uma verificação de ausência. Os mockups de telefone cresceram — até 600 px de altura e 360 px de largura no desktop, e 480 px por 300 px no mobile — mantendo-se dentro dos cards. Os prefixos `PoC |`, `Protótipo |` e `Automação em Produção |` foram retirados dos status, conforme o usuário confirmou, deixando apenas o período.

Durante a verificação da navegação, foi adicionada rolagem determinística para âncoras ao montar o app e em `hashchange`. Isso evita que `#projetos` deixe de rolar quando a troca de hash acontece antes de o React posicionar o alvo, sem alterar a prévia do Hero nem o movimento reduzido.

Validação: `npm run build` aprovado (TypeScript e Vite). Estilos calculados em 320, 375, 768, 1024 e 1440 px confirmam títulos, status, descrição, contribuições e tecnologias idênticos nos cinco cards, com a mesma largura de texto do Crypto Trading Bot e sem overflow horizontal. A suíte Playwright voltou ao baseline local de 11 falhas pré-existentes e 7 passagens; o teste das criptomoedas passou a verificar a ausência das ilustrações. O detector da skill repetiu apenas os dois avisos pré-existentes em `LaptopMockup.css`. README atualizado. Entrega local, sem commit ou publicação.

## 23 de novembro de 2026 — títulos de seção e peso das conquistas

A pedido do usuário, os títulos de seção passaram a usar o mesmo tamanho de “Entre em contato” do repositório remoto: 32 px fixos. Em `origin/main`, essa medida vem da regra final `.contact-section h2`; a escala anterior de `--type-heading` (`clamp(28px, 3vw, 40px)`) foi substituída por `32px` em `src/styles/tokens.css`, mantendo os cinco papéis tipográficos. Houve uma reversão intermediária apenas no título do contato, que o usuário desfez em seguida: `.footer-title` voltou a `--type-heading` e a exceção mobile foi removida. Assim, Projetos, Como trabalho, Formação e conquistas, a frase de encerramento e Entre em contato compartilham 32 px em todas as larguras.

Em `src/sections/Recognition.css`, os rótulos Medalhas, Cursos e Extracurriculares passaram a laranja `#f45c28` e negrito (700), enquanto os nomes dos itens ficaram em peso normal (400). A hierarquia combina cor e peso nos rótulos, mantendo nomes em 17 px e contexto em 15 px.

Validação: `npm run build` aprovado (TypeScript e Vite). Auditoria em 320, 375, 768, 1024 e 1440 px confirmou os cinco títulos de seção em 32 px, rótulos laranja em negrito, nomes em peso normal e ausência de overflow horizontal. O detector da skill repetiu apenas os dois avisos pré-existentes em `LaptopMockup.css`. README atualizado. Entrega local, sem commit ou publicação.

Durante a validação, `src/sections/FeaturedProjects.tsx` e `tests/e2e/portfolio.spec.ts` foram alterados fora desta entrega, reduzindo a seleção para três cards e trocando as expectativas de seleção. Com esse estado intermediário, a suíte Playwright reportou 12 falhas e 6 passagens; o ajuste posterior da seleção e dos testes está registrado na seção seguinte.

## 23 de novembro de 2026 — TwinPulse e TEAjudo fora da interface

A pedido do usuário, os cards de TwinPulse e TEAjudo deixaram de ser renderizados em `src/sections/FeaturedProjects.tsx`. O conteúdo e os componentes permanecem no repositório, mas a seleção exibe apenas Crypto Trading Bot, WhatsApp AI Assistant e BeeThere. As asserções das E2E que esperavam os dois cards foram ajustadas ao novo estado.

Validação: `npm run build` aprovado (TypeScript e Vite). Os sete testes E2E que cobrem a seleção de projetos passaram nas larguras 320, 375, 768, 1024 e 1440 px, incluindo a ausência dos dois cards, a ordem dos três restantes e a igualdade de altura. Entrega local, sem commit ou publicação.

## 23 de novembro de 2026 — TwinPulse restaurado

A pedido do usuário, o card de TwinPulse voltou à seleção de projetos, na última posição, com sua captura, contribuições e tecnologias. TEAjudo permanece fora da interface. As asserções das E2E foram atualizadas para quatro cards, com TwinPulse ao final.

Validação: `npm run build` aprovado (TypeScript e Vite). Os mesmos sete testes E2E da seleção passaram nas cinco larguras. Entrega local, sem commit ou publicação.

## 23 de novembro de 2026 — foto de fundo em “Como trabalho”

A pedido do usuário, a fotografia da seção deixou de ocupar uma coluna e passou a preencher toda a seção `#trabalho`. O componente `Photo` continua responsável pela mídia e pelo fallback; `src/config/media.ts` agora aponta `teamwork` para o arquivo `.png` realmente presente em `public/media`, com as dimensões reais do derivado (740 × 477) e enquadramento em `center 42%`. A coluna de texto ficou sozinha, limitada a 820 px, com o título e os parágrafos em cor clara sobre a imagem.

A máscara é um gradiente preto aplicado por `::after`: de `rgba(0, 0, 0, .78)` à esquerda até `.34` à direita no desktop, e de `.72` a `.50` no mobile, mantendo o texto legível sem escurecer toda a fotografia. O divisor entre os dois blocos passou a usar branco translúcido. Como a foto em coluna não existe mais, foram removidos o frame, o parallax em `scrollFallback.ts` e as regras de `project-motion.css` ligadas a `.working-summary__photo` e `.working-summary__frame`, incluindo a animação `team-parallax`.

Validação: `npm run build` aprovado (TypeScript e Vite). Verificação em navegador nas larguras 320, 375, 768, 1024 e 1440 px confirmou que a imagem carrega, cobre toda a seção, a máscara está aplicada, o texto permanece em `rgb(245, 240, 230)` e não há overflow horizontal. O teste E2E de temas continua defasado em relação à paleta atual — era uma das falhas pré-existentes do baseline e seu valor esperado para a seção não foi alterado nesta entrega. Entrega local, sem commit ou publicação.

## 23 de novembro de 2026 — BeeThere como referência de altura dos cards

A pedido do usuário, `usePortfolioMotion.ts` passou a medir o card do BeeThere (o filho direto `.beethere-project` da lista) em vez do Trading Bot. A medida é a altura natural do card, sem o acréscimo fixo de 160 px usado antes, e continua sendo aplicada por `--project-card-height` a todos os cards da seleção. O article interno do BeeThere também recebe `height: auto` durante a medição: sem isso, o `height: 100%` dele colapsava porque o pai estava sendo medido, gerando `0px`. A quantidade de cards nunca definiu a altura — o valor vinha de um único card medido pelo hook; agora esse card é o BeeThere.

O `--card-height` inline, que não era consumido por nenhuma regra, foi removido junto com a variável `cards`. O nome do teste que verificava a igualdade de alturas deixou de citar o Trading Bot.

Validação: `npm run build` aprovado (TypeScript e Vite). Medição em navegador com movimento: todos os quatro cards com a mesma altura em 1440 px (563), 1024 px (639), 768 px (673), 375 px (1227) e 320 px (1309), sem conteúdo cortado (`scrollHeight` igual a `clientHeight`). Os sete testes E2E da seleção passaram. Entrega local, sem commit ou publicação.

## 23 de novembro de 2026 — fotos na resolução original

A pedido do usuário, as fotografias passaram a usar sempre o arquivo original disponível. A foto de fundo de “Como trabalho” voltou ao JPEG `CampusMobile_20260202-225.jpeg` (6766 × 4386), restaurado do commit `fae58af` e com hash idêntico ao objeto do Git; `src/config/media.ts` trocou o derivado PNG de 740 × 477 pelo helper `photo()`, preservando o enquadramento `center 42%`. O retrato do Hero, a medalha e a captura do TwinPulse já apontavam para os originais e não foram alterados.

Removidos de `index.html` os preloads `imagesrcset` do Hero em WebP e da assinatura em WebP: eles baixavam versões menores que a página nunca solicitava. Os arquivos continuam em `public/media/optimized/` como auxiliares, e `ufcg.webp` segue sendo a única otimização consumida. README e `docs/media-guide.md` registraram a política de usar originais nas fotografias.

Validação: `npm run build` aprovado (TypeScript e Vite). Os seis testes E2E de conteúdo/recursos nas larguras 320, 375, 768, 1024 e 1440 px e de fotos/vídeo sob demanda passaram. Entrega local, sem commit ou publicação.

## 23 de novembro de 2026 — WebP de alta qualidade para “Como trabalho”

A pedido do usuário, gerei `public/media/optimized/campus-equipe-6766.webp` a partir do JPEG original com Pillow (`ImageOps.exif_transpose`, `RGB`, `method=6`, qualidade 92), mantendo os 6766 × 4386 px. O arquivo tem 6.035.650 bytes, contra 16.764.719 do JPEG — redução de aproximadamente 64% sem perder resolução. Tests locais com qualidades 88 e 95 resultaram em 4,2 MB e 8,3 MB; a 92 foi escolhida como ponto de equilíbrio.

`MediaAsset` ganhou o campo opcional `webpSrc`, e `Photo` passou a envolver a imagem em `<picture>` com `<source type="image/webp">` quando ele existe. O JPEG original continua como `src` e fallback nativo; `src/config/media.ts` aplicou o WebP somente a `teamwork`. README e `docs/media-guide.md` descrevem a nova política.

`.photo picture` usa `display: block` com largura e altura de 100%. A primeira tentativa com `display: contents` deixou o `<img>` lazy sem caixa própria: o navegador não iniciava a requisição ao rolar até a seção, e o teste E2E falhava de forma intermitente. Com o `<picture>` preenchendo o contêiner, o carregamento lazy volta a disparar corretamente.

O teste E2E agora verifica o `srcset` do `<source>` e o `currentSrc` escolhido pelo navegador. O timeout do poll de carregamento das fotos passou de 5 s para 15 s para acomodar o decode do arquivo de 6 MB em máquinas mais lentas; uma execução intermitente havia excedido os 5 s em 1024 px.

A pedido do usuário, a foto de “Como trabalho” recebeu a mesma máscara do Hero. Os gradientes passaram para os tokens `--photo-mask` e `--photo-mask-mobile` em `src/styles/tokens.css`, consumidos por `.hero-full::after` e `.working-section::after` no desktop e no mobile. Antes, a seção usava um gradiente preto mais fraco (`.78/.58/.34` no desktop e `.72/.5` no mobile).

Validação: `npm run build` aprovado (TypeScript e Vite). Os seis testes E2E de conteúdo/recursos e fotos passaram, incluindo a verificação de que o navegador escolhe o WebP no fundo de “Como trabalho” e de que `::after` das duas seções tem o mesmo `background-image` calculado. A suíte completa segue com três falhas pré-existentes e alheias a esta entrega (fonte do corpo, cores de tema e altura da seção de encerramento). Entrega local, sem commit ou publicação.

## 23 de novembro de 2026 — máscara mais escura em “Como trabalho”

O usuário pediu mais escuridão no lado esquerdo da foto para melhorar a leitura do texto e ofuscar o figurante ao lado. A igualdade com a máscara do Hero foi substituída por dois tokens próprios em `src/styles/tokens.css`: `--photo-mask-work`, com `rgba(0, 0, 0, .96)` na borda esquerda, `.88` em 34%, `.5` em 62% e `.12` em 88%; e `--photo-mask-work-mobile`, vertical, com `.94` no topo, `.78` em 55% e `.55` na base. `.working-section::after` passou a usar esses tokens; o Hero permanece com `--photo-mask` e `--photo-mask-mobile`.

O E2E deixou de exigir máscaras iguais e agora confirma que a de “Como trabalho” é diferente e começa em `rgba(0, 0, 0, 0.96)`.

Validação: `npm run build` aprovado (TypeScript e Vite). Os seis testes E2E de conteúdo/recursos e fotos passaram. Entrega local, sem commit ou publicação.

## 23 de novembro de 2026 — Hero alinhada ao tema escuro atual

O usuário escolheu o tema escuro vigente como referência visual. `src/sections/Hero.css` foi reescrito sem as declarações duplicadas e conflitantes (Manrope, três `letter-spacing`, duas alturas, três recuos superiores e regras mortas de `.hero` e do sublinhado). A foto e o véu passaram a usar os mesmos tokens das demais seções escuras: `--navy` como fundo e gradiente preto em vez do `#142449`/creme literais; o texto usa `--white`/`--orange` e a descrição usa `--type-body` (17 px), como os textos de projeto e conquistas. O cabeçalho sobre a foto trocou o gradiente `#142449` por preto translúcido e o menu mobile usa `--surface-1-85`.

Em seguida o usuário pediu a restauração de quatro comportamentos da versão anterior: o zoom lento da foto (`hero-portrait-zoom`, 4,75 s, `scale` de 1 a 1.085, apenas com `prefers-reduced-motion: no-preference`), o CTA com glassmorfismo (`GlassCtaButton` voltou a ser usado em `Hero.tsx`), a proximidade entre “Matheus” e “Galdino” (os spans voltaram a `inline` ao lado do `<br/>` e a entrelinha passou a 1.2, deixando as linhas a 1–3 px uma da outra em vez dos 42–86 px anteriores) e a rolagem de prévia. A prévia foi reimplementada a partir do histórico (`4b0728b`): espera o zoom e a assinatura terminarem (4,75 s + 250 ms, cerca de 5 s no total, para não exigir uma permanência longa na Hero), percorre apenas a altura do `#destaques` (proof strip), sem revelar `#projetos`, e retorna ao topo e é cancelada por rolagem, navegação ou mudança da preferência de movimento. Cliques em controles e âncoras não a disparam.

Validação: `npm run build` aprovado. Os quatro testes E2E de prévia passaram. Estilos calculados conferidos em 320, 375, 768, 1024 e 1440 px: zero overflow, nomes próximos, CTA com `backdrop-filter: blur(18px) saturate(1.4)` e animação de zoom ativa. Entrega local, sem commit ou publicação.

## 23 de novembro de 2026 — ponto final do scrub do encerramento

O usuário pediu que a revelação do texto de encerramento termine quando o scroll chegar ao meio da seção. Em `src/hooks/textReveal02.ts`, `scrubEnd` passou de `"top 20%"` para `"center center"`: como o `<h2>` está centralizado em `.closing-statement`, o centro do texto coincide com o centro da seção, e o scrub agora chega a 100% quando esse ponto cruza o meio da viewport. O início permanece em `"top 80%"`, e nenhum outro elemento usa `data-scroll="scrub"`.

Validação: `npm run build` aprovado (TypeScript e Vite). O E2E de rolagem por toque, que leva `#closing-line` ao centro da viewport, passou; a suíte completa segue com as mesmas três falhas pré-existentes e alheias a esta mudança (fonte do corpo, cores de tema e altura da seção de encerramento). Entrega local, sem publicação.

## 23 de novembro de 2026 — sombreamento dos cards ultrapassados

A pedido do usuário, os cards da seleção passaram a escurecer conforme o próximo sobe e os encobre na pilha sticky. O novo `src/hooks/projectCardShade.ts` usa `ScrollTrigger` com `scrub` em cada card, tendo o card seguinte como gatilho (`top 60%` a `top 10%`), e escreve a variável `--card-shade` de 0 a 1. O hook é ligado e desligado por `usePortfolioMotion` junto com os demais efeitos de `prefers-reduced-motion: no-preference`; `document.fonts.ready` atualiza as medidas e chama `ScrollTrigger.refresh()`.

Em `src/styles/project-motion.css`, um `::after` absoluto sobre o conteúdo de cada card aplica um gradiente cinza-chumbo a preto com `opacity: var(--card-shade, 0)`, sem tintura azul. Ele fica abaixo do card seguinte por causa do `z-index` da pilha, não intercepta ponteiro e desaparece quando a preferência de movimento reduzido é ativada. O último card nunca é ultrapassado e permanece sem sombreamento.

Validação: `npm run build` aprovado (TypeScript e Vite). Conferência em 1440×900 com Playwright: `--card-shade` foi `0.000` com `#crypto` no topo, `0.978` ao levar `#whatsapp` ao topo e `1.000` no card do BeeThere; a opacidade calculada do `::after` acompanhou esses valores. Novo teste E2E cobre a progressão. Entrega local, sem publicação.
