import React, { useEffect, useRef } from 'react';
import { Lightbulb, Terminal, Code, Braces } from 'lucide-react';

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
      {/* Connecting line from previous section */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-28 bg-gradient-to-b from-transparent via-accent/30 to-accent/50"></div>
      
      {/* Section header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary mb-5 border border-accent/30 forge-border">
          <Braces className="text-accent" size={32} strokeWidth={1.5} />
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-3 text-gradient-accent tracking-tight uppercase">
          Core Identity
        </h2>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-mono">
          Definition & Essence
        </p>
      </div>
      
      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Definition panel */}
        <div className="terminal-window p-8 relative overflow-hidden backdrop-blur-lg">
          <div className="mb-4 flex items-center">
            <Terminal size={16} className="text-accent mr-2" />
            <span className="text-xs font-mono text-muted-foreground">mind-forge-define.sh</span>
          </div>
          
          <div className="space-y-4 font-mono">
            <p className="text-sm leading-relaxed">
              <span className="text-accent">$</span> Mind Forge HQ is a <span className="text-accent">collective</span> for rogue creators who write their own rules.
            </p>
            <p className="text-sm leading-relaxed">
              <span className="text-accent">$</span> A digital <span className="text-accent">forge</span> where raw intelligence, creativity, and structured chaos combine to build systems that change reality itself.
            </p>
          </div>
        </div>
        
        {/* Energy map panel */}
        <div className="glass-panel p-8 backdrop-blur-md relative overflow-hidden">
          <h3 className="text-lg font-display font-bold mb-6 uppercase tracking-wide">Energy Map</h3>
          
          <ul className="space-y-6">
            {[
              { title: "UNFILTERED", desc: "No more shrinking to fit expectations" },
              { title: "UNAPOLOGETIC", desc: "Confidence in genius, chaos, depth, boldness" },
              { title: "UNIFIED", desc: "One central hub connecting all explorations" },
              { title: "UNBOUNDED", desc: "Moving beyond proving worth to manifesting vision" }
            ].map((item, index) => (
              <li key={index} className="flex">
                <div className="w-3 h-3 bg-accent mt-1 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-mono text-sm font-bold text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Aesthetic panel */}
      <div className="glass-panel p-10 relative overflow-hidden backdrop-blur-lg">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
        
        <h3 className="text-xl font-display font-bold mb-8 uppercase tracking-wide text-center">Aesthetic</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Lightbulb size={20} />, title: "VISUAL", desc: "Minimal, high-contrast, clean lines with raw power underneath" },
            { icon: <Code size={20} />, title: "LANGUAGE", desc: "Direct, unfiltered, intellectually fearless" },
            { icon: <Terminal size={20} />, title: "TONE", desc: "System-builder meets reality-hacker" },
            { icon: <Braces size={20} />, title: "DESIGN", desc: "Hard edges, purposeful space, strategic minimalism" }
          ].map((item, index) => (
            <div key={index} className="p-4 border border-accent/10 hover:border-accent/30 transition-colors duration-300">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 flex items-center justify-center bg-secondary mr-3">
                  <span className="text-accent">{item.icon}</span>
                </div>
                <h4 className="font-mono text-xs font-bold tracking-wider">{item.title}</h4>
              </div>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
      </div>
    </section>
  );