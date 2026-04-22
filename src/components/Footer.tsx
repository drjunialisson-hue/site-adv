import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/#inicio", label: "Início" },
    { href: "/#sobre", label: "Sobre" },
    { href: "/#areas", label: "Atuação" },
    { href: "/#equipe", label: "Equipe" },
    { href: "/#faq", label: "FAQ" },
    { href: "/#contato", label: "Contato" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/dr.junialissoncosta", label: "Instagram" },
  ];

  return (
    <footer className="bg-navy-deep border-t border-border/20 pb-32 md:pb-0">
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-6 group">
              <img 
                src="/logo-horizontal.png" 
                alt="Dr. Junialisson Costa - Logo Rodapé" 
                className="w-60 h-auto object-contain" 
              />
            </a>
            <p className="text-foreground/50 max-w-sm leading-relaxed text-sm">
              Advocacia especializada em direito criminal. 
              Compromisso com ética e dedicação na defesa dos seus direitos.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 border border-border/40 rounded-lg flex items-center justify-center text-foreground/50 hover:text-primary hover:border-primary/40 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-foreground mb-5 text-sm uppercase tracking-wider">
              Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-foreground/50 hover:text-primary transition-colors text-sm link-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-semibold text-foreground mb-5 text-sm uppercase tracking-wider">
              Contato
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="mailto:contato@junialissoncosta.adv.br"
                  className="flex items-start gap-2 text-foreground/50 hover:text-primary transition-colors group"
                >
                  <Mail className="w-4 h-4 text-primary/70 mt-0.5 flex-shrink-0 group-hover:text-primary transition-colors" />
                  <div>
                    <span className="text-primary/70 text-xs block mb-0.5">E-mail</span>
                    <span className="block">contato@junialissoncosta.adv.br</span>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+5571997071372"
                  className="flex items-start gap-2 text-foreground/50 hover:text-primary transition-colors group"
                >
                  <Phone className="w-4 h-4 text-primary/70 mt-0.5 flex-shrink-0 group-hover:text-primary transition-colors" />
                  <div>
                    <span className="text-primary/70 text-xs block mb-0.5">Telefone</span>
                    <span className="block">(71) 99707-1372</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-foreground/50">
                  <MapPin className="w-4 h-4 text-primary/70 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-primary/70 text-xs block mb-0.5">Endereço</span>
                    <span className="block">Salvador, BA</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/20">
        <div className="container mx-auto px-4 lg:px-6 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-foreground/40 text-xs">
            <p>
              © {currentYear} Dr. Junialisson Costa. Todos os direitos reservados.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
              <div className="flex items-center gap-4">
                <Link 
                  to="/privacidade" 
                  className="hover:text-primary transition-colors link-underline"
                >
                  Política de Privacidade
                </Link>
                <span className="text-foreground/20">•</span>
                <Link 
                  to="/termos" 
                  className="hover:text-primary transition-colors link-underline"
                >
                  Termos de Uso
                </Link>
              </div>
              <span className="text-foreground/20 hidden md:inline">•</span>
              <p className="text-foreground/40 text-xs">
                Desenvolvido por{" "}
                <a 
                  href="https://studiooryon.pro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Studio Oryon
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
