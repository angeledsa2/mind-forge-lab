
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
      className="relative py-28 px-6 max-w-6xl mx-auto transition-all duration-1000 ease-out opacity-0 translate-y-8"
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-28 bg-gradient-to-b from-transparent to-accent/40"></div>
      
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary mb-5">
          <Lightbulb className="text-accent" size={28} strokeWidth={2} />
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 text-gradient tracking-tight">
          Mind Forge
        </h2>
        <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Definition & Framework</p>
      </div>
      
      <div className="glass-panel p-12 md:p-16 relative overflow-hidden backdrop-blur-lg">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
        
        <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed tracking-normal max-w-4xl mx-auto font-medium">
          Mind Forge transforms intelligence into systems, structure into innovation, and deep thought into practical frameworks. We build tools for thinkers, systems for creators, and foundations for builders.
        </p>
        
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
      </div>
    </section>
  );
};

export default VisionSection;
