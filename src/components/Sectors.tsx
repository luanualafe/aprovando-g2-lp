const Sectors = () => {
  const sectors = [
    {
      icon: "💳",
      title: "Consórcios e Crédito Pessoal"
    },
    {
      icon: "🏦",
      title: "Bancos e Correspondentes Bancários"
    },
    {
      icon: "📈",
      title: "Investimentos e Consultorias Financeiras"
    },
    {
      icon: "🏠",
      title: "Imobiliárias e Financiamento de Imóveis"
    },
    {
      icon: "🚗",
      title: "Financiamento e Venda de Veículos"
    },
    {
      icon: "💼",
      title: "Empréstimos Empresariais"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Quem mais precisa da Certificação G2?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Diversos setores enfrentam bloqueios no Google Ads. Veja alguns dos mais afetados:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {sectors.map((sector, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl">
                  {sector.icon}
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  {sector.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;