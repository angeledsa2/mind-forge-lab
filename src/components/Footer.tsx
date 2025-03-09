import React from 'react';
import ForgeLogo from './ForgeLogo';
import { Github, Linkedin, Bookmark, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 border-t border-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and tagline */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <ForgeLogo />
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg tracking-tight text-foreground">
                  MIND FORGE
                </span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
                  Structured Chaos
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs mt-2">
              A digital forge where raw intelligence, creativity, and structured chaos combine to build systems that change reality itself.
            </p>
          </div>
          
          {/* Knowledge Channels */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-6">
              Knowledge Channels
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Metaphysical Reality', link: '#', icon: <Bookmark size={14} /> },
                { name: 'Strategic Execution', link: '#', icon: <Bookmark size={14} /> },
                { name: 'Technical Forge', link: '#', icon: <Github size={14} /> },
                { name: 'Professional Reach', link: '#', icon: <Linkedin size={14} /> }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.link}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300 flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    <ExternalLink size={12} className="ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* The Collective */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-6">
              The Collective
            </h3>
            <ul className="space-y-2">
              {[
                'Think in systems but move with instinct',
                'Build at the intersection of intelligence and creativity',
                'Question reality, challenge authority, reshape culture',
                'See the world as malleable, not fixed'
              ].map((item, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start">
                  <span className="text-accent mr-2">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-accent/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground mb-4 md:mb-0 font-mono">
            Mind Forge HQ • <span className="text-accent">Not a Brand, a Force</span>
          </p>
          
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="text-xs text-muted-foreground hover:text-accent transition-colors font-mono uppercase"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="text-xs text-muted-foreground hover:text-accent transition-colors font-mono uppercase"
            >
              Terms
            </a>
            <a 
              href="#" 
              className="text-xs text-muted-foreground hover:text-accent transition-colors font-mono uppercase"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;