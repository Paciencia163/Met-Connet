import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Train, Truck, Ship, Smartphone, BarChart3, Shield, ArrowRight } from "lucide-react";

export const Services = () => {
  const transportServices = [
    {
      icon: Train,
      title: "Transporte Ferroviário",
      description: "Conexão eficiente através da linha férrea do Corredor do Lobito, ligando o interior ao porto atlântico.",
      features: ["Capacidade de carga elevada", "Menor impacto ambiental", "Custos operacionais reduzidos"]
    },
    {
      icon: Truck,
      title: "Transporte Rodoviário",
      description: "Soluções flexíveis de transporte terrestre para conexões de primeira e última milha.",
      features: ["Flexibilidade de rotas", "Entrega porta-a-porta", "Tempos de trânsito otimizados"]
    },
    {
      icon: Ship,
      title: "Transporte Marítimo",
      description: "Acesso privilegiado ao Porto do Lobito para conexões intercontinentais via Atlântico.",
      features: ["Conexões globais", "Grande capacidade", "Custos competitivos"]
    }
  ];

  const digitalServices = [
    {
      icon: Smartphone,
      title: "Gestão Digital",
      description: "Plataforma integrada para rastreamento e gestão em tempo real"
    },
    {
      icon: BarChart3,
      title: "Analytics Avançados",
      description: "Dados inteligentes para otimização de rotas e redução de custos"
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Monitoramento 24/7 e seguros abrangentes para sua carga"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Soluções <span className="bg-gradient-hero bg-clip-text text-transparent">Multimodais</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Oferecemos uma gama completa de serviços de transporte e logística, 
              integrados através de tecnologia de ponta para máxima eficiência.
            </p>
          </div>

          {/* Transport Modes */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {transportServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-large transition-all duration-500 group">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-ocean rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-africa-green rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="group w-full">
                    Saiba Mais
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Digital Solutions */}
          <div className="bg-gradient-subtle rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Gestão Digital <span className="bg-gradient-hero bg-clip-text text-transparent">Inteligente</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nossa plataforma digital oferece visibilidade completa e controle total sobre toda a cadeia logística.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {digitalServices.map((service, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-angola-gold rounded-xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};