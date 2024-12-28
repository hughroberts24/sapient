import React from 'react';
import AnimatedElement from '../../components/AnimatedElement';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  delay?: number;
}

export default function TeamMember({ name, role, image, delay = 0 }: TeamMemberProps) {
  return (
    <AnimatedElement animation="fade-up" delay={delay}>
      <div className="group">
        <div className="relative overflow-hidden rounded-2xl mb-4">
          <img
            src={image}
            alt={name}
            className="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="text-gray-400">{role}</p>
      </div>
    </AnimatedElement>
  );
}