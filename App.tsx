import React, { useState } from 'react';
import { 
  Zap, 
  Layers, 
  Cpu, 
  Settings, 
  CheckCircle2, 
  XCircle, 
  BarChart3, 
  ShieldCheck,
  Terminal,
  Linkedin,
  ArrowRight,
  Server,
  Eye,
  Rocket,
  MousePointerClick,
  FileBarChart,
  Plus,
  ExternalLink,
  Clock,
  UserX,
  TrendingUp,
  Workflow,
  Calculator
} from 'lucide-react';
import { Section } from './components/ui/Section';
import { Button } from './components/ui/Button';
import { AutomationVisual } from './components/visuals/AutomationVisual';
import { MetricsVisual } from './components/visuals/MetricsVisual';
import { Modal } from './components/ui/Modal';
import { CheckoutForm } from './components/forms/CheckoutForm';

export default function App() {
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  
  const scrollToPrice = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openCheckout = () => {
    setIsCheckoutModalOpen(true);
  };

  const openExternalLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand-500/30 selection:text-brand-100">
      
      {/* Modal de Checkout */}
      <Modal 
        isOpen={isCheckoutModalOpen} 
        onClose={() => setIsCheckoutModalOpen(false)}
        title="Finalizar Inscrição"
      >
        <CheckoutForm />
      </Modal>

      {/* Navigation / Header */}
      <nav className="fixed w-full z-50 glass-card border-b border-white/5 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-brand-600 p-1.5 rounded-lg shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Deploy <span className="text-brand-400">Stack</span></span>
            </div>
            <div className="hidden md:block">
              <Button variant="outline" className="px-4 py-2 text-xs h-10 border-brand-500/50 text-white hover:bg-brand-600/20" onClick={scrollToPrice} withIcon={false}>
                ACESSAR AGORA
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* 1. Hero Section (Light Grid BG) */}
      <Section className="pt-32 lg:pt-48 grid-bg relative">
        <div className="absolute top-40 left-[-100px] w-96 h-96 bg-brand-600/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-brand-300 text-sm font-medium mb-6 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              <span>Automação Total &bull; Escala sem Contratação</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Escale sua operação <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-200">sem depender de pessoas</span>.
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-400 mb-8 leading-relaxed max-w-xl">
              O Deploy Stack é a infraestrutura completa de automação para gestores de tráfego. Criação de anúncios, Monitoramento de saldo e Relatórios de IA em um único sistema.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button onClick={scrollToPrice} className="w-full sm:w-auto shadow-brand-500/40">
                QUERO AUTOMATIZAR TUDO
              </Button>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-slate-400 bg-slate-900/50 p-4 rounded-xl border border-slate-800/50 backdrop-blur-sm w-fit">
              <div className="flex items-center gap-2">
                <Server size={16} className="text-brand-500" />
                <span>Inclui Setup de <strong>VPS + Docker + n8n</strong></span>
              </div>
            </div>
          </div>
          
          <div className="relative z-10">
             <AutomationVisual />
          </div>
        </div>
      </Section>

      {/* 2. [NEW SECTION] Comparison: Human vs Robot (Darker) */}
      <Section darker>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">A Falácia da Contratação</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A maioria dos gestores acha que para crescer precisa contratar um Júnior. Veja a matemática.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
           {/* Card: Gestor Junior */}
           <div className="bg-slate-900/50 rounded-2xl p-8 border border-red-500/20 relative overflow-hidden">
              <div className="flex items-center gap-4 mb-6">
                 <div className="p-3 bg-red-500/10 rounded-lg text-red-500"><UserX size={24} /></div>
                 <div>
                    <h3 className="text-xl font-bold text-white">Contratar um Júnior</h3>
                    <p className="text-sm text-slate-500">O caminho tradicional e doloroso.</p>
                 </div>
              </div>
              <ul className="space-y-4 text-slate-400">
                 <li className="flex items-center gap-3"><XCircle size={18} className="text-red-500 shrink-0" /> Salário: R$ 2.000 - R$ 3.000/mês</li>
                 <li className="flex items-center gap-3"><XCircle size={18} className="text-red-500 shrink-0" /> Precisa de Treinamento (seu tempo)</li>
                 <li className="flex items-center gap-3"><XCircle size={18} className="text-red-500 shrink-0" /> Comete erros manuais</li>
                 <li className="flex items-center gap-3"><XCircle size={18} className="text-red-500 shrink-0" /> Pede demissão após aprender</li>
                 <li className="flex items-center gap-3"><XCircle size={18} className="text-red-500 shrink-0" /> Trabalha 8h/dia (se não faltar)</li>
              </ul>
              <div className="mt-8 pt-6 border-t border-slate-800">
                 <div className="text-xs text-red-400 uppercase font-bold mb-1">Custo Anual Estimado</div>
                 <div className="text-2xl font-bold text-white">R$ 30.000+ <span className="text-sm font-normal text-slate-500">/ano</span></div>
              </div>
           </div>

           {/* Card: Deploy Stack */}
           <div className="bg-gradient-to-b from-brand-900/20 to-slate-900 rounded-2xl p-8 border-2 border-brand-500 relative overflow-hidden shadow-2xl shadow-brand-900/20">
              <div className="absolute top-4 right-4 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Recomendado</div>
              <div className="flex items-center gap-4 mb-6">
                 <div className="p-3 bg-brand-500/20 rounded-lg text-brand-400"><Cpu size={24} /></div>
                 <div>
                    <h3 className="text-xl font-bold text-white">Deploy Stack</h3>
                    <p className="text-sm text-brand-200/70">Infraestrutura de Automação.</p>
                 </div>
              </div>
              <ul className="space-y-4 text-white">
                 <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-brand-500 shrink-0" /> Custo Único (Sem mensalidade)</li>
                 <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-brand-500 shrink-0" /> Já vem treinado e configurado</li>
                 <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-brand-500 shrink-0" /> Zero erros operacionais</li>
                 <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-brand-500 shrink-0" /> Escala infinita (é código)</li>
                 <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-brand-500 shrink-0" /> Trabalha 24h/dia, 7 dias/semana</li>
              </ul>
              <div className="mt-8 pt-6 border-t border-brand-500/30">
                 <div className="text-xs text-brand-300 uppercase font-bold mb-1">Investimento Único</div>
                 <div className="text-2xl font-bold text-white">R$ 3.497 <span className="text-sm font-normal text-slate-400">vitalício</span></div>
              </div>
           </div>
        </div>

        <div className="mt-12 text-center">
            <Button onClick={scrollToPrice}>
                CHEGA DE GASTAR DINHEIRO, QUERO AUTOMATIZAR
            </Button>
        </div>
      </Section>

      {/* 3. Pillars Section (Light - Changed from Darker) */}
      <Section id="benefits">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Os 3 Pilares do Deploy Stack</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Não é uma ferramenta genérica. É um sistema integrado que cobre as três etapas críticas da gestão de tráfego.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {/* Pillar 1 - Ads (BLUE) */}
           <div className="glass-card p-8 rounded-2xl border-t-4 border-t-blue-500 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                 <Rocket size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Deploy Ads</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                 Automação de criação e publicação de anúncios.
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                 <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Adeus subida manual</li>
                 <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Padronização de nomes</li>
                 <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Ganho de velocidade</li>
              </ul>
           </div>

           {/* Pillar 2 - Monitor (AMBER) */}
           <div className="glass-card p-8 rounded-2xl border-t-4 border-t-amber-500 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-400 mb-6">
                 <Eye size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Deploy Monitor</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                 Monitoramento ativo de saldo e status 24/7.
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                 <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-500" /> Zero campanhas pausadas</li>
                 <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-500" /> Alertas no WhatsApp/Slack</li>
                 <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-500" /> Previsibilidade de recarga</li>
              </ul>
           </div>

           {/* Pillar 3 - Insights (GREEN) */}
           <div className="glass-card p-8 rounded-2xl border-t-4 border-t-green-500 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 mb-6">
                 <FileBarChart size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Deploy Insights</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                 Relatórios automáticos com análise por IA.
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                 <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Fim das planilhas manuais</li>
                 <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Análise de dados por IA</li>
                 <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Insights de decisão</li>
              </ul>
           </div>
        </div>

        <div className="mt-12 text-center">
            <Button onClick={scrollToPrice}>
                QUERO ESSAS 3 FERRAMENTAS
            </Button>
        </div>
      </Section>

      {/* 4. Technical Delivery (Darker - Changed from Light) */}
      <Section darker>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Não é só uma ferramenta. É Infraestrutura.</h2>
          <p className="text-slate-400">Implementação profissional de Engenharia de Dados e DevOps.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
           <div className="space-y-6">
              <div className="glass-card p-6 rounded-xl border-l-4 border-brand-500 bg-slate-900/50">
                 <div className="flex items-center gap-4 mb-2">
                    <Server className="text-brand-400" />
                    <h3 className="text-lg font-bold text-white">Servidor VPS Configurado</h3>
                 </div>
                 <p className="text-slate-400 text-sm">Seu próprio servidor rodando 24/7. Seguro, isolado e performático.</p>
              </div>
              <div className="glass-card p-6 rounded-xl border-l-4 border-brand-500 bg-slate-900/50">
                 <div className="flex items-center gap-4 mb-2">
                    <Layers className="text-brand-400" />
                    <h3 className="text-lg font-bold text-white">Docker Swarm & Portainer</h3>
                 </div>
                 <p className="text-slate-400 text-sm">Orquestração profissional. Se um serviço cair, ele reinicia automaticamente.</p>
              </div>
              <div className="glass-card p-6 rounded-xl border-l-4 border-brand-500 bg-slate-900/50">
                 <div className="flex items-center gap-4 mb-2">
                    <Cpu className="text-brand-400" />
                    <h3 className="text-lg font-bold text-white">n8n Self-Hosted</h3>
                 </div>
                 <p className="text-slate-400 text-sm">Sem limites de execução. Você é dono da ferramenta e do código.</p>
              </div>
           </div>
           
           <div className="flex justify-center">
              <MetricsVisual />
           </div>
        </div>

        <div className="mt-12 text-center">
            <Button onClick={scrollToPrice}>
                QUERO MINHA PRÓPRIA INFRAESTRUTURA
            </Button>
        </div>
      </Section>

      {/* 5. [NEW SECTION] Timeline: Implementation Process (Light) */}
      <Section>
        <div className="max-w-5xl mx-auto">
           <div className="text-center mb-16">
             <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Como funciona a implementação?</h2>
             <p className="text-slate-400">Um processo organizado para tirar você do operacional em 4 passos.</p>
           </div>

           <div className="grid md:grid-cols-4 gap-4 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-brand-900 via-brand-500 to-brand-900 z-0 opacity-30"></div>

              {[
                { 
                  icon: <Settings size={20} />, 
                  step: "01", 
                  title: "Diagnóstico", 
                  desc: "Entendo sua estrutura de contas, nomenclatura e regras de negócio atuais."
                },
                { 
                  icon: <Server size={20} />, 
                  step: "02", 
                  title: "Setup Infra", 
                  desc: "Subo seu servidor VPS, configuro Docker, Segurança e instalo o n8n."
                },
                { 
                  icon: <Workflow size={20} />, 
                  step: "03", 
                  title: "Deploy", 
                  desc: "Importo e configuro os workflows (Ads, Monitor, Insights) com suas chaves."
                },
                { 
                  icon: <Rocket size={20} />, 
                  step: "04", 
                  title: "Handover", 
                  desc: "Te entrego as chaves e te ensino a operar o sistema. Tudo pronto."
                }
              ].map((item, i) => (
                <div key={i} className="relative z-10">
                   <div className="glass-card p-6 rounded-2xl h-full border border-slate-700/50 hover:border-brand-500/50 transition-colors group bg-slate-900">
                      <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-brand-400 mb-4 group-hover:bg-brand-600 group-hover:text-white transition-colors relative">
                         {item.icon}
                         <div className="absolute -top-3 -right-3 bg-brand-950 text-brand-500 text-xs font-bold px-2 py-0.5 rounded border border-brand-900">
                            {item.step}
                         </div>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        <div className="mt-12 text-center">
            <Button onClick={scrollToPrice}>
                QUERO INICIAR O DIAGNÓSTICO AGORA
            </Button>
        </div>
      </Section>

      {/* 6. Target Audience (Darker) */}
      <Section darker>
        <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Para quem é o Deploy Stack?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Positive Side */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-900/50 border border-slate-800 hover:border-brand-500/30 transition-colors rounded-3xl p-8 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-indigo-500"></div>
             <ul className="space-y-6">
               {[
                 "Gerencia múltiplas contas e quer reduzir o caos operacional",
                 "Precisa escalar a operação sem contratar mais funcionários",
                 "Quer eliminar o risco trabalhista de ter equipe junior",
                 "Busca previsibilidade, controle e dados confiáveis"
               ].map((item, i) => (
                 <li key={i} className="flex items-start gap-3 text-slate-300">
                   <div className="mt-1 bg-brand-500/20 p-1 rounded">
                     <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                   </div>
                   <span className="text-lg">{item}</span>
                 </li>
               ))}
             </ul>
          </div>

          {/* Negative Side */}
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 relative opacity-60 hover:opacity-100 transition-opacity flex items-center">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
             <ul className="space-y-6">
               {[
                 "Gosta de fazer trabalho repetitivo manual (Ctrl+C, Ctrl+V)",
                 "Prefere confiar na sorte do que em processos validados",
                 "Acha que ferramentas genéricas 'No-Code' resolvem tudo",
                 "Não quer ter controle total sobre a infraestrutura"
               ].map((item, i) => (
                 <li key={i} className="flex items-start gap-3 text-slate-400">
                   <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                   <span>{item}</span>
                 </li>
               ))}
             </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" onClick={scrollToPrice}>
            QUERO ESCALAR MINHA OPERAÇÃO
          </Button>
        </div>
      </Section>

      {/* 7. [NEW SECTION] ROI Stats / Social Proof (Light) */}
      <Section>
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/20 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-wider mb-4">
                  <TrendingUp size={14} /> Impacto Real
               </div>
               <h2 className="text-3xl lg:text-4xl font-bold text-white">O retorno sobre o investimento</h2>
               <p className="text-slate-400 mt-2">Dados baseados na média de operações que implementaram o Stack.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               <div className="glass-card p-6 rounded-2xl text-center border-t-2 border-brand-500">
                  <div className="text-4xl font-extrabold text-white mb-2">+40h</div>
                  <div className="text-sm text-slate-400">Livres por mês/gestor</div>
               </div>
               <div className="glass-card p-6 rounded-2xl text-center border-t-2 border-brand-500">
                  <div className="text-4xl font-extrabold text-white mb-2">0%</div>
                  <div className="text-sm text-slate-400">Campanhas pausadas por erro</div>
               </div>
               <div className="glass-card p-6 rounded-2xl text-center border-t-2 border-brand-500">
                  <div className="text-4xl font-extrabold text-white mb-2">10x</div>
                  <div className="text-sm text-slate-400">Mais rápido que humano</div>
               </div>
               <div className="glass-card p-6 rounded-2xl text-center border-t-2 border-brand-500">
                  <div className="text-4xl font-extrabold text-white mb-2">24/7</div>
                  <div className="text-sm text-slate-400">Operação ativa e vigiada</div>
               </div>
            </div>
         </div>

         <div className="mt-12 text-center">
            <Button onClick={scrollToPrice}>
                QUERO TER ESSES RESULTADOS
            </Button>
         </div>
      </Section>

      {/* 8. Pricing Section (Darker - Updated to 2 Card Strategy) */}
      <Section darker id="pricing" className="py-24 relative overflow-hidden">
         {/* Background glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/10 blur-[120px] rounded-full pointer-events-none"></div>

         <div className="max-w-5xl mx-auto relative z-10">
           
           <div className="text-center mb-16">
             <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Escolha como Escalar</h2>
             <p className="text-slate-400">A matemática é simples. Veja a vantagem do Stack.</p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Card 1: Comparative Anchor (Individual Sum) */}
              <div className="glass-card p-8 rounded-2xl border border-slate-700 bg-slate-900/30 opacity-80 hover:opacity-100 transition-opacity flex flex-col h-full relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Calculator size={80} />
                 </div>
                 
                 <div className="text-slate-400 font-medium text-xs mb-6 uppercase tracking-wider flex items-center gap-2">
                    <XCircle size={14} className="text-slate-500" /> Se comprar separado
                 </div>
                 
                 <div className="space-y-6 flex-grow mb-8 relative z-10">
                     <div className="border-b border-slate-800 pb-4">
                         <div className="flex justify-between items-center mb-1">
                            <span className="text-slate-300 font-medium flex items-center gap-2"><Rocket size={16} className="text-blue-500"/> Deploy Ads</span>
                            <span className="text-white font-mono">R$ 2.000</span>
                         </div>
                         <p className="text-[10px] text-slate-500 pl-6">Automação de criação e publicação.</p>
                     </div>
                     <div className="border-b border-slate-800 pb-4">
                         <div className="flex justify-between items-center mb-1">
                            <span className="text-slate-300 font-medium flex items-center gap-2"><Eye size={16} className="text-amber-500"/> Deploy Monitor</span>
                            <span className="text-white font-mono">R$ 1.500</span>
                         </div>
                         <p className="text-[10px] text-slate-500 pl-6">Segurança e alertas de saldo.</p>
                     </div>
                     <div className="border-b border-slate-800 pb-4">
                         <div className="flex justify-between items-center mb-1">
                            <span className="text-slate-300 font-medium flex items-center gap-2"><FileBarChart size={16} className="text-green-500"/> Deploy Insights</span>
                            <span className="text-white font-mono">R$ 1.500</span>
                         </div>
                         <p className="text-[10px] text-slate-500 pl-6">Relatórios e análise de dados IA.</p>
                     </div>
                 </div>

                 <div className="mt-auto">
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-sm text-slate-500 uppercase font-bold">Total Separado</span>
                        <span className="text-3xl font-bold text-slate-400">R$ 5.000</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1 rounded-full mb-6"></div>
                    <div className="text-center text-xs text-slate-500 font-medium uppercase tracking-wide border border-dashed border-slate-700 p-3 rounded-lg">
                        Não vale a pena comprar separado
                    </div>
                 </div>
              </div>

              {/* Card 2: Stack (Futuristic Offer) */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-br from-brand-600 to-purple-600 shadow-[0_0_50px_rgba(79,70,229,0.3)] transform lg:scale-110 lg:-ml-4 z-20 overflow-hidden group">
                 {/* Futuristic Beam Effect */}
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-[200%] h-full animate-shine pointer-events-none transform skew-x-12"></div>
                 
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

                 <div className="relative bg-slate-950 rounded-xl p-8 h-full flex flex-col">
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-0 bg-brand-600 text-white px-4 py-1 rounded-b-lg text-[10px] font-bold uppercase tracking-wide shadow-lg whitespace-nowrap z-30">
                        Oferta Exclusiva
                     </div>

                     <div className="text-brand-400 font-bold text-xs mb-2 uppercase tracking-wider flex items-center gap-2 mt-4">
                        <Zap size={14} className="fill-current animate-pulse" /> Power Stack
                     </div>
                     <h3 className="text-3xl font-bold text-white mb-6">Deploy Stack</h3>
                     
                     {/* Updated Price Box */}
                     <div className="mb-8 p-6 bg-brand-900/20 rounded-xl border border-brand-500/30 backdrop-blur-sm text-center">
                        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-2">
                            <span className="text-lg sm:text-xl text-brand-200 font-medium">12x de</span>
                            <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter">R$ 361,67</span>
                        </div>
                        <div className="text-slate-400 text-xs sm:text-sm">
                            ou à vista por <span className="font-bold text-white">R$ 3.497,00</span>
                        </div>
                     </div>

                     <div className="space-y-4 mb-8 text-sm flex-grow">
                        <div className="flex gap-3 items-center"><div className="bg-brand-500/20 p-1 rounded-full"><CheckCircle2 size={14} className="text-brand-400" /></div> <span className="text-white font-medium">Ecossistema Completo (Ads + Monitor + Insights)</span></div>
                        <div className="flex gap-3 items-center"><div className="bg-brand-500/20 p-1 rounded-full"><CheckCircle2 size={14} className="text-brand-400" /></div> <span className="text-white font-medium">Setup Infraestrutura (VPS + Docker)</span></div>
                        <div className="flex gap-3 items-center"><div className="bg-brand-500/20 p-1 rounded-full"><CheckCircle2 size={14} className="text-brand-400" /></div> <span className="text-white font-medium">Acesso Vitalício ao Código</span></div>
                        <div className="flex gap-3 items-center"><div className="bg-brand-500/20 p-1 rounded-full"><CheckCircle2 size={14} className="text-brand-400" /></div> <span className="text-white font-medium">Suporte na Implementação</span></div>
                     </div>

                     <Button fullWidth onClick={openCheckout} className="bg-brand-600 text-white hover:bg-brand-500 shadow-lg shadow-brand-500/40 py-4 text-sm font-bold border-none ring-0">
                        QUERO ECONOMIZAR R$ 1.503
                     </Button>
                 </div>
              </div>

           </div>
           
           <div className="max-w-xl mx-auto mt-16 text-center">
                <div className="inline-flex items-center gap-2 text-brand-300 bg-brand-900/20 px-4 py-2 rounded-full border border-brand-500/20 text-sm">
                    <ShieldCheck size={16} />
                    <span>Garantia de 7 dias ou seu dinheiro de volta.</span>
                </div>
           </div>

         </div>
      </Section>

      {/* 9. Bio Section (Light - Changed from Darker) */}
      <Section>
        <div className="max-w-5xl mx-auto glass-card rounded-3xl p-8 md:p-12 border border-slate-700 relative overflow-hidden bg-slate-900/50">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-600/10 blur-[80px] rounded-full -mr-20 -mt-20 pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
             <div className="relative shrink-0">
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-2xl bg-slate-800 border-4 border-slate-700 shrink-0 overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                  <img 
                    src="https://i.ibb.co/6J8ZB6vT/file.jpg" 
                    alt="Pablo Almeida"
                    loading="lazy"
                    width="224"
                    height="224" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-brand-600 text-white p-3 rounded-xl border-4 border-slate-900 shadow-xl">
                  <Terminal size={24} />
                </div>
             </div>
             
             <div className="flex-1 text-left w-full">
               <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Quem vai implementar?</h2>
               <div className="text-brand-400 font-bold uppercase tracking-wide text-sm mb-6">Pablo Almeida &bull; Automation Engineer</div>
               <p className="text-slate-400 mb-6 leading-relaxed text-lg">
                 Sou Automation Engineer e desenvolvi o Deploy Stack para resolver o problema de escala de gestores de tráfego. Eu não te vendo um curso, eu implemento uma infraestrutura de tecnologia na sua empresa.
                 <br /><br />
                 Minha missão é tirar você do operacional e garantir que sua operação rode com segurança, dados e velocidade.
               </p>
               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-start">
                 <Button variant="outline" onClick={scrollToPrice} withIcon={false}>
                   QUERO TE CONTRATAR
                 </Button>
                 <a href="https://www.linkedin.com/in/opabloalmeida" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors px-4 py-2">
                   <Linkedin className="w-5 h-5 text-brand-500" />
                   <span>/opabloalmeida</span>
                 </a>
               </div>
             </div>
          </div>
        </div>
      </Section>

      {/* 10. FAQ (Darker - Changed from Light) */}
      <Section darker>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {[
              { q: "O que está incluso no Stack?", a: "Deploy Ads (Criação), Deploy Monitor (Segurança), Deploy Insights (Dados) e todo o setup de infraestrutura (VPS, Docker, n8n)." },
              { q: "Preciso saber programar?", a: "Não. Eu faço a implementação 'Done-For-You'. Eu configuro, testo e te entrego rodando. Você só opera." },
              { q: "Serve para quem tem poucas contas?", a: "O Stack é ideal para quem quer ESCALAR. Se você tem 1 conta, talvez seja muito. Se você quer ter 10, 20, 50 contas, é obrigatório." },
              { q: "Tenho custos mensais?", a: "Apenas o custo do servidor VPS (aprox. R$ 40-60/mês) que é contratado no seu nome. Não há mensalidade da automação." },
              { q: "O código é meu?", a: "Sim. Tudo fica no seu servidor. Você tem controle total e vitalício." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 rounded-xl hover:bg-slate-800 transition-colors cursor-pointer group bg-slate-900/50">
                <h3 className="text-lg font-semibold text-white mb-2 flex items-start gap-3">
                  <span className="text-brand-500 group-hover:scale-110 transition-transform">?</span>
                  {item.q}
                </h3>
                <p className="text-slate-400 pl-6 border-l-2 border-slate-800 group-hover:border-brand-500/30 ml-1 transition-colors">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Footer (Darkest) */}
      <footer className="py-8 bg-slate-950 text-center text-slate-600 text-sm border-t border-slate-900">
        <p>&copy; {new Date().getFullYear()} Deploy Stack. Todos os direitos reservados.</p>
        <p className="text-xs mt-2 text-slate-700">Não afiliado ao Meta ou Google.</p>
      </footer>
    </div>
  );
}
