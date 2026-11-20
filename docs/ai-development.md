# Registro real do desenvolvimento assistido

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

Build aprovado e ausência de overflow conferida em cinco larguras. Foto validada também com movimento habilitado: proporção natural, sem transform, scale ou transição; contatos com fundo transparente e padding zero. Na suíte, 13 cenários passaram; o cenário da prévia revelou que o tempo de carregamento consumia parte do relógio de teste. O relógio passou a ser pausado antes da navegação, e esse cenário passou em três repetições. Detector Impeccable executado uma vez: avisos preexistentes sobre Plus Jakarta Sans (escolha expressa do autor) e detalhes do mockup do laptop, preservados fora do escopo desta alteração.

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
