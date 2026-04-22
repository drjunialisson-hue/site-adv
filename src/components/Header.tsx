import { useState, useEffect } from "react";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detectar seção ativa baseada no scroll
      const sections = ["inicio", "sobre", "servicos", "equipe", "diferenciais", "faq", "contato"];
      const scrollPosition = window.scrollY + 150; // Offset para considerar o header
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
      
      // Se estiver no topo, marcar início como ativo
      if (window.scrollY < 100) {
        setActiveSection("inicio");
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Verificar na montagem inicial
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/#inicio", label: "Início", id: "inicio" },
    { href: "/#sobre", label: "Sobre", id: "sobre" },
    { href: "/#servicos", label: "Atuação", id: "servicos" },
    { href: "/#equipe", label: "Equipe", id: "equipe" },
    { href: "/#diferenciais", label: "Diferenciais", id: "diferenciais" },
    { href: "/#faq", label: "FAQ", id: "faq" },
    { href: "/#contato", label: "Contato", id: "contato" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-navy-deep/95 backdrop-blur-sm border-b border-border/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-center lg:justify-end h-10 text-xs text-foreground/70">
            {/* Email e Telefone - Lado a Lado no Lado Direito */}
            <div className="flex items-center gap-4 lg:gap-6">
              {/* Email - Desktop only */}
              <div className="hidden lg:flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-primary/70" />
                <a 
                  href="mailto:contato@junialissoncosta.adv.br"
                  className="hover:text-primary transition-colors"
                >
                  contato@junialissoncosta.adv.br
                </a>
              </div>
              
              {/* Telefone - Sempre visível */}
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary/70" />
                <span>Urgência 24 horas</span>
                <a 
                  href="tel:+5571997071372"
                  className="hover:text-primary transition-colors font-medium"
                >
                  (71) 99707-1372
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header
        role="banner"
        className={`fixed top-10 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/5"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Oculto quando menu mobile está aberto */}
          <a href="/" className={`flex items-center gap-3 group transition-opacity duration-300 ${isMobileMenuOpen ? 'lg:flex opacity-0 pointer-events-none' : 'flex opacity-100'}`}>
            <img 
              src="/logo-horizontal.png" 
              alt="Dr. Junialisson Costa - Advocacia Criminal" 
              className="w-40 lg:w-52 h-auto object-contain" 
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 transition-colors duration-300 text-sm font-medium ${
                    isActive 
                      ? "text-primary" 
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a href="tel:+5571997071372" className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors text-sm group">
              <Phone className="w-4 h-4 text-primary icon-hover" />
              <span>(71) 99707-1372</span>
            </a>
            <Button variant="gold" size="default" className="shadow-lg shadow-primary/20" asChild>
              <a href="https://wa.me/5571997071372?text=Olá!%20Gostaria%20de%20falar%20com%20o%20especialista." target="_blank" rel="noopener noreferrer">FALE COM O ESPECIALISTA</a>
            </Button>
          </div>

          {/* Mobile Menu Button - Sempre hambúrguer */}
          <button
            className={`lg:hidden text-foreground p-2 -mr-2 hover:bg-muted/50 rounded-lg transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menu"
          >
            <div className="relative w-6 h-6">
              <span className="absolute top-1 left-0 w-6 h-0.5 bg-current" />
              <span className="absolute top-[11px] left-0 w-6 h-0.5 bg-current" />
              <span className="absolute bottom-1 left-0 w-6 h-0.5 bg-current" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
        navLinks={navLinks}
      />
    </header>
    </>
  );
};

export default Header;
