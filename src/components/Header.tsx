import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Header = () => {
  const whatsappLink = "https://wa.me/5511978712950?text=Quero%20solicitar%20a%20aprova%C3%A7%C3%A3o%20do%20G2%20para%20meu%20neg%C3%B3cio";

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">G2</span>
          </div>
          <h1 className="text-xl font-bold text-primary">Aprovanto G2</h1>
        </div>
        
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
            Fale no WhatsApp
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;