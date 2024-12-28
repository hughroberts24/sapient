import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeamMember from './TeamMember';
import AnimatedElement from '../../components/AnimatedElement';

const team = [
  // Team members array remains the same
];

export default function About() {
  return (
    <div className="pt-20 pb-24">
      <PageHeader
        title="About Us"
        description="We are a team of innovators, dreamers, and doers committed to shaping the future of technology."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-up">
          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl">
              At Sapient, we believe in pushing the boundaries of what's possible. Our mission is to empower businesses 
              through innovative technology solutions that drive growth, efficiency, and competitive advantage in the 
              digital age. With a decade of experience and a passion for excellence, we've helped countless organizations 
              transform their digital presence and achieve unprecedented success.
            </p>
          </div>
        </AnimatedElement>

        {/* Team section remains the same */}
      </div>
    </div>
  );
}