import React, { useEffect, useRef } from 'react';
import { Braces, LayoutGrid, Layers, Network, Code, FileCode, Lightbulb, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EcosystemItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  items: string[];
  index: number;
}

const EcosystemItem: React.FC<EcosystemItemProps> = ({ icon, title, description, link, items, index }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-16');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={itemRef}
      className={cn(
        "glass-card p-6 transition-all duration-700 ease-out opacity-0 translate-y-16 transform hover:translate-y-[-4px] hover:shadow-lg",
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-3 mb-6 pb-3 border-b border-accent/20">
          <div className="flex items-center justify-center w-10 h-10 bg-secondary text-accent">
            {icon}
          </div>
          <h3 className="text-lg font-display font-bold tracking-wide">{title}</h3>
        </div>
        
        <p className="text-muted-foreground mb-4 text-sm">{description}</p>
        
        <ul className="mb-6 flex-grow space-y-2">
          {items.map((item, i) => (
            <li key={i} className="text-sm flex items-start">
              <span className="text-accent mr-2">›</span>
              {item}
            </li>
          ))}
        </ul>
        
        <a 
          href={link} 
          className="inline-flex items-center text-accent hover:text-accent/90 transition-colors group text-sm font-mono uppercase tracking-wide"
        >
          Explore
          <ExternalLink size={14} className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

const Ecosystem: React.FC = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  
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
    
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);
  
  const ecosystemItems = [
    {
      icon: <LayoutGrid size={20} />,
      title: "THE LAB",
      description: "Central hub for all projects, experiments, and manifestations",
      items: [
        "Core architecture and interface",
        "Navigation for all systems",
        "Integrated tooling and resources"
      ],
      link: "#lab"
    },
    {
      icon: <Network size={20} />,
      title: "KNOWLEDGE CHANNELS",
      description: "Multi-channel distribution of specialized content",
      items: [
        "Metaphysical Reality (Substack)",
        "Strategic Execution (Medium)",
        "Technical Forge (GitHub)"
      ],
      link: "#knowledge"
    },
    {
      icon: <Layers size={20} />,
      title: "REALITY ENGINES",
      description: "Frameworks and systems that power transformation",
      items: [
        "Lumina: Consciousness-optimized decision timing",
        "PDI Framework: Projection Density measurement",
        "Emerging platforms for consciousness expansion"
      ],
      link: "#engines"
    },
    {
      icon: <Code size={20} />,
      title: "PROFESSIONAL REACH",
      description: "Engineering Leadership & AI Strategy connections",
      items: [
        "Professional network integration",
        "Industry thought leadership",
        "Cross-domain collaboration"
      ],
      link: "#reach"
    }
  ];
  
  return (
    <section id="ecosystem" className="py-32 px-6">
      <div 
        ref={titleRef}
        className="text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ease-out opacity-0 translate-y-8"
      >
        <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary mb-5 forge-border">
          <Braces className="text-accent" size={24} strokeWidth={1.5} />
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 text-gradient-purple uppercase">
          Architecture
        </h2>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-mono">
          System Design
        </p>
        <div className="h-px w-40 mx-auto bg-gradient-to-r from-transparent via-accent/50 to-transparent mt-8"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {ecosystemItems.map((item, index) => (
          <EcosystemItem
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            items={item.items}
            link={item.link}
            index={index}
          />
        ))}
      </div>
      
      {/* Architecture Diagram */}
      <div className="mt-20 max-w-4xl mx-auto terminal-window p-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <div className="mb-4 flex items-center">
          <FileCode size={16} className="text-accent mr-2" />
          <span className="text-xs font-mono text-muted-foreground">architecture.md</span>
        </div>
        
        <pre className="font-mono text-xs md:text-sm whitespace-pre-wrap text-muted-foreground">
{`MIND FORGE HQ
├── THE LAB [mindforgehq.co]
│   └── Central hub for all projects, experiments, and manifestations
│
├── KNOWLEDGE CHANNELS
│   ├── Metaphysical Reality [Substack]
│   │   └── Intelligence, consciousness mechanics, reality frameworks
│   │
│   ├── Strategic Execution [Medium]
│   │   └── Leadership, AI strategy, system optimization
│   │
│   └── Technical Forge [GitHub]
│       └── Code, data, technical implementations
│
├── REALITY ENGINES
│   ├── Lumina
│   │   └── Consciousness-optimized decision timing
│   │
│   ├── PDI Framework
│   │   └── Projection Density measurement system
│   │
│   └── New Reality Projects
│       └── Emerging platforms for consciousness expansion
│
└── PROFESSIONAL REACH
    └── Engineering Leadership & AI Strategy [LinkedIn]`}
        </pre>
      </div>
    </section>
  );
};

export default Ecosystem;