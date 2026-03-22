
import React from 'react';
import { LoveReason } from '../types';

interface ReasonCardProps {
  reason: LoveReason;
}

const ReasonCard: React.FC<ReasonCardProps> = ({ reason }) => {
  return (
    <div className="bg-white/70 backdrop-blur-md p-3 rounded-xl shadow-sm border border-rose-50 flex items-center gap-3 transition-all duration-300">
      <div className="text-2xl shrink-0">
        {reason.icon}
      </div>
      <div className="space-y-0">
        <h4 className="text-[8px] font-bold tracking-[0.2em] uppercase text-rose-300">#0{reason.id}</h4>
        <p className="text-sm font-romantic italic text-slate-700 font-medium leading-tight">{reason.text}</p>
      </div>
    </div>
  );
};

export default ReasonCard;
