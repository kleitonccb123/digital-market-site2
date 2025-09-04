import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5521994914235?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Digital%20Market%20e%20quero%20agendar%20uma%20call%20de%20diagn%C3%B3stico.%20%0ASou%20____%20da%20____%20(segmento%20____).%20%0ABusco%3A%20%5Bcaptar%20leads%20%2F%20escalar%20vendas%20%2F%20fortalecer%20marca%5D.%20%0APode%20me%20atender%20%5Bdia%5D%20%C3%A0s%20%5Bhora%5D%3F%0A', '_blank');
  };

  const handleQuizClick = () => {
    navigate('/quiz');
  };
  const scrollToDepoimentos = () => {
    document.getElementById('depoimentos')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen pt-20 pb-16 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dm-bg via-dm-bg-subtle to-dm-bg"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-dm-accent-glow rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-dm-accent-glow rounded-full blur-3xl opacity-10 animate-float" style={{
      animationDelay: '2s'
    }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="glass px-4 py-2 rounded-full text-sm font-inter font-medium text-dm-text border border-dm-border">
                Clientes B2B e B2C
              </span>
              <span className="glass px-4 py-2 rounded-full text-sm font-inter font-medium text-dm-text border border-dm-border">
                Sprints quinzenais
              </span>
              <span className="glass px-4 py-2 rounded-full text-sm font-inter font-medium text-dm-text border border-dm-border">
                Foco em ROI
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-poppins font-bold leading-tight">
                <span className="text-dm-text">Acelere o crescimento</span>
                <br />
                <span className="text-dm-text">da sua </span>
                <span className="text-accent-gradient">empresa</span>
              </h1>
              <p className="text-xl lg:text-2xl text-dm-text font-poppins font-semibold">
                Performance + estratégia para escalar com previsibilidade.
              </p>
            </div>

            {/* Subtitle */}
            <p className="text-lg text-dm-text-muted font-inter leading-relaxed max-w-lg">
              Funis, tráfego e automações de alto padrão para quem quer jogar o jogo grande.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button onClick={handleQuizClick} data-event="quiz_click" className="btn-primary px-8 py-4 text-lg rounded-full font-poppins font-semibold micro-bounce glow-accent">
                Fazer Quiz de Qualificação
              </Button>
              <Button onClick={handleWhatsAppClick} data-event="whatsapp_click" className="btn-secondary px-8 py-4 text-lg rounded-full font-poppins font-semibold micro-bounce">
                Falar no WhatsApp
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <div className="relative group">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-dm-accent-glow rounded-2xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Rocket Image */}
              <div className="relative z-10 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/33bc5c36-f83b-4798-9262-b933865ddf7f.png" 
                  alt="Foguete representando crescimento e aceleração empresarial" 
                  className="w-full h-auto max-w-md mx-auto transform transition-transform duration-500 group-hover:scale-105 hover-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;