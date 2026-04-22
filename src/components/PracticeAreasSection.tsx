import { Scale, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
import { useEffect, useState } from "react";
import areasBg from "@/assets/areas-bg.jpg";

const PracticeAreasSection = () => {
  const { ref: headerRef, isRevealed: headerRevealed } = useReveal(0.2);
  const { ref: gridRef, isRevealed: gridRevealed } = useReveal(0.1);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const areas = [
    {
      icon: Scale,
      title: "Direito Civil",
      slug: "direito-civil",
      description:
        "Soluções jurídicas para relações civis e patrimoniais",
    },
    {
      icon: Scale,
      title: "Direito de Família e Sucessões",
      slug: "direito-de-familia-e-sucessoes",
      description:
        "Soluções jurídicas para questões familiares e sucessórias",
    },
    {
      icon: Scale,
      title: "Direito do Consumidor",
      slug: "direito-do-consumidor",
      description:
        "Proteção jurídica nas relações de consumo, incluindo planos de saúde",
    },
  ];

  return (
    <section id="areas" className="relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${areasBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-background/95" />
      
      {/* Subtle gradient accents */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />

      <div className="relative z-10 py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Header */}
          <div 
            ref={headerRef}
            className="text-center max-w-2xl mx-auto mb-16 lg:mb-20 px-2"
          >
            <div className={`flex items-center justify-center gap-3 mb-4 reveal ${headerRevealed ? 'revealed' : ''}`}>
              <span className="w-10 h-px bg-primary/50" />
              <span className="text-primary font-medium text-sm tracking-[0.15em] uppercase">
                Demais Áreas de Atuação
              </span>
              <span className="w-10 h-px bg-primary/50" />
            </div>
            
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-semibold reveal delay-100 ${headerRevealed ? 'revealed' : ''}`}>
              Expertise <span className="gold-gradient-text italic pr-2">Jurídica</span>
            </h2>
            
            <p className={`text-foreground/55 mt-5 text-lg leading-relaxed reveal delay-200 ${headerRevealed ? 'revealed' : ''}`}>
              Contamos com uma equipe de advogados parceiros que atua em outras áreas específicas do Direito, de forma técnica e responsável, conforme as necessidades apresentadas em cada caso concreto, destacando-se, entre elas:
            </p>
          </div>

          {/* Areas Grid */}
          <div 
            ref={gridRef}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
          >
            {areas.map((area, index) => (
              <div
                key={index}
                className={`group relative flex flex-col p-6 lg:p-8 rounded-xl bg-card/70 backdrop-blur-sm border border-border/40 
                  hover:border-primary/30 hover:bg-card/90 transition-all duration-500 hover-lift
                  reveal ${gridRevealed ? 'revealed' : ''}`}
                style={{ transitionDelay: gridRevealed ? `${index * 80}ms` : '0ms' }}
              >
                {/* Icon */}
                <div className="w-12 h-12 mb-5 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/15 group-hover:scale-105 flex-shrink-0">
                  <area.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-serif font-semibold text-foreground mb-3 transition-colors group-hover:text-primary">
                  {area.title}
                </h3>
                <p className="text-foreground/55 text-sm leading-relaxed mb-5 flex-1">
                  {area.description}
                </p>

                {/* Buttons Container - Alinhado na parte inferior */}
                <div className="flex flex-col gap-2 mt-auto">
                  {/* WhatsApp Button - Primary Action */}
                  <a
                    href={`https://wa.me/5571997071372?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre ${area.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-primary/10 hover:bg-primary/15 border border-primary/30 hover:border-primary/50 text-primary rounded-lg px-3 py-2.5 text-xs font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group/btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MessageCircle className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110 text-[#25D366]" />
                    <span>Falar no WhatsApp</span>
                  </a>

                  {/* Saiba Mais Button - Discreet, for SEO */}
                  <Link
                    to={`/areas/${area.slug}`}
                    className="flex items-center justify-center gap-1.5 w-full text-foreground/50 hover:text-foreground/80 text-[10px] font-medium transition-colors duration-300 group/link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Saiba mais</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                  </Link>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`text-center mt-12 lg:mt-16 reveal delay-500 ${gridRevealed ? 'revealed' : ''}`}>
            <a
              href="https://wa.me/5571997071372?text=Olá!%20Gostaria%20de%20consultar%20sobre%20meu%20caso%20específico."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
            >
              <span className="link-underline">Consulte sobre seu caso específico</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
