
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className, 
  delay = 0 
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const timer = setTimeout(() => {
      textElement.style.opacity = '1';
      textElement.style.transform = 'translateY(0)';
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      ref={textRef}
      className={cn(
        'opacity-0 transform translate-y-4 transition-all duration-500 ease-out',
        className
      )}
    >
      {text}
    </div>
  );
};

export default AnimatedText;
