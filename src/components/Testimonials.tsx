import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      content: "Pararam de prometer e entregaram método — nosso CPL caiu 37% em 30 dias.",
      author: "CEO, E-commerce de Moda",
      rating: 5
    },
    {
      content: "Triplicamos o faturamento em 4 meses com os funis que eles criaram. Processo científico mesmo.",
      author: "Fundador, SaaS B2B", 
      rating: 5
    },
    {
      content: "Finalmente encontramos uma agência que entende de métricas. ROAS de 8.2x no primeiro mês.",
      author: "CMO, Infoprodutos",
      rating: 5
    },
    {
      content: "O dashboard deles mudou como tomamos decisões. Visibilidade total do funil de vendas.",
      author: "Diretor Comercial, Indústria",
      rating: 5
    },
    {
      content: "Automatizaram 80% do nosso processo comercial. Agora vendemos até dormindo.",
      author: "Sócio, Consultoria",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="depoimentos" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-dm-bg via-dm-bg-subtle to-dm-bg"></div>
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-dm-accent-glow rounded-full blur-3xl opacity-10 animate-float"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-dm-text mb-6">
            O que nossos <span className="text-accent-gradient">clientes dizem</span>
          </h2>
          <p className="text-xl text-dm-text-muted font-inter max-w-3xl mx-auto">
            Resultados reais de empresas que escolheram crescer com a Digital Market
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto relative">
          <div className="glass rounded-3xl p-8 lg:p-12 border border-dm-border animate-scale-in hover-glow transition-all duration-500">
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-6 h-6 text-dm-accent fill-current animate-bounce-subtle hover-scale" 
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-center mb-8">
              <p className="text-xl lg:text-2xl font-inter leading-relaxed text-dm-text mb-6">
                "{testimonials[currentSlide].content}"
              </p>
              <cite className="text-lg font-poppins font-semibold text-dm-accent">
                — {testimonials[currentSlide].author}
              </cite>
            </blockquote>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4">
              <Button
                onClick={prevSlide}
                variant="ghost"
                size="sm"
                className="w-12 h-12 rounded-full glass glass-hover border border-dm-border"
              >
                <ChevronLeft className="w-5 h-5 text-dm-text" />
              </Button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-dm-accent glow-accent' 
                        : 'bg-dm-surface hover:bg-dm-surface-hover'
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={nextSlide}
                variant="ghost"
                size="sm"
                className="w-12 h-12 rounded-full glass glass-hover border border-dm-border"
              >
                <ChevronRight className="w-5 h-5 text-dm-text" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;