import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const whatsappLink = "https://wa.me/5511978712950?text=Quero%20solicitar%20a%20aprova%C3%A7%C3%A3o%20do%20G2%20para%20meu%20neg%C3%B3cio";

  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-whatsapp rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G2</span>
              </div>
              <h3 className="text-xl font-bold">Aprovando G2</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Especialistas em aprovação da Certificação G2 do Google. 
              Desbloqueie sua conta de anúncios para serviços financeiros 
              de forma rápida e segura.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MessageCircle size={16} />
                <span>WhatsApp: (11) 97871-2950</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Certificação G2</h4>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Não perca mais tempo com bloqueios. Solicite sua certificação agora 
              e comece a anunciar sem restrições.
            </p>
            <Button 
              variant="whatsapp" 
              size="sm"
              asChild
            >
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle size={16} />
                Solicitar Agora
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Aprovando G2. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 text-primary-foreground/60 text-sm">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Privacidade
              </a>
              <span>•</span>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;