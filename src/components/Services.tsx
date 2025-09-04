import { 
  Globe, 
  Target, 
  Camera, 
  Zap, 
  BarChart3, 
  Bot 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Landing Pages & Sites",
      features: [
        "SEO local otimizado",
        "Vite/React/Tailwind", 
        "Copy de conversão",
        "Performance garantida"
      ]
    },
    {
      icon: Target,
      title: "Tráfego Pago",
      features: [
        "Meta/Google/TikTok/YouTube",
        "Estrutura cientificamente correta",
        "Públicos LAL/retarget",
        "Testes de criativos A/B"
      ]
    },
    {
      icon: Camera,
      title: "Social & Conteúdo",
      features: [
        "Reels, carrosséis, VSL curta",
        "Roteiros profissionais",
        "Guias/destaques estratégicos",
        "Identidade visual consistente"
      ]
    },
    {
      icon: Zap,
      title: "Funis & Automações",
      features: [
        "Typebot + WhatsApp integrado",
        "Zapier/Sheets conectados",
        "Qualificação automática",
        "Follow-ups inteligentes"
      ]
    },
    {
      icon: BarChart3,
      title: "Analytics & Dashboards",
      features: [
        "GA4/UTM/Pixel configurados",
        "KPIs (CPL, CPA, ROAS, LTV)",
        "Rituais quinzenais",
        "Relatórios automatizados"
      ]
    },
    {
      icon: Bot,
      title: "Chatbots & IA",
      features: [
        "Captação/triagem automatizada",
        "Atendimento 24/7",
        "Integrações nativas",
        "Qualificação de leads"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dm-bg via-dm-bg-subtle to-dm-bg"></div>
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-dm-accent-glow rounded-full blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-dm-text mb-6">
            Nossos <span className="text-accent-gradient">Serviços</span>
          </h2>
          <p className="text-xl text-dm-text-muted font-inter max-w-3xl mx-auto">
            Soluções integradas de marketing digital para escalar seu negócio com previsibilidade
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass glass-hover rounded-2xl p-8 group animate-slide-up hover-lift hover-glow"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-dm-accent-soft border border-dm-accent flex items-center justify-center group-hover:glow-accent transition-all duration-300 animate-bounce-subtle">
                  <service.icon className="w-8 h-8 text-dm-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-poppins font-bold text-dm-text mb-4 group-hover:text-dm-accent transition-colors">
                {service.title}
              </h3>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-dm-accent mt-2 flex-shrink-0"></div>
                    <span className="text-dm-text-muted font-inter text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;