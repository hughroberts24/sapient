import React from 'react';
import { Code2, Cpu, Brain } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 animate-gradient"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <AnimatedElement animation="fade-up" className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Evolution Through Innovation
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            We transform visionary ideas into revolutionary software solutions that define the future of technology.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="#contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-lg font-semibold hover:opacity-90 transition-opacity">
              Start Your Evolution
            </a>
            <a href="/work" className="px-8 py-4 rounded-full border border-purple-500/50 text-purple-500 text-lg font-semibold hover:bg-purple-500/10 transition-all">
              View Our Work
            </a>
          </div>
        </AnimatedElement>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedElement animation="fade-up" delay={200}>
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-all">
              <Code2 className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Custom Development</h3>
              <p className="text-gray-400">Tailored solutions that adapt and evolve with your business needs.</p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-up" delay={400}>
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-all">
              <Cpu className="w-12 h-12 text-cyan-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">AI Integration</h3>
              <p className="text-gray-400">Harness the power of artificial intelligence to drive innovation.</p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-up" delay={600}>
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-all">
              <Brain className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Digital Evolution</h3>
              <p className="text-gray-400">Transform your digital presence with cutting-edge solutions.</p>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
}