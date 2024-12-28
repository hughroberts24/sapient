import React from 'react';
import AnimatedElement from '../../components/AnimatedElement';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  delay?: number;
}

export default function ProjectCard({ title, description, image, tags, delay = 0 }: ProjectCardProps) {
  return (
    <AnimatedElement animation="fade-up" delay={delay}>
      <div className="group overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-all">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm bg-purple-500/10 text-purple-500 border border-purple-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AnimatedElement>
  );
}