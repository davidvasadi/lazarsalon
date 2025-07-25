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
      <Element name="" id="home">
        <HeroSection />
      </Element>

      <Element name="" id="services">
        <ServiceCards />
      </Element>

      <Element name="" id="about">
        <AboutSection />
      </Element>

      <Element name="" id="team">
        <TeamSection />
      </Element>

      <Element name="" id="reviews">
        <ReviewsSection />
      </Element>

      {/* <BlogSection /> */}

      <Element name="" id="instagram">
        <InstagramFeed />
      </Element>

      <Element name="" id="faq">
        <FAQSection />
      </Element>

      <Element name="" id="booking">
        <BookingSection />
      </Element>
    </main>
  );
};

export default HomePage;