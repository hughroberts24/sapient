import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Input from './Input';
import AnimatedElement from '../AnimatedElement';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-black to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-up" className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Let's Build the Future Together
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with us and let's start crafting your digital evolution.
          </p>
        </AnimatedElement>

        <AnimatedElement animation="fade-up" delay={200}>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <Input
              label="Name"
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
            <Input
              label="Email"
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
            <Input
              label="Message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Tell us about your project"
              multiline
              required
            />
            
            <button
              type="submit"
              className="w-full mt-6 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 group"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </AnimatedElement>
      </div>
    </section>
  );
}