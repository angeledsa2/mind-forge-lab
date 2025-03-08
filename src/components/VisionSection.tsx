
import React, { useEffect, useRef } from 'react';
import { Lightbulb } from 'lucide-react';

const VisionSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id="what-is-mindforge"
      ref={sectionRef}
      className="relative py-24 px-6 max-w-5xl mx-auto transition-all duration-1000 ease-out opacity-0 translate-y-8"
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-accent/30"></div>
      
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary mb-4">
          <Lightbulb className="text-accent" size={24} />
        </div>
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-3 text-gradient">
          What is Mind Forge?
        </h2>
        <p className="text-sm uppercase tracking-wider text-muted-foreground">A Vision, Not a Definition</p>
      </div>
      
      <div className="glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden backdrop-blur-lg">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30"></div>
        
        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-balance max-w-3xl mx-auto">
          Mind Forge is where intelligence meets creativity, where structure and chaos collide, where deep thought turns into real-world systems. A hub for the seekers, the builders, and the ones who see beyond the surface.
        </p>
        
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30"></div>
      </div>
    </section>
  );
};

export default VisionSection;
