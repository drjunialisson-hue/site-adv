import { useReveal } from "@/hooks/useReveal";
import { allServices } from "@/data/services";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const { ref: headerRef, isRevealed: headerRevealed } = useReveal(0.2);
  const { ref: contentRef, isRevealed: contentRevealed } = useReveal(0.1);
  const { ref: servicesRef, isRevealed: servicesRevealed } = useReveal(0.1);

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/[0.02] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 px-2"
        >
          <div className={`flex items-center justify-center gap-3 mb-4 reveal ${headerRevealed ? 'revealed' : ''}`}>
            <span className="w-10 h-px bg-primary/50" />
            <span className="text-primary font-medium text-sm tracking-[0.15em] uppercase">
              Atuação Especializada
            </span>
            <span className="w-10 h-px bg-primary/50" />
          </div>
          
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-semibold reveal delay-100 ${headerRevealed ? 'revealed' : ''}`}>
            Advocacia <span className="gold-gradient-text italic pr-2">Criminal</span>
          </h2>
        </div>

        {/* Main Content */}
        <div 
          ref={contentRef}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16"
        >
          <div className={`space-y-6 reveal ${contentRevealed ? 'revealed' : ''}`}>
            <p className="text-foreground/65 text-lg leading-relaxed">
              A atuação do escritório na seara penal compreende a assessoria jurídica em investigações e processos criminais, abrangendo medidas cautelares relacionadas à liberdade, tais como audiências de custódia, habeas corpus, pedidos de liberdade provisória e relaxamento de prisão, bem como o acompanhamento das ações penais, com a elaboração de peças processuais, participação em audiências e realização de sustentações orais.
            </p>
          </div>

          <div className={`space-y-6 reveal delay-150 ${contentRevealed ? 'revealed' : ''}`}>
            <p className="text-foreground/65 text-lg leading-relaxed">
              O acompanhamento também pode ocorrer na fase investigativa, incluindo a atuação em inquéritos policiais e demais procedimentos de natureza penal, observados os limites legais, o devido processo legal e as garantias constitucionais.
            </p>
          </div>
        </div>

        {/* Highlight Box */}
        <div className={`card-elevated rounded-2xl p-8 lg:p-10 mb-16 reveal delay-200 ${contentRevealed ? 'revealed' : ''}`}>
          <p className="text-foreground/75 text-lg lg:text-xl leading-relaxed text-center font-medium">
            Contamos com equipe especializada e experiente, apta a atuar em demandas penais 
            de diferentes complexidades, destacando-se nas seguintes matérias:
          </p>
        </div>

        {/* Services Grid */}
        <div 
          ref={servicesRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
        >
          {allServices.map((service, index) => {
            const ServiceIcon = service.icon;
            const whatsappMessage = encodeURIComponent(`Olá! Gostaria de saber mais sobre ${service.text}.`);
            const whatsappUrl = `https://wa.me/5571997071372?text=${whatsappMessage}`;
            
            return (
              <div
                key={service.id}
                className={`group relative flex flex-col p-5 rounded-xl bg-card/60 border border-border/30 
                  hover:border-primary/40 hover:bg-card/90 transition-all duration-300 hover-lift
                  reveal ${servicesRevealed ? 'revealed' : ''}`}
                style={{ transitionDelay: servicesRevealed ? `${index * 40}ms` : '0ms' }}
              >
                {/* Icon and Text */}
                <div className="flex items-start gap-3 mb-4 flex-1">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <ServiceIcon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground/75 text-sm leading-relaxed pt-1.5 group-hover:text-foreground/95 transition-colors flex-1 font-medium">
                    {service.text}
                  </span>
                </div>

                {/* Buttons Container */}
                <div className="flex flex-col gap-2">
                  {/* WhatsApp Button - Primary Action */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-primary/10 hover:bg-primary/15 border border-primary/30 hover:border-primary/50 text-primary rounded-lg px-3 py-2.5 text-xs font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group/btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MessageCircle className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110 text-[#25D366]" />
                    <span>Falar no WhatsApp</span>
                  </a>

                  {/* Saiba Mais Button - Discreet, for SEO */}
                  {service.slug && (
                    <Link
                      to={`/servicos/${service.slug}`}
                      className="flex items-center justify-center gap-1.5 w-full text-foreground/50 hover:text-foreground/80 text-[10px] font-medium transition-colors duration-300 group/link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Saiba mais</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                    </Link>
                  )}
                </div>

                {/* Subtle hover indicator */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-xl" />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 lg:mt-16 reveal delay-500 ${servicesRevealed ? 'revealed' : ''}`}>
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
    </section>
  );
};

export default ServicesSection;

