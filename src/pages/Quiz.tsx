import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Question {
  id: string;
  question: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: "company-stage",
    question: "Qual é o estágio atual da sua empresa?",
    options: [
      "Startup/Empresa nova (0-2 anos)",
      "Empresa em crescimento (2-5 anos)",
      "Empresa consolidada (5+ anos)",
      "Sou empreendedor individual"
    ]
  },
  {
    id: "monthly-revenue",
    question: "Qual é o faturamento mensal atual da sua empresa?",
    options: [
      "Até R$ 10.000",
      "R$ 10.001 a R$ 50.000",
      "R$ 50.001 a R$ 200.000",
      "Acima de R$ 200.000"
    ]
  },
  {
    id: "marketing-experience",
    question: "Qual é a sua experiência com marketing digital?",
    options: [
      "Iniciante - pouca ou nenhuma experiência",
      "Básico - já tentei algumas estratégias",
      "Intermediário - tenho conhecimento mas preciso de ajuda",
      "Avançado - só preciso de otimização"
    ]
  },
  {
    id: "main-challenge",
    question: "Qual é o seu principal desafio atualmente?",
    options: [
      "Gerar mais leads qualificados",
      "Aumentar as vendas online",
      "Melhorar o ROI dos investimentos em marketing",
      "Criar uma estratégia digital eficiente"
    ]
  },
  {
    id: "investment-capacity",
    question: "Qual é o seu orçamento mensal para marketing digital?",
    options: [
      "Até R$ 5.000",
      "R$ 5.001 a R$ 15.000",
      "R$ 15.001 a R$ 30.000",
      "Acima de R$ 30.000"
    ]
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleFinish = () => {
    // Encode answers for WhatsApp message
    const answersText = questions.map((q, index) => 
      `${index + 1}. ${q.question}\n→ ${answers[q.id] || 'Não respondido'}`
    ).join('\n\n');
    
    const message = `Olá! Completei o quiz de qualificação da Digital Market.\n\nMinhas respostas:\n\n${answersText}\n\nGostaria de agendar uma call de diagnóstico!`;
    const encodedMessage = encodeURIComponent(message);
    
    window.open(`https://wa.me/5521994914235?text=${encodedMessage}`, '_blank');
  };

  const currentQ = questions[currentQuestion];
  const isAnswered = currentQ && answers[currentQ.id];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-dm-bg flex items-center justify-center px-4">
        <Card className="w-full max-w-2xl bg-dm-card border-dm-border">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
              <Check className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-poppins text-dm-text">
              Quiz Concluído!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-center">
            <p className="text-dm-text-muted text-lg">
              Obrigado por completar nosso quiz de qualificação. Com base nas suas respostas, 
              nossa equipe poderá preparar uma proposta personalizada para o seu negócio.
            </p>
            <div className="space-y-4">
              <Button 
                onClick={handleFinish}
                className="btn-primary w-full py-4 text-lg font-poppins font-semibold"
              >
                Enviar Respostas e Agendar Call
              </Button>
              <Button 
                onClick={() => navigate('/')}
                className="btn-secondary w-full py-3 font-poppins"
              >
                Voltar ao Site
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dm-bg flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <Button
            onClick={() => navigate('/')}
            className="mb-6 btn-secondary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Site
          </Button>
          <h1 className="text-3xl font-poppins font-bold text-dm-text mb-2">
            Quiz de Qualificação
          </h1>
          <p className="text-dm-text-muted">
            Responda algumas perguntas para recebermos uma proposta personalizada
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-dm-text-muted mb-2">
            <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
            <span>{Math.round(progress)}% concluído</span>
          </div>
          <div className="w-full bg-dm-border rounded-full h-2">
            <div 
              className="bg-dm-accent h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <Card className="bg-dm-card border-dm-border">
          <CardHeader>
            <CardTitle className="text-xl font-poppins text-dm-text">
              {currentQ.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={answers[currentQ.id] || ""}
              onValueChange={(value) => handleAnswer(currentQ.id, value)}
              className="space-y-4"
            >
              {currentQ.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border border-dm-border hover:bg-dm-bg-subtle transition-colors">
                  <RadioGroupItem value={option} id={`${currentQ.id}-${index}`} />
                  <Label 
                    htmlFor={`${currentQ.id}-${index}`}
                    className="text-dm-text font-inter cursor-pointer flex-1"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="btn-secondary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Anterior
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={!isAnswered}
            className="btn-primary"
          >
            {currentQuestion === questions.length - 1 ? 'Finalizar' : 'Próxima'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;