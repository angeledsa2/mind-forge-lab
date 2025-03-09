import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VisionSection from '@/components/VisionSection';
import Ecosystem from '@/components/Ecosystem';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import GridBackground from '@/components/GridBackground';
import TerminalDemo from '@/components/TerminalDemo';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';

const Index: React.FC = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth'
        });
      });
    });
  }, []);
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <GridBackground />
      
      <main>
        <Hero />
        <VisionSection />
        <div className="py-16 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-gradient-accent text-center uppercase">
            Interactive Experience
          </h2>
          <TerminalDemo />
          <div className="mt-24">
            <ArchitectureDiagram />
          </div>
        </div>
        <Ecosystem />
        <CallToAction />
      </main>
        <VisionSection />
        <Ecosystem />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;