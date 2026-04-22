import { useState, useEffect } from "react";
import { Accessibility, Type, Contrast, Keyboard } from "lucide-react";
import { Button } from "@/components/ui/button";

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    const savedFontSize = localStorage.getItem("accessibility-font-size");
    const savedContrast = localStorage.getItem("accessibility-high-contrast");
    
    if (savedFontSize) {
      setFontSize(Number(savedFontSize));
      document.documentElement.style.fontSize = `${savedFontSize}%`;
    }
    
    if (savedContrast === "true") {
      setHighContrast(true);
      document.documentElement.classList.add("high-contrast");
    }
  }, []);

  const handleFontSizeChange = (delta: number) => {
    const newSize = Math.max(75, Math.min(150, fontSize + delta));
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
    localStorage.setItem("accessibility-font-size", String(newSize));
  };

  const handleContrastToggle = () => {
    const newContrast = !highContrast;
    setHighContrast(newContrast);
    
    if (newContrast) {
      document.documentElement.classList.add("high-contrast");
      localStorage.setItem("accessibility-high-contrast", "true");
    } else {
      document.documentElement.classList.remove("high-contrast");
      localStorage.setItem("accessibility-high-contrast", "false");
    }
  };

  const handleReset = () => {
    setFontSize(100);
    setHighContrast(false);
    document.documentElement.style.fontSize = "100%";
    document.documentElement.classList.remove("high-contrast");
    localStorage.removeItem("accessibility-font-size");
    localStorage.removeItem("accessibility-high-contrast");
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
      
      if (e.altKey && e.shiftKey && e.key === "A") {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Abrir menu de acessibilidade"
        aria-expanded={isOpen}
        title="Menu de Acessibilidade (Alt + Shift + A)"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div
            className="fixed bottom-24 left-6 z-50 bg-card border border-border rounded-xl shadow-2xl p-6 w-80 max-w-[calc(100vw-3rem)]"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de acessibilidade"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">Acessibilidade</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Fechar menu de acessibilidade"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Type className="w-4 h-4 text-primary" />
                  <label className="text-sm font-medium text-foreground">
                    Tamanho da fonte
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleFontSizeChange(-5)}
                    aria-label="Diminuir fonte"
                    disabled={fontSize <= 75}
                  >
                    A-
                  </Button>
                  <span className="flex-1 text-center text-sm text-muted-foreground">
                    {fontSize}%
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleFontSizeChange(5)}
                    aria-label="Aumentar fonte"
                    disabled={fontSize >= 150}
                  >
                    A+
                  </Button>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Contrast className="w-4 h-4 text-primary" />
                  <label className="text-sm font-medium text-foreground">
                    Alto contraste
                  </label>
                </div>
                <Button
                  variant={highContrast ? "default" : "outline"}
                  size="sm"
                  onClick={handleContrastToggle}
                  className="w-full"
                  aria-pressed={highContrast}
                >
                  {highContrast ? "Desativar" : "Ativar"} alto contraste
                </Button>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Keyboard className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    Navegação por teclado
                  </span>
                </div>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>• Tab: navegar entre elementos</p>
                  <p>• Enter: ativar botões/links</p>
                  <p>• Esc: fechar menus</p>
                  <p>• Alt + Shift + A: abrir este menu</p>
                </div>
              </div>

              <div className="pt-2 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleReset}
                  className="w-full"
                >
                  Restaurar padrões
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AccessibilityWidget;

