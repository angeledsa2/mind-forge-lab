import React, { useEffect, useRef } from 'react';

interface GridBackgroundProps {
  className?: string;
}

const GridBackground: React.FC<GridBackgroundProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    // Create grid structure
    const gridSize = 50;
    const nodeSize = 1;
    const connectionDistance = 150;
    const activeNodeDistance = 150;
    
    // Grid nodes
    type Node = {
      x: number;
      y: number;
      active: boolean;
      pulseSize: number;
      pulseAlpha: number;
    };
    
    const nodes: Node[] = [];
    
    // Create grid nodes
    for (let x = 0; x < canvas.width; x += gridSize) {
      for (let y = 0; y < canvas.height; y += gridSize) {
        // Add some randomness to grid positions
        const offsetX = Math.random() * 10 - 5;
        const offsetY = Math.random() * 10 - 5;
        
        nodes.push({
          x: x + offsetX,
          y: y + offsetY,
          active: false,
          pulseSize: 0,
          pulseAlpha: 0
        });
      }
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 0.5;
      
      // Update nodes based on mouse position
      nodes.forEach(node => {
        const distance = Math.sqrt(
          Math.pow(node.x - mouseX, 2) + Math.pow(node.y - mouseY, 2)
        );
        
        node.active = distance < activeNodeDistance;
        
        // Update pulse if node is active
        if (node.active && node.pulseSize === 0) {
          node.pulseSize = 1;
          node.pulseAlpha = 0.5;
        }
        
        // Continue pulse animation
        if (node.pulseSize > 0) {
          node.pulseSize += 0.5;
          node.pulseAlpha -= 0.01;
          
          if (node.pulseAlpha <= 0) {
            node.pulseSize = 0;
            node.pulseAlpha = 0;
          }
        }
      });
      
      // Draw connections between nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeA = nodes[i];
          const nodeB = nodes[j];
          
          const distance = Math.sqrt(
            Math.pow(nodeA.x - nodeB.x, 2) + Math.pow(nodeA.y - nodeB.y, 2)
          );
          
          if (distance < connectionDistance) {
            // Calculate opacity based on distance
            const opacity = 0.05 * (1 - distance / connectionDistance);
            
            ctx.beginPath();
            ctx.strokeStyle = `rgba(157, 78, 221, ${opacity})`;
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
          }
        }
      }
      
      // Draw grid nodes
      nodes.forEach(node => {
        // Draw base node
        ctx.fillStyle = node.active ? 'rgba(157, 78, 221, 0.7)' : 'rgba(255, 255, 255, 0.1)';
        ctx.beginPath();
        ctx.rect(node.x - nodeSize / 2, node.y - nodeSize / 2, nodeSize, nodeSize);
        ctx.fill();
        
        // Draw pulse effect for active nodes
        if (node.pulseSize > 0) {
          ctx.strokeStyle = `rgba(157, 78, 221, ${node.pulseAlpha})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.pulseSize, 0, Math.PI * 2);
          ctx.stroke();
        }
      });
      
      // Draw scan line effect
      const scanLineY = (performance.now() / 50) % (canvas.height * 2);
      const gradient = ctx.createLinearGradient(0, scanLineY - 5, 0, scanLineY + 5);
      gradient.addColorStop(0, 'rgba(157, 78, 221, 0)');
      gradient.addColorStop(0.5, 'rgba(157, 78, 221, 0.05)');
      gradient.addColorStop(1, 'rgba(157, 78, 221, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, scanLineY - 5, canvas.width, 10);
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <>
      <canvas 
        ref={canvasRef} 
        className={`fixed inset-0 pointer-events-none z-0 ${className || ''}`}
      />
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-background/70 via-background to-background/70 opacity-80"></div>
    </>
  );
};

export default GridBackground;