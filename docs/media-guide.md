# Fotos e vídeos

Adicione os arquivos em `public/media/`. JPG, JPEG, PNG e WebP são aceitos diretamente: a extensão na configuração precisa corresponder ao arquivo real. Não renomeie a extensão para converter o formato.

Pastas sugeridas:
- `portraits/`: retratos.
- `activities/`: apresentações e maratonas de programação.
- `campus/`: TeAjudo e BeeThere no Campus Mobile.
- `recognition/`: medalhas, premiações e natação.
- `projects/`: capturas reais e autorizadas.

As fotos já enviadas permanecem na raiz de `public/media/`. `src/config/media.ts` mapeia os registros de apresentação, trabalho em equipe, Campus de 2025 e 2026, medalhas e a captura do Leal Car’s Stock. Ajuste o campo `position` para mudar o enquadramento, `alt` para descrição e `available` para disponibilidade. `Photo` trata falhas sem quebrar a composição.

`optimized/` guarda `campus-equipe-6766.webp`, derivado do JPEG original em resolução cheia e qualidade 92, servido via `<picture>` com o JPEG como fallback. Também ficam lá os auxiliares `hero-1024.webp`, `hero-1920.webp`, `rubrica.webp` e `ufcg.webp`. As outras fotografias usam os originais em `public/` e `public/media/`; a logo UFCG consome `ufcg.webp`. `scripts/optimize-media.py` é uma ferramenta histórica que produz variantes de 640 e 1440 px com Pillow e não participa do build.

O vídeo original do BeeThere é carregado somente ao clicar em “Assistir ao filme”; controles nativos ficam disponíveis. Legendas/transcrição ainda precisam ser fornecidas ou revisadas antes de afirmar acessibilidade completa do conteúdo audiovisual.

Sugestões: retrato 4:5, apresentação 3:2, projetos 16:10, fotos de equipe 3:2. Preserve a resolução original; não é necessário recortar antes de enviar.

TeAjudo: informações atualmente autorizadas são nome, participação e semifinal na 13ª edição. Descrição funcional, tecnologias e demo podem ser acrescentadas quando fornecidas.

O arquivo `TEAjudo-demonstracao.mp4` da raiz foi copiado para `public/media/campus/teajudo-demonstracao.mp4` e incorporado sob demanda. O original e o arquivo maior `video_teajudo_dlj.mp4` foram preservados; este último não é carregado pelo site.

## Referências atualizadas

- Hero: IMG_20260209_184246 (fotografia de apresentação), como fundo de tela inteira.
- BeeThere: `public/Captura de tela de 2026-11-16 15-26-46-1.png`.
- TeAjudo: apresentação DLJ em `public/video_teajudo_dlj.mp4`. A demonstração não aparece na página.
- Bitcoin: PNG local em `public/logos/bitcoin.png`.

A apresentação DLJ tem aproximadamente 261 MB e só é solicitada após o clique. Recomenda-se uma versão comprimida antes da publicação. O arquivo original foi preservado. Legendas/transcrições ainda precisam de revisão.

A página usa agora `public/media/campus/teajudo-dlj-web.mp4`, derivado H.264/AAC em 720p do original DLJ. O original local e demonstrações retiradas da interface são ignorados pelo Git. TwinPulse aponta para `public/Captura de tela de 2026-11-16 15-50-15.png`. BeeThere aparece apenas no Campus; as fotos redundantes foram retiradas da página, preservando os arquivos.
