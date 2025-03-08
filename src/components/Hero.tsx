
import React, { useEffect, useRef } from 'react';
import { Brain, ArrowRight } from 'lucide-react';
import AnimatedText from './AnimatedText';

const Hero: React.FC = () => {
  const brainRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!brainRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = brainRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const moveX = (clientX - centerX) * 0.01;
      const moveY = (clientY - centerY) * 0.01;
      
      brainRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-[100px] animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-[100px] animate-pulse-glow animation-delay-1000"></div>
      
      {/* Brain icon with glow effect */}
      <div className="relative mb-12">
        <div 
          ref={brainRef}
          className="relative z-10 text-accent animate-float"
        >
          <Brain size={64} strokeWidth={1.5} />
        </div>
        <div className="absolute inset-0 bg-accent/20 filter blur-xl rounded-full"></div>
      </div>
      
      {/* Main heading */}
      <div className="text-center max-w-5xl relative z-10 space-y-4">
        <AnimatedText
          text="Mind Forge HQ"
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-gradient"
          delay={200}
        />
        <AnimatedText
          text="A Lab for Thought, Creativity & System Design"
          className="text-xl md:text-2xl lg:text-3xl font-display text-muted-foreground mt-3"
          delay={600}
        />
        
        {/* Divider */}
        <div className="flex items-center justify-center my-8">
          <div className="h-px w-16 bg-accent/30"></div>
          <div className="w-2 h-2 rounded-full bg-accent mx-3"></div>
          <div className="h-px w-16 bg-accent/30"></div>
        </div>
        
        {/* Tagline */}
        <AnimatedText
          text="Forge New Paths | Shape New Systems | Explore New Thought"
          className="text-base md:text-lg lg:text-xl font-medium text-muted-foreground"
          delay={1000}
        />
        
        {/* CTA Button */}
        <div className="mt-12 animate-fade-in opacity-0" style={{ animationDelay: '1.2s' }}>
          <a 
            href="#what-is-mindforge" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-accent to-amber-500 text-black font-medium rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,160,0,0.5)] hover:scale-105 group"
          >
            Explore
            <ArrowRight 
              size={18} 
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in opacity-0" style={{ animationDelay: '2s' }}>
        <span className="text-muted-foreground text-sm mb-2">Scroll to explore</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
