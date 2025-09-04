import { Users, Heart, TrendingUp, Star } from "lucide-react";
import rocketImage from "@/assets/rocket-methodology.png";
const Methodology = () => {
  const pillars = [{
    icon: Users,
    title: "Atrair",
    description: "Mídia e criativos com hipótese científica",
    position: "top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
  }, {
    icon: Heart,
    title: "Engajar",
    description: "Iscas magnéticas (quiz, e-book, checklist)",
    position: "top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"
  }, {
    icon: TrendingUp,
    title: "Converter",
    description: "LP + WhatsApp + script comercial",
    position: "bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2"
  }, {
    icon: Star,
    title: "Encantar",
    description: "Rituais, métricas e backlog contínuo",
    position: "top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2"
  }];
  const processSteps = ["Diagnóstico completo (7 dias)", "Arquitetura de funil personalizada", "Desenvolvimento em sprints", "Rituais quinzenais de otimização"];
  return <section id="metodologia" className="py-20 relative overflow-hidden">
      {/* Dark background with subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-dm-bg-subtle via-dm-bg to-dm-bg-subtle"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-dm-accent-glow rounded-full blur-3xl opacity-15 animate-glow-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          {/* Rocket Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              
              
            </div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-dm-text mb-6">
            Nossa metodologia em <span className="text-accent-gradient">4 pilares</span>
          </h2>
          <p className="text-xl text-dm-text-muted font-inter max-w-3xl mx-auto">
            Um processo estruturado para transformar visitantes em clientes fiéis
          </p>
        </div>

        {/* Methodology Diagram */}
        <div className="relative max-w-6xl mx-auto mb-20">
          {/* Central Hub - Fixed Position */}
          
        </div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-poppins font-bold text-dm-text mb-8 text-center">
            Nosso processo de trabalho
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => <div key={index} className="glass glass-hover rounded-xl p-6 text-center animate-slide-up" style={{
            animationDelay: `${index * 0.1 + 0.8}s`
          }}>
                <div className="w-12 h-12 rounded-full bg-dm-accent text-dm-bg font-poppins font-bold text-lg flex items-center justify-center mx-auto mb-4 glow-accent">
                  {index + 1}
                </div>
                <p className="text-dm-text font-inter font-medium">
                  {step}
                </p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Methodology;