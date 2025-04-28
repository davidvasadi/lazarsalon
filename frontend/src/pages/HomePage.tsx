// --- HomePage.tsx ---
import React from 'react';
import { Element } from 'react-scroll';
import { HeroSection } from '../components/HeroSection';
import { ServiceCards } from '../components/ServiceCards';
import { AboutSection } from '../components/AboutSection';
import { TeamSection } from '../components/TeamSection';
import { ReviewsSection } from '../components/ReviewsSection';
// import { BlogSection } from '../components/BlogSection';
import { InstagramFeed } from '../components/InstagramFeed';
import { FAQSection } from '../components/FAQSection';
import { BookingSection } from '../components/BookingSection';

export const HomePage: React.FC = () => {
  return (
    <main>
      <Element name="fooldal" id="fooldal">
        <HeroSection />
      </Element>

      <Element name="szolgaltatasok" id="szolgaltatasok">
        <ServiceCards />
      </Element>

      <Element name="rolunk" id="rolunk">
        <AboutSection />
      </Element>

      <Element name="csapatunk" id="csapatunk">
        <TeamSection />
      </Element>

      <Element name="ertekelesek" id="ertekelesek">
        <ReviewsSection />
      </Element>

      {/* <BlogSection /> */}

      <Element name="instagram" id="instagram">
        <InstagramFeed />
      </Element>

      <Element name="gyik" id="gyik">
        <FAQSection />
      </Element>

      <Element name="idopontfoglalas" id="idopontfoglalas">
        <BookingSection />
      </Element>
    </main>
  );
};

export default HomePage;