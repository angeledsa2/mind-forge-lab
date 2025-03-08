
import React from 'react';
import { Flame } from 'lucide-react';

const ForgeLogo: React.FC = () => {
  return (
    <div className="relative inline-flex items-center justify-center">
      <div className="absolute inset-0 bg-accent/5 rounded-sm"></div>
      <div className="relative z-10">
        <Flame size={24} className="text-accent" strokeWidth={1.5} />
      </div>
    </div>
  );
};

export default ForgeLogo;
