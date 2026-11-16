# Revisão Taste Design

Resultado da primeira rodada: `GATE: FAIL 108 (round 1 of 3)`. A rodada avaliou uma versão intermediária. Não equivale à aprovação visual do resultado final.

As correções posteriores removeram o controle fixo que sobrepunha conteúdo, reforçaram contraste e mantiveram os selos dentro das fotos. As verificações funcionais próprias cobrem fotos carregadas, responsividade, vídeos e navegação.

Muitos achados decorrem das regras específicas do kit (uma seção por tela, alinhamento único, catálogo de momentos, nomenclatura e estrutura do template). Essas regras não foram impostas sobre a direção criativa, os contatos reais, a paleta e o conteúdo solicitado pelo usuário. Nenhuma waiver foi adicionada e o gate não foi apresentado como aprovado.

## Achados registrados

- **nav-covers** — div#root > div.portfolio > button.motion-control "Pausar movimento": sits on top of the text "Aplicação web de gestão de estoque de ve" while the page scrolls: part of the line shows beside it

- **spill** — section#inicio > div.hero-bottom > div.hero-photo > span.photo-sticker "IDEIAS EM AÇÃO ↗": runs 20px past the bottom edge of the panel it sits on (section#inicio > div.hero-bottom > div.hero-photo > div.photo)

- **spill** — div.project-grid > div.project-visual > div.project-art.art-crypto > div.coin.coin-front "₿": runs 158px past the right edge of the panel it sits on (div.project-grid > div.project-visual > div.project-art.art-crypto > div.coin.coin-back)

- **spill** — div.project-visual > div.project-art.art-leal > div.car-shape > i:nth-of-type(1): runs 15px past the bottom edge of the panel it sits on (div.project-grid > div.project-visual > div.project-art.art-leal > div.car-shape) (and 1 more like it: i:nth-of-type(2))

- **no-visual** — section#projetos "PROJETOS COM CONTEXTO.": pictures, effects and mocks cover 9% of this section; a feature section needs a visual (about 25% or more)

- **no-visual** — section#experiencia "TECNOLOGIA FEITA COM GENTE.": no picture, effect or mock in this section; a feature section needs a visual

- **no-visual** — section#ia "EXPERIMENTAR. VALIDAR. EVOLUIR.": no picture, effect or mock in this section; a feature section needs a visual

- **text-only** — section#contato "VAMOS CONSTRUIR?": the closing section is only text: no picture, icon, mock or effect in it

- **cta** — section#contato "VAMOS CONSTRUIR?": the last section before the footer ends with no button

- **copy-headline** — h1#hero-title "MATHEUS GALDINO✳ de Souza": "MATHEUS GALDINO✳ de Souza" does not name what is sold (portfolio de engenharia de software, portfolio, engenharia, software, from flags)

- **copy-fact** — h1#hero-title "MATHEUS GALDINO✳ de Souza": the first screen holds no number, price, date, place, platform or genre

- **copy-headings** — section#projetos > div.section-heading > div > h2 "PROJETOS COM CONTEXTO.": "PROJETOS COM CONTEXTO." names no product, part, place or section (23 headings like it; at most one brand line per page) (and 22 more like it: "TwinPulse", "Crypto Trading Bot", "BeeThere", "Leal Car’s Stock", ...)

- **heading-scale** — section#contato > div.container > h2 "VAMOS CONSTRUIR?": h2 headings in 3 sizes, 59px ("APRENDER. CONSTRUIR. COM") to 115.2px (x1.95)

- **heading-scale** — h3#twinpulse-title "TwinPulse": h3 headings in 5 sizes, 25px ("Olimpíadas acadêmicas") to 49px (x1.96)

- **stagger** — h1#hero-title "MATHEUS GALDINO✳ de Souza": the 2 lines of this heading start at 24, 219px: a headline broken across columns, read in a zigzag

- **off-grid** — section#projetos > div.section-heading > div > p "De pipelines de Machine Learning a produ": left edge at 789.5px, 18.5px off a common edge of its section at 808px (17 elements, like h3#twinpulse-title); 3 more in this section off the grid too (li:nth-of-type(1) at 44px, li:nth-of-type(2) at 44px, li:nth-of-type(3) at 44px)

- **off-grid** — section#sobre > div.container > ul.tech-list > li:nth-of-type(8) "Docker": left edge at 800.5px, 7.5px off a common edge of its section at 793px (3 elements)

- **off-grid** — section#campus > div.container > div.campus-wide.scroll-photo > div.photo: left edge at 39.5px, 15.5px off the page margin at 24px (60 elements, like div:nth-of-type(1))

- **off-grid** — section#conquistas > div.recognition-grid > div.recognition-photo.scroll-photo > div.photo: left edge at 32px, 8px off the page margin at 24px (60 elements, like h2)

- **tilt** — div.project-visual > div.project-art.art-twinpulse > div.twin-forms > div.twin-cube.cube-one: skewed 10.0°

- **tilt** — div.project-visual > div.project-art.art-twinpulse > div.twin-forms > div.twin-cube.cube-two: skewed -10.0°

- **tilt** — div.project-grid > div.project-visual > div.project-art.art-crypto > div.coin.coin-back "$": rotated -18.0° (and 2 more like it: "600+ ATIVOS", div.bee-orbit)

- **tilt** — div.project-grid > div.project-visual > div.project-art.art-crypto > div.coin.coin-front "₿": rotated 12.0°

- **text-contrast** — header.site-header > div.container.navbar > a.wordmark > span ".": a caption, label or muted line in #f45c28 on #f5f0e6 reads 2.89:1 (needs 3:1)

- **text-contrast** — section#inicio > div.hero-bottom > div.hero-copy > p:nth-of-type(2) "Estudante de Ciência da Computação na UF": body text in #535968 on #f5f0e6 reads 6.17:1 (needs 7:1); 9 like it, like "De pipelines de Machin", "Uma plataforma em evol", "Sistema em Python inte"

- **text-contrast** — article#twinpulse > div.project-topline > span:nth-of-type(1) "/01": a caption, label or muted line in #c63f13 on #f5f0e6 reads 4.49:1 (needs 4.5:1); 4 like it, like "/02", "/03", "/04"

- **text-contrast** — section#campus > div.container > p.campus-intro "TeAjudo e BeeThere: duas participações n": body text in #535968 on #ece5d7 reads 5.59:1 (needs 7:1); 4 like it, like "Semifinalista da 13ª e", "Semifinalista da 14ª e", "Vídeo promocional do B"

- **photo-upscale** — div.project-grid > div.project-visual > div.photo.application-shot > img "img: Captura real do catálogo de veículo": home-lealcar-1440.webp: 440x217 shown at 698x344, blown up 1.59x

- **photo-upscale** — div.container > div.campus-wide.scroll-photo > div.photo > img "img: Equipe trabalhando em conjunto no C": CampusMobile_20260202-225-1440.webp: 792x513 shown at 1361x619, blown up 1.72x

- **photo-upscale** — div.recognition-grid > div.recognition-photo.scroll-photo > div.photo > img "img: Cerimônia de premiação da Olimpíada": medalha-opi-1440.webp: 440x439 shown at 638x638, blown up 1.45x

- **phone-number** — section#contato > div.container > div.contact-links > a:nth-of-type(4) "tel:+5583991623789": a tel: link calls a number in a real dialable format: "tel:+5583991623789"; a visitor can dial it and reach a stranger

- **section-tile** — section#sobre "APRENDER. CONSTRUIR. COMPARTILHAR.": the section is 1082px tall (1.20 screens at 1440x900), not one screen or two: the screen one screen on from its top (scroll 5472px) shows 182px of it and 718px of the next section, its heading "TECNOLOGIA FEITA COM GENTE." on screen

- **focus-visible** — article#beethere > div.project-grid:nth-of-type(2) > div.project-copy:nth-of-type(2) > a.text-link "Explorar protótipo (abre em nova aba)": Tab stop 11, a "Explorar protótipo (abre em nova aba)": the focus lands on something you cannot see

- **focus-visible** — article#leal > div.project-grid:nth-of-type(2) > div.project-copy:nth-of-type(2) > a.text-link "Visitar aplicação (abre em nova aba)": Tab stop 12, a "Visitar aplicação (abre em nova aba)": the focus lands on something you cannot see

- **focus-visible** — div.campus-editions:nth-of-type(2) > article:nth-of-type(2) > div:nth-of-type(2) > a.text-link "Conhecer o projeto ↗": Tab stop 13, a "Conhecer o projeto ↗": the focus lands on something you cannot see

- **focus-visible** — div.container > div.campus-film:nth-of-type(4) > div.video-frame:nth-of-type(2) > button.video-poster "Reproduzir vídeo promocional do BeeThere": Tab stop 14, button "Reproduzir vídeo promocional do BeeThere": the focus lands on something you cannot see

- **hero-enter** — section#inicio: the hero does not enter on load: no head line setting html.m-enter (motion.md, The hero's entrance)

- **moment-none** — (the page): a software page (--type) deals no moment: every kind carries one, two on a long page (moments.md)

- **hero-screen** — section#inicio "SOFTWARE DEVELOPER & RESEARCHERCAMPINA G": the hero ends at 1048px on a 900px screen, 148px below the fold: it ends at the fold, 1px either way (SR-1)

- **section-height** — section#projetos "01—04 / ENGENHARIA & PRODUTOPROJETOS COM": the section is 3523px tall (3.9 screens), 1723px over two screens (1800px): every section after the hero is one screen or two, 2px either way (SR-2)

- **section-height** — section#campus "04 / CAMPUS MOBILEDUAS EDIÇÕES.MUITAS TR": the section is 2065px tall (2.3 screens), 265px over two screens (1800px): every section after the hero is one screen or two, 2px either way (SR-2)

- **section-height** — section#contato "07 / PRÓXIMA CONVERSAVAMOSCONSTRUIR?math": the section is 697px tall (0.8 screens), 203px short of one screen (900px): every section after the hero is one screen or two, 2px either way (and 4 more like it: "02 / POR TRÁS DO CÓDIGOA", "06 / CONQUISTAS & APREND", "05 / IA APLICADAEXPERIME") (SR-2)

- **section-height** — section#ia "05 / IA APLICADAEXPERIMENTAR.VALIDAR. EV": the section starts at 8558px, 442px above the screen grid (10 x 900px): sections start on whole screens (SR-2)

- **section-height** — section#conquistas "06 / CONQUISTAS & APRENDIZADOCURIOSIDADE": the section starts at 9362px, 362px below the screen grid (10 x 900px): sections start on whole screens (and 5 more like it: "03 / TRAJETÓRIATECNOLOGI", "04 / CAMPUS MOBILEDUAS E", "01—04 / ENGENHARIA & PRO") (SR-2)

- **section-air** — article#twinpulse "/01Pesquisa & desenvolvimento / AI Engin": a top border across 100% of the container, between the section's content: sections and their parts are told apart by air and ground, not lines (SR-3)

- **section-air** — article#crypto "/02Automação / Backend / Análise de dado": a top border across 100% of the container, between the section's content: sections and their parts are told apart by air and ground, not lines (SR-3)

- **section-air** — article#beethere "/03Produto / Empreendedorismo / UX Resea": a top border across 100% of the container, between the section's content: sections and their parts are told apart by air and ground, not lines (and 2 more like it: "/04Full-stack / Desenvol", "Matheus Galdino de Souza") (SR-3)

- **one-section** — section#contato > div.container > h2 "VAMOSCONSTRUIR?": the screen at scroll 9900px (stride 11) shows 383px of section 8 and the heading of section 8 whole and the content of 2 sections, over 24px each beside section 7: a screen shows one section (another may peek 8px, 24px WARN) (SR-4)

- **one-section** — div.campus-film > div.video-frame > button.video-poster > strong "BEETHERE": the screen at scroll 8100px (stride 9) shows 377px of section 5 and the heading of section 5 whole and the content of 2 sections, over 24px each beside section 6: a screen shows one section (another may peek 8px, 24px WARN) (SR-4)

- **one-section** — section#ia "05 / IA APLICADAEXPERIMENTAR.VALIDAR. EV": the screen at scroll 9000px (stride 10) shows 281px of section 6 and the content of 2 sections, over 24px each beside section 7: a screen shows one section (another may peek 8px, 24px WARN) (and 6 more like it: scroll 5400px, scroll 10214px, scroll 6300px) (SR-4)

- **one-heading** — section#projetos > div.section-heading > div > h2 "PROJETOS COM CONTEXTO.": headings of two sections show whole on one screen at 11 of 205 scroll positions (5.4%; at scroll 450, 500, 7950, 8000px), here with "Código, pesquisae um pé no mundo": at most 3% on a desktop (SR-5)

- **container-edges** — div#root > div.portfolio > header.site-header "mg.Menu+ProjetosSobreCampus MobileConqui": the nav's content runs 24px from the left and 24px from the right (read from its outermost blocks: no .wrap): the margin is 64-120px at 1440px (one container, equal margins, 2px either way) (SR-6)

- **container-edges** — section#inicio "SOFTWARE DEVELOPER & RESEARCHERCAMPINA G": the content of section 1 runs 24px from the left and 24px from the right (read from its outermost blocks: no .wrap): the margin is 64-120px at 1440px (one container, equal margins, 2px either way) (and 7 more like it: "01—04 / ENGENHARIA & PRO", "02 / POR TRÁS DO CÓDIGOA", "03 / TRAJETÓRIATECNOLOGI") (SR-6)

- **container-edges** — div#root "Pular para o conteúdomg.Menu+ProjetosSob": a <div> at the top of the page, outside header.nav, main, footer.closing and nav.actionbar (SR-6)

- **container-edges** — div.project-copy > div.contributions > ul > li:nth-of-type(1) "Integração e processamento de dados, aná": 9 text blocks start on a left line at x 827, 803px from the container's left: text starts on the container's left, or on one split line (x 614, 732, 850) (also "Segurança na execução de código ", "Desenvolvimento e refatoração da", "Product discovery, Business Mode") (SR-6)

- **container-edges** — h3#twinpulse-title "TwinPulse": 11 text blocks start on a left line at x 807, 783px from the container's left: text starts on the container's left, or on one split line (x 614, 732, 850) (also "Uma plataforma em evolução para ", "Minha contribuição", "BeeThere") (and 9 more like it: x 800, x 793, x 762) (SR-6)

- **container-edges** — section#campus > div.container > div.campus-film > div.video-frame "▶BEETHEREAssistir ao filme": a box over half the container wide runs 656-1416px, not on the container's lines at 24-1416px (SR-6)

- **container-edges** — section#campus > div.container > div.campus-wide.scroll-photo > div.photo: a box over half the container wide runs 94-1346px, not on the container's lines at 24-1416px (SR-6)

- **row-lines** — section#sobre > div.container > div.about-photos: a row of 2 items: its items are 483/372px tall, not one height (2px either way) (SR-7)

- **row-lines** — div.project-grid > div.project-visual > div.project-art.art-twinpulse > div.twin-forms: a row of 2 items: its first item starts at 73px, its column's left line at 24px; its last item ends at 675px, its column's right line at 724px (2px either way) (SR-7)

- **split-pair** — section#projetos > div.section-heading > div "PROJETOS COM CONTEXTO.De pipelines de Ma": the two columns of the split start 63px apart at the top: a split's columns are top-aligned, 8px either way (SR-8)

- **split-pair** — section#inicio > div.hero-bottom "Código, pesquisae um pé no mundo real.Es": the two columns of the split start 44px apart at the top: a split's columns are top-aligned, 8px either way (SR-8)

- **split-pair** — section#conquistas > div.recognition-grid "✳Olimpíadas acadêmicasOlimpíada Paraiban": the two columns of the split start 33px apart at the top: a split's columns are top-aligned, 8px either way (SR-8)

- **split-pair** — section#sobre > div.container > div.about-grid "APRENDER.CONSTRUIR.COMPARTILHAR.Sou Math": the split's columns are off the page's one pair of lines: its right column starts at x 793, the first split's at 717; its right column starts at x 793, on none of the split lines 614 (k=5), 732 (k=6), 850 (k=7) (and 6 more like it: "DADOS → POSSIBILIDADESEx", "DO DIGITAL AO PRESENCIAL", "ESTOQUE EM UM SÓ LUGARAP") (SR-8)

- **heading-scale** — div.project-copy > dl.project-metrics > div:nth-of-type(1) > dd "≈21": the figure "≈21" is set at 32px, larger than the section headings (h2 29.6px); 5 more like it

- **off-grid** — div.project-grid > div.project-copy > ul.tech-list > li:nth-of-type(5) "Docker": left edge at 129px, 19px off a common edge of its section at 110px (3 elements, like li:nth-of-type(2)); 14 more in this section off the grid too (li:nth-of-type(1) at 36px, li:nth-of-type(2) at 36px, li:nth-of-type(3) at 36px, li:nth-of-type(1) at 36px, ...)

- **centre-axis** — section#inicio > div.hero-bottom > div.hero-photo > span.photo-sticker "IDEIAS EM AÇÃO ↗": centred text 116px right of the middle of its page (311px against 195px)

- **phone-number** — section#contato > div.container > div.contact-links > a:nth-of-type(4) "9162-3789": a phone number after its label: "9162-3789"; a visitor can dial it and reach a stranger

- **hero-fill** — section#projetos "PROJETOS COM CONTEXTO.": the next section shows on the first screen: it starts at 951px on a 1024px screen (the hero ends at 870px)

- **edge-left** — #projetos p "De pipelines de Machine Learning": starts at x 789.6; the lines are 24 and the column starts

- **edge-left** — #projetos h3 "TwinPulse": starts at x 807.4; the lines are 24 and the column starts

- **edge-left** — #projetos p.project-description "Uma plataforma em evolução para ": starts at x 807.4; the lines are 24 and the column starts

- **edge-left** — #projetos ul "Integração e processamento de da": starts at x 807.4; the lines are 24 and the column starts

- **edge-left** — #projetos ul.tech-list "PythonFastAPIReactTypeScriptDock": starts at x 807.4; the lines are 24 and the column starts

- **edge-left** — #projetos h3 "BeeThere": starts at x 807.4; the lines are 24 and the column starts

- **edge-left** — #projetos p.project-description "Aplicativo em desenvolvimento pa": starts at x 807.4; the lines are 24 and the column starts

- **edge-left** — #projetos dl.project-metrics "entrevistas presenciais42respost": starts at x 807.4; the lines are 24 and the column starts

- **edge-left** — #projetos ul "Product discovery, Business Mode": starts at x 807.4; the lines are 24 and the column starts

- **edge-left** — #projetos ul.tech-list "ReactTypeScriptFigmaPesquisa com": starts at x 807.4; the lines are 24 and the column starts

- **edge-left** — #projetos h3 "Leal Car’s Stock": starts at x 807.4; the lines are 24 and the column starts

- **edge-left** — #projetos p.project-description "Aplicação web de gestão de estoq": starts at x 807.4; the lines are 24 and the column starts

- **edge-left** — #projetos ul "Backend com Python, FastAPI e Po": starts at x 807.4; the lines are 24 and the column starts

- **edge-left** — #projetos ul.tech-list "FastAPIPostgreSQLReactTypeScript": starts at x 807.4; the lines are 24 and the column starts

- **edge-left** — #sobre p.large-copy "Sou Matheus Galdino de Souza. Es": starts at x 792.9; the lines are 24 and the column starts

- **edge-left** — #sobre p "Na pesquisa, no desenvolvimento ": starts at x 792.9; the lines are 24 and the column starts

- **edge-left** — #sobre p "Português nativo · Inglês interm": starts at x 792.9; the lines are 24 and the column starts

- **edge-left** — #experiencia p "Desenvolvimento de microsserviço": starts at x 520; the lines are 24 and the column starts

- **edge-left** — #experiencia p "Atuação em alfabetização digital": starts at x 520; the lines are 24 and the column starts

- **edge-left** — #experiencia p "Apoio a estudante com transtorno": starts at x 520; the lines are 24 and the column starts

- **edge-left** — #campus h3 "O primeiro capítulo.": starts at x 376; the lines are 24 and the column starts

- **edge-left** — #campus p "Semifinalista da 13ª edição do C": starts at x 376; the lines are 24 and the column starts

- **edge-left** — #campus h3 "Novas ideias, novas conexões.": starts at x 1088; the lines are 24 and the column starts

- **edge-left** — #campus p "Semifinalista da 14ª edição com ": starts at x 1088; the lines are 24 and the column starts

- **edge-left** — #ia h3 "IA no desenvolvimento": starts at x 978.7; the lines are 24 and the column starts

- **edge-left** — #ia p "Antigravity, OpenCode e Codex no": starts at x 978.7; the lines are 24 and the column starts

- **edge-left** — #ia ul.tech-list "GitReactTypeScript": starts at x 978.7; the lines are 24 and the column starts

- **edge-left** — #conquistas h3 "Olimpíadas acadêmicas": starts at x 761.8; the lines are 24 and the column starts

- **edge-left** — #conquistas ul.awards-list "Olimpíada Paraibana de Informáti": starts at x 761.8; the lines are 24 and the column starts

- **edge-left** — #conquistas h3 "Formação contínua": starts at x 761.8; the lines are 24 and the column starts

- **edge-left** — #conquistas p "Machine Learning — VIRTUS": starts at x 761.8; the lines are 24 and the column starts

- **edge-left** — #conquistas p "Clojure — NuFuturo / Nubank": starts at x 761.8; the lines are 24 and the column starts

- **edge-left** — #conquistas h3 "Também fora da sala de aula": starts at x 761.8; the lines are 24 and the column starts

- **edge-left** — #conquistas p "Participação nos Jogos Universit": starts at x 761.8; the lines are 24 and the column starts

- **screen-height** — #sobre section.about-section.navy-section "02 / POR TRÁS DO CÓDIGOAPRENDER.": 1082px, 1.20 screens; a section is exactly one or two (--h)

- **screen-short** — #experiencia section.experience-section.container "03 / TRAJETÓRIATECNOLOGIAFEITA C": 839px tall; one screen under the nav is 900px

- **neighbour-ground** — #experiencia section.experience-section.container "03 / TRAJETÓRIATECNOLOGIAFEITA C": framed, 61px of #campus section.campus-section "04 / CAMPUS MOBILEDUAS EDIÇÕES.M"'s ground shows

- **hero-fold** — #inicio section.hero.container "SOFTWARE DEVELOPER & RESEARCHERC": starts at y 81, not under the nav

- **neighbour** — #sobre section.about-section.navy-section "02 / POR TRÁS DO CÓDIGOAPRENDER.": framed, 62px of #experiencia section.experience-section.container "03 / TRAJETÓRIATECNOLOGIAFEITA C" shows
