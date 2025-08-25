import { Card, CardContent } from "@/components/ui/card";
import { Target, Globe, Zap, TrendingUp } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Sobre a <span className="bg-gradient-hero bg-clip-text text-transparent">MET-Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Somos uma startup angolana inovadora, focada em revolucionar o transporte e logística 
              na África Austral através de tecnologia avançada e soluções multimodais inteligentes.
            </p>
          </div>

          {/* Mission Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-ocean rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Nossa Missão</h3>
                <p className="text-sm text-muted-foreground">
                  Integrar Angola aos mercados regionais através de soluções logísticas inovadoras
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-africa-green rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Alcance Regional</h3>
                <p className="text-sm text-muted-foreground">
                  Conectividade estratégica com todos os países da SADC e AfCFTA
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-angola-gold rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Inovação Digital</h3>
                <p className="text-sm text-muted-foreground">
                  Gestão inteligente e digitalizada de toda a cadeia logística
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Crescimento</h3>
                <p className="text-sm text-muted-foreground">
                  Redução de custos, tempo e complexidade no comércio regional
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key Stats */}
          <div className="bg-white rounded-2xl shadow-medium p-8 lg:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                  15+
                </div>
                <p className="text-lg font-medium text-foreground mb-1">Países SADC</p>
                <p className="text-sm text-muted-foreground">Conectados através do corredor</p>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                  3
                </div>
                <p className="text-lg font-medium text-foreground mb-1">Modais de Transporte</p>
                <p className="text-sm text-muted-foreground">Ferrovia, rodovia e marítimo</p>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                  40%
                </div>
                <p className="text-lg font-medium text-foreground mb-1">Redução de Custos</p>
                <p className="text-sm text-muted-foreground">Através das nossas soluções</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};