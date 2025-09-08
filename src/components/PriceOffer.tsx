import { Button } from "@/components/ui/button";
import { MessageCircle, Star, Clock } from "lucide-react";

const PriceOffer = () => {
  const whatsappLink = "https://wa.me/5511978712950?text=Quero%20solicitar%20a%20aprova%C3%A7%C3%A3o%20do%20G2%20para%20meu%20neg%C3%B3cio";

  return (
    <section className="py-16 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="text-whatsapp fill-whatsapp" size={24} />
              <Star className="text-whatsapp fill-whatsapp" size={24} />
              <Star className="text-whatsapp fill-whatsapp" size={24} />
              <Star className="text-whatsapp fill-whatsapp" size={24} />
              <Star className="text-whatsapp fill-whatsapp" size={24} />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Invista apenas{" "}
              <span className="text-whatsapp">R$ 1.000,00</span>
            </h2>
            <p className="text-xl text-blue-100 mb-2">
              e desbloqueie sua conta de anúncios para sempre
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm mb-8">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <Clock className="w-8 h-8 text-whatsapp mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Aprovação Rápida</h3>
                <p className="text-sm text-blue-200">Em poucas horas</p>
              </div>
              <div className="text-center">
                <MessageCircle className="w-8 h-8 text-whatsapp mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Suporte Total</h3>
                <p className="text-sm text-blue-200">Via WhatsApp</p>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 text-whatsapp mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Garantia</h3>
                <p className="text-sm text-blue-200">100% confiável</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-blue-200 mb-4">
                ⚠️ Não perca mais clientes por conta de bloqueios
              </p>
              <Button 
                variant="whatsapp" 
                size="lg"
                asChild
                className="text-lg px-12 py-6 h-auto bg-whatsapp hover:bg-whatsapp-hover"
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

          <p className="text-sm text-blue-200">
            🔒 Pagamento seguro • ⚡ Aprovação em poucas horas • 🎯 Sem burocracias
          </p>
        </div>
      </div>
    </section>
  );
};

export default PriceOffer;