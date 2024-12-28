import React, { useEffect, useRef } from 'react';

interface AnimatedElementProps {
  children: React.ReactNode;
  animation: 'fade-up' | 'fade-in' | 'slide-in';
  delay?: number;
  className?: string;
}

export default function AnimatedElement({ 
  children, 
  animation, 
  delay = 0,
  className = '' 
}: AnimatedElementProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate');
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const baseStyles = 'opacity-0 transition-all duration-1000';
  const animationStyles = {
    'fade-up': 'translate-y-8 animate:translate-y-0 animate:opacity-100',
    'fade-in': 'animate:opacity-100',
    'slide-in': 'translate-x-8 animate:translate-x-0 animate:opacity-100'
  };

  return (
    <div 
      ref={elementRef}
      className={`${baseStyles} ${animationStyles[animation]} ${className}`}
    >
      {children}
    </div>
  );
}