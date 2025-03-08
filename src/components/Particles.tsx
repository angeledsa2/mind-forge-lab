
import React, { useEffect, useRef } from 'react';

interface ParticlesProps {
  className?: string;
}

const Particles: React.FC<ParticlesProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }[] = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    // Create particles
    const createParticles = () => {
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1 + 0.5,
          speedX: Math.random() * 0.2 - 0.1,
          speedY: -Math.random() * 0.3 - 0.1,
          opacity: Math.random() * 0.3
        });
      }
    };
    
    createParticles();
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // If particle goes off screen, reset it
        if (particle.y < -10 || particle.x < -10 || particle.x > canvas.width + 10) {
          particles[index] = {
            x: Math.random() * canvas.width,
            y: canvas.height + 10,
            size: Math.random() * 1 + 0.5,
            speedX: Math.random() * 0.2 - 0.1,
            speedY: -Math.random() * 0.3 - 0.1,
            opacity: Math.random() * 0.3
          };
        }
        
        // Draw particle
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed inset-0 pointer-events-none z-0 ${className || ''}`}
    />
  );
};

export default Particles;
