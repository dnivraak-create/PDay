
import React, { useState, useEffect } from 'react';
import { Heart, Stars, Camera, Gift, MessageCircleHeart, Sparkles, MailOpen, Lock } from 'lucide-react';
import Header from './components/Header';
import ReasonCard from './components/ReasonCard';
import MemoryGallery from './components/MemoryGallery';
import LoveLetterGenerator from './components/LoveLetterGenerator';
import ProposalSection from './components/ProposalSection';
import { LoveReason } from './types';

const REASONS: LoveReason[] = [
  { id: 1, icon: '🌟', text: 'My life and sometimes even I smell nice because of you, Jasmine.' },
  { id: 2, icon: '😊', text: 'That smile that makes my heart skip many beats a day, baby.' },
  { id: 3, icon: '😉', text: "I love your body, it's art; those curves (babies) are absolutely irresistible." },
  { id: 4, icon: '🤝', text: 'Being my best friend and always being there, helping me anytime 😚. I love it a lot. 🌸' },
  { id: 5, icon: '🍕', text: 'You make every day colorful 🌈, and even make sure I am always full by feeding me 😁' },
  { id: 6, icon: '❤️', text: 'Just being my beautiful Jasmine is more than enough to melt my heart 💕 away.' },
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'intro' | 'reasons' | 'memories' | 'ai' | 'propose'>('intro');
  const [isLetterOpened, setIsLetterOpened] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; left: string; size: string; delay: string; duration: string }[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * (20 - 10) + 10}px`,
      delay: `${Math.random() * 8}s`,
      duration: `${Math.random() * (10 - 5) + 5}s`,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="h-screen w-full relative overflow-hidden bg-[#fff5f6] text-slate-800 flex flex-col">
      {/* Background elements */}
      <div className="fixed inset-0 bg-gradient-to-tr from-rose-100 via-pink-50 to-white opacity-70 z-0"></div>
      
      {hearts.map((h) => (
        <Heart
          key={h.id}
          className="heart fill-rose-400/20 stroke-rose-400/40 opacity-40"
          style={{
            left: h.left,
            width: h.size,
            height: h.size,
            animationDelay: h.delay,
            animationDuration: h.duration
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col h-full max-h-screen">
        {/* Navigation Bar at the top */}
        <nav className="w-full pt-4 px-4 z-50">
          <div className="max-w-lg mx-auto bg-white/60 backdrop-blur-xl px-4 py-2 rounded-full shadow-sm border border-white/40 flex items-center justify-between gap-2 pointer-events-auto">
             {[
               { id: 'intro', icon: Heart, label: 'Home' },
               { id: 'reasons', icon: Stars, label: 'Reasons' },
               { id: 'memories', icon: Camera, label: 'Memories' },
               { id: 'ai', icon: MessageCircleHeart, label: 'Poem' },
               { id: 'propose', icon: Gift, label: 'Proposal' }
             ].map((nav) => {
               const Icon = nav.icon;
               const isActive = activeSection === nav.id;
               return (
                 <button 
                   key={nav.id}
                   onClick={() => setActiveSection(nav.id as any)} 
                   aria-label={nav.label}
                   className={`relative p-2 rounded-full transition-all duration-300 ${isActive ? 'text-rose-600 bg-rose-50 scale-110' : 'text-slate-400 hover:text-rose-300'}`}
                 >
                   <Icon className={`w-5 h-5 ${isActive ? 'fill-rose-600/10' : ''}`} />
                 </button>
               );
             })}
          </div>
        </nav>

        <Header activeSection={activeSection} />

        <main className="flex-grow flex items-center justify-center p-4 overflow-hidden">
          {activeSection === 'intro' && (
            <div className="flex flex-col items-center justify-center space-y-4 animate-in fade-in duration-700 w-full max-w-sm">
              {!isLetterOpened ? (
                <div 
                  onClick={() => setIsLetterOpened(true)}
                  className="group cursor-pointer relative w-full transform transition-all duration-500 hover:scale-105 active:scale-95"
                >
                  <div className="absolute inset-0 bg-rose-300 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-white/80 backdrop-blur-xl p-6 rounded-[2rem] shadow-lg border border-rose-50 flex flex-col items-center text-center space-y-3">
                    <div className="bg-rose-50 p-3 rounded-full animate-bounce">
                      <Lock className="w-6 h-6 text-rose-500" />
                    </div>
                    <div>
                      <h2 className="text-xl font-fancy italic text-rose-700">A Secret for Jasmine 🌸</h2>
                      <p className="text-slate-500 text-[10px] uppercase tracking-wider font-semibold">Click to unlock my heart, babe</p>
                    </div>
                    <button className="flex items-center gap-1.5 text-rose-500 font-bold uppercase tracking-widest text-[9px]">
                      Open Now <Sparkles className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ) : (
                <section className="flex flex-col items-center text-center space-y-4 animate-in zoom-in-95 duration-500">
                  <div className="space-y-1">
                    <span className="bg-rose-100 text-rose-600 px-3 py-0.5 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase"> For you on this Propose Day 🌹</span>
                    <h2 className="text-3xl md:text-5xl font-romantic text-rose-600 drop-shadow-sm font-semibold">My Dear Jasmine, My Baby 💖</h2>
                  </div>
                  <p className="text-lg md:text-xl text-slate-700 font-romantic leading-relaxed italic px-2">
                    "Today is the 3rd day of Valentine's Week. On this special occasion, I made this for you, sweetie. Let's see how much you mean to me..."
                  </p>
                  <button
                    onClick={() => setActiveSection('reasons')}
                    className="px-8 py-2.5 bg-rose-600 text-white rounded-full font-bold shadow-md hover:bg-rose-700 transform transition flex items-center gap-2 text-xs"
                  >
                    Start Journey, Babyyy <Sparkles className="w-3 h-3" />
                  </button>
                </section>
              )}
            </div>
          )}

          {activeSection === 'reasons' && (
            <section className="w-full h-full max-h-[80vh] flex flex-col items-center justify-center py-2 space-y-4 animate-in slide-in-from-bottom-5 duration-700">
              <div className="text-center">
                <h3 className="text-3xl font-romantic text-rose-600 font-semibold">Why I Love You 💌</h3>
                <p className="text-slate-500 text-[10px] italic">You're magic, Jasmine babe.</p>
              </div>
              <div className="grid grid-cols-1 gap-3 w-full max-w-sm px-2 overflow-y-auto scrollbar-hide">
                {REASONS.map((reason) => (
                  <ReasonCard key={reason.id} reason={reason} />
                ))}
              </div>
              <button
                onClick={() => setActiveSection('memories')}
                className="px-6 py-2 border-2 border-rose-500 text-rose-500 rounded-full font-bold hover:bg-rose-500 hover:text-white transition-all text-[11px] uppercase tracking-wider"
              >
                Our Memories <Camera className="w-3 h-3 inline ml-1" />
              </button>
            </section>
          )}

          {activeSection === 'memories' && <MemoryGallery onNext={() => setActiveSection('ai')} />}
          {activeSection === 'ai' && <LoveLetterGenerator onNext={() => setActiveSection('propose')} />}
          {activeSection === 'propose' && <ProposalSection />}
        </main>
      </div>
    </div>
  );
};

export default App;
