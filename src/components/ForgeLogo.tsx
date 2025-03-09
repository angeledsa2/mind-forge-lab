import React from 'react';

const ForgeLogo: React.FC = () => {
  return (
    <div className="relative w-10 h-10 flex items-center justify-center">
      {/* Base container with pulsing glow effect */}
      <div className="absolute inset-0 bg-accent/10 animate-forge-glow"></div>
      
      {/* Sharp geometric logo */}
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
      >
        {/* Forge symbol - distinctive M with circuit-like connections */}
        <path 
          d="M6 26V6H10L16 14L22 6H26V26"
          stroke="currentColor" 
          className="text-accent" 
          strokeWidth="2" 
          strokeLinecap="square" 
          strokeLinejoin="miter"
          strokeDasharray="40"
          strokeDashoffset="40"
          style={{ animation: 'dash 1.5s forwards' }}
        />
        
        {/* Abstract forge/flame element */}
        <path 
          d="M16 26V14"
          stroke="currentColor" 
          className="text-accent" 
          strokeWidth="2" 
          strokeLinecap="square"
          strokeDasharray="12"
          strokeDashoffset="12"
          style={{ animation: 'dash 1.5s 0.5s forwards' }}
        />
        
        {/* Angular accents */}
        <path 
          d="M6 20H26"
          stroke="currentColor" 
          className="text-accent/70" 
          strokeWidth="2" 
          strokeLinecap="square"
          strokeDasharray="20"
          strokeDashoffset="20"
          style={{ animation: 'dash 1.5s 0.7s forwards' }}
        />
        
        {/* Square accent in bottom right corner */}
        <rect 
          x="23" 
          y="23" 
          width="3" 
          height="3" 
          fill="currentColor" 
          className="text-accent"
          opacity="0"
          style={{ animation: 'fade-in 0.5s 1.2s forwards' }}
        />
      </svg>
      
      {/* Subtle corner accent */}
      <div className="absolute top-0 right-0 w-2 h-2 bg-accent opacity-0 animate-fade-in" style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
};

export default ForgeLogo;