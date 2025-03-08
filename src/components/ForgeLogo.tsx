
import React from 'react';
import { Flame } from 'lucide-react';

const ForgeLogo: React.FC = () => {
  return (
    <div className="relative inline-flex items-center">
      <div className="relative z-10 animate-forge-glow">
        <Flame size={24} className="text-accent" strokeWidth={2} />
      </div>
      <div className="absolute inset-0 bg-accent/10 rounded-sm"></div>
    </div>
  );
};

export default ForgeLogo;
