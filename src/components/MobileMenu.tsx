import { Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  navLinks: Array<{ href: string; label: string; id: string }>;
}

const MobileMenu = ({ isOpen, onClose, activeSection, navLinks }: MobileMenuProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Prevenir scroll do body quando menu aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  // Fechar menu ao pressionar ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  if (!mounted) return null;

  const menuContent = (
    <>
      {/* Overlay com backdrop blur */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 z-[9998]' : 'opacity-0 z-[-1] pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
        style={{ top: '40px' }}
      />
      
      {/* Menu Container - Slide from right */}
      <div 
        className={`lg:hidden fixed top-[40px] right-0 bottom-0 w-full sm:max-w-sm bg-background shadow-2xl transition-all duration-300 ease-out z-[9999] border-l border-border/30 ${
          isOpen 
            ? 'translate-x-0 opacity-100' 
            : 'translate-x-full opacity-0'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        aria-hidden={!isOpen}
      >
        <div className="h-full flex flex-col">
          {/* Header with Logo and Close Button */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-border/30 flex-shrink-0 bg-card/30">
            <a href="/" className="flex items-center gap-3 group" onClick={onClose}>
              <img 
                src="/logo-horizontal.png" 
                alt="Dr. Junialisson Costa - Advocacia Criminal" 
                className="w-40 h-auto object-contain" 
              />
            </a>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted/50 rounded-lg transition-colors ml-3 flex-shrink-0"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6 text-foreground/70 hover:text-foreground" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <nav className="px-5 py-6 flex flex-col h-full">
              {/* Navigation Links */}
              <div className="space-y-2 mb-auto">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        onClose();
                        setTimeout(() => {
                          window.location.href = link.href;
                        }, 150);
                      }}
                      className={`
                        group relative flex items-center gap-4 px-5 py-4 rounded-xl
                        transition-all duration-200
                        ${
                          isActive
                            ? 'text-primary bg-primary/10 font-semibold'
                            : 'text-foreground/70 hover:text-foreground hover:bg-muted/30'
                        }
                      `}
                      style={{
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen 
                          ? 'translateX(0)' 
                          : 'translateX(30px)',
                        transition: `all 0.3s ease-out ${index * 50}ms`
                      }}
                    >
                      {isActive && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full" />
                      )}
                      <span className="text-base">{link.label}</span>
                      {isActive && (
                        <div className="ml-auto w-2 h-2 rounded-full bg-primary" />
                      )}
                    </a>
                  );
                })}
              </div>
              
              {/* Divider */}
              <div className="h-px bg-border/40 my-6" />
              
              {/* Contact Section */}
              <div className="space-y-3">
                <div className="px-1">
                  <p className="text-xs text-foreground/50 uppercase tracking-wider mb-3 font-medium">
                    Contato Rápido
                  </p>
                </div>
                
                {/* Phone */}
                <a 
                  href="tel:+5571997071372" 
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-card/50 border border-border/30 text-foreground/80 hover:text-foreground hover:border-primary/30 transition-all duration-200 group"
                  onClick={onClose}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-foreground/50 mb-0.5">Telefone</p>
                    <p className="font-semibold text-sm">(71) 99707-1372</p>
                  </div>
                </a>
                
                {/* CTA Button */}
                <Button 
                  variant="gold" 
                  className="w-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30" 
                  size="lg" 
                  asChild
                >
                  <a 
                    href="https://wa.me/5571997071372?text=Olá!%20Gostaria%20de%20falar%20com%20o%20especialista." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={onClose}
                  >
                    FALE COM O ESPECIALISTA
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );

  return createPortal(menuContent, document.body);
};

export default MobileMenu;
