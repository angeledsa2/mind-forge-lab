
import React, { useEffect, useRef } from 'react';
import { ClipboardPenLine, Lightbulb, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CTACardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  index: number;
}

const CTACard: React.FC<CTACardProps> = ({ 
  icon, 
  title, 
  description, 
  buttonText, 
  buttonLink, 
  index 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
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
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "glass-card p-8 flex flex-col items-center text-center transition-all duration-700 ease-out opacity-0 translate-y-8",
        "hover:border-accent/30 hover:shadow-md"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-center justify-center w-12 h-12 bg-secondary text-accent mb-6">
        {icon}
      </div>
      
      <h3 className="text-xl font-display font-medium mb-3">{title}</h3>
      <p className="text-muted-foreground mb-8">{description}</p>
      
      <a 
        href={buttonLink} 
        className="py-2 px-6 border border-accent/50 text-accent hover:bg-accent/5 transition-colors"
      >
        {buttonText}
      </a>
    </div>
  );
};

const CallToAction: React.FC = () => {
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
  
  const ctaCards = [
    {
      icon: <Lightbulb size={24} />,
      title: "Get Updates",
      description: "Sign up for insights and first access to new ideas and concepts.",
      buttonText: "Subscribe",
      buttonLink: "#join"
    },
    {
      icon: <ClipboardPenLine size={24} />,
      title: "Work With Us",
      description: "Collaborate on projects or engage our consulting services.",
      buttonText: "Contact",
      buttonLink: "#contact"
    },
    {
      icon: <Rocket size={24} />,
      title: "View Projects",
      description: "Discover our work, collaborations, and join the community.",
      buttonText: "Explore",
      buttonLink: "#experiments"
    }
  ];
  
  return (
    <section 
      id="cta"
      ref={sectionRef}
      className="py-24 px-6 transition-all duration-1000 ease-out opacity-0 translate-y-8"
    >
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-3 text-gradient">
          Connect With Mind Forge
        </h2>
        <p className="text-muted-foreground">How to engage with our work</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {ctaCards.map((card, index) => (
          <CTACard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            buttonLink={card.buttonLink}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default CallToAction;
