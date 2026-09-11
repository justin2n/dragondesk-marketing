import React from 'react';
import Hero from '../components/Hero';
import Problems from '../components/Problems';
import Features from '../components/Features';
import Pulse from '../components/Pulse';
import Programs from '../components/Programs';
import Migration from '../components/Migration';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';

// The full DragonDesk platform for martial arts studios — the CRM, marketing,
// billing and attendance suite. This was the homepage until Optimize took that
// slot; the composition is unchanged so the pitch keeps its original shape.
const Platform = () => {
  return (
    <>
      <Hero />
      <Problems />
      <Features />
      <Pulse />
      <Programs />
      <Migration />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  );
};

export default Platform;
