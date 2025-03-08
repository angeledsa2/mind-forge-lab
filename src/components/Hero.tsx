
import React from 'react';
import { Brain, ArrowRight } from 'lucide-react';
import AnimatedText from './AnimatedText';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 overflow-hidden">
      {/* Geometric background patterns */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-accent/50 transform rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 border-2 border-foreground/20 transform -rotate-12"></div>
        <div className="absolute top-1/3 right-1/3 w-40 h-40 border border-foreground/30"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-foreground/5 transform rotate-15"></div>
      </div>
      
      {/* Icon with sharper design */}
      <div className="relative mb-12">
        <div className="relative z-10 text-accent">
          <Brain size={64} strokeWidth={1.5} />
        </div>
        <div className="absolute inset-0 bg-accent/5 filter blur-sm"></div>
      </div>
      
      {/* Main heading with stronger typography */}
      <div className="text-center max-w-5xl relative z-10 space-y-4">
        <AnimatedText
          text="mind forge hq"
          className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight text-gradient lowercase"
          delay={200}
        />
        <AnimatedText
          text="A Lab for Thought, Creativity & System Design"
          className="text-xl md:text-2xl lg:text-3xl font-sans font-medium text-muted-foreground mt-3"
          delay={600}
        />
        
        {/* Geometric divider */}
        <div className="flex items-center justify-center my-8">
          <div className="h-px w-16 bg-accent/50"></div>
          <div className="w-2 h-2 bg-accent/50 mx-3 transform rotate-45"></div>
          <div className="h-px w-16 bg-accent/50"></div>
        </div>
        
        {/* Tagline with stronger presence */}
        <AnimatedText
          text="Forge New Paths | Shape New Systems | Explore New Thought"
          className="text-base md:text-lg lg:text-xl font-medium text-muted-foreground"
          delay={1000}
        />
        
        {/* CTA Button with sharper edges */}
        <div className="mt-12 animate-fade-in opacity-0" style={{ animationDelay: '1.2s' }}>
          <a 
            href="#what-is-mindforge" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white font-medium transition-all duration-300 hover:bg-accent/90 group"
          >
            Learn More
            <ArrowRight 
              size={18} 
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in opacity-0" style={{ animationDelay: '2s' }}>
        <span className="text-muted-foreground text-sm mb-2 font-medium">Scroll to explore</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-accent/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
