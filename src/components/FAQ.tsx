import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "O que é a Certificação G2?",
      answer: "A Certificação G2 é uma autorização especial do Google que permite anunciar serviços financeiros sem as restrições padrão. É uma certificação oficial que valida sua empresa para campanhas de produtos financeiros, empréstimos, cartões de crédito e investimentos."
    },
    {
      question: "Por que o Google exige essa aprovação?",
      answer: "O Google tem políticas rígidas para anúncios de serviços financeiros para proteger os usuários. A Certificação G2 garante que sua empresa atenda aos padrões de compliance e transparência exigidos, permitindo que você anuncie esses produtos com segurança."
    },
    {
      question: "Quanto tempo leva para liberar a certificação?",
      answer: "Nossa aprovação via autorização de terceiros é muito rápida! Na maioria dos casos, a certificação é liberada em poucas horas. O processo pode levar no máximo 48 horas úteis para ser concluído."
    },
    {
      question: "O que acontece se eu não fizer a certificação?",
      answer: "Sem a Certificação G2, suas campanhas de serviços financeiros continuarão sendo rejeitadas ou limitadas pelo Google Ads. Isso significa perda de leads, clientes e receita. Você ficará impossibilitado de competir no mercado digital de forma efetiva."
    },
    {
      question: "A certificação é permanente?",
      answer: "Sim! Uma vez aprovada, a Certificação G2 fica ativa em sua conta permanentemente, desde que você mantenha as boas práticas e políticas do Google. Não é necessário renovar ou refazer o processo."
    },
    {
      question: "Como funciona o suporte via WhatsApp?",
      answer: "Nosso suporte é completo e personalizado. Você receberá acompanhamento desde o início do processo até a liberação completa da certificação. Esclarecemos dúvidas e fornecemos orientações em tempo real pelo WhatsApp."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Esclarecemos as principais dúvidas sobre a Certificação G2
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg border border-border shadow-card"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-card-foreground hover:no-underline hover:bg-muted/30 rounded-t-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;