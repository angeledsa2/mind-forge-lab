
import React, { useEffect, useRef } from 'react';
import { Cog, Lightbulb, Radio, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EcosystemItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  index: number;
}

const EcosystemItem: React.FC<EcosystemItemProps> = ({ icon, title, description, link, index }) => {
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
        "glass-card rounded-xl p-6 transition-all duration-700 ease-out opacity-0 translate-y-16 transform hover:translate-y-[-4px] hover:shadow-lg hover:shadow-accent/5",
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-accent">
            {icon}
          </div>
          <h3 className="text-xl font-display font-medium">{title}</h3>
        </div>
        
        <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
        
        <a 
          href={link} 
          className="inline-flex items-center text-accent hover:text-accent/90 transition-colors group"
        >
          Explore
          <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
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
      icon: <Cog size={20} />,
      title: "Mind Forge Systems",
      description: "Practical frameworks & execution methodologies for real-world implementation.",
      link: "#systems"
    },
    {
      icon: <Lightbulb size={20} />,
      title: "Mind Forge Constructs",
      description: "Exploratory, deep thinking & philosophical concepts that shape perspective.",
      link: "#constructs"
    },
    {
      icon: <Radio size={20} />,
      title: "Mind Forge Signals",
      description: "Writing & insights that capture emerging patterns and ideas.",
      link: "#signals"
    },
    {
      icon: <Zap size={20} />,
      title: "Mind Forge Works",
      description: "Projects, experiments, art, AI, media, and collaborative endeavors.",
      link: "#works"
    }
  ];
  
  return (
    <section id="ecosystem" className="py-24 px-6">
      <div 
        ref={titleRef}
        className="text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ease-out opacity-0 translate-y-8"
      >
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-3 text-gradient">
          The Ecosystem
        </h2>
        <p className="text-muted-foreground">How It All Connects</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {ecosystemItems.map((item, index) => (
          <EcosystemItem
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            link={item.link}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Ecosystem;
