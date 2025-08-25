import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Users, TrendingUp, Handshake, MapPin, ArrowRight } from "lucide-react";

export const Integration = () => {
  const sadcCountries = [
    { name: "Angola", capital: "Luanda", status: "Hub Central" },
    { name: "RD Congo", capital: "Kinshasa", status: "Conexão Direta" },
    { name: "Zâmbia", capital: "Lusaka", status: "Conexão Direta" },
    { name: "África do Sul", capital: "Cidade do Cabo", status: "Parceiro Estratégico" },
    { name: "Botsuana", capital: "Gaborone", status: "Rede Regional" },
    { name: "Namíbia", capital: "Windhoek", status: "Rede Regional" }
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Mercado Único Africano",
      description: "Facilitação do comércio através da Zona de Livre Comércio Continental Africana (AfCFTA)",
      impact: "1.3B pessoas conectadas"
    },
    {
      icon: Users,
      title: "Integração Regional",
      description: "Fortalecimento dos laços económicos e sociais entre os países da SADC",
      impact: "15 países integrados"
    },
    {
      icon: TrendingUp,
      title: "Crescimento Económico",
      description: "Estímulo ao crescimento através da redução de barreiras comerciais",
      impact: "+25% comércio regional"
    },
    {
      icon: Handshake,
      title: "Parcerias Estratégicas",
      description: "Desenvolvimento de alianças duradouras para prosperidade mútua",
      impact: "Cooperação sustentável"
    }
  ];

  return (
    <section id="integration" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Integração <span className="bg-gradient-hero bg-clip-text text-transparent">Regional</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Conectamos Angola aos mercados da SADC e AfCFTA, criando uma rede logística 
              que impulsiona o desenvolvimento económico de toda a região.
            </p>
          </div>

          {/* SADC & AfCFTA Overview */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* SADC Section */}
            <div className="bg-gradient-subtle rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-ocean rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">SADC</h3>
                  <p className="text-muted-foreground">Comunidade de Desenvolvimento da África Austral</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {sadcCountries.map((country, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 text-center">
                    <p className="font-medium text-sm">{country.name}</p>
                    <p className="text-xs text-muted-foreground">{country.status}</p>
                  </div>
                ))}
              </div>
              
              <p className="text-sm text-muted-foreground">
                A MET-Connect facilita o comércio entre os 15 países membros da SADC, 
                utilizando Angola como ponto estratégico de acesso ao Atlântico.
              </p>
            </div>

            {/* AfCFTA Section */}
            <div className="bg-gradient-subtle rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-africa-green rounded-xl flex items-center justify-center">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">AfCFTA</h3>
                  <p className="text-muted-foreground">Zona de Livre Comércio Continental Africana</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm">População Total</span>
                  <span className="font-bold">1.3 bilhão</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">PIB Combinado</span>
                  <span className="font-bold">$3.4 trilhões</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Países Membros</span>
                  <span className="font-bold">54 países</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Redução Tarifária</span>
                  <span className="font-bold">até 90%</span>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Através da AfCFTA, eliminamos barreiras comerciais e facilitamos 
                o livre movimento de mercadorias em todo o continente africano.
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-angola-gold rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="text-xs font-medium text-angola-gold">
                    {benefit.impact}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-hero rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Junte-se à Revolução Logística Africana
            </h3>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Seja parte da transformação que está a conectar a África através de soluções 
              logísticas inovadoras e sustentáveis.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="secondary" size="lg" className="group">
                Descobrir Oportunidades
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10">
                Contactar Equipa
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};