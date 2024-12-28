import React from 'react';
import { Code2, Cpu, Brain, Palette, Globe, Shield } from 'lucide-react';
import ServiceCard from './ServiceCard';
import PageHeader from '../../components/PageHeader';

const services = [
  {
    title: 'Custom Development',
    description: 'Tailored solutions that adapt and evolve with your business needs.',
    icon: Code2,
    features: [
      'Full-stack web applications',
      'Mobile app development',
      'API development and integration',
      'Cloud-native solutions'
    ]
  },
  {
    title: 'AI Integration',
    description: 'Harness the power of artificial intelligence to drive innovation.',
    icon: Brain,
    features: [
      'Machine learning solutions',
      'Natural language processing',
      'Computer vision systems',
      'Predictive analytics'
    ]
  },
  {
    title: 'Digital Transformation',
    description: 'Transform your business with cutting-edge digital solutions.',
    icon: Cpu,
    features: [
      'Legacy system modernization',
      'Cloud migration',
      'Process automation',
      'Digital workflow optimization'
    ]
  },
  {
    title: 'UI/UX Design',
    description: 'Create exceptional user experiences that captivate and convert.',
    icon: Palette,
    features: [
      'User interface design',
      'User experience optimization',
      'Design systems',
      'Interactive prototypes'
    ]
  },
  {
    title: 'Web3 Development',
    description: 'Build the future of decentralized applications and systems.',
    icon: Globe,
    features: [
      'Smart contract development',
      'DApp creation',
      'Blockchain integration',
      'NFT platforms'
    ]
  },
  {
    title: 'Security Solutions',
    description: 'Protect your digital assets with enterprise-grade security.',
    icon: Shield,
    features: [
      'Security audits',
      'Penetration testing',
      'Secure architecture design',
      'Compliance implementation'
    ]
  }
];

export default function Services() {
  return (
    <div className="pt-20 pb-24">
      <PageHeader 
        title="Our Services"
        description="We offer a comprehensive suite of technology solutions to drive your business forward."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </div>
  );
}