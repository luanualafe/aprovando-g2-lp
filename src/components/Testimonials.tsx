import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "João M.",
      text: "Consegui finalmente rodar meus anúncios de crédito sem restrições. Valeu cada centavo!",
      rating: 5
    },
    {
      name: "Ana P.",
      text: "Em menos de 48h já estava com a certificação ativa. Processo super rápido e eficiente.",
      rating: 5
    },
    {
      name: "Carlos R.",
      text: "Depois da certificação G2, minhas campanhas de serviços financeiros decolaram. Recomendo!",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground">
            Centenas de empresas já desbloquearam suas contas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-card border border-border relative"
            >
              <Quote className="w-8 h-8 text-whatsapp/30 absolute top-4 right-4" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-whatsapp fill-whatsapp" />
                ))}
              </div>

              <p className="text-card-foreground mb-4 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Cliente verificado
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;