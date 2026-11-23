# Contexto
Portfólio estático de Matheus Galdino de Souza. React, TypeScript, Vite e Tailwind CSS; sem backend, autenticação ou banco de dados.

# Escopo atual
Revisão atual: cinco seções, Hero fotográfico com nome/descrição sobrepostos, sem CTAs/currículo, sem cards para fotos, sem zoom hover e sem controle de movimento. Logos sem nomes visuais. Status abaixo dos títulos. Campus/DLJ só com apresentações (não demonstração TeAjudo). Redesign completo autorizado: Hero, projetos, Sobre, trajetória, Campus Mobile (TeAjudo + BeeThere), IA aplicada, conquistas e contato. Contribuições sempre visíveis. Mídias originais preservadas; derivados em public/media/optimized.

# Arquitetura
- Componentes reutilizáveis em src/components; seções em src/sections.
- Conteúdo em src/content/pt-BR; mídias e links em src/config.
- Tokens em src/styles/tokens.css, estilos globais em globals.css.
- Evitar dependências e abstrações desnecessárias; usar recursos HTML nativos.

# Conteúdo
Não inventar métricas, credenciais, URLs pessoais ou funcionalidades. Diferenciar PoC, protótipo e aplicação publicada. Crypto Trading Bot usa heurísticas; métricas financeiras exigem contexto. TwinPulse não deve expor código, arquitetura privada ou mídia sem autorização. Pesquisa do BeeThere não equivale a adoção. Não publicar dados pessoais de participantes.

# Design e qualidade
Identidade gráfica expressiva: proporção visual aproximada 60% branco #ffffff, 30% royal navy #142449, 10% signal orange #f45c28. Bowlby One SC nos títulos, DM Sans no corpo. Logos reais locais. Não usar fotos genéricas ou retratos gerados. Garantir fallback de mídia, contraste AA, semântica, foco, teclado e movimento reduzido. Mobile-first, verificar 320, 375, 768, 1024 e 1440 px. Manter contribuições específicas acessíveis.

# Aceite
Build de produção e TypeScript válidos; navegação funcional; ausência de links fictícios e overflow; mídias substituíveis; README atualizado. Documentar ações reais em docs/ai-development.md. Não publicar automaticamente: esta entrega é local.

Última revisão: cabeçalho sobre a foto, sem monograma; logos institucionais no Hero. Removida seção de experiência. BeeThere apenas no Campus. Seleção tem TwinPulse, Trading Bot e Leal; /n ao lado do título, sem categorias e notas extras. Métricas com ícones e stacks com logos maiores. Push autorizado pelo usuário nesta sessão; manter commits granulares Conventional Commits. Vídeos >100 MB não entram no Git; preservar originais locais.
