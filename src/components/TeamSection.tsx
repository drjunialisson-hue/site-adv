import { Instagram, Mail, Phone, MessageCircle } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import draCassia from "@/assets/Dra. Cássia de Santana.JPEG";
import drGabriel from "@/assets/Dr. Gabriel Boccanera.JPEG";

const TeamSection = () => {
  const { ref: headerRef, isRevealed: headerRevealed } = useReveal(0.2);
  const { ref: gridRef, isRevealed: gridRevealed } = useReveal(0.1);

  const team = [
    {
      name: "Dra. Cássia de Santana Iglece",
      role: "Advogada",
      specialty: "Direito de Família e Sucessões	",
      description: "Advogada formada pela Universidade Católica de Salvador, especialista em Direito de Família e Sucessões. Pós-graduada pela Legale Educacional e atualmente cursando MBA em Planejamento Sucessório e Holdings pela EBPós. Dedica sua atuação à defesa estratégica em processos de divórcio, guarda, pensão alimentícia, inventários e partilha de bens. Seu atendimento é pautado pela ética e personalização, sempre buscando soluções adequadas às necessidades de cada cliente.",
      image: draCassia,
      phone: "71 99352-3075",
      email: "cassiaiglece.adv@gmail.com",
      instagram: "cassiaigleceadv_",
    },
    {
      name: "Dr. Gabriel Borges Boccanera",
      role: "Advogado",
      specialty: "Direito Penal e Processo Penal",
      description: "Advogado com atuação em Direito Penal e Processo Penal. Desenvolve atividade profissional na área criminal, realizando acompanhamento técnico em investigações e processos penais, desde a fase inquisitorial até as instâncias judiciais competentes. Atua na elaboração de peças processuais, acompanhamento de inquéritos policiais, audiências, pedidos de liberdade, habeas corpus e recursos, sempre em observância aos princípios da legalidade, da ampla defesa e do devido processo legal.",
      image: drGabriel,
      phone: "71 98798-3325",
      email: "boccanera.adv@gmail.com",
      instagram: "boccaneraadv",
    },
  ];

  return (
    <section id="equipe" className="py-24 lg:py-32 bg-secondary/20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Header */}
          <div 
            ref={headerRef}
            className="text-center max-w-2xl mx-auto mb-16 lg:mb-20 px-2"
          >
          <div className={`flex items-center justify-center gap-3 mb-4 reveal ${headerRevealed ? 'revealed' : ''}`}>
            <span className="w-10 h-px bg-primary/50" />
            <span className="text-primary font-medium text-sm tracking-[0.15em] uppercase">
              Nossa Equipe
            </span>
            <span className="w-10 h-px bg-primary/50" />
          </div>
          
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-semibold reveal delay-100 ${headerRevealed ? 'revealed' : ''}`}>
            Advogados <span className="gold-gradient-text italic pr-2">Parceiros</span>
          </h2>
          
          <p className={`text-foreground/55 mt-5 text-lg leading-relaxed reveal delay-200 ${headerRevealed ? 'revealed' : ''}`}>
            Profissionais qualificados e comprometidos com a defesa dos seus direitos.
          </p>
        </div>

        {/* Team Grid */}
        <div 
          ref={gridRef}
          className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto items-stretch"
        >
          {team.map((member, index) => (
            <div
              key={index}
              className={`group card-elevated rounded-2xl p-6 lg:p-8 text-center reveal-scale flex flex-col ${gridRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: gridRevealed ? `${index * 120}ms` : '0ms' }}
            >
              {/* Image Container */}
              <div className="relative mb-6 mx-auto w-40 h-40 lg:w-44 lg:h-44">
                {/* Animated border */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-br from-primary/40 via-transparent to-primary/40 p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow" style={{ animationDuration: '8s' }}>
                  <div className="w-full h-full rounded-full bg-background" />
                </div>
                
                {/* Image with scale effect */}
                <div className="absolute inset-1 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${
                      member.name.includes("Cássia") ? "object-cover object-top" : "object-cover"
                    }`}
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>

                {/* Social Icons - slide up from bottom */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {member.instagram && (
                    <a
                      href={`https://instagram.com/${member.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-white/95 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                    >
                      <Instagram className="w-4 h-4 text-primary" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="w-9 h-9 bg-white/95 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                    >
                      <Mail className="w-4 h-4 text-primary" />
                    </a>
                  )}
                </div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-serif font-semibold text-foreground transition-colors group-hover:text-primary">
                {member.name}
              </h3>
              <p className="text-primary/80 font-medium text-sm mt-1.5">
                {member.role}
              </p>
              <p className="text-foreground/60 text-sm mt-2 mb-4">
                {member.specialty}
              </p>

              {/* Description */}
              <p className="text-foreground/50 text-xs leading-relaxed mb-4 flex-1">
                {member.description}
              </p>

              {/* Contact Info */}
              <div className="space-y-2 pt-4 border-t border-border/30 mt-auto">
                {member.phone && (
                  <>
                    <a
                      href={`tel:55${member.phone.replace(/\s/g, '').replace(/\D/g, '')}`}
                      className="flex items-center justify-center gap-2 text-foreground/60 hover:text-primary transition-colors text-xs group/phone"
                    >
                      <Phone className="w-3 h-3" />
                      <span>{member.phone}</span>
                    </a>
                    <a
                      href={`https://wa.me/55${member.phone.replace(/\D/g, '')}?text=Olá! Gostaria de agendar uma consulta.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-lg px-3 py-2.5 transition-all duration-300 hover:scale-105 text-xs font-medium shadow-sm shadow-[#25D366]/20 group/whatsapp"
                    >
                      <MessageCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>WhatsApp</span>
                    </a>
                  </>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center gap-2 text-foreground/60 hover:text-primary transition-colors text-xs group/email"
                  >
                    <Mail className="w-3 h-3" />
                    <span className="truncate">{member.email}</span>
                  </a>
                )}
                {member.instagram && (
                  <a
                    href={`https://instagram.com/${member.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-foreground/60 hover:text-primary transition-colors text-xs group/insta"
                  >
                    <Instagram className="w-3 h-3" />
                    <span>@{member.instagram}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
