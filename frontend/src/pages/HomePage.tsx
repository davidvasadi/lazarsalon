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
      <Element name="fooldal" id="home">
        <HeroSection />
      </Element>

      <Element name="szolgaltatasok" id="services">
        <ServiceCards />
      </Element>

      <Element name="rolunk" id="about">
        <AboutSection />
      </Element>

      <Element name="csapatunk" id="team">
        <TeamSection />
      </Element>

      <Element name="ertekelesek" id="reviews">
        <ReviewsSection />
      </Element>

      {/* <BlogSection /> */}

      <Element name="instagram" id="instagram">
        <InstagramFeed />
      </Element>

      <Element name="gyik" id="faq">
        <FAQSection />
      </Element>

      <Element name="idopontfoglalas" id="booking">
        <BookingSection />
      </Element>
    </main>
  );
};

export default HomePage;