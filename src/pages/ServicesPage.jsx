import React from 'react';
import { Container, Section } from '../components';
import theme from '../theme';

/**
 * ServicesPage component that displays available services
 */
const ServicesPage = () => {
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
          <h1 style={{ fontSize: theme.fonts.sizes.xxxl, marginBottom: theme.spacing.md }}>Our Services</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: theme.fonts.sizes.lg }}>
            Comprehensive medical tourism services to make your healthcare journey smooth and hassle-free
          </p>
        </Container>
      </div>
      
      <Section background="light" padding="large">
        <Container>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {/* Service 1 */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', alignItems: 'center' }}>
              <div style={{ flex: '1 1 400px', minWidth: '300px' }}>
                <div style={{ 
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.text.light,
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px',
                  marginBottom: theme.spacing.md
                }}>
                  <i className="fa fa-user-md"></i>
                </div>
                <h2 style={{ fontSize: theme.fonts.sizes.xl, marginBottom: theme.spacing.md, color: theme.colors.text.primary }}>Medical Treatment Consultation</h2>
                <p style={{ marginBottom: theme.spacing.md, lineHeight: 1.6, color: theme.colors.text.secondary }}>
                  Our experienced medical consultants will help you choose the right treatment options based on your medical condition, budget, and preferences. We provide detailed information about procedures, expected outcomes, and recovery time.                
                </p>
              </div>
              <div style={{ flex: '1 1 400px', minWidth: '300px' }}>
                <img 
                  src="/images/services/consultation.jpg" 
                  alt="Medical Consultation" 
                  style={{ width: '100%', borderRadius: theme.borderRadius.md, boxShadow: theme.shadows.md }}
                />
              </div>
            </div>

            {/* Service 2 */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', alignItems: 'center', flexDirection: 'row-reverse' }}>
              <div style={{ flex: '1 1 400px', minWidth: '300px' }}>
                <div style={{ 
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.text.light,
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px',
                  marginBottom: theme.spacing.md
                }}>
                  <i className="fa fa-plane"></i>
                </div>
                <h2 style={{ fontSize: theme.fonts.sizes.xl, marginBottom: theme.spacing.md, color: theme.colors.text.primary }}>Travel Arrangements</h2>
                <p style={{ marginBottom: theme.spacing.md, lineHeight: 1.6, color: theme.colors.text.secondary }}>
                  We take care of all your travel needs including visa assistance, flight bookings, airport pickups, and local transportation. Our goal is to make your medical journey as comfortable and stress-free as possible.                
                </p>
              </div>
              <div style={{ flex: '1 1 400px', minWidth: '300px' }}>
                <img 
                  src="/images/services/travel.jpg" 
                  alt="Travel Arrangements" 
                  style={{ width: '100%', borderRadius: theme.borderRadius.md, boxShadow: theme.shadows.md }}
                />
              </div>
            </div>

            {/* Service 3 */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', alignItems: 'center' }}>
              <div style={{ flex: '1 1 400px', minWidth: '300px' }}>
                <div style={{ 
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.text.light,
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px',
                  marginBottom: theme.spacing.md
                }}>
                  <i className="fa fa-hotel"></i>
                </div>
                <h2 style={{ fontSize: theme.fonts.sizes.xl, marginBottom: theme.spacing.md, color: theme.colors.text.primary }}>Accommodation Services</h2>
                <p style={{ marginBottom: theme.spacing.md, lineHeight: 1.6, color: theme.colors.text.secondary }}>
                  We offer a range of accommodation options near your treatment facility, from budget-friendly guesthouses to luxury hotels. All accommodations are carefully selected to ensure comfort, cleanliness, and convenience.                
                </p>
              </div>
              <div style={{ flex: '1 1 400px', minWidth: '300px' }}>
                <img 
                  src="/images/services/accommodation.jpg" 
                  alt="Accommodation Services" 
                  style={{ width: '100%', borderRadius: theme.borderRadius.md, boxShadow: theme.shadows.md }}
                />
              </div>
            </div>

            {/* Service 4 */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', alignItems: 'center', flexDirection: 'row-reverse' }}>
              <div style={{ flex: '1 1 400px', minWidth: '300px' }}>
                <div style={{ 
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.text.light,
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px',
                  marginBottom: theme.spacing.md
                }}>
                  <i className="fa fa-language"></i>
                </div>
                <h2 style={{ fontSize: theme.fonts.sizes.xl, marginBottom: theme.spacing.md, color: theme.colors.text.primary }}>Language & Cultural Support</h2>
                <p style={{ marginBottom: theme.spacing.md, lineHeight: 1.6, color: theme.colors.text.secondary }}>
                  Our multilingual team provides interpretation services during medical consultations and helps bridge cultural gaps. We ensure clear communication between you and your healthcare providers throughout your treatment journey.                
                </p>
              </div>
              <div style={{ flex: '1 1 400px', minWidth: '300px' }}>
                <img 
                  src="/images/services/language.jpg" 
                  alt="Language Support" 
                  style={{ width: '100%', borderRadius: theme.borderRadius.md, boxShadow: theme.shadows.md }}
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ServicesPage;