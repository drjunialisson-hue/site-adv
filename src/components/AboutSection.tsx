import { Scale } from "lucide-react";
import lawyerHero from "@/assets/dr-junialisson-perfil.JPEG";
import { useReveal } from "@/hooks/useReveal";

const AboutSection = () => {
  const { ref: imageRef, isRevealed: imageRevealed } = useReveal(0.15);
  const { ref: contentRef, isRevealed: contentRevealed } = useReveal(0.15);

  const highlights = [
    { icon: Scale, text: "Formado em Direito pela UCSal" },
    { icon: Scale, text: "Pós-graduado em Ciências Criminais (PUC Minas)" },
    { icon: Scale, text: "Pós-graduado em Advocacia Criminal (Legale)" },
    { icon: Scale, text: "Atuação pautada pela ética e responsabilidade profissional" },
  ];

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-secondary/20 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/[0.02] to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <div 
            ref={imageRef}
            className={`relative order-2 lg:order-1 reveal-left ${imageRevealed ? 'revealed' : ''}`}
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Background decoration */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-primary/5 rounded-2xl" />
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-primary/20 rounded-2xl" />

              <div className="relative bg-card rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
                <img
                  src={lawyerHero}
                  alt="Dr. Junialisson Costa"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div 
            ref={contentRef}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className={`reveal ${contentRevealed ? 'revealed' : ''} pr-2`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-px bg-primary/50" />
                <span className="text-primary font-medium text-sm tracking-[0.15em] uppercase">
                  Sobre
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight">
                Conheça <span className="gold-gradient-text italic whitespace-nowrap pr-2">Dr. Junialisson Costa</span>
              </h2>
            </div>

            <div className={`space-y-5 reveal delay-100 ${contentRevealed ? 'revealed' : ''}`}>
              <p className="text-foreground/65 text-lg leading-relaxed">
                Dr. Junialisson é graduado em Direito pela Universidade Católica do Salvador (UCSal), com formação acadêmica voltada à área penal.
              </p>

              <p className="text-foreground/65 text-lg leading-relaxed">
                Possui pós-graduação em Ciências Criminais pela Pontifícia Universidade Católica de Minas Gerais (PUC Minas) e em Advocacia Criminal pela Legale Educacional.
              </p>

              <p className="text-foreground/65 text-lg leading-relaxed">
                Atualmente, é pós-graduando em Direito Penal e Processo Penal pela Faculdade Olga Mettig, bem como em Investigação Forense e Perícia Criminal pela Faculdade de Minas.
              </p>

              <p className="text-foreground/65 text-lg leading-relaxed">
                Atua na área de Advocacia Criminal, observando as normas legais, a ética profissional e o respeito às garantias constitucionais e ao devido processo legal.
              </p>
            </div>

            <div className={`space-y-4 pt-4 reveal delay-200 ${contentRevealed ? 'revealed' : ''}`}>
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-primary/20">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground/75 font-medium">{item.text}</span>
                </div>
              ))}
              
              {/* OAB Number */}
              <div className="flex items-center gap-4 group pt-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-primary/20">
                  <Scale className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">
                  OAB/BA nº 84.379
                </span>
              </div>
            </div>

            <a
              href="https://wa.me/5571997071372?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 text-primary hover:text-primary/80 font-medium transition-colors group reveal delay-300 ${contentRevealed ? 'revealed' : ''}`}
            >
              <span className="link-underline">Entrar em contato</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
