import React, { useState } from 'react';
import { Braces, Layers, Network, ExternalLink, Grid, Zap, Lightbulb, Code } from 'lucide-react';

const ArchitectureNode = ({ 
  title, 
  description, 
  icon, 
  position, 
  isActive, 
  onClick 
}) => {
  return (
    <div 
      className={`absolute cursor-pointer transition-all duration-300 ${position}`}
      onClick={onClick}
    >
      <div 
        className={`relative flex flex-col items-center group ${
          isActive ? 'scale-110' : 'scale-100 hover:scale-105'
        }`}
      >
        {/* Connection lines */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Only show connection lines for the center node when it's active */}
          {title === "THE LAB" && isActive && (
            <>
              <div className="absolute top-1/2 left-full w-12 h-px bg-accent/30"></div>
              <div className="absolute top-full left-1/2 w-px h-12 bg-accent/30"></div>
              <div className="absolute top-1/2 right-full w-12 h-px bg-accent/30"></div>
              <div className="absolute bottom-full left-1/2 w-px h-12 bg-accent/30"></div>
            </>
          )}
        </div>
        
        {/* Node */}
        <div 
          className={`w-16 h-16 flex items-center justify-center border ${
            isActive 
              ? 'border-accent bg-secondary shadow-lg shadow-accent/20' 
              : 'border-accent/40 bg-secondary/70 hover:border-accent/70'
          } transition-all duration-300`}
        >
          <div className="text-accent">{icon}</div>
        </div>
        
        <h3 className={`mt-2 text-xs font-mono tracking-wider ${
          isActive ? 'text-accent' : 'text-muted-foreground'
        }`}>
          {title}
        </h3>
        
        {/* Description tooltip */}
        <div className={`absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full w-48 bg-black/90 border border-accent/40 p-3 text-xs text-muted-foreground transition-all duration-300 pointer-events-none ${
          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const ArchitectureDiagram = () => {
  const [activeNode, setActiveNode] = useState("THE LAB");
  const [details, setDetails] = useState({
    title: "THE LAB",
    description: "Central hub for all projects, experiments, and manifestations",
    items: ["Core architecture and interface", "Navigation for all systems", "Integrated tooling and resources"]
  });
  
  const nodes = [
    {
      id: "THE LAB",
      title: "THE LAB",
      description: "Central hub for all projects, experiments, and manifestations",
      icon: <Grid size={20} />,
      position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
      items: ["Core architecture and interface", "Navigation for all systems", "Integrated tooling and resources"]
    },
    {
      id: "KNOWLEDGE CHANNELS",
      title: "KNOWLEDGE CHANNELS",
      description: "Multi-channel distribution of specialized content",
      icon: <Network size={20} />,
      position: "top-1/2 right-12 -translate-y-1/2",
      items: [
        "Metaphysical Reality (Substack)",
        "Strategic Execution (Medium)",
        "Technical Forge (GitHub)"
      ]
    },
    {
      id: "REALITY ENGINES",
      title: "REALITY ENGINES",
      description: "Frameworks and systems that power transformation",
      icon: <Zap size={20} />,
      position: "bottom-12 left-1/2 -translate-x-1/2",
      items: [
        "Lumina: Consciousness-optimized decision timing",
        "PDI Framework: Projection Density measurement",
        "Emerging platforms for consciousness expansion"
      ]
    },
    {
      id: "PROFESSIONAL REACH",
      title: "PROFESSIONAL REACH",
      description: "Engineering Leadership & AI Strategy connections",
      icon: <ExternalLink size={20} />,
      position: "top-1/2 left-12 -translate-y-1/2",
      items: [
        "Professional network integration",
        "Industry thought leadership",
        "Cross-domain collaboration"
      ]
    },
    {
      id: "OPERATIONAL PRINCIPLE",
      title: "PRINCIPLE",
      description: "Create without permission. Build without apology. Change reality itself.",
      icon: <Lightbulb size={20} />,
      position: "top-12 left-1/2 -translate-x-1/2",
      items: [
        "No shrinking to fit expectations",
        "Confidence in genius and chaos",
        "Movement beyond proving worth"
      ]
    }
  ];
  
  const handleNodeClick = (node) => {
    setActiveNode(node.id);
    setDetails({
      title: node.title,
      description: node.description,
      items: node.items
    });
  };
  
  return (
    <div className="w-full max-w-3xl mx-auto mt-12">
      <h3 className="text-center text-xl font-display font-bold mb-4 text-gradient-accent">
        ARCHITECTURE EXPLORER
      </h3>
      
      {/* Diagram area */}
      <div className="relative h-96 border border-accent/20 bg-black/40 mb-8">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid-pattern bg-[length:20px_20px] opacity-10"></div>
        
        {/* Nodes */}
        {nodes.map((node) => (
          <ArchitectureNode
            key={node.id}
            title={node.title}
            description={node.description}
            icon={node.icon}
            position={node.position}
            isActive={activeNode === node.id}
            onClick={() => handleNodeClick(node)}
          />
        ))}
        
        {/* Center connection point */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-accent"></div>
      </div>
      
      {/* Details panel */}
      <div className="terminal-window">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Code size={16} className="text-accent mr-2" />
            <span className="text-xs font-mono text-muted-foreground">node-details.md</span>
          </div>
          <span className="text-xs font-mono text-accent">{details.title}</span>
        </div>
        
        <div className="mb-3">
          <h4 className="text-sm font-mono text-foreground mb-1">Description:</h4>
          <p className="text-sm text-muted-foreground pl-2">{details.description}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-mono text-foreground mb-1">Components:</h4>
          <ul className="pl-2">
            {details.items.map((item, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start mb-1">
                <span className="text-accent mr-2">›</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-4 text-xs text-muted-foreground flex items-center">
          <span className="text-accent mr-1">$</span>
          <span className="animate-pulse">Click on nodes to explore the architecture</span>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;