import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <Contact />
    </>
  );
}