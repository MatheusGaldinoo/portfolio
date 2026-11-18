import type { Project } from '../../types/content';
export const projects: Project[] = [
  { id: 'twinpulse', title: 'TwinPulse', status: 'PoC | Fev 2026 até atualmente',
    description: 'Plataforma de AutoML para tornar a criação de Gêmeos Digitais mais acessível a não especialistas, da entrada dos dados e análise ao treinamento de modelos.',
    contributions: ["Integrei a análise exploratória de dados ao fluxo da plataforma, conectando backend e frontend.", "Adicionei pré-processamento customizado para permitir novas transformações sobre os dados.", "Implementei isolamento com Bubblewrap para executar código do usuário com segurança.", "Evoluí e refatorei a interface para conectar as etapas de preparação de dados à experiência de uso.", "Implementei a pipeline de CI e corrigi integrações entre os microserviços."],
    technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'Docker'] },
  { id: 'crypto', title: 'Crypto Trading Bot', status: 'Automação | Mar 2024 a Dez 2025',
    description: 'Automação de negociação de criptomoedas que transforma regras de investimento em operações executadas sem acompanhamento manual contínuo.',
    contributions: ["Desenvolvi heurísticas de decisão e a integração com a API do Mercado Bitcoin para automatizar negociações de mais de 600 ativos.", "Aumentei a velocidade do algoritmo em 80% por meio de paralelismo e estruturas de dados adequadas.", "Mantive instâncias independentes no Render para quatro contas durante 21 meses.", "Automatizei ordens de compra e venda em execuções a cada cinco minutos, reduzindo tarefas manuais de horas para ~1 minuto.", "Acompanhei os resultados com Python e Pandas. O sistema movimentou mais de R$ 1 milhão por mês."],
    technologies: ['Python', 'Pandas', 'Render Cloud', 'Git', 'API REST'] },
  { id: 'whatsapp', title: 'WhatsApp Chatbot', status: 'PoC | Jul 2025 a Nov 2025',
    description: 'Prova de conceito de um assistente de IA no WhatsApp, permitindo consultar informações em uma conversa, sem precisar acessar outra ferramenta.',
    contributions: ["Desenvolvi o backend em Python e FastAPI para receber e processar as mensagens do assistente.", "Integrei webhooks e envio de mensagens pela Z-API, conectando a aplicação ao WhatsApp.", "Orquestrei a lógica de agentes com LangGraph para organizar as etapas de cada interação.", "Integrei o modelo de linguagem via Ollama ao fluxo de geração de respostas.", "Implementei recuperação de contexto com RAG para apoiar respostas com conhecimento relevante."],
    technologies: ['Python', 'FastAPI', 'LangGraph', 'Ollama', 'Z-API'] },
];

export const beethere: Project = {
    id: 'beethere', title: 'BeeThere', status: 'Protótipo | Nov 2025 até atualmente',
    description: 'Aplicativo para facilitar encontros entre amigos. A proposta foi orientada por 42 entrevistas presenciais e 800 respostas de formulário.',
    contributions: [
      'Selecionado na 14ª edição do Campus Mobile, programa de aceleração de startups, feito pelo Instituto Claro e LSI-TEC (USP).',
      'Estruturei o modelo de negócio e o escopo com Canvas, TAP e one-page.',
      'Prototipei fluxos no Figma e desenvolvi o frontend em React/TypeScript.',
      'Produzi vídeos de apresentação com Claude e ElevenLabs.',
      'Apresentei a proposta de valor em pitches para investidores.',
      'Apresentei o projeto a estudantes de Design da UFCG no Sebrae.',
    ],
    technologies: ['React', 'TypeScript', 'Figma', 'Claude', 'ElevenLabs'],
};

export const teajudo: Project = {
  id: 'teajudo',
  title: 'TEAjudo',
  status: 'Protótipo | Nov 2024 a Ago 2025',
  description: 'Aplicativo pensado para conectar pais de crianças com TEA a profissionais de saúde e educação.',
  contributions: [
    'Selecionado na 13ª edição do Campus Mobile.',
    'Modelei a proposta de valor e o negócio com o Business Model Canvas.',
    'Desenvolvi em equipe o protótipo do aplicativo móvel no Figma, com foco em UX, diversidade e inclusão.',
    'Apresentei a proposta em um pitch criativo, exercitando comunicação e negociação.',
    'Trabalhei gestão de projetos, empreendedorismo e resolução de problemas durante o desenvolvimento do protótipo.',
  ],
  technologies: ['Figma'],
};
