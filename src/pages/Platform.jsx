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

// The full DragonDesk platform for martial arts studios: the member management,
// marketing, billing and attendance suite that DragonDesk AI runs on. The
// homepage leads with the AI; this page carries the platform's full pitch.
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
