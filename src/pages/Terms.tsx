import { Link } from "react-router-dom";
import { FileText, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useReveal } from "@/hooks/useReveal";

const Terms = () => {
  const { ref: headerRef, isRevealed: headerRevealed } = useReveal(0.2);
  const { ref: contentRef, isRevealed: contentRevealed } = useReveal(0.1);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        canonical="/termos"
        title="Termos de Uso - Dr. Junialisson Costa"
        description="Termos de Uso do site do escritório de advocacia do Dr. Junialisson Costa. Conheça as condições de uso e as diretrizes para navegação em nosso site."
        keywords="termos de uso, condições de uso, termos e condições, Dr. Junialisson Costa"
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
              <FileText className="w-5 h-5 text-primary" />
              <span className="w-10 h-px bg-primary/50" />
            </div>
            
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-semibold reveal delay-100 ${headerRevealed ? 'revealed' : ''}`}>
              Termos de{" "}
              <span className="gold-gradient-text italic">Uso</span>
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
                1. Aceitação dos Termos
              </h2>
              <p className="leading-relaxed">
                Ao acessar e utilizar este site, você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. 
                Se você não concorda com qualquer parte destes termos, não deve utilizar nosso site. O escritório de 
                advocacia do Dr. Junialisson Costa ("nós", "nosso" ou "escritório") reserva-se o direito de modificar 
                estes termos a qualquer momento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                2. Uso do Site
              </h2>
              <p className="leading-relaxed mb-3">
                Você concorda em utilizar este site apenas para fins legais e de maneira que não:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Viole qualquer lei ou regulamento aplicável</li>
                <li>Infrinja direitos de propriedade intelectual de terceiros</li>
                <li>Transmita conteúdo ofensivo, difamatório ou ilegal</li>
                <li>Interfira ou interrompa o funcionamento do site</li>
                <li>Tente obter acesso não autorizado a sistemas ou dados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                3. Informações do Site
              </h2>
              <p className="leading-relaxed">
                As informações contidas neste site são fornecidas apenas para fins informativos gerais. Embora 
                nos esforcemos para manter as informações atualizadas e precisas, não garantimos a completude, 
                precisão ou atualidade de todas as informações. As informações jurídicas fornecidas não constituem 
                aconselhamento jurídico específico e não devem ser consideradas como tal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                4. Relação Advogado-Cliente
              </h2>
              <p className="leading-relaxed">
                O uso deste site ou o envio de informações através do formulário de contato não cria, por si só, 
                uma relação advogado-cliente. Uma relação advogado-cliente formal só será estabelecida mediante 
                acordo escrito específico. Nenhuma informação confidencial deve ser transmitida através deste 
                site até que uma relação advogado-cliente seja formalmente estabelecida.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                5. Propriedade Intelectual
              </h2>
              <p className="leading-relaxed">
                Todo o conteúdo deste site, incluindo textos, gráficos, logotipos, ícones, imagens e software, é 
                propriedade do escritório ou de seus licenciadores e está protegido por leis de direitos autorais 
                e outras leis de propriedade intelectual. Você não pode reproduzir, distribuir, modificar ou criar 
                obras derivadas sem autorização prévia por escrito.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                6. Links para Sites de Terceiros
              </h2>
              <p className="leading-relaxed">
                Nosso site pode conter links para sites de terceiros. Não temos controle sobre o conteúdo ou 
                políticas de privacidade desses sites e não nos responsabilizamos por eles. A inclusão de qualquer 
                link não implica endosso do site vinculado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                7. Limitação de Responsabilidade
              </h2>
              <p className="leading-relaxed">
                Na medida máxima permitida por lei, não seremos responsáveis por quaisquer danos diretos, indiretos, 
                incidentais, especiais ou consequenciais resultantes do uso ou incapacidade de usar este site, 
                incluindo, mas não limitado a, perda de dados ou lucros.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                8. Indenização
              </h2>
              <p className="leading-relaxed">
                Você concorda em indenizar e isentar o escritório, seus sócios, funcionários e agentes de qualquer 
                reclamação, dano, obrigação, perda, responsabilidade, custo ou despesa, incluindo honorários advocatícios 
                razoáveis, decorrentes de ou relacionados ao seu uso do site ou violação destes Termos de Uso.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                9. Lei Aplicável
              </h2>
              <p className="leading-relaxed">
                Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa 
                relacionada a estes termos será submetida à jurisdição exclusiva dos tribunais de Salvador, Bahia.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                10. Alterações nos Termos
              </h2>
              <p className="leading-relaxed">
                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão 
                em vigor imediatamente após sua publicação no site. É sua responsabilidade revisar periodicamente 
                estes termos para estar ciente de quaisquer alterações.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                11. Contato
              </h2>
              <p className="leading-relaxed">
                Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
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

export default Terms;
