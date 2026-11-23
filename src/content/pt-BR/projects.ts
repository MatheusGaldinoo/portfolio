import type { Project } from '../../types/content';

export const projects: Project[] = [
  {
    id: 'twinpulse',
    title: 'TwinPulse',
    status: 'Fev 2026 – Atual',
    description: 'Plataforma de AutoML para simplificar a criação de Gêmeos Digitais, cobrindo da entrada e análise exploratória de dados ao treinamento de modelos.',
    contributions: [
      'Integrei a análise exploratória de dados conectando backend ao frontend.',
      'Implementei pré-processamento customizado para permitir transformações sobre datasets.',
      'Implementei isolamento em sandbox para executar código de usuário com segurança.',
      'Refatorei a interface para conectar as etapas de preparação de dados à experiência de uso.',
      'Configurei pipelines de CI e corrigi contratos de integração entre microserviços.',
    ],
    technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'Docker'],
  },
  {
    id: 'crypto',
    title: 'Crypto Trading Bot',
    status: 'Mar 2024 – Dez 2025',
    description: 'Automação de negociação de criptomoedas em nuvem (Render) com execução contínua e heurísticas quantitativas sem necessidade de supervisão manual diária.',
    contributions: [
      'Desenvolvi heurísticas de decisão e integração com API REST do Mercado Bitcoin para mais de 600 ativos.',
      'Otimizei o tempo de ciclo do algoritmo em 80% usando paralelismo e estruturas de dados em memória.',
      'Operei instâncias independentes no Render Cloud para quatro contas ao longo de 21 meses.',
      'Automatizei ordens de compra e venda a cada cinco minutos, reduzindo intervenções manuais.',
      'Acompanhei e validei resultados analíticos com Python e Pandas em operações de alta liquidez.',
    ],
    technologies: ['Python', 'Pandas', 'Render Cloud', 'Git', 'API REST'],
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp AI Assistant',
    status: 'Jul 2025 – Nov 2025',
    description: 'Assistente inteligente integrado ao WhatsApp para consulta contextual e respostas automatizadas sem troca de ferramentas.',
    contributions: [
      'Desenvolvi o backend em Python e FastAPI para receber e processar as mensagens do assistente.',
      'Integrei webhooks bidirecionais via Z-API, conectando a aplicação ao ecossistema do WhatsApp.',
      'Estruturei a lógica e orquestração de agentes com LangGraph para organizar as etapas de cada interação.',
      'Integrei modelos de linguagem locais servidos via Ollama ao fluxo de geração.',
      'Implementei recuperação contextual com RAG para apoiar respostas com conhecimento relevante.',
    ],
    technologies: ['Python', 'FastAPI', 'LangGraph', 'Ollama', 'Z-API'],
  },
];

export const beethere: Project = {
  id: 'beethere',
  title: 'BeeThere',
  status: 'Nov 2025 – Atual',
  description: 'Aplicativo mobile-first para facilitar encontros entre amigos e resolver conflitos de agenda, validado com 42 entrevistas presenciais e 800 respondentes.',
  contributions: [
    'Projeto semifinalista selecionado na 14ª edição do Campus Mobile (Instituto Claro e USP).',
    'Conduzi pesquisa com usuários identificando sobreposição de agendas como causa de não encontros.',
    'Estruturei o modelo de produto, escopo e proposta de valor com Canvas, TAP e one-page.',
    'Prototipei fluxos navegáveis no Figma e desenvolvi a interface em React e TypeScript.',
    'Apresentei a proposta de valor em pitches para bancas e investidores.',
  ],
  technologies: ['React', 'TypeScript', 'Figma', 'Claude', 'ElevenLabs'],
};

export const teajudo: Project = {
  id: 'teajudo',
  title: 'TEAjudo',
  status: 'Nov 2024 – Ago 2025',
  description: 'Aplicativo pensado para conectar pais e familiares de crianças com TEA a profissionais de saúde e educação multidisciplinares.',
  contributions: [
    'Projeto semifinalista selecionado na 13ª edição do Campus Mobile.',
    'Modelei a proposta de valor e a jornada do usuário focadas em acessibilidade, diversidade e inclusão.',
    'Desenvolvi em equipe o protótipo móvel navegável no Figma com validação direta de UX.',
    'Apresentei a proposta em pitch criativo com foco em comunicação, impacto social e viabilidade.',
  ],
  technologies: ['Figma'],
};
