import React from 'react';
import { Container, Section, ContactForm } from '../components';
import theme from '../theme';

const ContactPage = () => {
  return (
    <>
      <div style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/hero-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: theme.colors.text.light,
        padding: `${theme.spacing.xl} 0`,
        textAlign: 'center'
      }}>
        <Container>
          <h1 style={{ fontSize: theme.fonts.sizes.xxxl, marginBottom: theme.spacing.md }}>Contact Us</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: theme.fonts.sizes.lg }}>
            Get in touch with our medical tourism experts for personalized assistance
          </p>
        </Container>
      </div>
      
      <Section background="offWhite" padding="xl">
        <Container>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: theme.spacing.xl
          }}>
            <div>
              <h2 style={{ marginBottom: theme.spacing.md }}>Our Contact Information</h2>
              <p style={{ marginBottom: theme.spacing.md }}>
                We're available 24/7 to answer your questions about medical treatments, travel arrangements, and more.
              </p>
              <address style={{ fontStyle: 'normal' }}>
                <p><strong>Email:</strong> contact@medtourism.com</p>
                <p><strong>Phone:</strong> +1 (800) 123-4567</p>
                <p><strong>Address:</strong> 123 Medical Plaza, Suite 456, New Delhi, India</p>
              </address>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ContactPage;