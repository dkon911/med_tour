import React from 'react';
import { Container, Section } from '../components';
import theme from '../theme';

/**
 * PartnersPage component that displays information about partners
 */
const PartnersPage = () => {
  // Sample partner data - in a real app, this would come from an API or CMS
  const partners = {
    hospitals: [
      {
        id: 1,
        name: 'Apollo Hospitals',
        location: 'Delhi, Mumbai, Chennai',
        specialties: 'Multi-specialty',
        image: '/images/partners/hospital1.jpg',
        description: 'Apollo Hospitals is one of the largest hospital chains in Asia, known for its excellence in cardiac care, orthopedics, and organ transplants.'
      },
      {
        id: 2,
        name: 'Fortis Healthcare',
        location: 'Bangalore, Gurgaon, Noida',
        specialties: 'Multi-specialty',
        image: '/images/partners/hospital2.jpg',
        description: 'Fortis Healthcare is a leading integrated healthcare delivery service provider in India with top-notch facilities and medical professionals.'
      },
      {
        id: 3,
        name: 'Max Healthcare',
        location: 'Delhi NCR, Mumbai',
        specialties: 'Multi-specialty',
        image: '/images/partners/hospital3.jpg',
        description: 'Max Healthcare is one of India`s leading providers of comprehensive, seamless and integrated world-class healthcare services.'
      },
    ],
    diagnostics: [
      {
        id: 1,
        name: 'Dr. Lal PathLabs',
        location: 'Pan India',
        specialties: 'Diagnostic Services',
        image: '/images/partners/diagnostic1.jpg',
        description: 'Dr. Lal PathLabs is one of the largest diagnostic chains in India offering a comprehensive range of diagnostic and related healthcare tests.'
      },
      {
        id: 2,
        name: 'SRL Diagnostics',
        location: 'Pan India',
        specialties: 'Diagnostic Services',
        image: '/images/partners/diagnostic2.jpg',
        description: 'SRL Diagnostics is one of the largest diagnostics companies in India providing quality diagnostic services with a wide network of labs.'
      },
    ],
    hotels: [
      {
        id: 1,
        name: 'Taj Hotels',
        location: 'Multiple Cities',
        image: '/images/partners/hotel1.jpg',
        description: 'Luxury accommodations for patients and their families with special medical tourism packages.'
      },
      {
        id: 2,
        name: 'MedStay Guesthouses',
        location: 'Near Major Hospitals',
        image: '/images/partners/hotel2.jpg',
        description: 'Affordable and comfortable guesthouses specifically designed for medical tourists with all necessary amenities.'
      },
    ],
    travel: [
      {
        id: 1,
        name: 'MedTravel Services',
        services: 'Airport Transfers, Local Transportation',
        image: '/images/partners/travel1.jpg',
        description: 'Specialized transportation services for medical tourists with wheelchair-accessible vehicles and trained staff.'
      },
      {
        id: 2,
        name: 'Global Medical Assistance',
        services: 'International Travel, Medical Evacuation',
        image: '/images/partners/travel2.jpg',
        description: 'Complete travel solutions for international patients including medical evacuation services when needed.'
      },
    ]
  };

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
          <h1 style={{ fontSize: theme.fonts.sizes.xxxl, marginBottom: theme.spacing.md }}>Our Partners</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: theme.fonts.sizes.lg }}>
            We collaborate with the best healthcare providers, hotels, and travel services to ensure your medical journey is seamless
          </p>
        </Container>
      </div>

      {/* Hospitals Section */}
      <Section background="offWhite" padding="xl">
        <Container>
          <h2 style={{ textAlign: 'center', marginBottom: theme.spacing.xl }}>Hospital Partners</h2>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: theme.spacing.lg
          }}>
            {partners.hospitals.map(hospital => (
              <div key={hospital.id} style={{
                backgroundColor: theme.colors.background.light,
                borderRadius: theme.radii.md,
                padding: theme.spacing.lg,
                boxShadow: theme.shadows.sm
              }}>
                <img 
                  src={hospital.image} 
                  alt={hospital.name}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: theme.radii.sm,
                    marginBottom: theme.spacing.md
                  }}
                />
                <h3 style={{ marginBottom: theme.spacing.sm }}>{hospital.name}</h3>
                <p style={{ color: theme.colors.text.secondary, marginBottom: theme.spacing.sm }}>
                  <strong>Location:</strong> {hospital.location}
                </p>
                <p style={{ color: theme.colors.text.secondary, marginBottom: theme.spacing.sm }}>
                  <strong>Specialties:</strong> {hospital.specialties}
                </p>
                <p>{hospital.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Repeat similar sections for diagnostics, hotels, and travel */}
      <Section padding="xl">
        <Container>
          <h2 style={{ textAlign: 'center', marginBottom: theme.spacing.xl }}>Diagnostic Partners</h2>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: theme.spacing.lg
          }}>
            {partners.diagnostics.map(diagnostic => (
              <div key={diagnostic.id} style={{
                backgroundColor: theme.colors.background.light,
                borderRadius: theme.radii.md,
                padding: theme.spacing.lg,
                boxShadow: theme.shadows.sm
              }}>
                <img 
                  src={diagnostic.image} 
                  alt={diagnostic.name}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: theme.radii.sm,
                    marginBottom: theme.spacing.md
                  }}
                />
                <h3 style={{ marginBottom: theme.spacing.sm }}>{diagnostic.name}</h3>
                <p style={{ color: theme.colors.text.secondary, marginBottom: theme.spacing.sm }}>
                  <strong>Location:</strong> {diagnostic.location}
                </p>
                <p style={{ color: theme.colors.text.secondary, marginBottom: theme.spacing.sm }}>
                  <strong>Services:</strong> {diagnostic.specialties}
                </p>
                <p>{diagnostic.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Add similar sections for hotels and travel partners */}
    </>
  );
};

export default PartnersPage;