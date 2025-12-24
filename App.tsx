import React, { useEffect, useState } from 'react';
import { 
  Shield, 
  Heart, 
  Smile, 
  Layers, 
  ArrowRight, 
  Volume2, 
  VolumeX,
  ExternalLink,
  Compass,
  PenTool,
  CheckCircle2,
  Sparkles,
  Anchor,
  Palette,
  History,
  Users,
  Zap
} from 'lucide-react';
import BlueprintBackground from './components/BlueprintBackground.tsx';
import MiloMeter from './components/MiloMeter.tsx';

const ICONIC_BUILDINGS = {
  stage1: [
    "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&q=80&w=2000", // Sagrada Familia
    "https://images.unsplash.com/photo-1558230588-46608933b934?auto=format&fit=crop&q=80&w=2000", // Alhambra
    "https://images.unsplash.com/photo-1571500057469-5a507a2a0614?auto=format&fit=crop&q=80&w=2000", // Mezquita Córdoba
    "https://images.unsplash.com/photo-1590059530462-811c75953f6d?auto=format&fit=crop&q=80&w=2000", // Acueducto Segovia
  ],
  stage2: [
    "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=2000", // Catedral Santiago
    "https://images.unsplash.com/photo-1534430480872-3498386e7a56?auto=format&fit=crop&q=80&w=2000", // Palacio Real
    "https://images.unsplash.com/photo-1627838562635-c60317e08216?auto=format&fit=crop&q=80&w=2000", // Catedral Burgos
    "https://images.unsplash.com/photo-1585863261765-742719a957d1?auto=format&fit=crop&q=80&w=2000", // El Escorial
  ],
  stage3: [
    "https://images.unsplash.com/photo-1559113202-c916b8e44373?auto=format&fit=crop&q=80&w=2000", // Ciudad Artes Valencia
    "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?auto=format&fit=crop&q=80&w=2000", // Guggenheim Bilbao
    "https://images.unsplash.com/photo-1548810237-7036a5a22e86?auto=format&fit=crop&q=80&w=2000", // Metropol Parasol
    "https://images.unsplash.com/photo-1582650841029-450f61204f14?auto=format&fit=crop&q=80&w=2000", // Auditorio Tenerife
  ],
  stage4: [
    "https://images.unsplash.com/photo-1560942485-b2a11cc13456?auto=format&fit=crop&q=80&w=2000", // Plaza España Sevilla
    "https://images.unsplash.com/photo-1565103405391-4c6cc037b524?auto=format&fit=crop&q=80&w=2000", // Casa Batlló
    "https://images.unsplash.com/photo-1543783232-f72f0c0535b7?auto=format&fit=crop&q=80&w=2000", // Toledo
  ]
};

const BackgroundSlideshow: React.FC<{ stage: number }> = ({ stage }) => {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const images = ICONIC_BUILDINGS[`stage${stage as 1 | 2 | 3 | 4}`] || ICONIC_BUILDINGS.stage1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIdx((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {images.map((img, idx) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${idx === currentImgIdx ? 'opacity-100 scale-110' : 'opacity-0 scale-100'} transition-transform duration-[15000ms]`}
        >
          <img src={img} className="w-full h-full object-cover" alt="Icono de España" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/95" />
        </div>
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [unlockedItems, setUnlockedItems] = useState<string[]>([]);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    if (currentStage === 0) {
      const interval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setCurrentStage(1), 2000);
            return 100;
          }
          return prev + 3;
        });
      }, 40);
      return () => clearInterval(interval);
    }
  }, [currentStage]);

  const architecturalPilars = [
    { 
      id: 'resistencia', 
      icon: <Shield />, 
      title: 'Resistencia', 
      desc: 'Como el Acueducto de Segovia, que sigue en pie con el paso del tiempo, escribo esto porque lo que se está dando contigo se siente genuino y con base.' 
    },
    { 
      id: 'soporte', 
      icon: <Layers />, 
      title: 'Soporte', 
      desc: 'Como los arcos de la Mezquita, eres una estructura que sostiene: contigo encuentro calma, conversación y un espacio para joder y pasarla bien.' 
    },
    { 
      id: 'estetica', 
      icon: <Palette />, 
      title: 'Estética', 
      desc: 'Como la Alhambra en el atardecer, tu sonrisa rediseña cualquier espacio. No es solo lo visual, es la armonía de lo que proyectas.' 
    },
    { 
      id: 'funcionalidad', 
      icon: <Users />, 
      title: 'Funcionalidad', 
      desc: 'Porque lo que vivimos es real y funciona: conectamos, reímos y fluimos con la naturalidad de una obra maestra bien ejecutada.' 
    }
  ];

  const handleCTA = () => {
    const message = encodeURIComponent("Gracias por tomarte el tiempo de ver esto. Me daba curiosidad saber cómo lo sentiste tú 🙂");
    window.open(`https://wa.me/5491124892070?text=${message}`, '_blank');
  };

  return (
    <div className="relative min-h-screen bg-[#fdfdfd] text-gray-900 selection:bg-amber-100 font-sans overflow-hidden">
      {currentStage > 0 && <BackgroundSlideshow stage={currentStage} />}
      <BlueprintBackground />

      {/* Control de Audio Minimalista */}
      <div className="fixed top-4 right-4 md:top-8 md:right-8 z-50">
        <button 
          onClick={() => setIsAudioPlaying(!isAudioPlaying)} 
          className="group flex items-center space-x-3 bg-white/60 backdrop-blur-xl border border-gray-200/50 p-3 md:p-4 rounded-full shadow-2xl hover:bg-white transition-all"
        >
          <div className={`p-2 rounded-full transition-colors ${isAudioPlaying ? 'bg-amber-100 animate-pulse' : 'bg-gray-100'}`}>
            {isAudioPlaying ? <Volume2 className="w-4 h-4 md:w-5 md:h-5 text-amber-600" /> : <VolumeX className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />}
          </div>
          <span className="text-[9px] md:text-[10px] font-mono-tech uppercase tracking-[0.3em] text-gray-600 font-bold pr-2 hidden md:block">Atmosfera de Obra</span>
        </button>
      </div>

      {/* LOADER CONCEPTUAL */}
      {currentStage === 0 && (
        <div className="fixed inset-0 z-[100] bg-gray-950 flex flex-col items-center justify-center p-8 text-center">
          <div className="absolute inset-0 opacity-10 blur-xl">
             <img src="https://images.unsplash.com/photo-1543783232-f72f0c0535b7" className="w-full h-full object-cover" alt="Loading" />
          </div>
          <div className="relative z-10 max-w-sm w-full">
            <h2 className="text-amber-500 font-mono-tech text-[12px] tracking-[0.8em] uppercase font-bold mb-12 animate-pulse">Iniciando Levantamiento Histórico</h2>
            <div className="relative h-[3px] bg-white/5 mb-6 overflow-hidden rounded-full border border-white/10">
              <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 transition-all duration-300" style={{ width: `${loadingProgress}%` }} />
            </div>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest font-mono-tech leading-relaxed">
              Sincronizando 15 Joyas de España <br/> & Pilares de un Sentimiento...
            </p>
          </div>
        </div>
      )}

      {/* ETAPA 1: LOS CIMIENTOS HISTÓRICOS */}
      <div className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out transform overflow-y-auto ${currentStage === 1 ? 'translate-x-0 opacity-100' : currentStage > 1 ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0'}`}>
        <section className="min-h-full flex flex-col items-center justify-center py-12 px-4 md:p-6 relative">
          <div className="max-w-5xl w-full relative z-10 text-center">
            <div className="inline-flex items-center space-x-4 p-3 border border-amber-500/30 rounded-[1.5rem] mb-6 md:mb-10 bg-white/40 backdrop-blur-xl shadow-lg">
              <Compass className="w-6 h-6 text-amber-600 animate-spin-slow" />
              <div className="h-5 w-[1px] bg-amber-200"></div>
              <span className="text-[10px] font-mono-tech uppercase tracking-[0.4em] font-bold text-amber-800">Expediente 01 • Cimientos</span>
            </div>
            
            <h1 className="text-4xl md:text-8xl font-light mb-4 md:mb-6 tracking-tighter text-gray-950 leading-[0.9] font-serif">Arquitectura de <br/><span className="italic text-amber-600 font-bold">una Intención.</span></h1>
            <p className="text-gray-500 mb-8 md:mb-16 max-w-2xl mx-auto text-base md:text-xl leading-relaxed font-light">
              Antes de recorrer la historia, debemos desbloquear los pilares que hacen posible este proyecto.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-20 px-2 max-w-6xl mx-auto">
              {architecturalPilars.map(item => (
                <button 
                  key={item.id}
                  onClick={() => setUnlockedItems(prev => prev.includes(item.id) ? prev : [...prev, item.id])}
                  className={`group relative p-6 md:p-8 rounded-[2rem] border-2 transition-all duration-700 text-left overflow-hidden flex flex-col ${unlockedItems.includes(item.id) ? 'bg-amber-500 text-white border-amber-400 scale-[1.02] shadow-xl' : 'bg-white/60 backdrop-blur-xl border-gray-100 text-gray-400 hover:border-amber-200'}`}
                >
                  <div className={`p-4 rounded-[1rem] inline-block mb-4 transition-all duration-500 ${unlockedItems.includes(item.id) ? 'bg-white/20' : 'bg-amber-50 group-hover:scale-105'}`}>
                    {React.cloneElement(item.icon as React.ReactElement<any>, { className: `w-6 h-6 ${unlockedItems.includes(item.id) ? 'text-white' : 'text-amber-500'}` })}
                  </div>
                  <h3 className={`text-[12px] font-mono-tech uppercase tracking-[0.2em] font-bold mb-3 transition-colors ${unlockedItems.includes(item.id) ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                  <p className={`text-xs md:text-sm leading-relaxed font-medium transition-all duration-500 ${unlockedItems.includes(item.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                    {item.desc}
                  </p>
                  {!unlockedItems.includes(item.id) && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/5 backdrop-blur-[2px]">
                      <Zap className="w-5 h-5 text-amber-500 animate-pulse mb-2" />
                      <span className="text-[8px] font-mono-tech tracking-[0.1em] uppercase text-amber-600 font-bold">Activar</span>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {unlockedItems.length === 4 && (
              <button 
                onClick={() => setCurrentStage(2)}
                className="group flex items-center space-x-6 md:space-x-10 bg-gray-950 text-white px-10 py-6 md:px-16 md:py-8 rounded-[2.5rem] hover:bg-amber-600 transition-all shadow-2xl animate-fade-in active:scale-95 mx-auto"
              >
                <div className="text-left border-r border-white/20 pr-6 md:pr-10">
                  <p className="text-[9px] md:text-[10px] font-mono-tech uppercase tracking-widest text-amber-500 mb-1">Estructura Validada</p>
                  <p className="text-xl md:text-2xl font-bold italic">Leer Anteproyecto</p>
                </div>
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-3 transition-transform" />
              </button>
            )}
          </div>
        </section>
      </div>

      {/* ETAPA 2: EL ANTEPROYECTO */}
      <div className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out transform overflow-y-auto ${currentStage === 2 ? 'translate-x-0 opacity-100' : currentStage > 2 ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0'}`}>
        <section className="min-h-full flex flex-col items-center justify-center py-16 px-4 relative">
          <div className="max-w-4xl w-full relative z-10">
            <h2 className="text-[10px] md:text-xs font-mono-tech uppercase tracking-[0.8em] text-amber-600 mb-8 md:mb-10 text-center font-bold">Etapa 02 • Visión de Obra</h2>
            <div className="bg-white/95 backdrop-blur-3xl p-8 md:p-16 rounded-[3rem] md:rounded-[5rem] shadow-2xl border border-white/40 relative overflow-hidden group">
               <div className="absolute -top-10 -right-10 p-12 opacity-[0.03] group-hover:rotate-12 transition-all duration-[5s]">
                  <PenTool className="w-48 h-48 md:w-96 md:h-96" />
               </div>
               <p className="text-lg md:text-3xl font-light leading-snug mb-10 md:mb-16 italic text-gray-500 border-l-4 md:border-l-8 border-amber-500 pl-6 md:pl-10 font-serif">
                "Muchas veces no sé exactamente qué decirte o cómo responder. No por falta de interés, sino porque contigo siento que vale la pena pensar, escuchar y aprender. Lo que se está dando no es inmediato ni obvio, pero sí genuino… y eso me invita a seguir."
               </p>
               <div className="h-[1px] w-full bg-gray-100 mb-10 md:mb-16"></div>
               <p className="text-2xl md:text-5xl font-bold tracking-tighter text-gray-950 mb-12 md:mb-16 leading-tight">
                "Cuidado no quiero confundirte, lo que quiero es <br/>
                <span className="text-amber-600 italic decoration-amber-100 decoration-6 md:decoration-10 underline underline-offset-4">aclarar las intenciones que tengo contigo...</span>"
               </p>
               
               <button 
                onClick={() => setCurrentStage(3)}
                className="w-full py-6 md:py-8 bg-amber-600 text-white rounded-[2rem] md:rounded-[3rem] font-bold text-xl md:text-2xl hover:bg-gray-900 transition-all shadow-xl active:scale-95"
              >
                 Confirmar Visión
               </button>
            </div>
          </div>
        </section>
      </div>

      {/* ETAPA 3: ENERGÍA DINÁMICA (REINTERPRETADA) */}
      <div className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out transform overflow-y-auto ${currentStage === 3 ? 'translate-x-0 opacity-100' : currentStage > 3 ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0'}`}>
        <section className="min-h-full flex flex-col items-center justify-center py-16 px-4 relative">
          <div className="max-w-4xl w-full relative z-10 text-center">
            <h2 className="text-[10px] md:text-[12px] font-mono-tech uppercase tracking-[0.6em] text-amber-600 mb-8 md:mb-12 font-bold">Etapa 03 • Dinámica de Carga</h2>
            <h3 className="text-3xl md:text-7xl font-light mb-12 md:mb-16 tracking-tighter text-gray-950 leading-[1.1] font-serif max-w-3xl mx-auto">
              Cada vez que compartimos tiempo, <br/>
              <span className="italic font-bold text-amber-600 bg-amber-50/50 px-4 py-1 rounded-xl">algo se acomoda mejor.</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16 items-center">
              <div className="text-left space-y-4 md:space-y-6">
                <p className="animate-cascade delay-1 text-lg md:text-2xl text-gray-600 leading-relaxed font-light">
                  Hay momentos que no terminan como se planearon, <br/>
                  <span className="text-gray-900 font-medium italic">pero se vuelven mejores de lo esperado.</span>
                </p>
                <div className="space-y-2 text-gray-400 font-serif italic text-base md:text-xl">
                  <p className="animate-cascade delay-2">• Citas que quedan a la mitad,</p>
                  <p className="animate-cascade delay-3">• conversaciones que se alargan sin darnos cuenta,</p>
                  <p className="animate-cascade delay-4">• silencios cómodos, risas inesperadas.</p>
                </div>
                <p className="animate-cascade delay-5 text-lg md:text-xl text-amber-700 font-mono-tech tracking-tight">
                  No siempre sé cómo explicarlo, pero sé cómo se siente. <br/>
                  Y eso, para mí, <span className="underline decoration-amber-300 decoration-4">vale mucho.</span>
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-2xl border border-gray-100 p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] shadow-2xl ring-1 ring-amber-50">
                <MiloMeter />
                <div className="mt-8 pt-8 border-t border-gray-50 text-left">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Por eso quiero decirlo con honestidad: <br/>
                    <span className="font-bold text-gray-900">me gusta lo que está pasando entre nosotros,</span> y me gustaría seguir viéndonos, sin forzar nada, dejando que el tiempo haga lo suyo.
                  </p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setCurrentStage(4)}
              className="group relative flex items-center space-x-8 md:space-x-10 bg-gray-950 text-white px-12 py-6 md:px-20 md:py-8 rounded-[2.5rem] hover:bg-amber-600 transition-all mx-auto font-bold text-2xl md:text-3xl shadow-xl active:scale-95"
            >
              <span>Seguir explorando</span>
              <ArrowRight className="w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-4 transition-transform" />
            </button>
          </div>
        </section>
      </div>

      {/* ETAPA 4: ENTREGA DE OBRA (FINAL) */}
      <div className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out transform overflow-y-auto ${currentStage === 4 ? 'translate-x-0 opacity-100' : currentStage > 4 ? 'translate-x-full opacity-0' : 'translate-x-full opacity-0'}`}>
        <section className="min-h-full flex flex-col items-center justify-center py-20 px-4 relative">
          <div className="max-w-5xl w-full relative z-10 text-center mb-16">
            <div className="flex justify-center mb-12 md:mb-16">
               <div className="p-8 md:p-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full animate-bounce shadow-2xl shadow-amber-500/50">
                 <CheckCircle2 className="w-16 h-16 md:w-24 md:h-24 text-white" />
               </div>
            </div>
            <h2 className="text-[10px] md:text-[12px] font-mono-tech uppercase tracking-[0.8em] text-amber-700 mb-8 md:mb-12 font-bold">OBRA CONCLUIDA</h2>
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-gray-950 mb-16 md:mb-24 leading-[0.8]">
              El diseño <br className="hidden md:block"/> está listo.
            </h1>
            
            <div className="relative group inline-block">
               <div className="absolute -inset-10 md:-inset-16 bg-gradient-to-r from-amber-400 via-amber-600 to-amber-400 rounded-[3rem] blur-[40px] md:blur-[60px] opacity-20 group-hover:opacity-60 transition duration-[2000ms]"></div>
               <button 
                onClick={handleCTA}
                className="relative px-16 py-10 md:px-24 md:py-16 bg-gray-950 text-white rounded-[2.5rem] md:rounded-[3.5rem] font-bold text-3xl md:text-5xl shadow-2xl flex flex-col items-center space-y-6 md:space-y-10 group active:scale-[0.98] transition-all"
              >
                <div className="flex flex-col items-center">
                  <span className="tracking-tighter opacity-80 mb-2 text-xl md:text-2xl">¿Agendamos una</span>
                  <span className="text-amber-500 italic font-serif">visita a la obra?</span>
                </div>
                <div className="flex items-center space-x-6 md:space-x-10 text-amber-500 group-hover:scale-110 transition-transform duration-700">
                  <div className="h-[2px] w-12 md:w-20 bg-amber-500/30"></div>
                  <ExternalLink className="w-10 h-10 md:w-14 md:h-14" />
                  <div className="h-[2px] w-12 md:w-20 bg-amber-500/30"></div>
                </div>
              </button>
            </div>

            <div className="mt-32 md:mt-48 flex flex-col items-center space-y-8">
              <div className="w-[2px] h-24 md:h-40 bg-gradient-to-b from-amber-600 to-transparent"></div>
              <p className="text-gray-500 font-mono-tech text-[12px] md:text-[14px] tracking-[1em] uppercase font-bold opacity-80">MUSEO DE UN SENTIMIENTO</p>
            </div>
          </div>
        </section>
      </div>

      {/* Navegador de Progreso Minimalista */}
      {currentStage > 0 && (
        <div className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-4 md:space-x-8 z-50 px-6 py-4 md:px-10 md:py-5 bg-white/40 backdrop-blur-2xl rounded-full border border-white/40 shadow-xl">
          {[1, 2, 3, 4].map(s => (
            <div 
              key={s} 
              className={`h-1.5 md:h-2 rounded-full transition-all duration-[1000ms] ${currentStage === s ? 'bg-amber-600 w-16 md:w-32 shadow-lg shadow-amber-500/50' : currentStage > s ? 'bg-amber-200 w-8 md:w-12' : 'bg-gray-200 w-8 md:w-12'}`}
            />
          ))}
          <span className="text-[10px] md:text-[12px] font-mono-tech font-bold text-amber-700 uppercase tracking-widest pl-2">{currentStage}/4</span>
        </div>
      )}
    </div>
  );
};

export default App;