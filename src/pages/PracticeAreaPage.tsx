import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Scale, Gavel, FileText, Building, Shield, Users, CheckCircle, Phone, BookOpen, AlertCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEO from "@/components/SEO";
import { useReveal } from "@/hooks/useReveal";
import NotFound from "@/pages/NotFound";
import heroBg from "@/assets/hero-bg.jpg";

const practiceAreas = {
  "direito-criminal": {
    icon: Gavel,
    title: "Direito Criminal",
    subtitle: "Defesa técnica especializada em processos criminais",
    description: `O Direito Criminal é uma das áreas mais sensíveis da advocacia, exigindo conhecimento técnico profundo e atuação estratégica para garantir os direitos fundamentais do acusado em todas as fases do processo.`,
    overview: `A atuação do escritório na seara penal é pautada na defesa técnica e estratégica dos interesses do cliente, abrangendo desde medidas urgentes voltadas à preservação da liberdade, como audiências de custódia, habeas corpus, pedidos de liberdade provisória e relaxamento de prisão, até o acompanhamento integral das ações penais, com a elaboração de peças processuais fundamentadas, participação em audiências e realização de sustentações orais.`,
    detailedOverview: `Com foco na obtenção dos melhores resultados, a atuação não se limita ao âmbito judicial. O escritório também acompanha e atua de forma ativa em procedimentos investigatórios que possam culminar na propositura de ação penal, realizando a instrução defensiva em inquéritos policiais e demais procedimentos de natureza penal.`,
    services: [
      "Atuação em sede de Delegacia de Polícia",
      "Prisão em flagrante com atendimento 24 horas",
      "Audiências de custódia",
      "Ações penais em geral",
      "Medidas protetivas de urgência",
      "Termos Circunstanciados de Ocorrência (TCO)",
      "Atuação no Juizado Especial Criminal (JECRIM)",
      "Crimes contra a vida, inclusive com atuação em Plenário do Tribunal do Júri",
      "Crimes contra a honra",
      "Acordo de Não Persecução Penal (ANPP)",
      "Crimes previstos na Lei de Drogas (Lei 11.343/2006)",
      "Crimes contra o patrimônio",
      "Crimes contra a dignidade sexual",
      "Execução penal",
      "Assistência de acusação na defesa dos direitos da vítima",
      "Habeas Corpus preventivo e liberatório",
      "Liberdade provisória",
      "Relaxamento de prisão",
      "Recursos criminais em todas as instâncias",
      "Revisão criminal",
    ],
    highlights: [
      "Atendimento 24h para casos urgentes",
      "Sigilo absoluto em todos os processos",
      "Experiência em casos complexos",
      "Acompanhamento personalizado",
      "Equipe especializada e experiente",
      "Atuação estratégica e fundamentada",
    ],
    processSteps: [
      {
        title: "Atendimento Inicial",
        description: "Análise detalhada do caso, coleta de documentos e informações essenciais para construir a estratégia de defesa.",
      },
      {
        title: "Fase Investigativa",
        description: "Acompanhamento em inquéritos policiais, depoimentos, apresentação de defesas prévias e pedidos de arquivamento quando cabível.",
      },
      {
        title: "Fase Processual",
        description: "Elaboração de defesas, alegações finais, recursos, participação em audiências e sustentações orais perante o Tribunal do Júri quando necessário.",
      },
      {
        title: "Recursos",
        description: "Interposição de recursos adequados em todas as instâncias, incluindo STJ e STF quando aplicável.",
      },
    ],
    whenToSeekHelp: [
      "Ao ser intimado para prestar depoimento em delegacia",
      "Em caso de prisão em flagrante ou preventiva",
      "Quando receber intimação de ação penal",
      "Para análise de Termo Circunstanciado de Ocorrência (TCO)",
      "Em caso de investigação policial",
      "Para negociação de Acordo de Não Persecução Penal (ANPP)",
      "Quando buscar progressão de regime ou livramento condicional",
      "Para análise de direitos em execução penal",
    ],
    specificCrimes: [
      {
        category: "Crimes contra a Vida",
        items: ["Homicídio simples e qualificado", "Feminicídio", "Induzimento, instigação ou auxílio a suicídio", "Infanticídio", "Atuação perante Tribunal do Júri"],
      },
      {
        category: "Crimes contra o Patrimônio",
        items: ["Furto simples e qualificado", "Roubo", "Extorsão", "Estelionato", "Apropriação indébita", "Receptação"],
      },
      {
        category: "Crimes contra a Dignidade Sexual",
        items: ["Estupro", "Assédio sexual", "Atentado violento ao pudor", "Importunação sexual"],
      },
      {
        category: "Crimes contra a Honra",
        items: ["Calúnia", "Difamação", "Injúria"],
      },
      {
        category: "Lei de Drogas",
        items: ["Tráfico de drogas", "Associação para o tráfico", "Porte de drogas para consumo pessoal"],
      },
      {
        category: "Crimes de Trânsito",
        items: ["Homicídio culposo no trânsito", "Lesão corporal culposa", "Embriaguez ao volante"],
      },
    ],
    legislation: [
      "Código Penal (Decreto-Lei nº 2.848/1940)",
      "Código de Processo Penal (Decreto-Lei nº 3.689/1941)",
      "Lei de Execução Penal (Lei nº 7.210/1984)",
      "Lei de Drogas (Lei nº 11.343/2006)",
      "Lei Maria da Penha (Lei nº 11.340/2006)",
      "Lei de Crimes Hediondos (Lei nº 8.072/1990)",
      "Constituição Federal de 1988",
    ],
  },
  "direito-civil": {
    icon: Scale,
    title: "Direito Civil",
    subtitle: "Soluções jurídicas para relações civis e patrimoniais",
    description: `O Direito Civil regula as relações jurídicas entre particulares, abrangendo obrigações, contratos e responsabilidade civil. Nossa atuação busca proteger seus direitos e oferecer soluções seguras e eficazes para conflitos do dia a dia.`,
    overview: `Oferecemos consultoria e representação em demandas civis, atuando de forma preventiva e contenciosa. Nosso objetivo é garantir segurança jurídica em contratos, obrigações e relações patrimoniais, sempre priorizando soluções rápidas e adequadas.`,
    detailedOverview: undefined,
    services: [
      "Elaboração e revisão de contratos civis e empresariais",
      "Responsabilidade civil e indenizações",
      "Cobranças judiciais e extrajudiciais",
      "Ações de despejo",
      "Usucapião e regularização de imóveis",
      "Questões obrigacionais e patrimoniais",
      "Defesa em ações indenizatórias",
    ],
    highlights: [
      "Análise detalhada de cada caso",
      "Busca por soluções consensuais",
      "Atuação preventiva e contenciosa",
      "Transparência nos honorários",
      "Mediação e conciliação",
      "Atendimento humanizado",
    ],
    processSteps: [
      {
        title: "Consulta Inicial",
        description: "Análise do caso, identificação dos direitos envolvidos e orientação sobre as possíveis soluções jurídicas.",
      },
      {
        title: "Tentativa de Acordo",
        description: "Quando possível, buscamos a resolução extrajudicial através de negociação, mediação ou conciliação.",
      },
      {
        title: "Ação Judicial",
        description: "Se necessário, ingressamos com a ação adequada, acompanhando todas as fases processuais até a solução definitiva.",
      },
      {
        title: "Recursos",
        description: "Interposição de recursos quando necessário para garantir os direitos do cliente.",
      },
    ],
    whenToSeekHelp: [
      "Para revisar ou elaborar contratos",
      "Em caso de inadimplência contratual",
      "Para cobrança de dívidas",
      "Em conflitos patrimoniais ou obrigacionais",
      "Em ações de responsabilidade civil por danos materiais ou morais",
      "Para regularização de imóveis",
    ],
    specificCrimes: undefined,
    legislation: [
      "Código Civil (Lei nº 10.406/2002)",
      "Lei de Locações (Lei nº 8.245/1991)",
    ],
  },
  "direito-de-familia-e-sucessoes": {
    icon: Scale,
    title: "Direito de Família e Sucessões",
    subtitle: "Soluções jurídicas para questões familiares e sucessórias",
    description: `O Direito de Família e das Sucessões trata das relações familiares e da transmissão de bens após o falecimento. Nossa atuação busca proteger os vínculos afetivos e patrimoniais, oferecendo suporte jurídico humanizado e eficaz.`,
    overview: `Atuamos em questões que envolvem vínculos familiares e sucessórios, com foco na proteção dos direitos dos envolvidos. Oferecemos assessoria preventiva e contenciosa, sempre com sensibilidade e respeito às particularidades de cada caso.`,
    detailedOverview: `Com experiência em conflitos familiares e sucessórios, prestamos consultoria para divórcios, guarda de filhos, pensão alimentícia, inventários e partilhas. Buscamos soluções consensuais sempre que possível, mas com firmeza na defesa dos interesses do cliente.`,
    services: [
      "Divórcio consensual e litigioso",
      "Guarda e regulamentação de visitas",
      "Pensão alimentícia",
      "Reconhecimento e dissolução de união estável",
      "Inventários e partilhas",
      "Testamentos e planejamento sucessório",
      "Investigação de paternidade",
      "Anulação de casamento",
      "Interdição e curatela",
      "Adoção",
      "Mediação familiar",
    ],
    highlights: [
      "Atendimento humanizado e sensível",
      "Busca por soluções consensuais",
      "Experiência em mediação familiar",
      "Respeito às particularidades de cada caso",
      "Atuação preventiva e contenciosa",
      "Transparência nos honorários",
    ],
    processSteps: [
      {
        title: "Consulta Inicial",
        description: "Análise do caso, identificação dos direitos envolvidos e orientação sobre as possíveis soluções jurídicas, sempre com sensibilidade às particularidades familiares.",
      },
      {
        title: "Tentativa de Acordo",
        description: "Buscamos sempre a resolução consensual através de negociação ou mediação familiar, preservando os vínculos quando possível.",
      },
      {
        title: "Ação Judicial",
        description: "Quando necessário, ingressamos com a ação adequada, defendendo os interesses do cliente com firmeza e respeito.",
      },
      {
        title: "Acompanhamento",
        description: "Acompanhamento completo do processo até a solução definitiva, garantindo que todos os direitos sejam respeitados.",
      },
    ],
    whenToSeekHelp: [
      "Em casos de separação ou divórcio",
      "Para definir guarda e pensão de filhos",
      "Para realizar inventário ou partilha de bens",
      "Para elaborar testamento ou planejamento sucessório",
      "Em conflitos familiares que exigem mediação",
      "Para reconhecimento de união estável ou adoção",
    ],
    specificCrimes: undefined,
    legislation: [
      "Código Civil (Lei nº 10.406/2002)",
      "Estatuto da Criança e do Adolescente (Lei nº 8.069/1990)",
      "Lei de Registros Públicos (Lei nº 6.015/1973)",
    ],
  },
  "direito-do-consumidor": {
    icon: Scale,
    title: "Direito do Consumidor",
    subtitle: "Proteção jurídica nas relações de consumo, incluindo planos de saúde",
    description: `O Direito do Consumidor regula as relações entre consumidores e fornecedores, garantindo equilíbrio e justiça nas transações comerciais. Nossa atuação é voltada para assegurar que seus direitos sejam respeitados, com atenção especial às demandas contra planos de saúde.`,
    overview: `Oferecemos suporte jurídico em conflitos de consumo, atuando tanto na prevenção quanto na solução de litígios. Nosso objetivo é proteger o consumidor contra abusos contratuais, cobranças indevidas e negativas de cobertura, especialmente em casos envolvendo saúde e bem-estar.`,
    detailedOverview: undefined,
    services: [
      "Defesa contra cobranças indevidas",
      "Ações por vício de produto ou serviço",
      "Cancelamento de contratos abusivos",
      "Indenizações por danos morais e materiais",
      "Problemas com instituições financeiras",
      "Negativação indevida do nome",
      "Revisão de cláusulas contratuais",
      "Ações contra planos de saúde por negativa de cobertura",
      "Demandas por fornecimento de medicamentos e tratamentos",
      "Defesa contra reajustes abusivos de mensalidades de planos de saúde",
      "Reclamações por má prestação de serviços",
      "Consultoria preventiva em relações de consumo",
    ],
    highlights: [
      "Especialização em planos de saúde",
      "Proteção completa dos direitos do consumidor",
      "Atuação preventiva e contenciosa",
      "Transparência nos honorários",
      "Agilidade no atendimento",
      "Atendimento humanizado",
    ],
    processSteps: [
      {
        title: "Análise do Caso",
        description: "Avaliação detalhada do conflito de consumo, identificação de violações aos direitos do consumidor e análise das melhores estratégias de defesa.",
      },
      {
        title: "Tentativa Extrajudicial",
        description: "Quando possível, buscamos a resolução através de reclamações junto aos órgãos de defesa do consumidor ou negociação direta.",
      },
      {
        title: "Ação Judicial",
        description: "Se necessário, ingressamos com ação adequada, utilizando os mecanismos do Código de Defesa do Consumidor para proteger seus direitos.",
      },
      {
        title: "Acompanhamento",
        description: "Acompanhamento completo do processo até a solução definitiva, garantindo a efetivação dos direitos do consumidor.",
      },
    ],
    whenToSeekHelp: [
      "Ao sofrer cobrança indevida",
      "Em caso de produto com defeito ou serviço mal prestado",
      "Quando houver cláusulas abusivas em contratos",
      "Se seu nome for negativado indevidamente",
      "Em conflitos com bancos, seguradoras ou prestadores de serviços",
      "Quando o plano de saúde negar atendimento ou cobertura de procedimentos",
      "Em caso de reajuste abusivo da mensalidade do plano de saúde",
      "Para garantir internações, cirurgias ou exames essenciais",
      "Para buscar indenização por danos morais ou materiais",
    ],
    specificCrimes: undefined,
    legislation: [
      "Código de Defesa do Consumidor (Lei nº 8.078/1990)",
      "Código Civil (Lei nº 10.406/2002)",
      "Lei dos Planos de Saúde (Lei nº 9.656/1998)",
      "Lei Geral de Proteção de Dados (Lei nº 13.709/2018)",
    ],
  },
  "cumprimento-de-pena": {
    icon: FileText,
    title: "Cumprimento de Pena",
    subtitle: "Assistência jurídica na execução penal",
    description: `A execução penal é uma fase crucial que demanda acompanhamento especializado para garantir os direitos do apenado e buscar os benefícios previstos em lei, como progressão de regime e livramento condicional.`,
    overview: `Oferecemos assistência completa durante o cumprimento da pena, acompanhando o processo de execução e pleiteando todos os direitos e benefícios que o cliente faz jus conforme a legislação vigente.`,
    detailedOverview: `A Lei de Execução Penal (LEP) garante diversos direitos ao condenado, incluindo a progressão de regime, livramento condicional, remição de pena e outros benefícios. Nossa atuação visa garantir que todos esses direitos sejam efetivados no momento oportuno, sempre respeitando os prazos legais e os requisitos previstos na legislação.`,
    services: [
      "Progressão de regime (fechado, semiaberto, aberto)",
      "Livramento condicional",
      "Indulto e comutação de pena",
      "Remição de pena por trabalho ou estudo",
      "Saídas temporárias",
      "Unificação de penas",
      "Detração penal",
      "Recursos em execução penal",
      "Sursis e suspensão condicional da pena",
      "Prestação de serviços à comunidade",
      "Análise de benefícios e direitos",
      "Acompanhamento de requisitos legais",
    ],
    highlights: [
      "Acompanhamento contínuo do processo",
      "Visitas em unidades prisionais",
      "Atendimento aos familiares",
      "Conhecimento profundo da LEP",
      "Garantia de direitos",
      "Atuação em todas as fases",
    ],
    processSteps: [
      {
        title: "Análise do Caso",
        description: "Verificação dos requisitos legais, cálculo de pena, análise de antecedentes e condições para obtenção de benefícios.",
      },
      {
        title: "Preparação da Petição",
        description: "Elaboração de peças processuais fundamentadas com toda a documentação necessária e requisitos legais.",
      },
      {
        title: "Acompanhamento Processual",
        description: "Acompanhamento de todas as fases do processo de execução, desde a petição inicial até a decisão final.",
      },
      {
        title: "Recursos",
        description: "Interposição de recursos quando necessário para garantir os direitos do cliente.",
      },
    ],
    whenToSeekHelp: [
      "Ao completar tempo necessário para progressão",
      "Para análise de requisitos de livramento condicional",
      "Para solicitar remição de pena",
      "Em caso de violação de direitos",
      "Para unificação de penas",
      "Para cálculo de detração penal",
      "Ao buscar indulto ou comutação",
      "Para orientação sobre direitos na execução",
    ],
    specificCrimes: undefined,
    legislation: [
      "Lei de Execução Penal (Lei nº 7.210/1984)",
      "Código Penal (Decreto-Lei nº 2.848/1940)",
      "Código de Processo Penal (Decreto-Lei nº 3.689/1941)",
      "Constituição Federal de 1988",
    ],
  },
  "tribunais-superiores": {
    icon: Building,
    title: "Tribunais Superiores",
    subtitle: "Recursos e atuação em STF, STJ e tribunais estaduais",
    description: `A atuação em tribunais superiores exige conhecimento aprofundado da jurisprudência e técnica recursal refinada para reverter decisões desfavoráveis ou consolidar entendimentos favoráveis ao cliente.`,
    overview: `Atuamos em recursos especiais, extraordinários e outras espécies recursais perante os tribunais superiores, buscando a reforma de decisões e a garantia dos direitos dos nossos clientes nas mais altas instâncias do Judiciário.`,
    detailedOverview: `A atuação perante o Superior Tribunal de Justiça (STJ) e o Supremo Tribunal Federal (STF) requer conhecimento especializado em técnica recursal, análise detalhada de jurisprudência e capacidade de argumentação refinada. Elaboramos recursos fundamentados que demonstram violação de lei federal ou de dispositivo constitucional, sempre alinhados à jurisprudência dos tribunais superiores.`,
    services: [
      "Recursos Especiais (STJ)",
      "Recursos Extraordinários (STF)",
      "Habeas Corpus em tribunais superiores",
      "Reclamações constitucionais",
      "Embargos de divergência",
      "Ações originárias",
      "Mandados de segurança",
      "Agravos em recursos especiais e extraordinários",
      "Sustentações orais",
      "Análise de repercussão geral e recursos repetitivos",
      "Assessoria em casos complexos",
    ],
    highlights: [
      "Expertise em técnica recursal",
      "Conhecimento da jurisprudência",
      "Acompanhamento processual detalhado",
      "Sustentações orais",
      "Análise de precedentes",
      "Argumentação fundamentada",
    ],
    processSteps: [
      {
        title: "Análise da Decisão",
        description: "Estudo detalhado da decisão recorrida, identificação de vícios, violações de lei federal ou constitucional, e análise da jurisprudência.",
      },
      {
        title: "Elaboração do Recurso",
        description: "Preparação de recurso fundamentado, demonstrando o cabimento e a violação alegada, sempre alinhado à jurisprudência dos tribunais superiores.",
      },
      {
        title: "Sustentação Oral",
        description: "Quando cabível, realização de sustentações orais para reforçar os argumentos e responder a questionamentos dos ministros.",
      },
      {
        title: "Acompanhamento",
        description: "Acompanhamento de todo o trâmite processual até a decisão final, incluindo eventuais embargos de declaração ou outros recursos.",
      },
    ],
    whenToSeekHelp: [
      "Quando houver violação de lei federal (para STJ)",
      "Em caso de violação constitucional (para STF)",
      "Quando a decisão for contrária à jurisprudência",
      "Para análise de cabimento de recurso",
      "Em casos complexos que exigem expertise recursal",
      "Para assessoria em recursos especiais ou extraordinários",
    ],
    specificCrimes: undefined,
    legislation: [
      "Código de Processo Civil (Lei nº 13.105/2015)",
      "Código de Processo Penal (Decreto-Lei nº 3.689/1941)",
      "Regimento Interno do STF",
      "Regimento Interno do STJ",
      "Constituição Federal de 1988",
    ],
  },
  "delegacia-de-policia": {
    icon: Shield,
    title: "Delegacia de Polícia",
    subtitle: "Orientação e acompanhamento em procedimentos policiais",
    description: `O acompanhamento por advogado em delegacias é um direito fundamental que garante a proteção contra abusos e orienta o cliente sobre como proceder durante depoimentos e outros procedimentos investigativos.`,
    overview: `Oferecemos acompanhamento em todas as fases da investigação policial, desde o registro de ocorrência até o encerramento do inquérito, garantindo que os direitos do cliente sejam respeitados em todos os momentos.`,
    detailedOverview: `A presença do advogado em procedimentos policiais é essencial para garantir o respeito aos direitos fundamentais do investigado, incluindo o direito ao silêncio, à não autoincriminação e à ampla defesa. Atuamos preventivamente para evitar que abusos ocorram e para garantir que todas as provas sejam produzidas dentro da legalidade.`,
    services: [
      "Acompanhamento em depoimentos",
      "Orientação sobre direitos do investigado",
      "Pedidos de relaxamento de prisão",
      "Acompanhamento em flagrantes",
      "Representação em termos circunstanciados (TCO)",
      "Pedidos de arquivamento de inquérito",
      "Defesa em inquéritos policiais",
      "Orientação preventiva",
      "Atendimento em prisão em flagrante",
      "Audiências de custódia",
      "Solicitação de liberdade provisória",
      "Protesto por nulidades em procedimentos policiais",
    ],
    highlights: [
      "Atendimento de urgência 24h",
      "Presença imediata em delegacias",
      "Proteção dos direitos fundamentais",
      "Orientação clara e objetiva",
      "Experiência em procedimentos policiais",
      "Conhecimento profundo do CPP",
    ],
    processSteps: [
      {
        title: "Atendimento Imediato",
        description: "Presença imediata na delegacia quando o cliente é conduzido ou intimado para depoimento.",
      },
      {
        title: "Orientação Prévia",
        description: "Explicação detalhada dos direitos, do procedimento e das melhores estratégias de defesa.",
      },
      {
        title: "Acompanhamento",
        description: "Presença durante todo o procedimento para garantir o respeito aos direitos e evitar abusos.",
      },
      {
        title: "Ações Defensivas",
        description: "Apresentação de defesas prévias, pedidos de arquivamento, relaxamento de prisão quando cabível.",
      },
    ],
    whenToSeekHelp: [
      "Ao ser intimado para prestar depoimento",
      "Em caso de prisão em flagrante",
      "Quando for alvo de investigação policial",
      "Para análise de Termo Circunstanciado de Ocorrência",
      "Antes de qualquer procedimento policial",
      "Em caso de condução coercitiva",
      "Para orientação preventiva sobre direitos",
    ],
    specificCrimes: undefined,
    legislation: [
      "Código de Processo Penal (Decreto-Lei nº 3.689/1941)",
      "Lei das Contravenções Penais (Decreto-Lei nº 3.688/1941)",
      "Constituição Federal de 1988",
      "Lei nº 9.099/1995 (Juizados Especiais Criminais)",
    ],
  },
  "direito-trabalhista": {
    icon: Users,
    title: "Direito Trabalhista",
    subtitle: "Defesa dos direitos do trabalhador",
    description: `O Direito Trabalhista protege os direitos dos trabalhadores nas relações de emprego, garantindo o cumprimento da legislação e a reparação de eventuais violações por parte dos empregadores.`,
    overview: `Atuamos na defesa dos direitos trabalhistas, tanto na esfera judicial quanto extrajudicial, buscando sempre a melhor solução para o trabalhador, seja através de acordo ou de decisão judicial favorável.`,
    detailedOverview: `Com conhecimento atualizado da CLT e da jurisprudência trabalhista, oferecemos assessoria completa para garantir todos os direitos do trabalhador, incluindo verbas rescisórias, horas extras, adicionais, férias proporcionais e indenizações por danos morais. Buscamos sempre a melhor estratégia, priorizando acordos quando vantajosos para o trabalhador.`,
    services: [
      "Reclamações trabalhistas",
      "Verbas rescisórias",
      "Horas extras e adicionais",
      "Danos morais no trabalho",
      "Assédio moral e sexual",
      "Acidente de trabalho",
      "Estabilidades e garantias de emprego",
      "Acordos trabalhistas",
      "FGTS e multas",
      "13º salário",
      "Férias proporcionais",
      "Equiparação salarial",
      "Adicional de insalubridade e periculosidade",
      "Trabalho noturno",
    ],
    highlights: [
      "Análise gratuita do caso",
      "Cálculo detalhado das verbas",
      "Busca por acordos vantajosos",
      "Acompanhamento até o final",
      "Conhecimento atualizado da legislação",
      "Atendimento humanizado",
    ],
    processSteps: [
      {
        title: "Análise do Caso",
        description: "Análise detalhada da relação de trabalho, identificação de direitos violados e cálculo preciso de todas as verbas devidas.",
      },
      {
        title: "Tentativa de Acordo",
        description: "Busca de acordo extrajudicial quando vantajoso para o trabalhador, sempre com transparência sobre os valores envolvidos.",
      },
      {
        title: "Ação Trabalhista",
        description: "Ingresso com reclamação trabalhista quando necessário, acompanhando todas as fases até a solução definitiva.",
      },
      {
        title: "Execução",
        description: "Execução da sentença favorável para garantir o recebimento de todas as verbas devidas.",
      },
    ],
    whenToSeekHelp: [
      "Ao ser demitido sem receber todas as verbas",
      "Quando houver atraso no pagamento de salários",
      "Para cálculo de verbas rescisórias",
      "Em caso de assédio moral ou sexual",
      "Após acidente de trabalho",
      "Para análise de horas extras não pagas",
      "Quando houver descumprimento de direitos",
      "Para negociação de acordo trabalhista",
    ],
    specificCrimes: undefined,
    legislation: [
      "Consolidação das Leis do Trabalho (CLT - Decreto-Lei nº 5.452/1943)",
      "Constituição Federal de 1988",
      "Código de Processo do Trabalho (Lei nº 13.105/2015)",
      "Lei do Trabalho Doméstico (Lei nº 5.859/1972)",
    ],
  },
};

const PracticeAreaPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { ref: contentRef, isRevealed: contentRevealed } = useReveal(0.1);

  const area = slug ? practiceAreas[slug as keyof typeof practiceAreas] : null;

  if (!area) {
    return <NotFound />;
  }

  const Icon = area.icon;

  return (
    <main className="min-h-screen bg-background">
      <SEO 
        canonical={`/areas/${slug}`}
        title={`${area.title} - Dr. Junialisson Costa | Advocacia Especializada`}
        description={area.description || area.subtitle}
        keywords={`${area.title}, advogado ${area.title.toLowerCase()}, ${area.title.toLowerCase()} Salvador, advogado criminalista, advogado civil, advogado trabalhista, Dr. Junialisson Costa`}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 z-0 bg-background/95" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          {/* Back button */}
          <button
            onClick={() => {
              navigate('/#areas');
            }}
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Voltar às áreas de atuação
          </button>

          <div className="max-w-3xl">
            {/* Icon */}
            <div className="w-16 h-16 mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Icon className="w-8 h-8 text-primary" />
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">
              {area.title}
            </h1>
            
            <p className="text-xl text-primary font-medium mb-6">
              {area.subtitle}
            </p>
            
            <p className="text-foreground/65 text-lg leading-relaxed">
              {area.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="py-16 lg:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className={`lg:col-span-2 space-y-12 reveal ${contentRevealed ? 'revealed' : ''}`}>
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Visão Geral
                </h2>
                <div className="space-y-4 text-foreground/65 leading-relaxed">
                  <p>{area.overview}</p>
                  {area.detailedOverview && (
                    <p>{area.detailedOverview}</p>
                  )}
                </div>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
                  Serviços Oferecidos
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {area.services.map((service, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/30 hover:border-primary/30 transition-colors"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/75 text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specific Crimes (for criminal law) */}
              {area.specificCrimes && area.specificCrimes.length > 0 && (
                <div>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
                    Tipos de Crimes Atendidos
                  </h2>
                  <div className="space-y-4">
                    {area.specificCrimes.map((crimeGroup, index) => (
                      <div 
                        key={index}
                        className="card-elevated rounded-xl p-6"
                      >
                        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                          <Gavel className="w-5 h-5 text-primary" />
                          {crimeGroup.category}
                        </h3>
                        <ul className="grid sm:grid-cols-2 gap-3">
                          {crimeGroup.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span className="text-foreground/70 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* When to Seek Help */}
              {area.whenToSeekHelp && area.whenToSeekHelp.length > 0 && (
                <div>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-6 flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-primary" />
                    Quando Procurar Nossa Ajuda
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {area.whenToSeekHelp.map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/30"
                      >
                        <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/75 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Legislation */}
              {area.legislation && area.legislation.length > 0 && (
                <div>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-6 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-primary" />
                    Legislação Aplicável
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {area.legislation.map((law, index) => (
                      <div 
                        key={index}
                        className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/30"
                      >
                        <BookOpen className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/70 text-sm">{law}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className={`space-y-8 reveal delay-200 ${contentRevealed ? 'revealed' : ''}`}>
              {/* Highlights Card */}
              <div className="card-elevated rounded-2xl p-6 lg:p-8">
                <h3 className="text-lg font-serif font-semibold text-foreground mb-5">
                  Nossos Diferenciais
                </h3>
                <ul className="space-y-4">
                  {area.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground/70 text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Card */}
              <div className="card-elevated rounded-2xl p-6 lg:p-8 border border-primary/20">
                <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                  Precisa de ajuda?
                </h3>
                <p className="text-foreground/60 text-sm mb-6">
                  Entre em contato para uma consulta sobre o seu caso específico.
                </p>
                
                <div className="space-y-3">
                  <Button variant="gold" className="w-full" asChild>
                    <a href="/#contato">
                      Falar com Advogado
                    </a>
                  </Button>
                  
                  <a 
                    href="tel:+5571997071372"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-border/50 text-foreground/70 hover:border-primary/50 hover:text-foreground transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    (71) 99707-1372
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default PracticeAreaPage;


