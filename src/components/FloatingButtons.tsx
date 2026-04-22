import { useState, useEffect } from "react";
import { MessageCircle, ArrowUp, X } from "lucide-react";

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show WhatsApp button after a delay
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Show tooltip after button appears
    if (isVisible) {
      const tooltipTimer = setTimeout(() => setShowTooltip(true), 3000);
      const hideTimer = setTimeout(() => setShowTooltip(false), 8000);
      return () => {
        clearTimeout(tooltipTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [isVisible]);

  useEffect(() => {
    // Show back to top button when scrolled
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      {/* Tooltip */}
      <div 
        className={`absolute bottom-full right-0 mb-3 transition-all duration-300 ${
          showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="bg-card border border-border/50 rounded-xl p-4 shadow-xl max-w-[200px] relative">
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 w-5 h-5 bg-muted rounded-full flex items-center justify-center text-foreground/50 hover:text-foreground transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="text-foreground/80 text-sm leading-snug">
            Precisa de ajuda jurídica? Fale conosco!
          </p>
          {/* Arrow */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-card border-r border-b border-border/50 transform rotate-45" />
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`flex items-center justify-center w-12 h-12 bg-card border border-border/50 hover:border-primary/50 rounded-full shadow-lg transition-all duration-300 hover:scale-105 group ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" />
      </button>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5571997071372?text=Olá! Gostaria de agendar uma consulta."
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full shadow-lg transition-all duration-300 hover:scale-105 group"
        aria-label="Contato via WhatsApp"
      >
        {/* Pulse rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <span className="absolute inset-0 rounded-full pulse-ring" />
        
        <MessageCircle className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" />
      </a>
    </div>
  );
};

export default FloatingButtons;


