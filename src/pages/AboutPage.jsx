import React from 'react';
import { Container, Section } from '../components';
import theme from '../theme';

/**
 * AboutPage component that displays information about the company
 */
const AboutPage = () => {
  return (
    <>
      <main>
        <div style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: theme.colors.text.light,
          padding: `${theme.spacing.xl} 0`,
          textAlign: 'center'
        }}>
          <Container>
            <h1 style={{ fontSize: theme.fonts.sizes.xxxl, marginBottom: theme.spacing.md }}>About Us</h1>
            <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: theme.fonts.sizes.lg }}>
              Learn more about our mission to provide quality healthcare at affordable prices
            </p>
          </Container>
        </div>
        
        <Section>
          <Container>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
              <div style={{ flex: '1 1 500px', minWidth: '300px', textAlign: 'left' }}>
                <h2 style={{ fontSize: theme.fonts.sizes.xxl, marginBottom: theme.spacing.md, color: theme.colors.text.primary }}>Our Story</h2>
                <p style={{ marginBottom: theme.spacing.md, lineHeight: 1.6 }}>
                  MedTourism was founded in 2010 with a vision to bridge the gap between international patients and quality healthcare services. 
                  We recognized the challenges faced by patients seeking affordable medical treatments without compromising on quality.
                </p>
                <p style={{ marginBottom: theme.spacing.md, lineHeight: 1.6 }}>
                  Over the years, we have built strong partnerships with leading hospitals, renowned doctors, and healthcare facilities 
                  to ensure our patients receive the best possible care. Our team of experienced medical tourism experts works tirelessly 
                  to provide personalized services tailored to each patient's unique needs.
                </p>
                <p style={{ lineHeight: 1.6 }}>
                  Today, we are proud to have helped thousands of patients from around the world access high-quality medical treatments 
                  at a fraction of the cost they would pay in their home countries.
                </p>
              </div>
              <div style={{ flex: '1 1 400px', minWidth: '300px' }}>
                <div style={{ 
                  backgroundColor: theme.colors.background.offWhite, 
                  borderRadius: theme.borderRadius.md,
                  padding: theme.spacing.lg,
                  boxShadow: theme.shadows.md
                }}>
                  <h3 style={{ fontSize: theme.fonts.sizes.xl, marginBottom: theme.spacing.md, color: theme.colors.primary }}>Our Mission</h3>
                  <p style={{ marginBottom: theme.spacing.lg, lineHeight: 1.6 }}>
                    To provide access to world-class healthcare services at affordable prices while ensuring a seamless and stress-free experience for our patients.
                  </p>
                  
                  <h3 style={{ fontSize: theme.fonts.sizes.xl, marginBottom: theme.spacing.md, color: theme.colors.primary }}>Our Vision</h3>
                  <p style={{ marginBottom: theme.spacing.lg, lineHeight: 1.6 }}>
                    To become the most trusted medical tourism company globally, known for our commitment to patient care, quality service, and ethical practices.
                  </p>
                  
                  <h3 style={{ fontSize: theme.fonts.sizes.xl, marginBottom: theme.spacing.md, color: theme.colors.primary }}>Our Values</h3>
                  <ul style={{ paddingLeft: theme.spacing.lg, lineHeight: 1.6 }}>
                    <li style={{ marginBottom: theme.spacing.sm }}>Patient-centered approach</li>
                    <li style={{ marginBottom: theme.spacing.sm }}>Transparency and integrity</li>
                    <li style={{ marginBottom: theme.spacing.sm }}>Excellence in service</li>
                    <li style={{ marginBottom: theme.spacing.sm }}>Continuous improvement</li>
                    <li>Compassion and empathy</li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;