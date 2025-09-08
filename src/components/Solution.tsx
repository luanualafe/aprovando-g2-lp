import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Users, Clock, MessageCircle } from "lucide-react";

const Solution = () => {
  const whatsappLink = "https://wa.me/5511978712950?text=Quero%20solicitar%20a%20aprova%C3%A7%C3%A3o%20do%20G2%20para%20meu%20neg%C3%B3cio";

  const benefits = [
    {
      icon: CheckCircle,
      title: "Rode anúncios de serviços financeiros sem bloqueios",
      description: "Certificação oficial que libera sua conta para todos os tipos de campanhas"
    },
    {
      icon: Users,
      title: "Aumento de conversões e clientes",
      description: "Mais visibilidade = mais leads qualificados para seu negócio"
    },
    {
      icon: Zap,
      title: "Aprovação simples e rápida",
      description: "Processo descomplicado via autorização de terceiros"
    },
    {
      icon: MessageCircle,
      title: "Suporte via WhatsApp",
      description: "Acompanhamento completo durante todo o processo"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            A solução definitiva para seus anúncios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aprovação imediata da Certificação G2 via autorização de terceiros. 
            Simples, rápido e eficaz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-xl p-6 shadow-card border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-whatsapp/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-whatsapp" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="whatsapp" 
            size="lg"
            asChild
            className="text-lg px-8 py-6 h-auto"
          >
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <MessageCircle size={20} />
              Solicitar Certificação Agora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solution;