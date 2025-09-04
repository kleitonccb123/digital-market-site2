import { Instagram, Phone, Mail } from "lucide-react";
import dmLogo from "@/assets/dm-logo-rocket.png";
const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5521994914235", "_blank");
  };
  const menuLinks = [{
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
  return <footer className="bg-dm-bg-subtle border-t border-dm-border relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-dm-accent-glow rounded-full blur-3xl opacity-5"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              
              <span className="text-2xl font-poppins font-bold text-dm-text">
                Digital Market
              </span>
            </div>
            
            <p className="text-dm-text-muted font-inter leading-relaxed max-w-md mb-8">
              Agência especializada em performance e estratégia digital. 
              Transformamos visitantes em clientes fiéis através de funis, 
              tráfego e automações de alto padrão.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <button onClick={handleWhatsAppClick} className="flex items-center space-x-3 text-dm-text hover:text-dm-accent transition-colors group">
                <Phone className="w-5 h-5 text-dm-accent" />
                <span className="font-inter">(21) 99491-4235</span>
              </button>

              <a href="mailto:contato@digitalmarket.com" className="flex items-center space-x-3 text-dm-text hover:text-dm-accent transition-colors group">
                <Mail className="w-5 h-5 text-dm-accent" />
                <span className="font-inter">contato@digitalmarket.com</span>
              </a>

              <a href="https://instagram.com/sejadigitalmarket" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-dm-text hover:text-dm-accent transition-colors group">
                <Instagram className="w-5 h-5 text-dm-accent" />
                <span className="font-inter">@sejadigitalmarket</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-poppins font-bold text-dm-text mb-6">
              Links Rápidos
            </h4>
            <nav className="space-y-3">
              {menuLinks.map(link => <a key={link.label} href={link.href} className="block text-dm-text-muted hover:text-dm-accent transition-colors font-inter">
                  {link.label}
                </a>)}
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-poppins font-bold text-dm-text mb-6">
              Newsletter
            </h4>
            <p className="text-dm-text-muted font-inter text-sm mb-4 leading-relaxed">
              Receba insights exclusivos sobre marketing digital e estratégias de crescimento.
            </p>
            
            <div className="space-y-3">
              <input type="email" placeholder="Seu e-mail" className="w-full glass border border-dm-border rounded-lg px-4 py-3 text-dm-text placeholder:text-dm-text-muted font-inter" />
              <button className="btn-primary w-full py-3 rounded-lg font-poppins font-semibold">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-dm-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="/termos" className="text-dm-text-muted hover:text-dm-accent transition-colors font-inter">
                Termos de Uso
              </a>
              <a href="/privacidade" className="text-dm-text-muted hover:text-dm-accent transition-colors font-inter">
                Política de Privacidade
              </a>
              <a href="/lgpd" className="text-dm-text-muted hover:text-dm-accent transition-colors font-inter">
                LGPD
              </a>
            </div>

            {/* Copyright */}
            <p className="text-dm-text-muted font-inter text-sm">
              © {new Date().getFullYear()} Digital Market. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;