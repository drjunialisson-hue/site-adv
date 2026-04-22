import { useState } from "react";
import { Send, MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useReveal } from "@/hooks/useReveal";
import emailjs from "@emailjs/browser";
import DOMPurify from 'dompurify';

const ContactSection = () => {
  const { toast } = useToast();
  const { ref: leftRef, isRevealed: leftRevealed } = useReveal(0.15);
  const { ref: rightRef, isRevealed: rightRevealed } = useReveal(0.15);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Configuração do EmailJS - estas variáveis devem estar no .env
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Validação das variáveis de ambiente
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Configuração de email não encontrada. Por favor, verifique as variáveis de ambiente.");
      }

      // Inicializar EmailJS com a chave pública
      emailjs.init(publicKey);

      // Preparar os parâmetros do template
      // IMPORTANTE: Os nomes das variáveis devem corresponder EXATAMENTE às variáveis do template no EmailJS
      // Template usa: {{title}}, {{name}}, {{email}}, {{message}}, {{time}}
      
      // Obter hora atual formatada
      const now = new Date();
      const timeString = now.toLocaleString('pt-BR', { 
        dateStyle: 'short', 
        timeStyle: 'short' 
      });

      const templateParams = {
        title: DOMPurify.sanitize(formData.subject), // Template espera "title" no assunto
        name: DOMPurify.sanitize(formData.name),     // Template usa "name"
        email: DOMPurify.sanitize(formData.email),   // Template usa "email" no Reply To
        message: DOMPurify.sanitize(formData.message), // Template usa "message"
        time: timeString,        // Template usa "time"
        phone: DOMPurify.sanitize(formData.phone),   // Mantido caso queira usar depois
      };

      // Enviar email usando EmailJS
      await emailjs.send(serviceId, templateId, templateParams);

      // Sucesso
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Recebemos sua mensagem e entraremos em contato em breve.",
      });

      // Limpar formulário
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      // Verificar se é erro de limite de requisições (429 = Too Many Requests)
      // Ou se a mensagem de erro indica limite atingido
      const isRateLimitError = 
        error?.status === 429 || 
        error?.status === 402 ||
        error?.text?.toLowerCase().includes('limit') ||
        error?.text?.toLowerCase().includes('quota') ||
        error?.text?.toLowerCase().includes('exceeded') ||
        error?.text?.toLowerCase().includes('monthly');

      if (isRateLimitError) {
        // Limite atingido - redirecionar para WhatsApp
        const whatsappMessage = encodeURIComponent(
          `Olá! Gostaria de entrar em contato. Meu nome é ${DOMPurify.sanitize(formData.name)}.\n\n` +
          `Assunto: ${DOMPurify.sanitize(formData.subject)}\n\n` +
          `${DOMPurify.sanitize(formData.message)}`
        );
        const whatsappUrl = `https://wa.me/5571997071372?text=${whatsappMessage}`;
        
        toast({
          title: "Limite mensal atingido",
          description: "Redirecionando para WhatsApp...",
          duration: 3000,
        });

        // Redirecionar para WhatsApp após 1 segundo
        setTimeout(() => {
          window.open(whatsappUrl, '_blank');
        }, 1000);

        // Limpar formulário mesmo com erro
        setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
        setIsSubmitting(false);
        return;
      }
      
      // Tratamento de outros erros
      let errorMessage = "Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato diretamente pelo telefone.";
      
      if (error?.status === 400) {
        errorMessage = "Erro na configuração do formulário. Verifique se todas as variáveis do template estão corretas no EmailJS. Se o problema persistir, entre em contato diretamente pelo telefone: (71) 99707-1372";
      } else if (error?.status === 401) {
        errorMessage = "Erro de autenticação. Verifique se a Public Key está correta.";
      } else if (error?.status === 404) {
        errorMessage = "Serviço ou Template não encontrado. Verifique se os IDs estão corretos.";
      } else if (error?.text) {
        errorMessage = `Erro: ${error.text}. Entre em contato diretamente pelo telefone: (71) 99707-1372`;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      toast({
        title: "Erro ao enviar mensagem",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Salvador, BA",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(71) 99707-1372",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@junialissoncosta.adv.br",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg - Sex: 9h às 18h",
    },
  ];

  return (
    <section id="contato" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Info */}
          <div 
            ref={leftRef}
            className="space-y-8"
          >
            <div className={`reveal ${leftRevealed ? 'revealed' : ''}`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-px bg-primary/50" />
                <span className="text-primary font-medium text-sm tracking-[0.15em] uppercase">
                  Contato
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight">
                Como podemos{" "}
                <span className="gold-gradient-text italic pr-2">ajudar</span>?
              </h2>
              <p className="text-foreground/55 mt-5 text-lg leading-relaxed">
                Entre em contato para agendar uma consulta ou esclarecer suas dúvidas.
              </p>
            </div>

            {/* WhatsApp Button */}
            <div className={`reveal delay-100 ${leftRevealed ? 'revealed' : ''}`}>
              <a
                href="https://wa.me/5571997071372?text=Olá! Gostaria de agendar uma consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 w-full sm:w-auto bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl px-6 py-4 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-[#25D366]/30 group"
              >
                <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>

            <div className={`grid sm:grid-cols-2 gap-5 reveal delay-150 ${leftRevealed ? 'revealed' : ''}`}>
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary/15">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground text-sm">{info.title}</h3>
                    <p className="text-foreground/55 text-sm mt-0.5 whitespace-pre-line">
                      {info.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div 
            ref={rightRef}
            className={`card-elevated rounded-2xl p-6 lg:p-8 reveal-right ${rightRevealed ? 'revealed' : ''}`}
          >
            <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
              Envie uma mensagem
            </h3>
            <p className="text-foreground/50 text-sm mb-8">
              Responderemos o mais rápido possível.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-foreground/60 mb-2 block uppercase tracking-wider">
                    Nome *
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Seu nome"
                    className="bg-input/50 border-border/50 focus:border-primary/50 h-11"
                  />
                </div>
                <div>
                  <label className="text-xs text-foreground/60 mb-2 block uppercase tracking-wider">
                    E-mail *
                  </label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="seu@email.com"
                    className="bg-input/50 border-border/50 focus:border-primary/50 h-11"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-foreground/60 mb-2 block uppercase tracking-wider">
                    Telefone *
                  </label>
                  <Input
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="(00) 00000-0000"
                    className="bg-input/50 border-border/50 focus:border-primary/50 h-11"
                  />
                </div>
                <div>
                  <label className="text-xs text-foreground/60 mb-2 block uppercase tracking-wider">
                    Assunto *
                  </label>
                  <Input
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="Tipo de caso"
                    className="bg-input/50 border-border/50 focus:border-primary/50 h-11"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-foreground/60 mb-2 block uppercase tracking-wider">
                  Mensagem *
                </label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Descreva brevemente seu caso..."
                  rows={4}
                  className="bg-input/50 border-border/50 focus:border-primary/50 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="gold" 
                className="w-full shadow-lg shadow-primary/20" 
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  <>
                    Enviar mensagem
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
