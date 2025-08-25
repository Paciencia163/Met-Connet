import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">MET-Connect</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
              Startup angolana inovadora, conectando Angola aos mercados regionais e globais 
              através de soluções multimodais inteligentes e gestão digital avançada.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-angola-gold" />
                <span className="text-sm">Luanda, Angola</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-angola-gold" />
                <span className="text-sm">info@met-connect.ao</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-angola-gold" />
                <span className="text-sm">+244 900 000 000</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-angola-gold">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-angola-gold">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-angola-gold">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <nav className="space-y-3">
              <a href="#about" className="block text-primary-foreground/80 hover:text-angola-gold transition-colors">
                Sobre Nós
              </a>
              <a href="#services" className="block text-primary-foreground/80 hover:text-angola-gold transition-colors">
                Nossos Serviços
              </a>
              <a href="#corridor" className="block text-primary-foreground/80 hover:text-angola-gold transition-colors">
                Corredor do Lobito
              </a>
              <a href="#integration" className="block text-primary-foreground/80 hover:text-angola-gold transition-colors">
                Integração Regional
              </a>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <nav className="space-y-3">
              <a href="#" className="block text-primary-foreground/80 hover:text-angola-gold transition-colors">
                Transporte Ferroviário
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-angola-gold transition-colors">
                Transporte Rodoviário
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-angola-gold transition-colors">
                Transporte Marítimo
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-angola-gold transition-colors">
                Gestão Digital
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2024 MET-Connect. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-angola-gold transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-angola-gold transition-colors">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};