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
export const HomePage = () => {
  return <main>
      <Element name="home">
        <HeroSection />
      </Element>
      <Element name="services">
        <ServiceCards />
      </Element>
      <Element name="about">
        <AboutSection />
      </Element>
      <Element name="team">
        <TeamSection />
      </Element>
      <Element name="reviews">
        <ReviewsSection />
      </Element>
      {/* <BlogSection /> */}
      <Element name="instagram">
        <InstagramFeed />
      </Element>
      <Element name="faq">
        <FAQSection />
      </Element>
      <Element name="booking">
        <BookingSection />
      </Element>
    </main>;
};