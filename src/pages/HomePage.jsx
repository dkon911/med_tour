import React from 'react';
import {
  Hero,
  FeaturedTreatments,
  TopDoctors,
  Testimonials,
  WhyChooseUs,
  ContactForm,
} from '../components';

/**
 * HomePage component that displays the main landing page
 */
const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedTreatments />
      <WhyChooseUs />
      <TopDoctors />
      <Testimonials />
      <div style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>
          <div style={{ flex: '1 1 500px', minWidth: '300px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333' }}>Get a Free Consultation</h2>
            <p style={{ fontSize: '1rem', marginBottom: '30px', color: '#666', lineHeight: '1.6' }}>
              Have questions about medical treatments, costs, or travel arrangements? 
              Fill out the form and our medical tourism experts will get back to you within 24 hours.
            </p>
          </div>
          <div style={{ flex: '1 1 500px', minWidth: '300px' }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;