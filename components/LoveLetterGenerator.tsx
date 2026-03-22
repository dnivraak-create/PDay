
import React, { useState } from 'react';
import { generateRomanticMessage } from '../services/geminiService';
import { Sparkles, RefreshCw, Heart } from 'lucide-react';

interface LoveLetterGeneratorProps {
  onNext: () => void;
}

const LoveLetterGenerator: React.FC<LoveLetterGeneratorProps> = ({ onNext }) => {
  const [keywords, setKeywords] = useState('');
  const [poem, setPoem] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!keywords.trim()) return;
    setLoading(true);
    const contextKeywords = `Jasmine, baby, sweetheart, ${keywords}`;
    const result = await generateRomanticMessage(contextKeywords);
    // Extra safety: strip asterisks on the client side too
    setPoem(result.replace(/\*\*/g, ''));
    setLoading(false);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-2 animate-in slide-in-from-right-10 duration-700 overflow-hidden">
      {!poem ? (
        <div className="w-full max-w-sm bg-white p-6 rounded-3xl shadow-lg border border-rose-50 space-y-4">
          <div className="text-center">
            <h3 className="text-2xl font-romantic text-rose-600 mb-1 font-semibold">For You, My Jasmine 🌹</h3>
            <p className="text-gray-500 text-[10px] italic font-bold uppercase tracking-wider">Words for us, baby...</p>
          </div>
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="e.g., first date, beach, coffee"
              className="w-full px-4 py-3 bg-rose-50/30 border border-rose-100 rounded-2xl focus:border-rose-300 focus:outline-none transition text-sm text-center font-medium"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-2xl font-bold shadow-md flex items-center justify-center gap-2 hover:shadow-lg transition disabled:opacity-50 text-xs uppercase tracking-widest"
            >
              {loading ? <RefreshCw className="animate-spin w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
              {loading ? 'Crafting magic...' : 'Write for Jasmine'}
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-[95vw] md:max-w-3xl bg-white/95 backdrop-blur-md px-6 py-8 md:p-12 rounded-[2.5rem] shadow-2xl border-2 border-rose-50 relative overflow-hidden flex flex-col items-center min-h-0 max-h-full">
          <Heart className="absolute -top-10 -right-10 w-32 h-32 text-rose-50 opacity-40 fill-rose-50 -rotate-12" />
          <Heart className="absolute -bottom-10 -left-10 w-24 h-24 text-rose-50 opacity-40 fill-rose-50 rotate-12" />
          
          <div className="relative z-10 w-full space-y-6 flex flex-col items-center overflow-hidden">
            <div className="max-h-[50vh] overflow-y-auto scrollbar-hide px-2">
              <p className="text-xl md:text-3xl font-romantic text-rose-900 leading-tight italic whitespace-pre-line text-center font-medium">
                "{poem}"
              </p>
            </div>
            
            <div className="flex flex-col gap-3 w-full max-w-xs shrink-0 pt-2">
              <button
                onClick={() => setPoem('')}
                className="text-rose-400 text-[9px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:text-rose-600 transition"
              >
                <RefreshCw className="w-3 h-3" /> Start over, babe
              </button>
              <button
                onClick={onNext}
                className="w-full py-3 bg-rose-600 text-white rounded-full font-bold shadow-lg hover:bg-rose-700 transition flex items-center justify-center gap-2 text-xs uppercase tracking-tighter"
              >
                The Question, Sweetheart... <Heart className="w-4 h-4 fill-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoveLetterGenerator;
