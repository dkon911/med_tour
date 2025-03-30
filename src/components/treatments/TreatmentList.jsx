import React from 'react';
import theme from '../../theme';
import { Section, TreatmentCard } from '../index';

/**
 * TreatmentList component to display a grid of treatment cards
 */
const TreatmentList = ({ treatments }) => {
  // Sample treatment data - in a real app, this would come from props or API
  const sampleTreatments = [
    {
      id: 1,
      title: 'Cardiology',
      description: 'World-class cardiac care including heart surgery, angioplasty, and other advanced treatments.',
      icon: 'fa-heartbeat',
      image: '/images/treatments/cardiology.jpg',
    },
    {
      id: 2,
      title: 'Orthopedics',
      description: 'Joint replacements, spine surgery, sports medicine, and other orthopedic procedures.',
      icon: 'fa-stethoscope',
      image: '/images/treatments/orthopedics.jpg',
    },
    {
      id: 3,
      title: 'Oncology',
      description: 'Comprehensive cancer treatments including chemotherapy, radiation therapy, and surgical options.',
      icon: 'fa-plus-square',
      image: '/images/treatments/oncology.jpg',
    },
    {
      id: 4,
      title: 'Neurology',
      description: 'Advanced neurological treatments for brain and spine conditions with cutting-edge technology.',
      icon: 'fa-brain',
      image: '/images/treatments/neurology.jpg',
    },
    {
      id: 5,
      title: 'Cosmetic Surgery',
      description: 'Wide range of cosmetic procedures performed by experienced plastic surgeons.',
      icon: 'fa-user-md',
      image: '/images/treatments/cosmetic.jpg',
    },
    {
      id: 6,
      title: 'Dental Treatments',
      description: 'Comprehensive dental care including implants, cosmetic dentistry, and complex procedures.',
      icon: 'fa-tooth',
      image: '/images/treatments/dental.jpg',
    },
  ];

  // Use provided treatments or fall back to sample data
  const treatmentData = treatments || sampleTreatments;

  const sectionTitleStyles = {
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
  };

  const titleStyles = {
    fontSize: theme.fonts.sizes.xxl,
    fontWeight: theme.fonts.weights.bold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.sm,
  };

  const subtitleStyles = {
    fontSize: theme.fonts.sizes.lg,
    color: theme.colors.text.secondary,
    maxWidth: '700px',
    margin: '0 auto',
  };

  const treatmentsGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: theme.spacing.lg,
  };

  return (
    <Section background="light" padding="large">
      <div style={sectionTitleStyles}>
        <h2 style={titleStyles}>Our Medical Treatments</h2>
        <p style={subtitleStyles}>
          We offer a wide range of high-quality medical treatments at affordable prices
        </p>
      </div>

      <div style={treatmentsGridStyles}>
        {treatmentData.map((treatment) => (
          <TreatmentCard key={treatment.id} treatment={treatment} />
        ))}
      </div>
    </Section>
  );
};

export default TreatmentList;