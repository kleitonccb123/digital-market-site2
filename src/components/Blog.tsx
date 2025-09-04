import { ArrowRight, BarChart3, TrendingDown, Wrench } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      icon: BarChart3,
      title: "Métricas que movem o ponteiro (sem vaidade)",
      description: "Aprenda a focar apenas nas métricas que realmente importam para o crescimento do seu negócio.",
      readTime: "8 min"
    },
    {
      icon: TrendingDown,
      title: "Como reduzir CPA em 30 dias",
      description: "Estratégias práticas e testadas para otimizar seus investimentos em tráfego pago.",
      readTime: "12 min"
    },
    {
      icon: Wrench,
      title: "Seu funil precisa de engenharia, não improviso",
      description: "Por que a abordagem científica é fundamental para construir funis que convertem.",
      readTime: "15 min"
    }
  ];

  return (
    <section id="blog" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-dm-bg via-dm-bg-subtle to-dm-bg"></div>
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-dm-accent-glow rounded-full blur-3xl opacity-10 animate-glow-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-dm-text mb-6">
            <span className="text-accent-gradient">Insights</span> que geram resultado
          </h2>
          <p className="text-xl text-dm-text-muted font-inter max-w-3xl mx-auto">
            Conteúdo estratégico para quem quer acelerar o crescimento do negócio
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="glass glass-hover rounded-2xl overflow-hidden group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Placeholder with Icon */}
              <div className="h-48 bg-gradient-to-br from-dm-bg-subtle to-dm-bg flex items-center justify-center border-b border-dm-border">
                <div className="w-16 h-16 rounded-2xl bg-dm-accent-soft border border-dm-accent flex items-center justify-center group-hover:glow-accent transition-all duration-300">
                  <post.icon className="w-8 h-8 text-dm-accent" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Read Time */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-inter text-dm-accent bg-dm-accent-soft px-3 py-1 rounded-full">
                    {post.readTime} de leitura
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-poppins font-bold text-dm-text mb-3 group-hover:text-dm-accent transition-colors leading-tight">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-dm-text-muted font-inter leading-relaxed mb-4">
                  {post.description}
                </p>

                {/* Read More */}
                <button className="flex items-center space-x-2 text-dm-accent hover:text-dm-accent-hover font-inter font-semibold transition-colors group-hover:translate-x-1 duration-300">
                  <span>Ler artigo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-slide-up" style={{animationDelay: '0.3s'}}>
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto border border-dm-border">
            <h3 className="text-2xl font-poppins font-bold text-dm-text mb-4">
              Quer receber mais insights?
            </h3>
            <p className="text-lg text-dm-text-muted font-inter mb-6">
              Assine nossa newsletter e receba estratégias exclusivas toda semana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="glass border border-dm-border rounded-full px-4 py-3 text-dm-text placeholder:text-dm-text-muted font-inter flex-1"
              />
              <button className="btn-primary px-6 py-3 rounded-full font-poppins font-semibold micro-bounce whitespace-nowrap">
                Assinar newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;