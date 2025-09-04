import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    empresa: "",
    faturamento: "",
    midia: "",
    objetivo: "",
    decisor: "",
    lgpd: false,
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Trigger GA4 generate_lead event (would be implemented with actual GA4)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'generate_lead', {
        event_category: 'form',
        event_label: 'contact_form'
      });
    }
    
    // Open WhatsApp with pre-filled message
    const message = `Tenho%20interesse%20no%20diagn%C3%B3stico%20da%20Digital%20Market.%0A%0ANome:%20${formData.nome}%0AEmpresa:%20${formData.empresa}%0AFaturamento:%20${formData.faturamento}%0AObjetivo:%20${formData.objetivo}`;
    window.open(`https://wa.me/5521994914235?text=${message}`, "_blank");
  };

  const handleWhatsAppDirect = () => {
    window.open(
      "https://wa.me/5521994914235?text=Tenho%20interesse%20no%20diagn%C3%B3stico%20da%20Digital%20Market.",
      "_blank"
    );
  };

  return (
    <section id="contato" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dm-bg via-dm-bg-subtle to-dm-bg"></div>
      <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-dm-accent-glow rounded-full blur-3xl opacity-10 animate-float"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-dm-text mb-6">
            Construa um motor de <span className="text-accent-gradient">crescimento previsível</span>
          </h2>
          <p className="text-xl text-dm-text-muted font-inter max-w-3xl mx-auto">
            Preencha para receber diagnóstico e próximos passos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 lg:p-12 border border-dm-border animate-slide-up" style={{animationDelay: '0.2s'}}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-dm-text font-inter font-medium">
                    Nome completo *
                  </Label>
                  <Input
                    id="nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                    className="glass border-dm-border text-dm-text placeholder:text-dm-text-muted"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-dm-text font-inter font-medium">
                    E-mail *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="glass border-dm-border text-dm-text placeholder:text-dm-text-muted"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-dm-text font-inter font-medium">
                    WhatsApp *
                  </Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                    className="glass border-dm-border text-dm-text placeholder:text-dm-text-muted"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="empresa" className="text-dm-text font-inter font-medium">
                    Empresa/Instagram
                  </Label>
                  <Input
                    id="empresa"
                    type="text"
                    value={formData.empresa}
                    onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                    className="glass border-dm-border text-dm-text placeholder:text-dm-text-muted"
                    placeholder="Sua empresa ou @instagram"
                  />
                </div>
              </div>

              {/* Business Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-dm-text font-inter font-medium">
                    Faturamento mensal *
                  </Label>
                  <Select onValueChange={(value) => setFormData({...formData, faturamento: value})}>
                    <SelectTrigger className="glass border-dm-border text-dm-text">
                      <SelectValue placeholder="Selecione a faixa" />
                    </SelectTrigger>
                    <SelectContent className="glass border-dm-border bg-dm-bg">
                      <SelectItem value="50-100k">50k - 100k</SelectItem>
                      <SelectItem value="100-300k">100k - 300k</SelectItem>
                      <SelectItem value="300k+">300k+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-dm-text font-inter font-medium">
                    Investimento em mídia *
                  </Label>
                  <Select onValueChange={(value) => setFormData({...formData, midia: value})}>
                    <SelectTrigger className="glass border-dm-border text-dm-text">
                      <SelectValue placeholder="Selecione a faixa" />
                    </SelectTrigger>
                    <SelectContent className="glass border-dm-border bg-dm-bg">
                      <SelectItem value="<3k">Menos de 3k</SelectItem>
                      <SelectItem value="3-8k">3k - 8k</SelectItem>
                      <SelectItem value="8-20k">8k - 20k</SelectItem>
                      <SelectItem value="20-50k">20k - 50k</SelectItem>
                      <SelectItem value="50k+">50k+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Objective */}
              <div className="space-y-2">
                <Label htmlFor="objetivo" className="text-dm-text font-inter font-medium">
                  Principal objetivo nos próximos 90 dias *
                </Label>
                <Textarea
                  id="objetivo"
                  required
                  value={formData.objetivo}
                  onChange={(e) => setFormData({...formData, objetivo: e.target.value})}
                  className="glass border-dm-border text-dm-text placeholder:text-dm-text-muted min-h-[100px]"
                  placeholder="Descreva seu principal objetivo..."
                />
              </div>

              {/* Decision Maker */}
              <div className="space-y-2">
                <Label className="text-dm-text font-inter font-medium">
                  Você é o decisor? *
                </Label>
                <Select onValueChange={(value) => setFormData({...formData, decisor: value})}>
                  <SelectTrigger className="glass border-dm-border text-dm-text">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent className="glass border-dm-border bg-dm-bg">
                    <SelectItem value="sim">Sim</SelectItem>
                    <SelectItem value="nao">Não</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* LGPD Checkbox */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="lgpd"
                  checked={formData.lgpd}
                  onCheckedChange={(checked) => setFormData({...formData, lgpd: !!checked})}
                  className="border-dm-border"
                />
                <Label htmlFor="lgpd" className="text-sm text-dm-text-muted font-inter">
                  Concordo com o tratamento dos meus dados pessoais conforme LGPD *
                </Label>
              </div>

              {/* Hidden UTM Fields */}
              <input type="hidden" name="utm_source" value={formData.utm_source} />
              <input type="hidden" name="utm_medium" value={formData.utm_medium} />
              <input type="hidden" name="utm_campaign" value={formData.utm_campaign} />
              <input type="hidden" name="utm_content" value={formData.utm_content} />
              <input type="hidden" name="utm_term" value={formData.utm_term} />

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  type="submit"
                  disabled={!formData.lgpd}
                  className="btn-primary flex-1 py-4 text-lg rounded-full font-poppins font-semibold micro-bounce glow-accent"
                >
                  Enviar e agendar diagnóstico
                </Button>
                <Button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="btn-secondary flex-1 py-4 text-lg rounded-full font-poppins font-semibold micro-bounce"
                >
                  Falar no WhatsApp agora
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;