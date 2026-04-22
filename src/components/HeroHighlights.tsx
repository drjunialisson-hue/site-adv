import { Gavel, Scale, ShieldCheck } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const HeroHighlights = () => {
  const { ref, isRevealed } = useReveal(0.1);

  const stats = [
    { 
      title: "Atuação Profissional", 
      desc: "Audiências, elaboração de peças, acompanhamento processual, etc.",
      icon: Gavel
    },
    { 
      title: "Experiência Profissional", 
      desc: "Atuação em demandas de natureza criminal.",
      icon: Scale
    },
    { 
      title: "Trajetória Profissional", 
      desc: "Exercício da advocacia pautado na ética e na responsabilidade técnica.",
      icon: ShieldCheck
    },
  ];

  return (
    <section className="bg-[#364433] py-16 w-full relative z-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20 reveal ${isRevealed ? 'revealed' : ''}`}
        >
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center text-center px-4 py-6 md:py-0"
              style={{ transitionDelay: isRevealed ? `${i * 100}ms` : '0ms' }}
            >
              <div className="mb-4">
                <stat.icon className="w-10 h-10 text-[#C5A059]" />
              </div>
              
              <h3 className="text-white font-serif font-bold text-lg mb-2">
                {stat.title}
              </h3>
              
              <p className="text-white/80 text-sm font-light max-w-xs leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroHighlights;
