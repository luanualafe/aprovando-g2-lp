import { AlertTriangle, Ban, TrendingDown } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: Ban,
      title: "Contas limitadas pelo Google Ads",
      description: "Seus anúncios são constantemente rejeitados ou suspensos"
    },
    {
      icon: AlertTriangle,
      title: "Dificuldade em anunciar serviços financeiros",
      description: "Políticas rígidas impedem suas campanhas de rodarem"
    },
    {
      icon: TrendingDown,
      title: "Perda de leads e clientes",
      description: "Cada dia sem anunciar é dinheiro saindo do seu bolso"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Cansado dos bloqueios constantes?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sabemos como é frustrante ter suas campanhas rejeitadas pelo Google. 
            Isso afeta diretamente seus resultados e faturamento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-card border border-border text-center"
            >
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <problem.icon className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;