import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, Globe2, TrendingUp, ArrowRight } from "lucide-react";

export const LobitoCorridor = () => {
  const advantages = [
    {
      icon: MapPin,
      title: "Localização Estratégica",
      description: "Acesso direto ao Oceano Atlântico, conectando o interior da África aos mercados globais",
      stat: "1,344 km",
      statLabel: "de extensão total"
    },
    {
      icon: Clock,
      title: "Eficiência de Tempo",
      description: "Redução significativa no tempo de trânsito para mercadorias com destino aos portos atlânticos",
      stat: "50%",
      statLabel: "menor tempo de trânsito"
    },
    {
      icon: DollarSign,
      title: "Redução de Custos",
      description: "Alternativa económica às rotas tradicionais, diminuindo custos logísticos operacionais",
      stat: "40%",
      statLabel: "redução de custos"
    },
    {
      icon: Globe2,
      title: "Conectividade Regional",
      description: "Ligação entre RDC, Zâmbia, Angola e outros países da região, facilitando o comércio",
      stat: "6+",
      statLabel: "países conectados"
    }
  ];

  const keyPoints = [
    "Porto do Lobito - Terminal marítimo moderno no Atlântico",
    "Linha férrea Benguela - Conexão ferroviária até à fronteira com a RDC",
    "Rede rodoviária integrada - Complemento multimodal eficiente",
    "Centro logístico inteligente - Hub tecnológico de gestão"
  ];

  return (
    <section id="corridor" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Corredor do <span className="bg-gradient-hero bg-clip-text text-transparent">Lobito</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A rota estratégica que liga o coração da África ao Oceano Atlântico, 
              revolucionando o comércio regional através de Angola.
            </p>
          </div>

          {/* Advantages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-ocean rounded-xl flex items-center justify-center mx-auto mb-4">
                    <advantage.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                    {advantage.stat}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{advantage.statLabel}</p>
                  
                  <h3 className="text-lg font-semibold mb-3">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                A Rota Mais Eficiente da <span className="bg-gradient-hero bg-clip-text text-transparent">África Austral</span>
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                O Corredor do Lobito representa uma oportunidade única de transformação económica 
                para Angola e toda a região da SADC. Como a rota mais direta e eficiente para 
                escoamento de mercadorias ao Atlântico, oferece vantagens competitivas 
                incomparáveis no mercado regional.
              </p>

              {/* Key Points */}
              <div className="space-y-4 mb-8">
                {keyPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-africa-green rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">{point}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="group">
                  Explorar o Corredor
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Baixar Brochura
                </Button>
              </div>
            </div>

            {/* Right Content - Impact Stats */}
            <div className="bg-white rounded-2xl shadow-medium p-8">
              <h4 className="text-xl font-bold mb-6 text-center">Impacto Regional Esperado</h4>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gradient-subtle rounded-xl">
                  <div>
                    <p className="font-semibold">Crescimento do PIB</p>
                    <p className="text-sm text-muted-foreground">Angola e região</p>
                  </div>
                  <div className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                    +15%
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gradient-subtle rounded-xl">
                  <div>
                    <p className="font-semibold">Empregos Criados</p>
                    <p className="text-sm text-muted-foreground">Sector logístico</p>
                  </div>
                  <div className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                    50K+
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gradient-subtle rounded-xl">
                  <div>
                    <p className="font-semibold">Volume de Carga</p>
                    <p className="text-sm text-muted-foreground">Anual projetado</p>
                  </div>
                  <div className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                    20M ton
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-angola-gold/10 rounded-xl text-center">
                <TrendingUp className="h-8 w-8 text-angola-gold mx-auto mb-2" />
                <p className="text-sm font-medium">Crescimento sustentável para toda a região</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};