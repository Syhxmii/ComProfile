import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Benefits from '../components/Benefits';
import CTA from '../components/CTA';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Animate sections on scroll
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Hero />
      <Services />
      <Benefits />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
};

export default HomePage;