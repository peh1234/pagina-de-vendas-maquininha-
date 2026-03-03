/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Truck, 
  Zap, 
  CheckCircle2, 
  Star, 
  MessageCircle, 
  Package, 
  Scissors, 
  Wallet, 
  Battery, 
  VolumeX, 
  Award,
  Clock,
  ChevronDown,
  HelpCircle,
  ThumbsUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_LINK_MAIN = "https://wa.me/5511966126806?text=Quero%20garantir%20agora%20a%20Máquina%20Dragon%20Gold%20com%20pagamento%20na%20entrega";
const WHATSAPP_LINK_EXPERT = "https://wa.me/5511966126806?text=Olá,%20quero%20falar%20com%20um%20vendedor%20sobre%20a%20Máquina%20Dragon%20Gold%20com%20pagamento%20na%20entrega";
const WHATSAPP_LINK_FINAL = "https://wa.me/5511966126806?text=Quero%20receber%20a%20Máquina%20Dragon%20Gold%20e%20pagar%20somente%20na%20entrega";

const BenefitCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-zinc-900 border border-amber-500/10 p-6 rounded-2xl flex flex-col items-center text-center hover:border-amber-500/30 transition-colors"
  >
    <div className="bg-amber-500/10 p-3 rounded-full mb-4">
      <Icon className="w-8 h-8 text-amber-500" />
    </div>
    <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
    <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const Testimonial = ({ name, text, rating, location }: { name: string, text: string, rating: number, location: string }) => (
  <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl relative overflow-hidden group">
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <ThumbsUp className="w-12 h-12 text-amber-500" />
    </div>
    <div className="flex mb-3">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
      ))}
    </div>
    <p className="text-zinc-300 italic mb-4 relative z-10">"{text}"</p>
    <div>
      <p className="text-white font-bold text-sm">{name}</p>
      <p className="text-zinc-500 text-xs">{location}</p>
    </div>
  </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-800">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-amber-500 transition-colors"
      >
        <span className="font-bold text-lg pr-8">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-zinc-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer);
          return prev;
        }
        if (prev.seconds === 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-2 justify-center items-center font-mono text-amber-500 font-black text-xl bg-amber-500/10 py-2 px-4 rounded-xl border border-amber-500/20">
      <Clock className="w-5 h-5 animate-pulse" />
      <span>{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</span>
      <span className="text-[10px] uppercase tracking-tighter text-zinc-500 ml-1">Oferta expira em</span>
    </div>
  );
};

const RecentPurchase = () => {
  const [visible, setVisible] = useState(false);
  const [purchase, setPurchase] = useState({ name: "João Silva", city: "São Paulo" });

  const purchases = [
    { name: "Carlos Oliveira", city: "Rio de Janeiro" },
    { name: "Marcos Souza", city: "Belo Horizonte" },
    { name: "Ricardo Santos", city: "Curitiba" },
    { name: "André Lima", city: "Salvador" },
    { name: "Felipe Costa", city: "Fortaleza" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const random = purchases[Math.floor(Math.random() * purchases.length)];
      setPurchase(random);
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          className="fixed bottom-24 left-6 z-50 bg-zinc-900 border border-zinc-800 p-4 rounded-2xl shadow-2xl flex items-center gap-4 max-w-[280px]"
        >
          <div className="bg-emerald-500/20 p-2 rounded-full">
            <CheckCircle2 className="w-6 h-6 text-emerald-500" />
          </div>
          <div>
            <p className="text-white text-xs font-bold">{purchase.name}</p>
            <p className="text-zinc-500 text-[10px]">Acabou de garantir a Dragon Gold em {purchase.city}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-500/30">
      
      <RecentPurchase />

      {/* Scarcity Banner */}
      <div className="bg-amber-600 text-black py-2 px-4 text-center text-xs font-bold uppercase tracking-widest sticky top-0 z-50 shadow-lg">
        🔥 ÚLTIMAS 17 UNIDADES DISPONÍVEIS COM PAGAMENTO NA ENTREGA
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_20%,rgba(245,158,11,0.1),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-zinc-900 border border-amber-500/20 px-4 py-2 rounded-full text-amber-500 text-sm font-bold mb-8"
          >
            <Truck className="w-4 h-4" />
            FRETE GRÁTIS + PAGAMENTO NA ENTREGA 📦
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tighter"
          >
            Tenha o Corte de <span className="text-amber-500 underline decoration-amber-500/30">Barbearia Profissional</span> Sem Sair de Casa
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            A Dragon Gold é a escolha dos barbeiros para acabamentos perfeitos. <span className="text-white font-bold">Pague somente quando o produto chegar na sua mão.</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-10"
          >
            <CountdownTimer />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative aspect-square rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl shadow-amber-500/10 group"
            >
              <img 
                src="https://http2.mlstatic.com/D_Q_NP_832550-MLA92083616040_092025-O.webp" 
                alt="Máquina Dragon Gold Profissional" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                  <span className="text-[10px] font-bold">4.9/5 (5.2k avaliações)</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-left space-y-5"
            >
              {[
                { text: "Lâmina de Titânio Ultra-Afiada", sub: "Corte rente sem irritar a pele" },
                { text: "Bateria de Lítio 1200mAh", sub: "Até 2 horas de uso contínuo" },
                { text: "Motor Turbo Silencioso", sub: "Potência de barbearia profissional" },
                { text: "Design Ergonômico em Metal", sub: "Não escorrega e dura para sempre" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="bg-amber-500/10 p-2 rounded-lg h-fit">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  </div>
                  <div>
                    <p className="text-zinc-100 font-bold leading-none mb-1">{item.text}</p>
                    <p className="text-zinc-500 text-xs">{item.sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col gap-4 max-w-md mx-auto"
          >
            <a 
              href={WHATSAPP_LINK_MAIN}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-emerald-600 hover:bg-emerald-500 text-white font-black py-6 px-8 rounded-2xl shadow-2xl shadow-emerald-900/40 transition-all active:scale-95 flex flex-col items-center justify-center gap-1 text-lg"
            >
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 fill-current" />
                RESERVAR MINHA DRAGON GOLD
              </div>
              <span className="text-[10px] opacity-80 font-medium">Clique para garantir via WhatsApp</span>
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-emerald-800 rounded-b-2xl opacity-50" />
            </a>
            
            <div className="flex items-center justify-center gap-4 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
              <span>Pagamento na Entrega</span>
              <div className="w-1 h-1 rounded-full bg-zinc-800" />
              <span>Garantia de 7 Dias</span>
              <div className="w-1 h-1 rounded-full bg-zinc-800" />
              <span>Suporte VIP</span>
            </div>
            
            <a 
              href={WHATSAPP_LINK_EXPERT}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white font-bold py-3 flex items-center justify-center gap-2 transition-colors group"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              DÚVIDAS? FALE COM UM CONSULTOR
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zinc-900/30 px-6 border-y border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Por que a Dragon Gold é Superior?</h2>
            <p className="text-zinc-500 max-w-xl mx-auto">Desenvolvida para homens que não aceitam menos que a perfeição no visual.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <BenefitCard 
              icon={Scissors} 
              title="Acabamento de Barbeiro" 
              description="Faça o degradê perfeito e o pezinho da barba com precisão de 0.1mm." 
            />
            <BenefitCard 
              icon={Wallet} 
              title="Economia Inteligente" 
              description="Economize mais de R$ 1.200,00 por ano em idas à barbearia." 
            />
            <BenefitCard 
              icon={Battery} 
              title="Liberdade Total" 
              description="Bateria que dura semanas. Carregue em qualquer porta USB." 
            />
            <BenefitCard 
              icon={Award} 
              title="Qualidade Vitalícia" 
              description="Corpo em liga de zinco ultra-resistente. Uma máquina para a vida toda." 
            />
            <BenefitCard 
              icon={VolumeX} 
              title="Zero Ruído" 
              description="Motor de alta rotação com tecnologia de baixo ruído. Use a qualquer hora." 
            />
            <BenefitCard 
              icon={Zap} 
              title="Pele Sem Irritação" 
              description="Lâminas arredondadas que protegem sua pele contra cortes e alergias." 
            />
          </div>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section className="py-20 px-6 bg-zinc-950 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Lâminas de Titânio com Tecnologia T-Blade</h2>
            <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
              O segredo do corte perfeito está na nossa cabeça de corte suspensa. Desenvolvida para alcançar os lugares mais difíceis com precisão milimétrica, sem irritar a pele.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Corte rente à pele (0.1mm)",
                "Não superaquece com o uso prolongado",
                "Fácil de limpar e 100% higiênica",
                "Ideal para degradê, barbas e desenhos"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                  <span className="text-zinc-200 font-bold">{item}</span>
                </div>
              ))}
            </div>
            <a 
              href={WHATSAPP_LINK_MAIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-500 font-black hover:text-amber-400 transition-colors group text-lg"
            >
              QUERO ESSA PRECISÃO AGORA
              <Zap className="w-4 h-4 fill-current group-hover:scale-125 transition-transform" />
            </a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 order-1 md:order-2 relative"
          >
            <div className="absolute inset-0 bg-amber-500/10 blur-[80px] rounded-full" />
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxfnCnYE62aUtTMPJBwAi6z-QqQd8vSxUAYQ&s" 
              alt="Lâmina Dragon Gold de Alta Precisão" 
              className="relative z-10 rounded-3xl border border-amber-500/20 shadow-2xl shadow-amber-500/5 rotate-3 hover:rotate-0 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Elite Design Section */}
      <section className="py-20 px-6 bg-zinc-900/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <img 
              src="https://izeshop.com.br/wp-content/uploads/2023/10/maquina-de-cortar-cabelo-dragon-max-5-600x600.webp" 
              alt="Detalhes Dragon Gold em Metal" 
              className="rounded-3xl border border-zinc-800 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Construção em Metal de Alta Resistência</h2>
            <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
              Sinta o peso da qualidade. Diferente das máquinas de plástico comuns, a Dragon Gold possui corpo em liga metálica, garantindo estabilidade no corte e uma vida útil muito superior.
            </p>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4 bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
                <div className="bg-amber-500/20 p-3 rounded-xl">
                  <Award className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <p className="text-white font-bold">Acabamento Premium</p>
                  <p className="text-zinc-500 text-xs">Entalhes em alto relevo feitos à mão.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
                <div className="bg-amber-500/20 p-3 rounded-xl">
                  <Zap className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <p className="text-white font-bold">Motor de Alta Performance</p>
                  <p className="text-zinc-500 text-xs">7000 RPM para cortes sem esforço.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-4">Galeria de Detalhes</h2>
            <p className="text-zinc-500">Veja de perto a perfeição em cada curva da sua nova Dragon Gold.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { src: "https://izeshop.com.br/wp-content/uploads/2023/10/maquina-de-cortar-cabelo-dragon-max-5-600x600.webp", alt: "Uso Profissional" },
              { src: "https://izeshop.com.br/wp-content/uploads/2023/10/maquina-de-cortar-cabelo-dragon-max-4-600x600.webp", alt: "Detalhes do Design" },
              { src: "https://http2.mlstatic.com/D_Q_NP_832550-MLA92083616040_092025-O.webp", alt: "Dragon Gold Premium" },
              { src: "https://a-static.mlcdn.com.br/800x600/aparelho-de-barbear-e-cortar-cabelo-a-prova-de-agua-eletrico-goldenmix/schwarzmix/maquina-dragao-515/1b1a7603380251d94afebcabcb1553f0.jpeg", alt: "Kit Completo" },
              { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxfnCnYE62aUtTMPJBwAi6z-QqQd8vSxUAYQ&s", alt: "Precisão Milimétrica" }
            ].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square rounded-2xl overflow-hidden border border-zinc-800 group"
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's in the Box */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-zinc-900 rounded-[2.5rem] p-8 md:p-12 border border-amber-500/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[100px] -mr-32 -mt-32" />
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-3">
                <Package className="text-amber-500" />
                O Que Vem na Caixa
              </h2>
              <ul className="space-y-4">
                {[
                  "Máquina Dragon Gold Profissional",
                  "4 pentes (1.5mm, 2mm, 3mm, 4mm)",
                  "Bateria recarregável de alta performance",
                  "Cabo USB para carregamento",
                  "Escova de limpeza",
                  "Óleo lubrificante para lâminas"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src="https://a-static.mlcdn.com.br/800x600/aparelho-de-barbear-e-cortar-cabelo-a-prova-de-agua-eletrico-goldenmix/schwarzmix/maquina-dragao-515/1b1a7603380251d94afebcabcb1553f0.jpeg" 
                alt="Kit Dragon Gold Completo" 
                className="rounded-2xl shadow-2xl border border-zinc-800"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6 bg-zinc-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Quem usa, aprova!</h2>
            <p className="text-zinc-500">Mais de 5.000 homens já transformaram seu visual com a Dragon Gold.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Testimonial 
              name="Ricardo S." 
              location="São Paulo, SP"
              text="Qualidade absurda, parece máquina profissional mesmo. O acabamento é top e a bateria dura muito." 
              rating={5} 
            />
            <Testimonial 
              name="Marcos V." 
              location="Rio de Janeiro, RJ"
              text="Chegou rápido e só paguei quando recebi. Recomendo demais a loja pela segurança." 
              rating={5} 
            />
            <Testimonial 
              name="André L." 
              location="Belo Horizonte, MG"
              text="Motor forte e não puxa o pelo. Melhor investimento que fiz esse ano para economizar com barbeiro." 
              rating={5} 
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <HelpCircle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Dúvidas Frequentes</h2>
            <p className="text-zinc-500">Tudo o que você precisa saber antes de garantir a sua.</p>
          </div>
          
          <div className="space-y-2">
            <FAQItem 
              question="Como funciona o pagamento na entrega?" 
              answer="É simples! Você faz o pedido pelo WhatsApp, nós enviamos o produto e você só paga ao entregador (via Pix, Cartão ou Dinheiro) no momento em que receber o pacote em mãos." 
            />
            <FAQItem 
              question="A máquina é à prova d'água?" 
              answer="A cabeça de corte é resistente e pode ser limpa com a escova inclusa. Recomendamos não mergulhar o corpo da máquina em água para preservar os componentes eletrônicos." 
            />
            <FAQItem 
              question="Qual o tempo de entrega?" 
              answer="O prazo médio é de 3 a 7 dias úteis, dependendo da sua região. Você receberá um código de rastreio para acompanhar cada passo." 
            />
            <FAQItem 
              question="Tem garantia?" 
              answer="Sim! Oferecemos garantia de 7 dias para satisfação total ou seu dinheiro de volta, além de garantia contra defeitos de fabricação." 
            />
          </div>
        </div>
      </section>

      {/* Security & Guarantee */}
      <section className="py-20 px-6 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-900/50 border border-amber-500/20 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
            <div className="w-32 h-32 shrink-0 bg-amber-500/10 rounded-full flex items-center justify-center border border-amber-500/20">
              <ShieldCheck className="w-16 h-16 text-amber-500" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-white mb-4">Risco Zero para Você</h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Confiamos tanto na qualidade da Dragon Gold que você tem <span className="text-white font-bold">7 dias de garantia incondicional</span>. Se não gostar, devolvemos seu dinheiro. Além disso, o pagamento é feito apenas no ato da entrega.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-zinc-950 px-4 py-2 rounded-xl border border-zinc-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-bold">Compra Garantida</span>
                </div>
                <div className="flex items-center gap-2 bg-zinc-950 px-4 py-2 rounded-xl border border-zinc-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-bold">Site Seguro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-b from-zinc-950 to-zinc-900 border-t border-zinc-800 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
              Última Chance de Garantir a Sua com <span className="text-amber-500">Frete Grátis</span>
            </h2>
            <p className="text-xl text-zinc-400 mb-12">
              Não deixe para amanhã o visual que você pode ter hoje. Promoção válida enquanto durar o estoque.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a 
              href={WHATSAPP_LINK_FINAL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-emerald-600 hover:bg-emerald-500 text-white font-black py-8 px-10 rounded-2xl shadow-2xl shadow-emerald-900/40 transition-all active:scale-95 flex flex-col items-center justify-center gap-2 text-xl md:text-3xl"
            >
              <div className="flex items-center gap-4">
                🔥 QUERO RECEBER E PAGAR NA ENTREGA
              </div>
              <span className="text-xs opacity-80 font-medium">Restam poucas unidades com esta condição</span>
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-emerald-800 rounded-b-2xl opacity-50" />
            </a>
            
            <div className="mt-12 flex flex-col items-center gap-4">
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">Pagamento Seguro Facilitado</p>
              <div className="flex items-center justify-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_Pix.png" alt="Pix" className="h-6" referrerPolicy="no-referrer" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" referrerPolicy="no-referrer" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" referrerPolicy="no-referrer" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-900 text-center text-zinc-600 text-xs">
        <div className="flex justify-center gap-8 mb-8">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Rastreio</a>
        </div>
        <p className="mb-4">© 2026 Dragon Gold Profissional. Todos os direitos reservados.</p>
        <p className="max-w-2xl mx-auto leading-relaxed">As imagens são meramente ilustrativas. O resultado final pode variar de acordo com o uso e tipo de cabelo/barba. Pagamento na entrega sujeito a disponibilidade de logística na sua região. Esta página não é afiliada ao Facebook ou Google.</p>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-zinc-950/80 backdrop-blur-lg border-t border-zinc-800 md:hidden">
        <a 
          href={WHATSAPP_LINK_MAIN}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 text-white font-black py-4 px-6 rounded-xl shadow-xl flex items-center justify-center gap-3 text-sm animate-pulse"
        >
          <Zap className="w-5 h-5 fill-current" />
          GARANTIR MINHA UNIDADE AGORA
        </a>
      </div>
    </div>
  );
}
