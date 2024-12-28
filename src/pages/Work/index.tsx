import React from 'react';
import PageHeader from '../../components/PageHeader';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'AI-Powered Analytics Platform',
    description: 'Enterprise-scale analytics platform with machine learning capabilities for predictive insights.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    tags: ['AI/ML', 'Big Data', 'Cloud Architecture']
  },
  {
    title: 'Smart City Infrastructure',
    description: 'IoT-based system for monitoring and optimizing city resources and services.',
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80&w=1200',
    tags: ['IoT', 'Real-time Analytics', 'Smart Systems']
  },
  {
    title: 'Blockchain Trading Platform',
    description: 'Secure and scalable cryptocurrency trading platform with advanced features.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200',
    tags: ['Blockchain', 'Web3', 'FinTech']
  },
  {
    title: 'E-commerce Revolution',
    description: 'Next-generation e-commerce platform with AR product visualization.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1200',
    tags: ['AR/VR', 'E-commerce', 'Mobile']
  },
  {
    title: 'Healthcare Management System',
    description: 'Comprehensive healthcare platform for patient care and hospital management.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200',
    tags: ['Healthcare', 'Security', 'Cloud']
  },
  {
    title: 'Autonomous Vehicle Interface',
    description: 'Advanced UI/UX system for autonomous vehicle control and monitoring.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200',
    tags: ['Automotive', 'UI/UX', 'IoT']
  }
];

export default function Work() {
  return (
    <div className="pt-20 pb-24">
      <PageHeader
        title="Our Work"
        description="Explore our portfolio of innovative solutions that have transformed industries."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </div>
  );
}