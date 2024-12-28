import React from 'react';
import { LucideIcon } from 'lucide-react';
import AnimatedElement from '../../components/AnimatedElement';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  delay?: number;
}

export default function ServiceCard({ title, description, icon: Icon, features, delay = 0 }: ServiceCardProps) {
  return (
    <AnimatedElement animation="fade-up" delay={delay}>
      <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-all group">
        <Icon className="w-12 h-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-400 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedElement>
  );
}