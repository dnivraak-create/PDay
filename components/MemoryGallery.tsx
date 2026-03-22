
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const MEMORIES = [
  { 
    id: 1, 
    title: 'Our Beautiful Start', 
    desc: 'When my world first met yours, Jasmine baby. 💖', 
    img: 'https://i.ibb.co/s9TMpVkQ/Whats-App-Image-2026-02-08-at-3-08-52-PM-1.jpg',
    date: 'JANUARY 2024'
  },
  { 
    id: 2, 
    title: '6:10 PM Moments', 
    desc: 'Life at 6:10pm with you is the highlight of my day, baby. 🫂', 
    img: 'https://i.ibb.co/FG1zNtc/Whats-App-Image-2026-02-08-at-3-08-52-PM-2.jpg',
    date: 'EVERY DAY'
  },
  { 
    id: 3, 
    title: 'Forever Us', 
    desc: 'It’s us against the world, flowers in our hair and love in our hearts. 🌸', 
    img: 'https://i.ibb.co/hxN82VG6/Whats-App-Image-2026-02-08-at-3-08-52-PM.jpg',
    date: 'ALWAYS'
  },
];

interface MemoryGalleryProps {
  onNext: () => void;
}

const MemoryGallery: React.FC<MemoryGalleryProps> = ({ onNext }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const next = () => setCurrentIdx((prev) => (prev + 1) % MEMORIES.length);
  const prev = () => setCurrentIdx((prev) => (prev - 1 + MEMORIES.length) % MEMORIES.length);

  return (
    <div className="w-full max-w-sm space-y-3 animate-in zoom-in-95 duration-500 flex flex-col items-center">
      <div className="text-center">
        <h3 className="text-2xl font-romantic text-rose-600 mb-0.5 font-semibold">Our Journey, Jasmine 💖</h3>
        <p className="text-gray-500 text-[9px] italic uppercase tracking-widest font-bold">Every moment with you, babe</p>
      </div>

      <div className="relative group rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-[4/3] w-full bg-rose-50">
        <img 
          key={MEMORIES[currentIdx].img}
          src={MEMORIES[currentIdx].img} 
          alt={MEMORIES[currentIdx].title}
          className="w-full h-full object-cover transition-opacity duration-500"
          onError={(e) => {
             const target = e.target as HTMLImageElement;
             console.warn(`Failed to load ${target.src}`);
             
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-3 text-white">
          {/* Fix: Added missing 'date' property to memory objects to satisfy the UI requirement */}
          <span className="text-rose-300 font-bold text-[8px] tracking-widest uppercase mb-0.5">{MEMORIES[currentIdx].date}</span>
          <h4 className="text-xl font-romantic italic font-bold leading-none mb-0.5">{MEMORIES[currentIdx].title}</h4>
          <p className="opacity-90 text-[11px] leading-snug font-medium italic">{MEMORIES[currentIdx].desc}</p>
        </div>

        <button 
          onClick={prev}
          className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-1.5 rounded-full transition z-10"
        >
          <ChevronLeft className="text-white w-4 h-4" />
        </button>
        <button 
          onClick={next}
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-1.5 rounded-full transition z-10"
        >
          <ChevronRight className="text-white w-4 h-4" />
        </button>
      </div>

      <div className="flex justify-center gap-1">
        {MEMORIES.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 rounded-full transition-all duration-300 ${i === currentIdx ? 'w-4 bg-rose-500' : 'w-1 bg-rose-200'}`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        className="mt-2 px-8 py-2.5 bg-rose-500 text-white rounded-full font-bold shadow-sm hover:bg-rose-600 transition flex items-center gap-2 text-xs uppercase tracking-tighter"
      >
        Something for Jasmine <Sparkles className="w-3 h-3" />
      </button>
    </div>
  );
};

export default MemoryGallery;
