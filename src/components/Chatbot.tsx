import { useState, useEffect } from "react";
import { MessageCircle, X, Send, Instagram, Phone, Bot, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
  followUp?: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "Quais serviços vocês oferecem?",
    answer: "Oferecemos Landing Pages, Tráfego Pago (Meta/Google), Social Media, Funis & Automações, Analytics e Chatbots com IA. Tudo focado em performance e ROI.",
    followUp: "Quer saber mais detalhes sobre algum serviço específico?"
  },
  {
    id: 2,
    question: "Como funciona a metodologia?",
    answer: "Nossa metodologia tem 4 pilares: Atrair (mídia + criativos), Engajar (iscas digitais), Converter (LP + WhatsApp) e Encantar (métricas + rituais). Trabalhamos em sprints quinzenais.",
    followUp: "Posso agendar uma call para explicar melhor!"
  },
  {
    id: 3,
    question: "Qual o investimento?",
    answer: "Os valores variam conforme a necessidade do projeto. Trabalhamos com empresas que faturam de 50k a 300k+ mensais. O orçamento é apresentado após diagnóstico gratuito.",
    followUp: "Vamos conversar no WhatsApp para fazer seu diagnóstico?"
  },
  {
    id: 4,
    question: "Vocês trabalham com que tipo de empresa?",
    answer: "Atendemos Negócios Locais, Indústrias, Profissionais Liberais, E-commerce, Infoprodutores e Apps. Focamos em empresas com forte ambição de crescimento.",
    followUp: "Qual é o seu segmento? Posso ajudar melhor!"
  },
  {
    id: 5,
    question: "Como começar?",
    answer: "Primeiro fazemos um diagnóstico gratuito da sua operação atual, depois criamos a arquitetura do funil ideal e iniciamos os sprints de implementação.",
    followUp: "Pronto para começar? Vamos conversar!"
  }
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! 👋 Sou o assistente da Digital Market. Como posso te ajudar hoje?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const isMobile = useIsMobile();

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simular resposta do bot com typing indicator
    setTimeout(() => {
      setIsTyping(false);
      const botResponse = generateBotResponse(inputText);
      setMessages(prev => [...prev, botResponse]);
    }, 1000 + Math.random() * 1000);
  };

  const handleFAQClick = (faq: FAQ) => {
    const userMessage: Message = {
      id: Date.now(),
      text: faq.question,
      isBot: false,
      timestamp: new Date()
    };

    const botMessage: Message = {
      id: Date.now() + 1,
      text: faq.answer + (faq.followUp ? `\n\n${faq.followUp}` : ""),
      isBot: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
  };

  const generateBotResponse = (userInput: string): Message => {
    const input = userInput.toLowerCase();
    
    if (input.includes("preço") || input.includes("valor") || input.includes("custo")) {
      return {
        id: Date.now() + 1,
        text: "Os valores são personalizados conforme sua necessidade. Que tal agendar um diagnóstico gratuito para entender melhor seu projeto? 💰",
        isBot: true,
        timestamp: new Date()
      };
    }
    
    if (input.includes("instagram") || input.includes("social")) {
      return {
        id: Date.now() + 1,
        text: "Perfeito! No nosso Instagram @sejadigitalmarket você encontra cases, dicas e muito conteúdo sobre marketing digital. Vou te direcionar lá! 📱",
        isBot: true,
        timestamp: new Date()
      };
    }

    return {
      id: Date.now() + 1,
      text: "Interessante! Para te ajudar melhor com essa questão específica, que tal conversarmos diretamente no WhatsApp ou Instagram? Lá posso dar uma atenção mais personalizada! 🚀",
      isBot: true,
      timestamp: new Date()
    };
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/sejadigitalmarket/", "_blank");
  };

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5521994914235?text=Vim%20do%20chatbot%20e%20quero%20conversar%20sobre%20os%20servi%C3%A7os%20da%20Digital%20Market.",
      "_blank"
    );
  };

  return (
    <>
      {/* Botão flutuante com pulso visual */}
      <div className={`fixed ${isMobile ? 'bottom-4 right-4' : 'bottom-6 right-6'} z-50`}>
        <div className="relative">
          {/* Pulso de fundo */}
          <div className="absolute inset-0 bg-dm-accent rounded-full animate-ping opacity-20"></div>
          <Button
            onClick={() => setIsOpen(true)}
            className={`
              relative ${isMobile ? 'w-12 h-12' : 'w-14 h-14'} rounded-full 
              bg-gradient-to-br from-dm-accent to-dm-accent-hover 
              text-white shadow-xl hover:shadow-dm-accent-glow
              transition-all duration-300 hover:scale-110 
              animate-bounce-subtle flex items-center justify-center
              ${isOpen ? "hidden" : "flex"}
            `}
          >
            <MessageCircle size={isMobile ? 20 : 24} />
            {/* Badge de notificação */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
          </Button>
        </div>
      </div>

      {/* Chat window com backdrop */}
      {isOpen && (
        <>
          {/* Backdrop mobile */}
          {isMobile && (
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
              onClick={() => setIsOpen(false)}
            />
          )}
          
          <div className={`
            fixed z-50 flex flex-col overflow-hidden 
            ${isMobile 
              ? 'inset-x-4 bottom-4 top-20 rounded-3xl' 
              : 'bottom-6 right-6 w-96 h-[500px] rounded-2xl'
            }
            glass border border-dm-border animate-slide-up
            shadow-xl hover:shadow-2xl transition-shadow duration-300
          `}>
            {/* Header com gradiente */}
            <div className="bg-gradient-to-r from-dm-accent to-dm-accent-hover p-4 flex items-center justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-dm-accent/20 to-transparent"></div>
              <div className="flex items-center space-x-3 relative z-10">
                <div className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full">
                  <Bot className="text-white" size={18} />
                </div>
                <div>
                  <span className="text-white font-poppins font-semibold">Digital Market Bot</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white/80 text-xs">Online</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-2 rounded-full transition-all duration-200 hover:scale-110 relative z-10"
              >
                <X size={20} />
              </Button>
            </div>

            {/* Messages area com scroll customizado */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-dm-bg/50 to-dm-bg">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={`flex items-end space-x-2 animate-slide-up ${
                    message.isBot ? "justify-start" : "justify-end"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Avatar do bot */}
                  {message.isBot && (
                    <div className="flex items-center justify-center w-6 h-6 bg-dm-accent rounded-full flex-shrink-0 mb-1">
                      <Bot size={12} className="text-white" />
                    </div>
                  )}
                  
                  <div
                    className={`
                      max-w-[85%] p-3 rounded-2xl text-sm relative group
                      ${message.isBot
                        ? "bg-dm-surface text-dm-text border border-dm-border rounded-bl-md hover:bg-dm-surface-hover"
                        : "bg-gradient-to-br from-dm-accent to-dm-accent-hover text-white rounded-br-md shadow-lg"
                      }
                      transition-all duration-200 hover:scale-[1.02]
                    `}
                  >
                    {/* Efeito de brilho no hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      {message.text}
                    </div>
                    
                    {/* Timestamp */}
                    <div className={`text-xs mt-1 opacity-60 ${
                      message.isBot ? "text-dm-text-muted" : "text-white/70"
                    }`}>
                      {message.timestamp.toLocaleTimeString('pt-BR', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  </div>

                  {/* Avatar do usuário */}
                  {!message.isBot && (
                    <div className="flex items-center justify-center w-6 h-6 bg-dm-accent rounded-full flex-shrink-0 mb-1">
                      <User size={12} className="text-white" />
                    </div>
                  )}
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-end space-x-2 justify-start animate-slide-up">
                  <div className="flex items-center justify-center w-6 h-6 bg-dm-accent rounded-full flex-shrink-0 mb-1">
                    <Bot size={12} className="text-white" />
                  </div>
                  <div className="bg-dm-surface border border-dm-border rounded-2xl rounded-bl-md p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-dm-accent rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-dm-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-dm-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* FAQ Buttons quando não há muitas mensagens */}
              {messages.length < 5 && !isTyping && (
                <div className="space-y-3 mt-6 animate-fade-in">
                  <div className="flex items-center justify-center space-x-2">
                    <Sparkles size={16} className="text-dm-accent" />
                    <p className="text-dm-text-muted text-sm font-medium">Perguntas frequentes</p>
                    <Sparkles size={16} className="text-dm-accent" />
                  </div>
                  {faqs.slice(0, 3).map((faq, index) => (
                    <button
                      key={faq.id}
                      onClick={() => handleFAQClick(faq)}
                      className="w-full text-left text-sm p-3 glass border border-dm-border rounded-xl hover:bg-dm-surface hover:border-dm-accent transition-all duration-300 text-dm-text group animate-slide-up hover:scale-[1.02]"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-dm-accent rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                        <span className="group-hover:text-dm-accent transition-colors">{faq.question}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="p-4 border-t border-dm-border bg-dm-bg/80 backdrop-blur-sm">
              <div className="flex gap-2 mb-3">
                <Button
                  onClick={handleInstagramClick}
                  variant="outline"
                  size="sm"
                  className="flex-1 text-xs hover:bg-dm-accent hover:text-white hover:border-dm-accent transition-all duration-300 group"
                >
                  <Instagram size={14} className="mr-2 group-hover:scale-110 transition-transform" />
                  Instagram
                </Button>
                <Button
                  onClick={handleWhatsAppClick}
                  variant="outline"
                  size="sm"
                  className="flex-1 text-xs hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 group"
                >
                  <Phone size={14} className="mr-2 group-hover:scale-110 transition-transform" />
                  WhatsApp
                </Button>
              </div>

              {/* Input area */}
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 glass border border-dm-border rounded-xl px-4 py-3 text-sm text-dm-text placeholder:text-dm-text-muted focus:outline-none focus:ring-2 focus:ring-dm-accent focus:border-transparent transition-all duration-300"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim() || isTyping}
                  className="bg-dm-accent hover:bg-dm-accent-hover text-white p-3 rounded-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Chatbot;