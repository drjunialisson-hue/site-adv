import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, FileQuestion, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import notFoundImage from "@/assets/404.webp";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-24 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/[0.02] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Illustration */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative max-w-3xl lg:max-w-4xl">
                <img
                  src={notFoundImage}
                  alt="404 - Página não encontrada"
                  className="w-full h-auto"
                />
                <div className="mt-6 flex items-center justify-center lg:justify-end">
                  <span className="w-24 h-px bg-primary/50" />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="text-center lg:text-left">
              {/* 404 Number */}
              <div className="mb-6">
                <h1 className="text-7xl md:text-8xl font-serif font-bold text-primary mb-4">
                  404
                </h1>
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                  <span className="w-12 h-px bg-primary/50" />
                  <FileQuestion className="w-6 h-6 text-primary/60" />
                  <span className="w-12 h-px bg-primary/50" />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4">
                Página não{" "}
                <span className="gold-gradient-text italic">encontrada</span>
              </h2>

              {/* Description */}
              <p className="text-foreground/70 text-lg md:text-xl mb-6 leading-relaxed">
                A página solicitada não está disponível ou o endereço informado está incorreto. 
                Nossa equipe está à disposição para auxiliá-lo a encontrar o que precisa.
              </p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-8">
                <Button variant="gold" size="lg" className="shadow-lg shadow-primary/20" asChild>
                  <Link to="/">
                    <Home className="w-4 h-4 mr-2" />
                    Voltar ao Início
                  </Link>
                </Button>
                
                <Button variant="outline" size="lg" asChild>
                  <a href="https://wa.me/5571997071372?text=Olá!%20Preciso%20de%20ajuda%20para%20encontrar%20a%20página%20correta." target="_blank" rel="noopener noreferrer">
                    <Search className="w-4 h-4 mr-2" />
                    Falar com Especialista
                  </a>
                </Button>
              </div>

              {/* Quick Links */}
              <div className="border-t border-border/30 pt-6">
                <p className="text-foreground/50 text-sm mb-4 uppercase tracking-wider">
                  Links Úteis
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm">
                  <a href="/#sobre" className="text-foreground/60 hover:text-primary transition-colors link-underline">
                    Sobre
                  </a>
                  <span className="text-foreground/20">•</span>
                  <a href="/#servicos" className="text-foreground/60 hover:text-primary transition-colors link-underline">
                    Serviços
                  </a>
                  <span className="text-foreground/20">•</span>
                  <a href="/#areas" className="text-foreground/60 hover:text-primary transition-colors link-underline">
                    Áreas de Atuação
                  </a>
                  <span className="text-foreground/20">•</span>
                  <a href="/#contato" className="text-foreground/60 hover:text-primary transition-colors link-underline">
                    Contato
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
