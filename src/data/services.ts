import { Scale } from "lucide-react";

export interface Service {
  id: string;
  icon: typeof Scale;
  text: string;
  slug?: string; // Se tiver slug, é uma página principal
  description?: string; // Para modais
  details?: string[]; // Para modais
}

// Serviços principais (terão páginas próprias)
export const mainServices: Service[] = [
  {
    id: "delegacia",
    icon: Scale,
    text: "Atuação em Sede de Delegacia",
    slug: "sede-de-delegacia",
  },
  {
    id: "prisao-flagrante",
    icon: Scale,
    text: "Prisão em flagrante",
    slug: "prisao-em-flagrante",
  },
  {
    id: "audiencia-custodia",
    icon: Scale,
    text: "Audiências de custódia",
    slug: "audiencia-de-custodia",
  },
  {
    id: "crimes-vida",
    icon: Scale,
    text: "Crimes contra a vida, inclusive com atuação em Plenário do Tribunal do Júri",
    slug: "crimes-contra-a-vida",
  },
  {
    id: "execucao-penal",
    icon: Scale,
    text: "Execução penal",
    slug: "execucao-penal",
  },
  {
    id: "tco",
    icon: Scale,
    text: "Termos Circunstanciados de Ocorrência (TCO)",
    slug: "termo-circunstanciado-tco",
  },
  {
    id: "habeas-corpus",
    icon: Scale,
    text: "Habeas Corpus",
    slug: "habeas-corpus",
  },
];

// Nota: Habeas Corpus foi adicionado como 7º serviço principal

// Serviços secundários (agora também terão páginas próprias)
export const secondaryServices: Service[] = [
  {
    id: "acoes-penais",
    icon: Scale,
    text: "Ações penais em geral",
    slug: "acoes-penais-em-geral",
    description: "Acompanhamento completo de ações penais em todas as instâncias",
    details: [
      "Elaboração de defesas prévias e defesas finais",
      "Participação em audiências de instrução e julgamento",
      "Interposição de recursos adequados",
      "Sustentações orais perante os tribunais",
      "Análise técnica de provas e documentos",
    ],
  },
  {
    id: "medidas-protetivas",
    icon: Scale,
    text: "Medidas protetivas de urgência",
    slug: "medidas-protetivas-de-urgencia",
    description: "Atuação imediata para garantir proteção e direitos fundamentais",
    details: [
      "Pedidos de medidas cautelares",
      "Habeas corpus preventivo",
      "Suspensão de processos",
      "Proteção de direitos fundamentais",
    ],
  },
  {
    id: "jecrim",
    icon: Scale,
    text: "Atuação no Juizado Especial Criminal (JECRIM)",
    slug: "juizado-especial-criminal-jecrim",
    description: "Representação em processos de menor potencial ofensivo",
    details: [
      "Crimes de menor potencial ofensivo",
      "Transação penal",
      "Suspensão condicional do processo",
      "Composição civil",
    ],
  },
  {
    id: "crimes-honra",
    icon: Scale,
    text: "Crimes contra a honra",
    slug: "crimes-contra-a-honra",
    description: "Defesa em casos de calúnia, difamação e injúria",
    details: [
      "Calúnia",
      "Difamação",
      "Injúria",
      "Defesa da honra e imagem",
    ],
  },
  {
    id: "anpp",
    icon: Scale,
    text: "Acordo de Não Persecução Penal (ANPP)",
    slug: "acordo-de-nao-persecucao-penal-anpp",
    description: "Negociação de acordos para evitar a ação penal",
    details: [
      "Análise da viabilidade do acordo",
      "Negociação com o Ministério Público",
      "Elaboração de termos de compromisso",
      "Acompanhamento do cumprimento",
    ],
  },
  {
    id: "lei-drogas",
    icon: Scale,
    text: "Crimes previstos na Lei de Drogas",
    slug: "crimes-lei-de-drogas",
    description: "Defesa especializada em casos relacionados à Lei 11.343/2006",
    details: [
      "Tráfico de drogas",
      "Associação para o tráfico",
      "Porte de drogas para consumo pessoal",
      "Defesa técnica especializada",
    ],
  },
  {
    id: "crimes-patrimonio",
    icon: Scale,
    text: "Crimes contra o patrimônio",
    slug: "crimes-contra-o-patrimonio",
    description: "Defesa em casos de crimes patrimoniais",
    details: [
      "Furto e roubo",
      "Estelionato",
      "Apropriação indébita",
      "Receptação",
    ],
  },
  {
    id: "crimes-sexual",
    icon: Scale,
    text: "Crimes contra a dignidade sexual",
    slug: "crimes-contra-a-dignidade-sexual",
    description: "Defesa técnica especializada em casos sensíveis",
    details: [
      "Estupro",
      "Assédio sexual",
      "Atentado violento ao pudor",
      "Importunação sexual",
    ],
  },
  {
    id: "assistencia-acusacao",
    icon: Scale,
    text: "Assistência de acusação na defesa dos direitos da vítima",
    slug: "assistencia-de-acusacao",
    description: "Representação da vítima em processos criminais",
    details: [
      "Atuação como assistente de acusação",
      "Defesa dos direitos da vítima",
      "Acompanhamento processual",
      "Busca de reparação de danos",
    ],
  },
  {
    id: "violencia-domestica",
    icon: Scale,
    text: "Crimes envolvendo violência doméstica",
    slug: "crimes-contra-violencia-domestica",
    description: "Atuação em casos de violência doméstica e familiar",
    details: [
      "Defesa técnica em casos de violência doméstica",
      "Acompanhamento em medidas protetivas",
      "Atuação na Lei Maria da Penha",
      "Defesa dos direitos das vítimas",
    ],
  },
  {
    id: "outros-procedimentos",
    icon: Scale,
    text: "Outros procedimentos de natureza penal",
    slug: "outros-procedimentos-de-natureza-penal",
    description: "Atuação em diversos procedimentos penais",
    details: [
      "Inquéritos policiais",
      "Procedimentos investigatórios",
      "Recursos em todas as instâncias",
      "Revisão criminal",
    ],
  },
];

// Todos os serviços combinados
export const allServices: Service[] = [...mainServices, ...secondaryServices];

