import { Link } from "react-router-dom";
import { Shield, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useReveal } from "@/hooks/useReveal";

const PrivacyPolicy = () => {
  const { ref: headerRef, isRevealed: headerRevealed } = useReveal(0.2);
  const { ref: contentRef, isRevealed: contentRevealed } = useReveal(0.1);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        canonical="/privacidade"
        title="Política de Privacidade - Dr. Junialisson Costa"
        description="Política de Privacidade do escritório de advocacia do Dr. Junialisson Costa. Conheça como coletamos, usamos e protegemos suas informações pessoais de acordo com a LGPD."
        keywords="política de privacidade, LGPD, proteção de dados, privacidade, Dr. Junialisson Costa"
      />
      <Header />
      
      <main className="flex-1 py-24 lg:py-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/[0.02] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl relative z-10">
          {/* Header */}
          <div 
            ref={headerRef}
            className="text-center mb-12 lg:mb-16"
          >
            <div className={`flex items-center justify-center gap-3 mb-4 reveal ${headerRevealed ? 'revealed' : ''}`}>
              <span className="w-10 h-px bg-primary/50" />
              <Shield className="w-5 h-5 text-primary" />
              <span className="w-10 h-px bg-primary/50" />
            </div>
            
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-semibold reveal delay-100 ${headerRevealed ? 'revealed' : ''}`}>
              Política de{" "}
              <span className="gold-gradient-text italic">Privacidade</span>
            </h1>
            
            <p className={`text-foreground/55 mt-4 text-sm reveal delay-200 ${headerRevealed ? 'revealed' : ''}`}>
              Última atualização: {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div 
            ref={contentRef}
            className={`prose prose-sm lg:prose-base max-w-none text-foreground/70 space-y-8 reveal ${contentRevealed ? 'revealed' : ''}`}
          >
            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                1. Introdução
              </h2>
              <p className="leading-relaxed">
                Esta Política de Privacidade descreve como o escritório de advocacia do Dr. Junialisson Costa 
                ("nós", "nosso" ou "escritório") coleta, usa e protege suas informações pessoais quando você 
                utiliza nosso site e serviços. Respeitamos sua privacidade e estamos comprometidos em proteger 
                seus dados pessoais de acordo com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                2. Informações que Coletamos
              </h2>
              <p className="leading-relaxed mb-3">
                Podemos coletar as seguintes informações:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Informações de contato:</strong> nome, e-mail, telefone e endereço</li>
                <li><strong>Informações de navegação:</strong> dados de uso do site, endereço IP, tipo de navegador</li>
                <li><strong>Informações de comunicação:</strong> mensagens enviadas através do formulário de contato</li>
                <li><strong>Informações profissionais:</strong> quando relevante para prestação de serviços jurídicos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                3. Como Usamos suas Informações
              </h2>
              <p className="leading-relaxed mb-3">
                Utilizamos suas informações pessoais para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responder suas solicitações e fornecer serviços jurídicos</li>
                <li>Comunicar-nos com você sobre nossos serviços</li>
                <li>Melhorar nosso site e serviços</li>
                <li>Cumprir obrigações legais e regulatórias</li>
                <li>Proteger nossos direitos legais e prevenir fraudes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                4. Compartilhamento de Informações
              </h2>
              <p className="leading-relaxed">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando 
                necessário para prestação de serviços jurídicos, cumprimento de obrigações legais, ou com seu 
                consentimento expresso. Podemos compartilhar informações com prestadores de serviços confiáveis 
                que nos auxiliam na operação do site, sempre sob rigorosos acordos de confidencialidade.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                5. Segurança dos Dados
              </h2>
              <p className="leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas 
                informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, 
                nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% seguro.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                6. Seus Direitos
              </h2>
              <p className="leading-relaxed mb-3">
                De acordo com a LGPD, você tem direito a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Confirmar a existência de tratamento de dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar anonimização, bloqueio ou eliminação de dados desnecessários</li>
                <li>Revogar seu consentimento a qualquer momento</li>
                <li>Solicitar portabilidade dos dados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                7. Cookies
              </h2>
              <p className="leading-relaxed">
                Nosso site pode utilizar cookies para melhorar sua experiência de navegação. Você pode configurar 
                seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                8. Alterações nesta Política
              </h2>
              <p className="leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças 
                significativas publicando a nova política nesta página e atualizando a data de "Última atualização".
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                9. Contato
              </h2>
              <p className="leading-relaxed">
                Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em 
                contato conosco:
              </p>
              <div className="mt-4 p-4 bg-secondary/20 rounded-lg border border-border/30">
                <p className="text-sm space-y-1">
                  <strong className="text-foreground">E-mail:</strong> contato@junialissoncosta.adv.br<br />
                  <strong className="text-foreground">Telefone:</strong> (71) 99707-1372<br />
                  <strong className="text-foreground">Endereço:</strong> Salvador, BA
                </p>
              </div>
            </section>
          </div>

          {/* Back Button */}
          <div className="mt-12 flex justify-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Início
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
