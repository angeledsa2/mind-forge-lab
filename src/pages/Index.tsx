
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VisionSection from '@/components/VisionSection';
import Ecosystem from '@/components/Ecosystem';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';

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
      <Particles />
      
      <main>
        <Hero />
        <VisionSection />
        <Ecosystem />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
