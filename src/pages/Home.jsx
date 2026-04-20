import React from 'react';
import Hero from '../components/Hero';
import Problems from '../components/Problems';
import Features from '../components/Features';
import Programs from '../components/Programs';
import Migration from '../components/Migration';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Problems />
      <Features />
      <Programs />
      <Migration />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  );
};

export default Home;
