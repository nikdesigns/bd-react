import React from 'react';

import AlternativeTextHome from '../components/AlternativeTextHome';
import ClientLogos from '../components/ClientLogos';
import CtaSection from '../components/CtaSection';
import FeaturedSection from '../components/FeaturedSection';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ClientLogos />
      <FeaturedSection />
      <AlternativeTextHome />
      <CtaSection />
    </div>
  );
}
