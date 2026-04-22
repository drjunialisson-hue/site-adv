import { Award, HeartHandshake, BookOpen, MessageCircle, Eye, Lock, GraduationCap } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const StatsSection = () => {
  const { ref: headerRef, isRevealed: headerRevealed } = useReveal(0.2);
  const { ref: statsRef, isRevealed: statsRevealed } = useReveal(0.1);

  const stats = [
    {
      icon: GraduationCap,
      label: "Formação Acadêmica Sólida",
      description: "Pós-graduações em instituições de referência, garantindo domínio técnico e atualização constante",
    },
    {
      icon: BookOpen,
      label: "Atuação Focada em Direito Criminal",
      description: "Atuação concentrada na área penal, com dedicação exclusiva e acompanhamento das principais atualizações jurídicas",
    },
    {
      icon: HeartHandshake,
      label: "Atendimento Humanizado",
      description: "Cada caso é tratado com atenção individual, escuta ativa e respeito à história do cliente",
    },
    {
      icon: Lock,
      label: "Sigilo Absoluto",
      description: "Confidencialidade total em todas as etapas, com proteção rigorosa das informações do cliente",
    },
    {
      icon: MessageCircle,
      label: "Agilidade no Contato",
      description: "Comunicação rápida e eficiente por WhatsApp e outros canais digitais",
    },
    {
      icon: Eye,
      label: "Transparência em Cada Etapa",
      description: "Você acompanha o andamento do processo com clareza e informações acessíveis",
    },
  ];

  return (
    <section id="diferenciais" className="py-24 lg:py-32 bg-background relative overflow-x-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/[0.02] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20 px-2"
        >
          <div className={`flex items-center justify-center gap-3 mb-4 reveal ${headerRevealed ? 'revealed' : ''}`}>
            <span className="w-10 h-px bg-primary/50" />
            <span className="text-primary font-medium text-sm tracking-[0.15em] uppercase">
              Diferenciais
            </span>
            <span className="w-10 h-px bg-primary/50" />
          </div>
          
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-semibold reveal delay-100 ${headerRevealed ? 'revealed' : ''}`}>
            Por que nos{" "}
            <span className="gold-gradient-text italic pr-2">contratar?</span>
          </h2>
          
          <p className={`text-foreground/55 mt-5 text-lg leading-relaxed reveal delay-200 ${headerRevealed ? 'revealed' : ''}`}>
            Compromisso, dedicação e técnica apurada na defesa dos seus direitos.
          </p>
        </div>

        {/* Stats Grid */}
        <div 
          ref={statsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group card-elevated rounded-2xl p-6 lg:p-8 relative transition-all duration-300 hover-lift reveal ${statsRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: statsRevealed ? `${index * 80}ms` : '0ms' }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary/15 group-hover:scale-105">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Label */}
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-foreground/60 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;

