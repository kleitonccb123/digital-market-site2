import { 
  Users, 
  Focus, 
  BarChart3, 
  Package 
} from "lucide-react";

const Differentials = () => {
  const differentials = [
    {
      icon: Users,
      title: "Atendimento sênior e próximo",
      description: "Equipe experiente com relacionamento direto e personalizado"
    },
    {
      icon: Focus,
      title: "Poucas contas, foco total",
      description: "Limite de clientes para garantir atenção e qualidade máximas"
    },
    {
      icon: BarChart3,
      title: "Rituais + dashboards",
      description: "Acompanhamento quinzenal com métricas em tempo real"
    },
    {
      icon: Package,
      title: "Entrega chave na mão",
      description: "Solução completa sem necessidade de integrações externas"
    }
  ];

  return (
    <section className="py-16 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-dm-bg-subtle via-dm-bg to-dm-bg-subtle"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-dm-text mb-4">
            Por que escolher a <span className="text-accent-gradient">Digital Market</span>?
          </h2>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {differentials.map((differential, index) => (
            <div
              key={differential.title}
              className="text-center animate-slide-up hover-lift group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="w-16 h-16 rounded-2xl bg-dm-accent-soft border border-dm-accent flex items-center justify-center mx-auto hover:glow-accent transition-all duration-300 group-hover:scale-110 animate-bounce-subtle">
                  <differential.icon className="w-8 h-8 text-dm-accent group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-poppins font-bold text-dm-text mb-3">
                {differential.title}
              </h3>

              {/* Description */}
              <p className="text-dm-text-muted font-inter text-sm leading-relaxed">
                {differential.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;