import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import lawyerHero from "@/assets/Dr. Junialisson 1.JPEG";
import heroBg from "@/assets/hero-bg.jpg";
import { useReveal } from "@/hooks/useReveal";

const HeroSection = () => {
  const { ref: contentRef, isRevealed: contentRevealed } = useReveal(0.1);
  const { ref: imageRef, isRevealed: imageRevealed } = useReveal(0.1);
  const { ref: statsRef, isRevealed: statsRevealed } = useReveal(0.2);

  const stats = [
    { title: "Atuação Profissional", desc: "Audiências, elaboração de peças, acompanhamento processual, etc." },
    { title: "Experiência Profissional", desc: "Atuação em demandas de natureza criminal." },
    { title: "Trajetória Profissional", desc: "Exercício da advocacia pautado na ética e na responsabilidade técnica." },
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-32 pb-16 lg:pt-28 lg:pb-0 overflow-hidden"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 z-0 pattern-grid opacity-30" />

      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-8 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />
      <div className="absolute bottom-1/3 right-8 w-px h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block" />

      <div className="container mx-auto px-4 lg:px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div ref={contentRef} className="space-y-8 lg:pr-8 relative z-20 pt-20 lg:pt-18">
            <div 
              className={`inline-flex items-center gap-2 reveal ${contentRevealed ? 'revealed' : ''}`}
            >
              <span className="w-8 h-px bg-primary/60" />
              <span className="text-primary font-medium text-sm tracking-[0.15em] uppercase shimmer px-3 py-1.5 border border-primary/20 rounded-full">
                Advocacia de Excelência
              </span>
            </div>

            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-[1.5] md:leading-[1.08] tracking-tight reveal delay-100 ${contentRevealed ? 'revealed' : ''}`}
            >
              <span className="text-foreground block sm:inline">Advocacia Criminal</span>{" "}
              <span className="gold-gradient-text block sm:inline">Especializada</span>
              <br className="hidden sm:block" />
              <span className="text-foreground/90 block sm:inline">na Defesa da</span>
              <br className="hidden sm:block" />
              <span className="text-foreground block sm:inline">Liberdade</span>
            </h1>

            <p 
              className={`text-foreground/75 text-lg md:text-xl max-w-lg leading-relaxed font-light reveal delay-200 ${contentRevealed ? 'revealed' : ''}`}
            >
              Atuação em processos criminais, com observância das garantias fundamentais, da ampla defesa e do devido processo legal, em todas as fases da persecução penal.
            </p>

            <div 
              className={`flex flex-col sm:flex-row gap-4 reveal delay-300 ${contentRevealed ? 'revealed' : ''}`}
            >
              <Button variant="gold" size="lg" className="group shadow-lg shadow-primary/25" asChild>
                <a href="https://wa.me/5571997071372?text=Olá!%20Gostaria%20de%20falar%20com%20o%20especialista." target="_blank" rel="noopener noreferrer">
                  FALE COM O ESPECIALISTA
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-border/50 hover:bg-muted/30" asChild>
                <a href="#servicos">Atuação Criminal</a>
              </Button>
            </div>

            {/* Stats */}
            <div 
              ref={statsRef}
              className={`relative z-20 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 pt-10 border-t border-border/40 reveal delay-400 ${statsRevealed ? 'revealed' : ''}`}
            >
              {stats.map((stat, i) => (
                <div 
                  key={i} 
                  className={`group reveal ${statsRevealed ? 'revealed' : ''}`}
                  style={{ transitionDelay: statsRevealed ? `${450 + i * 100}ms` : '0ms' }}
                >
                  <p className="text-lg md:text-xl font-serif font-semibold text-primary mb-2.5 leading-tight group-hover:text-primary/90 transition-colors">
                    {stat.title}
                  </p>
                  <p className="text-foreground text-sm md:text-base leading-relaxed font-light">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div 
            ref={imageRef}
            className={`relative hidden lg:flex justify-center items-end reveal-right ${imageRevealed ? 'revealed' : ''}`}
          >
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-3 border border-primary/15 rounded-2xl transform rotate-2 transition-transform duration-500 group-hover:rotate-3" />
              <div className="absolute -inset-6 border border-primary/10 rounded-3xl transform -rotate-1" />
              
              {/* Glow Effect */}
              <div className="absolute -inset-12 bg-primary/5 rounded-full blur-3xl opacity-50" />

              <img
                src={lawyerHero}
                alt="Dr. Junialisson Costa - Advogado Especialista"
                className="relative z-10 w-full max-w-md object-cover rounded-2xl shadow-2xl shadow-black/30"
              />

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade - Ajustado para não interferir nos stats */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background via-background/60 to-transparent z-0 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
