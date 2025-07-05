// App.js (Main Component)
import React from 'react';
import Navbar from '../component/Navbar';
import HeroSection from '../component/HeroSection';
import AboutSection from '../component/AboutSection';
import ServicesSection from '../component/ServicesSection';
import MissionSection from '../component/MissionSection';
import NewsletterSection from '../component/NewsletterSection';
import ContactSection from '../component/ContactSection';
import Footer from '../component/Footer';
import AwardsSection from '../component/AwardSection';
import OverlappingImages from '../component/OverlappingImages';

function Home() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <AwardsSection />
      <NewsletterSection />
      <div>
        <h1 className="text-4xl sm:text-4xl font-bold text-center mb-10 text-[#1a1a1a]">
        <span>Our Success Stories</span>
        <div className="w-16 h-0.5 bg-euclid mx-auto mt-3"></div>
      </h1>
      </div>
      <OverlappingImages/>
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Home;