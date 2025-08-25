import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Truck, Ship, Train } from "lucide-react";
import heroImage from "@/assets/lobito-corridor-hero.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-dark/90 via-ocean/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8 border border-white/20">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">Corredor do Lobito • Angola</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Conectando Angola ao 
            <span className="bg-gradient-to-r from-angola-gold-light to-angola-gold bg-clip-text text-transparent"> Futuro</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto">
            Soluções multimodais inteligentes para integrar Angola aos mercados da SADC e AfCFTA, 
            reduzindo custos e tempo no comércio regional.
          </p>

          {/* Transport Icons */}
          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="flex items-center gap-2 text-white/80">
              <Train className="h-6 w-6" />
              <span className="hidden sm:inline">Ferrovia</span>
            </div>
            <div className="w-8 h-px bg-white/40"></div>
            <div className="flex items-center gap-2 text-white/80">
              <Truck className="h-6 w-6" />
              <span className="hidden sm:inline">Rodovia</span>
            </div>
            <div className="w-8 h-px bg-white/40"></div>
            <div className="flex items-center gap-2 text-white/80">
              <Ship className="h-6 w-6" />
              <span className="hidden sm:inline">Marítimo</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="group">
              Descubra Nossas Soluções
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10">
              Ver Corredor do Lobito
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};