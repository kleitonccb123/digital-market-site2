import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import dmLogo from "@/assets/dm-logo-rocket.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuItems = [{
    label: "Serviços",
    href: "#servicos"
  }, {
    label: "Metodologia",
    href: "#metodologia"
  }, {
    label: "Segmentos",
    href: "#segmentos"
  }, {
    label: "Depoimentos",
    href: "#depoimentos"
  }, {
    label: "Blog",
    href: "#blog"
  }, {
    label: "Contato",
    href: "#contato"
  }];
  const handleQuizClick = () => {
    navigate('/quiz');
  };
  return <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-dm-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-fade-in">
            <img 
              src="/lovable-uploads/3cac613a-dc7a-4e22-90fd-b30b7f4eba74.png" 
              alt="Digital Market Logo" 
              className="h-8 w-auto hover-scale"
            />
            <span className="text-xl font-poppins font-bold text-dm-text hover:text-dm-accent transition-colors duration-300">
              Digital Market
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 animate-slide-in-left">
            {menuItems.map((item, index) => <a 
                key={item.label} 
                href={item.href} 
                className={`text-dm-text hover:text-dm-accent transition-all duration-300 font-inter font-medium hover-lift stagger-${index + 1}`}
              >
                {item.label}
              </a>)}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block animate-slide-in-right">
            <Button onClick={handleQuizClick} data-event="quiz_click" className="btn-primary px-6 py-2 rounded-full font-poppins font-semibold micro-bounce hover-glow">
              Fazer Quiz
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-dm-text hover:text-dm-accent transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden mt-4 pb-4 glass rounded-lg border border-dm-border animate-slide-up">
            <div className="flex flex-col space-y-4 p-4">
              {menuItems.map(item => <a key={item.label} href={item.href} className="text-dm-text hover:text-dm-accent transition-colors duration-300 font-inter font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>)}
              <Button onClick={() => {
            handleQuizClick();
            setIsMenuOpen(false);
          }} data-event="quiz_click" className="btn-primary w-full py-3 rounded-full font-poppins font-semibold mt-4">
                Fazer Quiz
              </Button>
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;