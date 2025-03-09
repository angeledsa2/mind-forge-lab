import React, { useState, useEffect } from 'react';
import { ArrowRight, Brain, Zap, Code, Terminal } from 'lucide-react';
import AnimatedText from './AnimatedText';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "> Create without permission. Build without apology.";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 60);
    
    return () => clearInterval(typingInterval);
  }, []);
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 overflow-hidden">
      {/* Background grid lines and decorative elements */}
      <div className="absolute inset-0 z-0 opacity-5 bg-grid-pattern bg-[length:40px_40px]"></div>
      
      {/* Abstract geometric shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-accent/20 transform rotate-45 animate-rotate-slow origin-center"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 border border-accent/10 transform -rotate-12 animate-rotate-slow origin-center" style={{ animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/3 right-1/3 w-40 h-40 border-l border-t border-accent/30"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-accent/5"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl space-y-10">
        {/* Logo/Icon with enhanced visual presence */}
        <div className="relative mb-8 inline-block animate-float">
          <div className="absolute inset-0 bg-accent/20 filter blur-xl"></div>
          <div className="relative z-10 text-accent animate-pulse-glow">
            <Brain size={80} strokeWidth={1} />
          </div>
        </div>
        
        {/* Main heading with enhanced typography */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter text-gradient lowercase animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
            mind forge hq
          </h1>
          
          <div className="h-px w-40 mx-auto bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}></div>
          
          <p className="font-mono text-base md:text-lg lg:text-xl text-muted-foreground mt-3 tracking-wide animate-fade-in opacity-0" style={{ animationDelay: '0.9s' }}>
            A collective for rogue creators who write their own rules
          </p>
        </div>
        
        {/* Terminal-like element with the operational principle */}
        <div className="terminal-window w-full max-w-xl mx-auto mt-10 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="flex items-center mb-2">
            <Terminal size={16} className="mr-2 text-accent" />
            <span className="text-xs text-muted-foreground">operational_principle.sh</span>
          </div>
          <div className="font-mono text-sm md:text-base overflow-hidden whitespace-nowrap">
            {typedText}
            <span className="terminal-cursor"></span>
          </div>
        </div>
        
        {/* Framework outline */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-3xl mx-auto mt-12 opacity-0 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          {[
            { icon: <Zap size={20} />, text: "ENVISION" },
            { icon: <Code size={20} />, text: "FORGE" },
            { icon: <Brain size={20} />, text: "TRANSMIT" },
            { icon: <ArrowRight size={20} />, text: "EXPAND" }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-8 h-8 flex items-center justify-center border border-accent/50 mb-2">
                <span className="text-accent">{item.icon}</span>
              </div>
              <span className="text-xs font-mono tracking-widest text-muted-foreground">{item.text}</span>
            </div>
          ))}
        </div>
        
        {/* CTA Button with enhanced visual presence */}
        <div className="mt-16 opacity-0 animate-fade-in" style={{ animationDelay: '1.8s' }}>
          <a 
            href="#what-is-mindforge" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white font-mono text-sm tracking-wider uppercase transition-all duration-300 hover:bg-accent/90 hover:shadow-[0_0_15px_rgba(157,78,221,0.5)] group border border-accent/50"
          >
            Enter The Forge
            <ArrowRight 
              size={16} 
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator with enhanced visual style */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in" style={{ animationDelay: '2.1s' }}>
        <span className="text-muted-foreground text-xs uppercase tracking-widest font-mono mb-2">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;