
import React from 'react';
import { Brain, ArrowRight } from 'lucide-react';
import AnimatedText from './AnimatedText';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 overflow-hidden">
      {/* Geometric background patterns */}
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-accent/20 transform rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 border-2 border-foreground/10 transform -rotate-12"></div>
        <div className="absolute top-1/3 right-1/3 w-40 h-40 border border-foreground/20"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-foreground/5 transform rotate-15"></div>
      </div>
      
      {/* Icon with sharper design */}
      <div className="relative mb-8">
        <div className="relative z-10 text-accent">
          <Brain size={72} strokeWidth={1.75} />
        </div>
        <div className="absolute inset-0 bg-accent/10 filter blur-sm"></div>
      </div>
      
      {/* Main heading with stronger typography */}
      <div className="text-center max-w-6xl relative z-10 space-y-6">
        <AnimatedText
          text="mind forge hq"
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-gradient lowercase"
          delay={200}
        />
        <AnimatedText
          text="A Lab for Thought, Creativity & System Design"
          className="text-xl md:text-2xl lg:text-3xl font-sans font-medium text-muted-foreground mt-3 tracking-wide"
          delay={600}
        />
        
        {/* Geometric divider */}
        <div className="flex items-center justify-center my-10">
          <div className="h-0.5 w-20 bg-accent/40"></div>
          <div className="w-3 h-3 bg-accent/40 mx-3 transform rotate-45"></div>
          <div className="h-0.5 w-20 bg-accent/40"></div>
        </div>
        
        {/* Tagline with stronger presence */}
        <AnimatedText
          text="Build • Design • Explore"
          className="text-base md:text-xl font-bold tracking-widest text-muted-foreground"
          delay={1000}
        />
        
        {/* CTA Button with sharper edges */}
        <div className="mt-14 animate-fade-in opacity-0" style={{ animationDelay: '1.2s' }}>
          <a 
            href="#what-is-mindforge" 
            className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-white font-bold transition-all duration-300 hover:bg-accent/90 group"
          >
            Explore
            <ArrowRight 
              size={20} 
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in opacity-0" style={{ animationDelay: '2s' }}>
        <span className="text-muted-foreground text-sm mb-2 font-medium">Scroll</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-accent/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
