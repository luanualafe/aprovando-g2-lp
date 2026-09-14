import { CheckCircle } from "lucide-react";
import googleAdsAprovacao from "@/assets/google-ads-aprovacao.png";

const ApprovalProof = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Exemplo de solicitações de aprovação
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja um exemplo real de solicitação de aprovação feita por nós para
            nossos clientes. Aqui garantimos que o nosso G2 esteja na sua conta e
            que seus anúncios rodem sem restrições.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-card rounded-xl p-4 sm:p-6 shadow-card border border-border">
            <img
              src={googleAdsAprovacao || "/placeholder.svg"}
              alt="E-mail oficial do Google Ads confirmando a aprovação da verificação de terceiros para exibir anúncios de serviços financeiros"
              className="w-full h-auto rounded-lg border border-border"
            />
          </div>

          <div className="flex items-center justify-center gap-3 mt-6">
            <CheckCircle className="w-6 h-6 text-whatsapp flex-shrink-0" />
            <p className="text-base sm:text-lg font-medium text-card-foreground text-center">
              Aprovação oficial confirmada diretamente pela Equipe do Google Ads
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApprovalProof;
