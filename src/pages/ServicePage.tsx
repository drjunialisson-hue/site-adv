import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEO from "@/components/SEO";
import { useReveal } from "@/hooks/useReveal";
import NotFound from "@/pages/NotFound";
import { allServices } from "@/data/services";
import heroBg from "@/assets/hero-bg.jpg";

const serviceData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  details: string[];
  whenToSeekHelp: string[];
  processSteps: { title: string; description: string }[];
}> = {
  "sede-de-delegacia": {
    title: "Atuação em Sede de Delegacia",
    subtitle: "Defesa técnica desde a fase investigatória",
    description: "A atuação em sede de Delegacia de Polícia é fundamental para garantir os direitos do investigado desde o início do procedimento investigatório, antes mesmo da propositura de ação penal.",
    overview: "A atuação jurídica na Delegacia é essencial desde os primeiros atos conduzidos pela autoridade policial. A presença do advogado nesse momento inicial garante o respeito aos direitos e às garantias legais do cliente, prevenindo irregularidades e assegurando segurança jurídica desde o início do procedimento. Nosso trabalho inclui acompanhamento no registro de Boletim de Ocorrência, lavratura de Termo Circunstanciado de Ocorrência (TCO), além de assistência técnica durante oitivas, depoimentos e demais atos realizados na Delegacia. Também oferecemos orientação jurídica clara e estratégica sobre direitos, deveres e possíveis consequências de cada ato, seja na condição de investigado, conduzido, vítima ou testemunha. Atuamos de forma preventiva e técnica para evitar abusos, constrangimentos ilegais e nulidades, acompanhando de perto o procedimento policial e garantindo que todos os atos sejam praticados em conformidade com a legislação vigente. A presença do advogado na Delegacia é uma etapa fundamental para proteger os interesses do cliente e construir uma defesa sólida desde o primeiro contato com o sistema de persecução penal.",
    details: [
      "Acompanhamento em depoimentos policiais",
      "Elaboração de defesas prévias fundamentadas",
      "Pedidos de arquivamento de inquéritos",
      "Orientação sobre direitos e garantias",
      "Análise de provas e documentos",
      "Comunicação constante com o cliente",
    ],
    whenToSeekHelp: [
      "Ao ser intimado para prestar depoimento",
      "Quando souber que está sendo investigado",
      "Em caso de busca e apreensão",
      "Para análise de provas coletadas",
      "Antes de qualquer medida coercitiva",
    ],
    processSteps: [
      {
        title: "Atendimento Imediato",
        description: "Contato imediato após a intimação ou conhecimento da investigação, análise preliminar do caso e orientação sobre os próximos passos.",
      },
      {
        title: "Acompanhamento no Inquérito",
        description: "Presença em todos os atos investigatórios, elaboração de defesas prévias e pedidos de medidas necessárias à defesa.",
      },
      {
        title: "Análise de Provas",
        description: "Exame detalhado de todas as provas coletadas, identificação de vícios e irregularidades, e preparação de contraprovas quando necessário.",
      },
      {
        title: "Pedido de Arquivamento",
        description: "Quando cabível, elaboração de pedido fundamentado de arquivamento do inquérito, evitando a propositura de ação penal.",
      },
    ],
  },
  "prisao-em-flagrante": {
    title: "Prisão em Flagrante com Atendimento 24 horas",
    subtitle: "Atendimento imediato para preservação da liberdade",
    description: "A prisão em flagrante é uma situação de extrema urgência que exige atuação imediata e especializada para garantir os direitos fundamentais do preso e buscar a liberdade provisória.",
    overview: "A prisão em flagrante é uma situação de extrema urgência que exige resposta imediata para assegurar o respeito aos direitos fundamentais do preso. Prestamos atendimento 24 horas especificamente para casos de prisão em flagrante, com presença imediata na delegacia, acompanhamento durante o auto de prisão, orientação clara sobre os direitos do preso e atuação técnica voltada a garantir que o procedimento seja realizado de forma legal e justa.",
    details: [
      "Atendimento 24 horas, incluindo finais de semana e feriados",
      "Presença imediata na delegacia",
      "Orientação completa sobre direitos do preso",
      "Elaboração de pedido de liberdade provisória",
      "Pedido de relaxamento de prisão quando ilegal",
      "Acompanhamento em audiência de custódia",
    ],
    whenToSeekHelp: [
      "Imediatamente após a prisão em flagrante",
      "Ao ser informado sobre a prisão de familiar",
      "Antes da audiência de custódia",
      "Para análise da legalidade da prisão",
    ],
    processSteps: [
      {
        title: "Atendimento Imediato",
        description: "Contato imediato após a prisão, deslocamento para a delegacia e primeiro contato com o preso para orientação sobre seus direitos.",
      },
      {
        title: "Análise da Legalidade",
        description: "Verificação dos requisitos legais da prisão em flagrante, identificação de vícios e irregularidades que possam fundamentar o relaxamento.",
      },
      {
        title: "Elaboração de Pedidos",
        description: "Preparação de pedido de liberdade provisória ou relaxamento da prisão, com fundamentação técnica adequada.",
      },
      {
        title: "Audiência de Custódia",
        description: "Participação na audiência de custódia, apresentação de argumentos e defesa técnica para busca da liberdade.",
      },
    ],
  },
  "audiencia-de-custodia": {
    title: "Audiências de Custódia",
    subtitle: "Garantia de direitos fundamentais do preso",
    description: "A audiência de custódia é um direito fundamental garantido pela Constituição Federal, realizada em até 24 horas após a prisão, com o objetivo de verificar a legalidade da prisão e decidir sobre a liberdade provisória.",
    overview: "A audiência de custódia deve ocorrer em até 24 horas após a prisão, sendo o momento em que o juiz avalia a legalidade da detenção e decide se o preso permanecerá custodiado ou se poderá responder em liberdade, com ou sem medidas cautelares. Nossa atuação é imediata e especializada: acompanhamos o cliente desde o início, verificamos a regularidade da prisão, apresentamos defesa técnica consistente e buscamos assegurar que todos os direitos fundamentais sejam respeitados.",
    details: [
      "Análise prévia da legalidade da prisão",
      "Elaboração de defesa fundamentada",
      "Apresentação de argumentos orais",
      "Pedido de liberdade provisória",
      "Pedido de relaxamento quando ilegal",
      "Garantia de direitos do preso",
    ],
    whenToSeekHelp: [
      "Antes da audiência de custódia",
      "Imediatamente após a prisão",
      "Para preparação da defesa",
      "Quando a prisão for ilegal",
    ],
    processSteps: [
      {
        title: "Preparação Prévia",
        description: "Análise do caso, coleta de informações, preparação de argumentos e estratégia de defesa antes da audiência.",
      },
      {
        title: "Participação na Audiência",
        description: "Presença na audiência, apresentação de defesa técnica, argumentação oral e defesa dos direitos do preso.",
      },
      {
        title: "Decisão Judicial",
        description: "Acompanhamento da decisão do juiz, análise das condições impostas e orientação sobre os próximos passos.",
      },
      {
        title: "Recursos se Necessário",
        description: "Interposição de recursos adequados caso a liberdade seja negada indevidamente.",
      },
    ],
  },
  "crimes-contra-a-vida": {
    title: "Crimes contra a Vida - Tribunal do Júri",
    subtitle: "Defesa especializada em casos de maior complexidade",
    description: "Os crimes contra a vida, especialmente homicídios, são julgados pelo Tribunal do Júri, um procedimento especial que exige conhecimento técnico profundo e experiência em sustentações orais perante o conselho de sentença.",
    overview: "Os crimes contra a vida, como homicídios simples, qualificados e feminicídios, são julgados pelo Tribunal do Júri, um procedimento especial que exige preparo técnico e experiência em debates orais perante o conselho de sentença. Nossa atuação é especializada e estratégica: acompanhamos todo o processo, elaboramos teses defensivas consistentes, conduzimos a produção de provas e realizamos debates orais fundamentados, sempre com foco na proteção dos direitos do cliente e na construção de uma defesa sólida.",
    details: [
      "Defesa em homicídio simples e qualificado",
      "Atuação em casos de feminicídio",
      "Sustentações orais perante o Tribunal do Júri",
      "Elaboração de alegações finais",
      "Análise técnica de provas periciais",
      "Recursos em todas as instâncias",
    ],
    whenToSeekHelp: [
      "Ao ser acusado de crime contra a vida",
      "Quando receber denúncia por homicídio",
      "Para análise de provas periciais",
      "Antes do julgamento pelo Júri",
    ],
    processSteps: [
      {
        title: "Análise do Caso",
        description: "Estudo detalhado de todas as provas, perícias, depoimentos e documentos, identificação de pontos favoráveis à defesa.",
      },
      {
        title: "Preparação para o Júri",
        description: "Elaboração de estratégia de defesa, preparação de alegações finais e ensaio de sustentação oral.",
      },
      {
        title: "Julgamento pelo Júri",
        description: "Participação em todas as fases do julgamento, sustentações orais perante o conselho de sentença e defesa técnica completa.",
      },
      {
        title: "Recursos",
        description: "Interposição de recursos adequados em caso de condenação, buscando a reforma da decisão em instâncias superiores.",
      },
    ],
  },
  "execucao-penal": {
    title: "Execução Penal",
    subtitle: "Garantia de direitos durante o cumprimento da pena",
    description: "A execução penal é a fase posterior à condenação, onde são garantidos os direitos do condenado, como progressão de regime, livramento condicional, remissão de pena e outros benefícios previstos na Lei de Execução Penal.",
    overview: "Atuamos na execução penal com foco na garantia dos direitos do condenado, buscando progressão de regime, livramento condicional, remissão de pena, e demais benefícios legais. Também defendemos contra medidas disciplinares indevidas e garantimos condições adequadas de cumprimento da pena.",
    details: [
      "Progressão de regime prisional",
      "Livramento condicional",
      "Remissão e comutação de pena",
      "Análise de cálculo de pena",
      "Defesa em procedimentos disciplinares",
      "Garantia de direitos do preso",
    ],
    whenToSeekHelp: [
      "Ao iniciar o cumprimento da pena",
      "Para buscar progressão de regime",
      "Quando tiver direito a livramento condicional",
      "Em caso de medidas disciplinares",
      "Para análise de cálculo de pena",
    ],
    processSteps: [
      {
        title: "Análise do Processo",
        description: "Exame do processo de execução, verificação de direitos, análise de cálculo de pena e identificação de benefícios possíveis.",
      },
      {
        title: "Elaboração de Pedidos",
        description: "Preparação de pedidos fundamentados para progressão, livramento, remissão ou outros benefícios legais.",
      },
      {
        title: "Acompanhamento",
        description: "Acompanhamento dos pedidos, participação em audiências e defesa técnica em procedimentos disciplinares.",
      },
      {
        title: "Recursos",
        description: "Interposição de recursos quando necessário para garantir os direitos do condenado.",
      },
    ],
  },
  "termo-circunstanciado-tco": {
    title: "Termo Circunstanciado de Ocorrência (TCO)",
    subtitle: "Defesa em crimes de menor potencial ofensivo",
    description: "O Termo Circunstanciado de Ocorrência (TCO) é aplicado a crimes de menor potencial ofensivo, permitindo a resolução do caso através de transação penal ou suspensão condicional do processo, sem a necessidade de ação penal formal.",
    overview: "O Termo Circunstanciado de Ocorrência (TCO) é utilizado em casos de menor potencial ofensivo, como delitos leves, e substitui a instauração de inquérito policial. Nessa fase, o acompanhamento jurídico é essencial para garantir que o procedimento seja conduzido corretamente e para orientar o cliente sobre as alternativas disponíveis. Nossa atuação é voltada a oferecer defesa técnica especializada, analisando o TCO e a acusação, negociando soluções como transação penal ou suspensão condicional do processo, e assegurando que os direitos do cliente sejam respeitados em todas as etapas.",
    details: [
      "Análise do TCO e da acusação",
      "Negociação de transação penal",
      "Suspensão condicional do processo",
      "Defesa técnica quando necessário",
      "Orientação sobre opções disponíveis",
      "Acompanhamento até a resolução",
    ],
    whenToSeekHelp: [
      "Ao receber intimação de TCO",
      "Para análise da acusação",
      "Antes de aceitar transação penal",
      "Para negociar condições favoráveis",
    ],
    processSteps: [
      {
        title: "Análise do TCO",
        description: "Exame detalhado do termo circunstanciado, análise da acusação e identificação das melhores estratégias de defesa.",
      },
      {
        title: "Negociação",
        description: "Negociação de transação penal ou suspensão condicional com condições favoráveis ao cliente.",
      },
      {
        title: "Defesa se Necessário",
        description: "Elaboração de defesa técnica fundamentada quando a negociação não for possível ou adequada.",
      },
      {
        title: "Acompanhamento",
        description: "Acompanhamento até a resolução final do caso, garantindo o cumprimento dos termos acordados.",
      },
    ],
  },
  "habeas-corpus": {
    title: "Habeas Corpus",
    subtitle: "Remédio constitucional para proteção da liberdade",
    description: "O Habeas Corpus é uma garantia constitucional que visa proteger a liberdade de locomoção, podendo ser preventivo (quando há ameaça de prisão) ou liberatório (quando a prisão já ocorreu e é ilegal).",
    overview: "O Habeas Corpus é um remédio constitucional destinado a proteger a liberdade de locomoção contra ilegalidades ou abusos de poder. Pode ser preventivo (quando há ameaça de prisão), liberatório (quando a prisão já ocorreu), além de outras modalidades que podem ser utilizadas conforme a situação concreta, sempre com o objetivo de resguardar o direito fundamental de ir e vir. Nossa atuação envolve a elaboração e impetração de Habeas Corpus em todas as suas formas, com fundamentação técnica sólida, análise minuciosa da situação e busca imediata pela proteção da liberdade do cliente. Trabalhamos de forma estratégica para demonstrar ilegalidades, constrangimentos ou abusos, garantindo que os direitos sejam preservados.",
    details: [
      "Habeas Corpus preventivo",
      "Habeas Corpus liberatório",
      "Análise da legalidade da prisão",
      "Fundamentação técnica adequada",
      "Impetração em todas as instâncias",
      "Acompanhamento até a decisão",
    ],
    whenToSeekHelp: [
      "Quando houver ameaça de prisão ilegal",
      "Em caso de prisão ilegal já consumada",
      "Para análise de legalidade de prisão",
      "Quando a liberdade estiver ameaçada",
    ],
    processSteps: [
      {
        title: "Análise do Caso",
        description: "Verificação da situação, análise da legalidade da prisão ou da ameaça, e identificação dos fundamentos para o Habeas Corpus.",
      },
      {
        title: "Elaboração da Petição",
        description: "Preparação de petição fundamentada, com argumentos técnicos sólidos e adequação à jurisprudência.",
      },
      {
        title: "Impetração",
        description: "Ajuizamento do Habeas Corpus na instância competente e acompanhamento do andamento processual.",
      },
      {
        title: "Recursos",
        description: "Interposição de recursos adequados em caso de indeferimento, buscando a proteção da liberdade em instâncias superiores.",
      },
    ],
  },
  // Serviços secundários
  "acoes-penais-em-geral": {
    title: "Ações Penais em Geral",
    subtitle: "Acompanhamento completo em todas as instâncias",
    description: "As ações penais são processos judiciais que visam apurar a responsabilidade criminal do acusado. Nossa atuação abrange desde a fase inicial até os recursos em instâncias superiores, garantindo defesa técnica completa e fundamentada.",
    overview: "As ações penais são processos judiciais destinados a apurar a responsabilidade criminal do acusado. Nessa esfera, a atuação jurídica deve ser completa e estratégica, abrangendo desde os atos iniciais até eventuais recursos em instâncias superiores. Nossa atuação envolve a elaboração de defesas consistentes, acompanhamento em audiências, análise técnica de provas e documentos, interposição de recursos cabíveis e participação em debates orais perante os tribunais. O objetivo é assegurar uma defesa sólida, proteger os direitos do cliente e buscar o melhor resultado possível em cada etapa do processo.",
    details: [
      "Elaboração de defesas prévias e defesas finais",
      "Participação em audiências de instrução e julgamento",
      "Interposição de recursos adequados",
      "Sustentações orais perante os tribunais",
      "Análise técnica de provas e documentos",
      "Acompanhamento em todas as fases processuais",
    ],
    whenToSeekHelp: [
      "Ao receber intimação de ação penal",
      "Para análise de denúncia ou queixa",
      "Antes de audiências importantes",
      "Para interposição de recursos",
      "Quando precisar de defesa técnica especializada",
    ],
    processSteps: [
      {
        title: "Análise Inicial",
        description: "Exame detalhado da denúncia ou queixa, análise de provas, identificação de vícios processuais e construção da estratégia de defesa.",
      },
      {
        title: "Fase de Instrução",
        description: "Participação em audiências, apresentação de provas, oitiva de testemunhas e elaboração de alegações finais fundamentadas.",
      },
      {
        title: "Julgamento",
        description: "Sustentações orais, apresentação de argumentos finais e defesa técnica perante o juiz ou tribunal.",
      },
      {
        title: "Recursos",
        description: "Interposição de recursos adequados em todas as instâncias, incluindo STJ e STF quando aplicável.",
      },
    ],
  },
  "medidas-protetivas-de-urgencia": {
    title: "Medidas Protetivas de Urgência",
    subtitle: "Proteção imediata de direitos fundamentais",
    description: "As medidas protetivas de urgência são mecanismos legais que visam proteger direitos fundamentais quando há risco iminente de violação. Nossa atuação busca garantir proteção imediata através de medidas cautelares adequadas.",
    overview: "As medidas protetivas de urgência previstas na Lei Maria da Penha têm como objetivo proteger mulheres em situação de violência doméstica e familiar, garantindo segurança imediata diante de risco iminente. Essas medidas podem incluir o afastamento do agressor, a proibição de contato, a proteção da integridade física e psicológica da vítima, entre outras providências determinadas pelo juiz. Nossa atuação é voltada para requerer medidas protetivas eficazes e rápidas, acompanhando o procedimento desde o pedido inicial até sua efetiva implementação, assegurando que os direitos da vítima sejam respeitados e que a proteção seja integral.",
    details: [
      "Pedidos de medidas cautelares",
      "Habeas corpus preventivo",
      "Suspensão de processos",
      "Proteção de direitos fundamentais",
      "Atuação imediata em casos urgentes",
    ],
    whenToSeekHelp: [
      "Quando houver ameaça de violação de direitos",
      "Em caso de risco iminente",
      "Para proteção preventiva",
      "Quando precisar de medida urgente",
    ],
    processSteps: [
      {
        title: "Análise da Situação",
        description: "Avaliação do caso, identificação dos riscos e determinação das medidas protetivas necessárias.",
      },
      {
        title: "Elaboração de Pedidos",
        description: "Preparação de pedidos fundamentados com argumentos técnicos sólidos para obtenção das medidas.",
      },
      {
        title: "Ajuizamento",
        description: "Ajuizamento imediato dos pedidos na instância competente e acompanhamento prioritário.",
      },
      {
        title: "Acompanhamento",
        description: "Monitoramento da eficácia das medidas e renovação quando necessário.",
      },
    ],
  },
  "juizado-especial-criminal-jecrim": {
    title: "Juizado Especial Criminal (JECRIM)",
    subtitle: "Representação em crimes de menor potencial ofensivo",
    description: "O Juizado Especial Criminal (JECRIM) é responsável pelo julgamento de crimes de menor potencial ofensivo, oferecendo procedimentos mais rápidos e simplificados. Nossa atuação busca a melhor solução para cada caso.",
    overview: "O Juizado Especial Criminal (JECRIM) é competente para julgar crimes de menor potencial ofensivo, ou seja, aqueles cuja pena máxima não ultrapassa 2 anos. Exemplos comuns incluem lesão corporal leve, ameaça, injúria, calúnia, difamação, dano simples, desacato e omissão de socorro. Nossa atuação é especializada e estratégica, abrangendo desde a análise do caso até a negociação de acordos, como transação penal, suspensão condicional do processo e composição civil. Também prestamos defesa técnica quando necessário, assegurando que os direitos do cliente sejam respeitados em todas as etapas.",
    details: [
      "Crimes de menor potencial ofensivo",
      "Transação penal",
      "Suspensão condicional do processo",
      "Composição civil",
      "Defesa técnica quando necessário",
    ],
    whenToSeekHelp: [
      "Ao receber intimação do JECRIM",
      "Para análise de transação penal",
      "Antes de aceitar acordo",
      "Para negociar condições favoráveis",
    ],
    processSteps: [
      {
        title: "Análise do Caso",
        description: "Exame da acusação, análise das opções disponíveis e orientação sobre as melhores estratégias.",
      },
      {
        title: "Negociação",
        description: "Negociação de transação penal ou suspensão condicional com condições favoráveis ao cliente.",
      },
      {
        title: "Defesa se Necessário",
        description: "Elaboração de defesa técnica quando a negociação não for possível ou adequada.",
      },
      {
        title: "Acompanhamento",
        description: "Acompanhamento até a resolução final e garantia do cumprimento dos termos acordados.",
      },
    ],
  },
  "crimes-contra-a-honra": {
    title: "Crimes contra a Honra",
    subtitle: "Defesa em casos de calúnia, difamação e injúria",
    description: "Os crimes contra a honra (calúnia, difamação e injúria) são delitos que ofendem a reputação e a dignidade da pessoa. Nossa atuação busca proteger a honra e a imagem do cliente, seja na defesa ou na busca de reparação.",
    overview: "Os crimes contra a honra, calúnia, difamação e injúria, são delitos que atingem diretamente a reputação e a dignidade da pessoa. A atuação jurídica nesses casos é essencial para proteger a imagem do cliente, seja na defesa contra acusações ou na busca de reparação pelos danos sofridos. Nossa atuação é técnica e estratégica, abrangendo desde a análise do caso até a adoção das medidas cabíveis, como defesa em processos criminais, negociação de acordos e ações de reparação civil. O objetivo é assegurar que os direitos do cliente sejam preservados e que a resposta jurídica seja eficaz diante da ofensa sofrida.",
    details: [
      "Calúnia",
      "Difamação",
      "Injúria",
      "Defesa da honra e imagem",
      "Busca de reparação quando necessário",
    ],
    whenToSeekHelp: [
      "Ao ser acusado de crime contra a honra",
      "Quando sua honra for ofendida",
      "Para análise de acusação",
      "Para buscar reparação de danos",
    ],
    processSteps: [
      {
        title: "Análise do Caso",
        description: "Exame da acusação ou ofensa, identificação dos elementos do crime e construção da estratégia de defesa ou ação.",
      },
      {
        title: "Estratégia",
        description: "Definição da melhor estratégia, seja defesa técnica, negociação ou busca de reparação.",
      },
      {
        title: "Atuação",
        description: "Elaboração de defesas ou ações, participação em audiências e negociações quando cabível.",
      },
      {
        title: "Resolução",
        description: "Acompanhamento até a resolução final e garantia de proteção dos direitos do cliente.",
      },
    ],
  },
  "acordo-de-nao-persecucao-penal-anpp": {
    title: "Acordo de Não Persecução Penal (ANPP)",
    subtitle: "Negociação para evitar ação penal",
    description: "O Acordo de Não Persecução Penal (ANPP) é um mecanismo que permite evitar a propositura de ação penal através de acordo com o Ministério Público. Nossa atuação busca negociar condições favoráveis ao cliente.",
    overview: "O Acordo de Não Persecução Penal (ANPP) é um instrumento jurídico que permite evitar a instauração da ação penal por meio de acordo firmado com o Ministério Público, aplicável em casos de crimes sem violência ou grave ameaça e com pena mínima inferior a 4 anos. Nossa atuação é voltada para analisar a viabilidade do acordo, negociar condições favoráveis ao cliente, elaborar os termos de compromisso e acompanhar o cumprimento das obrigações assumidas. O objetivo é garantir que o cliente obtenha a melhor solução possível, evitando os efeitos de um processo criminal e preservando seus direitos.",
    details: [
      "Análise da viabilidade do acordo",
      "Negociação com o Ministério Público",
      "Elaboração de termos de compromisso",
      "Acompanhamento do cumprimento",
      "Defesa técnica quando necessário",
    ],
    whenToSeekHelp: [
      "Quando houver possibilidade de ANPP",
      "Para análise de viabilidade",
      "Antes de aceitar acordo",
      "Para negociar condições favoráveis",
    ],
    processSteps: [
      {
        title: "Análise de Viabilidade",
        description: "Avaliação do caso, verificação da possibilidade de ANPP e análise das condições necessárias.",
      },
      {
        title: "Negociação",
        description: "Negociação com o Ministério Público para obtenção de condições favoráveis ao cliente.",
      },
      {
        title: "Elaboração do Termo",
        description: "Preparação do termo de compromisso com condições adequadas e proteção dos direitos do cliente.",
      },
      {
        title: "Acompanhamento",
        description: "Monitoramento do cumprimento do acordo e garantia de que todas as condições sejam respeitadas.",
      },
    ],
  },
  "crimes-lei-de-drogas": {
    title: "Crimes previstos na Lei de Drogas",
    subtitle: "Defesa especializada em Lei 11.343/2006",
    description: "A Lei de Drogas (Lei 11.343/2006) estabelece as regras para crimes relacionados a drogas. Nossa atuação especializada permite uma defesa técnica adequada, considerando as particularidades desta legislação.",
    overview: "A Lei de Drogas (Lei nº 11.343/2006) disciplina os crimes relacionados a entorpecentes, abrangendo desde o porte para uso pessoal até o tráfico e a associação para o tráfico. Trata-se de uma legislação complexa, que exige análise técnica detalhada e estratégias específicas de defesa. Nossa atuação é especializada em casos envolvendo a Lei de Drogas, defendendo clientes acusados de porte de drogas, tráfico de entorpecentes, associação para o tráfico e outros delitos previstos na legislação. Trabalhamos de forma estratégica para identificar ilegalidades, questionar provas e buscar a melhor solução em cada caso, sempre com foco na proteção dos direitos fundamentais do cliente.",
    details: [
      "Tráfico de drogas",
      "Associação para o tráfico",
      "Porte de drogas para consumo pessoal",
      "Defesa técnica especializada",
      "Análise de provas e perícias",
    ],
    whenToSeekHelp: [
      "Ao ser acusado de crime relacionado a drogas",
      "Em caso de prisão por tráfico",
      "Para análise de acusação",
      "Quando precisar de defesa especializada",
    ],
    processSteps: [
      {
        title: "Análise do Caso",
        description: "Exame detalhado da acusação, análise de provas, perícias e identificação de estratégias de defesa.",
      },
      {
        title: "Defesa Técnica",
        description: "Elaboração de defesas fundamentadas, considerando as particularidades da Lei de Drogas.",
      },
      {
        title: "Atuação Processual",
        description: "Participação em audiências, apresentação de argumentos e defesa técnica perante o juiz.",
      },
      {
        title: "Recursos",
        description: "Interposição de recursos adequados quando necessário para garantir os direitos do cliente.",
      },
    ],
  },
  "crimes-contra-o-patrimonio": {
    title: "Crimes contra o Patrimônio",
    subtitle: "Defesa em casos de crimes patrimoniais",
    description: "Os crimes contra o patrimônio são delitos que afetam bens materiais, incluindo furto, roubo, estelionato e outros. Nossa atuação busca uma defesa técnica adequada, considerando as particularidades de cada tipo de crime.",
    overview: "Os crimes contra o patrimônio são aqueles que atingem bens materiais ou valores econômicos, como furto, roubo, estelionato, receptação, apropriação indébita e dano. Cada delito possui particularidades próprias, exigindo análise técnica cuidadosa e estratégias de defesa adequadas. Nossa atuação abrange casos de crimes contra o patrimônio, com elaboração de defesas fundamentadas, acompanhamento em todas as fases do processo e busca pela melhor solução para o cliente, seja por meio de absolvição, redução de pena ou medidas alternativas.",
    details: [
      "Furto e roubo",
      "Estelionato",
      "Apropriação indébita",
      "Receptação",
      "Defesa técnica especializada",
    ],
    whenToSeekHelp: [
      "Ao ser acusado de crime patrimonial",
      "Para análise de acusação",
      "Quando precisar de defesa técnica",
      "Para negociação quando cabível",
    ],
    processSteps: [
      {
        title: "Análise do Caso",
        description: "Exame da acusação, análise de provas e identificação das melhores estratégias de defesa.",
      },
      {
        title: "Defesa Técnica",
        description: "Elaboração de defesas fundamentadas, considerando as particularidades de cada tipo de crime.",
      },
      {
        title: "Atuação Processual",
        description: "Participação em audiências, apresentação de argumentos e defesa técnica perante o juiz.",
      },
      {
        title: "Recursos",
        description: "Interposição de recursos adequados quando necessário.",
      },
    ],
  },
  "crimes-contra-a-dignidade-sexual": {
    title: "Crimes contra a Dignidade Sexual",
    subtitle: "Defesa técnica especializada em casos sensíveis",
    description: "Os crimes contra a dignidade sexual são delitos de extrema gravidade que exigem defesa técnica especializada e cuidadosa. Nossa atuação busca garantir todos os direitos do acusado, com respeito e profissionalismo.",
    overview: "Os crimes contra a dignidade sexual, como estupro, assédio sexual, importunação sexual e corrupção de menores, são delitos de extrema gravidade que exigem atuação técnica cuidadosa e responsável. Nesses casos, a defesa deve ser conduzida com respeito, profissionalismo e atenção às garantias fundamentais do acusado. Nossa atuação busca assegurar todos os direitos processuais, elaborando defesas fundamentadas, acompanhando cada fase do processo e construindo estratégias jurídicas adequadas à complexidade da acusação.",
    details: [
      "Estupro",
      "Assédio sexual",
      "Atentado violento ao pudor",
      "Importunação sexual",
      "Defesa técnica especializada e cuidadosa",
    ],
    whenToSeekHelp: [
      "Ao ser acusado de crime sexual",
      "Para análise de acusação",
      "Quando precisar de defesa técnica especializada",
      "Para garantia de direitos processuais",
    ],
    processSteps: [
      {
        title: "Análise Detalhada",
        description: "Exame cuidadoso da acusação, análise de provas e identificação de estratégias de defesa adequadas.",
      },
      {
        title: "Defesa Técnica",
        description: "Elaboração de defesas fundamentadas, com respeito e profissionalismo, garantindo todos os direitos do acusado.",
      },
      {
        title: "Atuação Processual",
        description: "Participação em audiências, apresentação de argumentos técnicos e defesa perante o juiz.",
      },
      {
        title: "Recursos",
        description: "Interposição de recursos adequados quando necessário para garantir os direitos do cliente.",
      },
    ],
  },
  "assistencia-de-acusacao": {
    title: "Assistência de Acusação",
    subtitle: "Defesa dos direitos da vítima",
    description: "A assistência de acusação permite que a vítima participe do processo penal como assistente, defendendo seus direitos e buscando reparação de danos. Nossa atuação visa garantir que os direitos da vítima sejam respeitados.",
    overview: "A assistência de acusação é a possibilidade de a vítima participar do processo penal por meio de seu advogado, garantindo que seus direitos sejam defendidos de forma ativa e independente. Embora o Ministério Público seja o titular da ação penal, a vítima pode atuar como parte auxiliar, fortalecendo a acusação e assegurando que seus interesses sejam considerados ao longo do processo. Nossa atuação consiste em representar diretamente a vítima, acompanhando cada fase do processo criminal, apresentando manifestações jurídicas próprias e buscando medidas que assegurem tanto a responsabilização do acusado quanto a reparação dos prejuízos sofridos.",
    details: [
      "Atuação como assistente de acusação",
      "Defesa dos direitos da vítima",
      "Acompanhamento processual",
      "Busca de reparação de danos",
      "Orientação completa à vítima",
    ],
    whenToSeekHelp: [
      "Quando for vítima de crime",
      "Para participar do processo como assistente",
      "Para defender seus direitos",
      "Para buscar reparação de danos",
    ],
    processSteps: [
      {
        title: "Análise do Caso",
        description: "Exame do processo, identificação dos direitos da vítima e construção da estratégia de atuação.",
      },
      {
        title: "Atuação como Assistente",
        description: "Participação no processo como assistente de acusação, apresentando alegações e provas quando necessário.",
      },
      {
        title: "Acompanhamento",
        description: "Monitoramento do andamento processual e garantia de que os direitos da vítima sejam respeitados.",
      },
      {
        title: "Reparação",
        description: "Busca de reparação de danos quando cabível, através de ação civil ou outros mecanismos legais.",
      },
    ],
  },
  "outros-procedimentos-de-natureza-penal": {
    title: "Outros Procedimentos de Natureza Penal",
    subtitle: "Atuação em diversos procedimentos penais",
    description: "Além das ações penais formais, existem diversos outros procedimentos de natureza penal que exigem acompanhamento técnico especializado. Nossa atuação abrange todos esses procedimentos.",
    overview: "Além dos serviços já destacados, o escritório também atua em uma ampla gama de procedimentos de natureza penal, assegurando acompanhamento técnico em todas as etapas do processo criminal. Isso inclui desde fases preliminares até medidas posteriores, garantindo que o cliente esteja amparado em qualquer situação que envolva o direito penal. Nossa atuação contempla inquéritos policiais, procedimentos investigatórios, recursos em todas as instâncias e revisão criminal, sempre com o objetivo de proteger os direitos do cliente e oferecer uma defesa completa em qualquer cenário.",
    details: [
      "Inquéritos policiais",
      "Procedimentos investigatórios",
      "Recursos em todas as instâncias",
      "Revisão criminal",
      "Atuação em procedimentos especiais",
    ],
    whenToSeekHelp: [
      "Em qualquer procedimento penal",
      "Para análise de procedimento",
      "Quando precisar de defesa técnica",
      "Para acompanhamento processual",
    ],
    processSteps: [
      {
        title: "Análise",
        description: "Exame do procedimento, identificação dos direitos envolvidos e construção da estratégia de atuação.",
      },
      {
        title: "Atuação",
        description: "Participação ativa no procedimento, apresentação de defesas, alegações e provas quando necessário.",
      },
      {
        title: "Acompanhamento",
        description: "Monitoramento do andamento e garantia de que todos os direitos sejam respeitados.",
      },
      {
        title: "Recursos",
        description: "Interposição de recursos adequados quando necessário para garantir os direitos do cliente.",
      },
    ],
  },
  "crimes-contra-violencia-domestica": {
    title: "Crimes envolvendo Violência Doméstica",
    subtitle: "Atuação especializada em casos de violência doméstica e familiar",
    description: "Os crimes contra violência doméstica são tratados com especial atenção pela legislação brasileira, especialmente pela Lei Maria da Penha (Lei 11.340/2006), que visa proteger mulheres e demais vítimas de violência doméstica e familiar.",
    overview: "Os crimes de violência doméstica e familiar contra a mulher são tratados com especial atenção pela legislação brasileira, especialmente pela Lei Maria da Penha (Lei nº 11.340/2006), que busca proteger mulheres em situação de vulnerabilidade e garantir medidas eficazes de prevenção e repressão. Nossa atuação abrange tanto a defesa de vítimas quanto de acusados, sempre observando os princípios da legalidade, da ampla defesa e do devido processo legal. Trabalhamos desde o pedido de medidas protetivas até o acompanhamento completo dos processos judiciais, assegurando que os direitos sejam respeitados em todas as fases.",
    details: [
      "Defesa técnica em casos de violência doméstica",
      "Acompanhamento em medidas protetivas de urgência",
      "Atuação na Lei Maria da Penha (Lei 11.340/2006)",
      "Defesa dos direitos das vítimas",
      "Elaboração de defesas fundamentadas",
      "Acompanhamento em audiências e procedimentos",
    ],
    whenToSeekHelp: [
      "Ao ser acusado de violência doméstica",
      "Quando receber medida protetiva",
      "Para análise de acusação",
      "Quando precisar de defesa técnica especializada",
      "Em caso de investigação policial",
    ],
    processSteps: [
      {
        title: "Análise do Caso",
        description: "Exame detalhado da acusação, análise de provas, medidas protetivas e identificação das melhores estratégias de defesa.",
      },
      {
        title: "Atuação em Medidas Protetivas",
        description: "Acompanhamento em procedimentos relacionados a medidas protetivas, apresentação de defesas e garantia de direitos processuais.",
      },
      {
        title: "Defesa Técnica",
        description: "Elaboração de defesas fundamentadas, considerando as particularidades da Lei Maria da Penha e demais normas aplicáveis.",
      },
      {
        title: "Acompanhamento Processual",
        description: "Participação em audiências, apresentação de argumentos e defesa técnica perante o juiz, sempre observando os princípios constitucionais.",
      },
    ],
  },
};

// Função helper para quebrar textos longos em parágrafos menores
const formatTextWithBreaks = (text: string): JSX.Element[] => {
  // Divide o texto em sentenças (terminadas com ponto seguido de espaço)
  const sentences = text.split(/(?<=\.)\s+/);
  const paragraphs: string[] = [];
  let currentParagraph = '';

  sentences.forEach((sentence, index) => {
    // Se adicionar esta sentença ultrapassar ~400 caracteres, cria novo parágrafo
    if (currentParagraph.length + sentence.length > 400 && currentParagraph.length > 0) {
      paragraphs.push(currentParagraph.trim());
      currentParagraph = sentence;
    } else {
      currentParagraph += (currentParagraph ? ' ' : '') + sentence;
    }

    // Se for a última sentença, adiciona o parágrafo atual
    if (index === sentences.length - 1) {
      paragraphs.push(currentParagraph.trim());
    }
  });

  return paragraphs.map((para, index) => (
    <p key={index} className="text-foreground/70 text-lg leading-relaxed mb-4">
      {para}
    </p>
  ));
};

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { ref: headerRef, isRevealed: headerRevealed } = useReveal(0.2);
  const { ref: contentRef, isRevealed: contentRevealed } = useReveal(0.1);

  if (!slug || !serviceData[slug]) {
    return <NotFound />;
  }

  const service = allServices.find(s => s.slug === slug);
  const data = serviceData[slug];

  if (!service || !data) {
    return <NotFound />;
  }

  const ServiceIcon = service.icon;

  // Mensagem pré-programada para WhatsApp
  const whatsappMessage = encodeURIComponent(`Olá! Gostaria de saber mais sobre ${data.title}.`);
  const whatsappUrl = `https://wa.me/5571997071372?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-background">
      <SEO 
        canonical={`/servicos/${slug}`}
        title={`${data.title} | Dr. Junialisson Costa`}
        description={data.description}
        serviceName={data.title}
        serviceType={data.subtitle}
        keywords={`${data.title}, ${data.subtitle}, advogado criminalista, advogado em Salvador, defesa criminal, direito penal, ${data.title.toLowerCase()}, Dr. Junialisson Costa, advocacia especializada`}
      />
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-3xl">
            <button
              onClick={() => {
                navigate('/#servicos');
              }}
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para serviços</span>
            </button>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                <ServiceIcon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-2">
                  {data.title}
                </h1>
                <p className="text-lg text-foreground/70">{data.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Overview */}
            <div ref={headerRef} className={`reveal ${headerRevealed ? 'revealed' : ''}`}>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">Sobre este serviço</h2>
              <div className="mb-8">
                {formatTextWithBreaks(data.overview)}
              </div>
            </div>

            {/* WhatsApp CTA - Prominente e visível */}
            <div className={`card-elevated rounded-2xl p-8 lg:p-10 mb-8 reveal delay-100 ${headerRevealed ? 'revealed' : ''}`}>
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-3">
                  Precisa de ajuda com este serviço?
                </h2>
                <p className="text-foreground/70 text-lg mb-6">
                  Fale diretamente com o especialista via WhatsApp para uma consulta e análise do seu caso específico.
                </p>
                <Button variant="gold" size="lg" className="group shadow-lg shadow-primary/25" asChild>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    FALE COM O ESPECIALISTA
                  </a>
                </Button>
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

export default ServicePage;

