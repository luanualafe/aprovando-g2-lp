import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const whatsappLink = "https://wa.me/5511978712950?text=Quero%20solicitar%20a%20aprova%C3%A7%C3%A3o%20do%20G2%20para%20meu%20neg%C3%B3cio";

  return (
    <section className="pt-20 pb-16 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Acesse o Google Ads sem restrições com a{" "}
                <span className="text-whatsapp">Certificação G2</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Resolva de vez os bloqueios de anúncios para serviços financeiros 
                e rode suas campanhas sem limitações.
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="text-whatsapp" size={24} />
                <span className="text-sm font-medium">OFERTA ESPECIAL</span>
              </div>
              <div className="text-3xl font-bold">
                Apenas <span className="text-whatsapp">R$ 500,00</span>
              </div>
            </div>

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
                <CheckCircle size={20} />
                Solicitar Certificação Agora
              </a>
            </Button>
          </div>

          <div className="relative">
            <img 
              src={heroImage} 
              alt="Certificação G2 Google Ads"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;