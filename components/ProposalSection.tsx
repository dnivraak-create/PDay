
import React, { useState, useRef } from 'react';
import { Heart, Stars } from 'lucide-react';

const ProposalSection: React.FC = () => {
  const [noPos, setNoPos] = useState({ x: 0, y: 60 });
  const [isAccepted, setIsAccepted] = useState(false);
  const [isHoveringNo, setIsHoveringNo] = useState(false);
  const yesBtnRef = useRef<HTMLButtonElement>(null);

  const moveNoButton = () => {
    // Define the movement area bounds (relative to the container)
    const containerWidth = 280; 
    const containerHeight = 250;

    let newX = Math.floor(Math.random() * (containerWidth - 80)) - (containerWidth / 2 - 40);
    let newY = Math.floor(Math.random() * (containerHeight - 40)) - 50;

    // Logic to prevent overlapping with the YES button area
    if (Math.abs(newX) < 80 && Math.abs(newY) < 50) {
      newX += 100;
      newY += 60;
    }

    setNoPos({ x: newX, y: newY });
    setIsHoveringNo(true);
  };

  const handleYes = () => {
    setIsAccepted(true);
  };

  if (isAccepted) {
    return (
      <div className="text-center space-y-3 animate-in zoom-in duration-700 w-full max-w-xs mx-auto flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-romantic text-rose-600 animate-bounce font-bold italic leading-tight">I Love You Jasmine! 💖</h2>
        <div className="relative">
          <div className="absolute inset-0 bg-pink-400 blur-3xl opacity-20 animate-pulse rounded-full"></div>
          <img 
            id="banner" 
            src="https://aayush-683.github.io/will-you-be-my-valentine/public/images/yes.gif" 
            alt="banner"
            className="relative rounded-2xl shadow-xl border-4 border-white w-full max-w-[200px] mx-auto"
          />
        </div>
        <p className="text-lg md:text-xl font-fancy italic text-rose-800">My forever baby! ❤️</p>
        <div className="flex justify-center gap-3">
          <Stars className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse" />
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
          <Stars className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xs mx-auto flex flex-col items-center text-center space-y-4 animate-in fade-in duration-700 py-2 h-full justify-center">
      <div className="relative">
        <Heart className="w-12 h-12 text-rose-500 fill-rose-500 animate-pulse" />
        <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold text-[6px] tracking-widest">BABY</span>
        </div>
      </div>

      <div className="space-y-0">
        <h2 className="text-3xl md:text-5xl font-romantic text-rose-600 italic font-semibold leading-tight px-4">Jasmine, will you be my Valentine? 💍</h2>
        <p className="text-sm text-gray-500 font-romantic italic mt-2">Click yessss sweetheart...</p>
      </div>

      {/* Interactive area for buttons */}
      <div className="relative w-full h-[220px] flex items-center justify-center">
        {/* Fixed Yes Button */}
        <button
          ref={yesBtnRef}
          onClick={handleYes}
          className="absolute top-4 w-44 py-3 bg-rose-600 text-white rounded-full text-xl font-bold shadow-lg hover:bg-rose-700 transform transition active:scale-95 z-30"
        >
          YES! ❤️
        </button>

        {/* Moving No Button */}
        <button
          onMouseEnter={moveNoButton}
          onClick={moveNoButton}
          style={{ 
            position: 'absolute',
            transform: `translate(${noPos.x}px, ${noPos.y}px)`,
            transition: 'transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
          className="w-24 py-2 bg-white text-gray-400 rounded-full font-bold shadow-md opacity-90 cursor-default text-[12px] border border-rose-100 z-20"
        >
          {isHoveringNo ? 'Nice try! 😑' : 'No'}
        </button>
      </div>
      
      <div className="h-4">
        {isHoveringNo && (
          <p className="text-rose-400 animate-pulse font-bold text-[9px] uppercase tracking-widest">No is not an option for us, baby! ✨</p>
        )}
      </div>
    </div>
  );
};

export default ProposalSection;
