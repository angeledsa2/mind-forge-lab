import React, { useEffect, useRef, useState } from 'react';
import { Send, ArrowRight, Terminal } from 'lucide-react';

const CallToAction: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email');
      return;
    }
    
    // Here you would normally submit the form to your backend
    console.log('Submitted email:', email);
    setSubmitted(true);
    setError('');
  };
  
  return (
    <section 
      id="cta"
      ref={sectionRef}
      className="py-32 px-6 relative opacity-0 translate-y-8 transition-all duration-1000 ease-out"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-20 bg-gradient-to-b from-transparent to-accent/30"></div>
        <div className="absolute top-1/3 right-1/4 w-px h-20 bg-gradient-to-b from-transparent to-accent/30"></div>
        <div className="absolute bottom-1/3 left-1/3 w-20 h-px bg-gradient-to-r from-transparent to-accent/30"></div>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <div className="glass-panel p-8 md:p-16 relative backdrop-blur-lg text-center">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
          
          <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary mb-6 forge-border">
            <Terminal className="text-accent" size={24} strokeWidth={1.5} />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-accent uppercase">
            Join The Collective
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Those who belong here think in systems but move with instinct, build at the intersection of intelligence and creativity, and see the world as malleable, not fixed.
          </p>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="flex flex-col md:flex-row items-stretch gap-4">
                <div className="flex-grow relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-background border border-accent/30 focus:border-accent/80 outline-none text-foreground placeholder:text-muted-foreground font-mono text-sm"
                  />
                  {error && (
                    <p className="absolute -bottom-6 left-0 text-red-500 text-xs">{error}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-accent hover:bg-accent/90 text-white font-mono text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors group"
                >
                  <span>Connect</span>
                  <Send size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          ) : (
            <div className="terminal-window p-6 max-w-lg mx-auto">
              <p className="font-mono text-sm text-foreground">
                <span className="text-accent">$</span> Thank you for joining. Expect uncommon thinking and challenging ideas in your inbox.
              </p>
            </div>
          )}
          
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
        </div>
        
        {/* Operational Principle Footer */}
        <div className="mt-16 text-center">
          <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
            Operational Principle
          </h3>
          <p className="text-xl md:text-2xl font-display text-foreground">
            Create without permission. Build without apology. Change reality itself.
          </p>
          
          <div className="mt-8">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-8 py-3 border border-accent/50 text-accent hover:bg-accent/10 transition-all duration-300 font-mono text-sm uppercase tracking-wider group"
            >
              Enter The Lab
              <ArrowRight 
                size={16} 
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;