import { 
  Store, 
  Factory, 
  GraduationCap, 
  ShoppingCart, 
  PlayCircle, 
  Smartphone 
} from "lucide-react";

const Segments = () => {
  const segments = [
    {
      icon: Store,
      title: "Negócios Locais",
      description: "Restaurantes, clínicas, salões e prestadores de serviço"
    },
    {
      icon: Factory,
      title: "Indústrias",
      description: "B2B industrial, manufatura e fornecedores especializados"
    },
    {
      icon: GraduationCap,
      title: "Profissionais Liberais",
      description: "Advogados, médicos, consultores e especialistas"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Lojas virtuais, marketplace e varejo digital"
    },
    {
      icon: PlayCircle,
      title: "Infoprodutores",
      description: "Cursos online, mentorias e produtos digitais"
    },
    {
      icon: Smartphone,
      title: "Aplicativos",
      description: "SaaS, apps mobile e plataformas digitais"
    }
  ];

  return (
    <section id="segmentos" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dm-bg-subtle via-dm-bg to-dm-bg-subtle"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-dm-accent-glow rounded-full blur-3xl opacity-15 animate-glow-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-dm-text mb-6">
            <span className="text-accent-gradient">Segmentos</span> que atendemos
          </h2>
          <p className="text-xl text-dm-text-muted font-inter max-w-3xl mx-auto mb-8">
            Experiência comprovada em diversos mercados e nichos de atuação
          </p>
          
          {/* Important Note */}
          <div className="glass rounded-xl p-6 max-w-2xl mx-auto border border-dm-accent">
            <p className="text-lg font-inter text-dm-text">
              <span className="font-semibold text-dm-accent">Observação:</span> Operamos com empresas que faturam 
              <span className="font-bold text-dm-accent"> 50k–300k+/mês</span> ou têm forte ambição de chegar lá.
            </p>
          </div>
        </div>

        {/* Segments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {segments.map((segment, index) => (
            <div
              key={segment.title}
              className="glass glass-hover rounded-2xl p-8 text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-20 h-20 rounded-2xl bg-dm-accent-soft border-2 border-dm-accent flex items-center justify-center mx-auto group-hover:glow-accent transition-all duration-300">
                  <segment.icon className="w-10 h-10 text-dm-accent" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-poppins font-bold text-dm-text mb-4 group-hover:text-dm-accent transition-colors">
                {segment.title}
              </h3>

              {/* Description */}
              <p className="text-dm-text-muted font-inter leading-relaxed">
                {segment.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-slide-up" style={{animationDelay: '0.6s'}}>
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto border border-dm-border">
            <h3 className="text-2xl font-poppins font-bold text-dm-text mb-4">
              Seu segmento não está listado?
            </h3>
            <p className="text-lg text-dm-text-muted font-inter mb-6">
              Trabalhamos com diversos outros nichos. Vamos conversar sobre seu projeto específico.
            </p>
            <button
              onClick={() => {
                window.open(
                  "https://wa.me/5521994914235?text=Quero%20saber%20se%20voc%C3%AAs%20atendem%20meu%20segmento%20de%20mercado.",
                  "_blank"
                );
              }}
              className="btn-primary px-8 py-3 rounded-full font-poppins font-semibold micro-bounce glow-accent"
            >
              Falar sobre meu negócio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Segments;