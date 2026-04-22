import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, Mail } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const FAQSection = () => {
  const { ref: leftRef, isRevealed: leftRevealed } = useReveal(0.15);
  const { ref: rightRef, isRevealed: rightRevealed } = useReveal(0.1);

  const faqs = [
    {
      question: "Como funciona o processo de consulta jurídica?",
      answer:
        "O atendimento começa com uma reunião inicial, na qual ouvimos seu caso e avaliamos as melhores estratégias jurídicas. Após essa análise, apresentamos um plano de ação detalhado, junto com o investimento a título de honorários. A consulta pode ser realizada de forma presencial ou online, conforme sua preferência. Durante esse momento, você terá espaço para esclarecer todas as dúvidas e compreender de maneira completa o caminho jurídico que será adotado.",
    },
    {
      question: "Posso contratar um advogado durante uma investigação policial?",
      answer:
        "Sim. É essencial contar com acompanhamento jurídico desde o início de qualquer investigação. O advogado assegura que seus direitos sejam respeitados e orienta sobre a melhor forma de proceder. A presença do advogado em depoimentos e atos policiais é um direito constitucional e pode influenciar diretamente no resultado do caso.",
    },
    {
      question: "Como posso acompanhar o andamento do meu processo?",
      answer:
        "Mantemos um canal direto de comunicação com nossos clientes. Você receberá atualizações regulares e poderá entrar em contato a qualquer momento para esclarecer dúvidas. O acompanhamento é transparente e pode ser feito por telefone, e-mail ou WhatsApp.",
    },
    {
      question: "Quanto tempo leva para resolver um processo criminal?",
      answer:
        "O prazo depende da complexidade do caso e do tribunal responsável. Processos mais simples podem ser concluídos em alguns meses, enquanto casos mais complexos podem levar anos. O importante é que acompanhamos cada etapa com dedicação e estratégia, garantindo que seus direitos sejam plenamente defendidos.",
    },
    {
      question: "Vocês atendem em outras cidades e estados?",
      answer:
        "Sim. Atendemos clientes em todo o Brasil. Como a maioria dos processos hoje ocorre de forma virtual, conseguimos acompanhar demandas em qualquer localidade. Quando há necessidade de presença física, contamos com advogados parceiros em outros estados ou, se for o caso, nossa própria equipe se desloca até o local para garantir o atendimento completo.",
    },
    {
      question: "Como é calculado o valor dos honorários?",
      answer:
        "Os honorários são definidos conforme a complexidade do caso e o tempo envolvido. Na consulta inicial, apresentamos de forma transparente o investimento a título de honorários, considerando fatores como a natureza da demanda, urgência, número de audiências e eventuais recursos necessários.",
    },
    {
      question: "O que fazer em caso de prisão em flagrante?",
      answer:
        "Em situações de prisão em flagrante, é essencial buscar auxílio imediato. Oferecemos atendimento 24 horas para esses casos. O advogado comparece à delegacia para acompanhar o procedimento, assegurar que seus direitos sejam respeitados e orientar sobre os próximos passos.",
    },
    {
      question: "Qual a diferença entre habeas corpus preventivo e liberatório?",
      answer:
        "O habeas corpus preventivo é utilizado quando existe ameaça de prisão ilegal, antes que ela ocorra. Já o habeas corpus liberatório é destinado a revogar uma prisão já decretada ou em curso. Ambos são instrumentos fundamentais de proteção da liberdade e devem ser manejados de forma estratégica conforme cada situação.",
    },
    {
      question: "Como funciona o Acordo de Não Persecução Penal (ANPP)?",
      answer:
        "O ANPP, previsto no artigo 28-A do Código de Processo Penal, permite ao investigado evitar a ação penal em crimes sem violência ou grave ameaça e com pena mínima inferior a 4 anos, desde que haja confissão e preenchimento dos requisitos legais. Nesse caso, o investigado assume condições como prestação de serviços ou pagamento de multa e, cumprindo-as, não é instaurado o processo criminal.",
    },
    {
      question: "Vocês atuam em Tribunal do Júri?",
      answer:
        "Sim. Atuamos perante o Tribunal do Júri, especialmente em casos de crimes contra a vida. A defesa em plenário exige preparação específica, conhecimento da dinâmica do julgamento e estratégia adequada. Oferecemos acompanhamento completo desde a fase de pronúncia até a sustentação oral perante os jurados.",
    },
    {
      question: "O que é progressão de regime na execução penal?",
      answer:
        "A progressão de regime permite que o condenado passe para um regime menos rigoroso (fechado → semiaberto → aberto) quando cumpre os requisitos legais, como parte da pena e bom comportamento. Acompanhamos todo o processo de execução penal para assegurar que o cliente tenha acesso a todos os benefícios previstos em lei.",
    },
    {
      question: "Como funciona o atendimento de urgência 24 horas?",
      answer:
        "Disponibilizamos atendimento de urgência 24 horas para situações que não podem esperar, como prisões em flagrante, conduções coercitivas, intimações urgentes e audiências de custódia. Basta entrar em contato pelo telefone (71) 99707-1372 e nossa equipe estará pronta para atender imediatamente.",
    },
  ];

  return (
    <section id="faq" className="py-24 lg:py-32 bg-secondary/20 relative">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Side - Header & Contact */}
          <div 
            ref={leftRef}
            className="lg:col-span-2 space-y-8 lg:sticky lg:top-36 lg:self-start h-fit"
          >
            <div className={`reveal ${leftRevealed ? 'revealed' : ''}`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-px bg-primary/50" />
                <span className="text-primary font-medium text-sm tracking-[0.15em] uppercase">
                  FAQ
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight">
                Dúvidas{" "}
                <span className="gold-gradient-text italic pr-2">Frequentes</span>
              </h2>
              <p className="text-foreground/55 mt-5 text-lg leading-relaxed">
                Encontre aqui as respostas para as perguntas mais comuns sobre nossa atuação jurídica.
              </p>
            </div>

            <div className={`card-elevated rounded-xl p-6 lg:p-8 reveal delay-150 ${leftRevealed ? 'revealed' : ''}`}>
              <p className="text-foreground/70 mb-6 text-sm">
                Não encontrou sua dúvida? Entre em contato diretamente.
              </p>

              <div className="space-y-3">
                <a
                  href="https://wa.me/5571997071372?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-lg px-5 py-3.5 font-medium transition-all duration-300 hover-lift text-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>

                <a
                  href="mailto:contato@junialissoncosta.adv.br"
                  className="flex items-center gap-3 w-full border border-border/60 text-foreground/80 hover:border-primary/40 hover:text-foreground rounded-lg px-5 py-3.5 font-medium transition-all duration-300 text-sm"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  E-mail
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Accordion */}
          <div 
            ref={rightRef}
            className="lg:col-span-3"
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className={`bg-card/60 border border-border/40 rounded-xl px-5 lg:px-6 data-[state=open]:border-primary/25 data-[state=open]:bg-card/80 transition-all duration-300 reveal ${rightRevealed ? 'revealed' : ''}`}
                  style={{ transitionDelay: rightRevealed ? `${index * 60}ms` : '0ms' }}
                >
                  <AccordionTrigger className="text-left font-medium hover:text-primary py-5 text-sm lg:text-base hover:no-underline [&[data-state=open]]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/60 pb-5 text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
