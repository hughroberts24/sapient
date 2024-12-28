import React from 'react';
import AnimatedElement from './AnimatedElement';

interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="relative mb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <AnimatedElement animation="fade-up">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {description}
          </p>
        </AnimatedElement>
      </div>
    </div>
  );
}