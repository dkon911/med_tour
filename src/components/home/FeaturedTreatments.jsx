import React from 'react';
import theme from '../../theme';
import { Section, Card, Button } from '../index';

/**
 * FeaturedTreatments component to showcase main medical treatments
 */
const FeaturedTreatments = () => {
  // Sample treatment data - in a real app, this would come from an API or CMS
  const treatments = [
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

  const treatmentCardStyles = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    transition: theme.transitions.medium,
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  };

  const cardImageStyles = {
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: `${theme.borderRadius.md} ${theme.borderRadius.md} 0 0`,
  };

  const cardContentStyles = {
    padding: theme.spacing.lg,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  };

  const cardTitleStyles = {
    fontSize: theme.fonts.sizes.xl,
    fontWeight: theme.fonts.weights.semiBold,
    marginBottom: theme.spacing.sm,
    color: theme.colors.text.primary,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
  };

  const iconStyles = {
    color: theme.colors.primary,
    fontSize: theme.fonts.sizes.xl,
  };

  const cardDescriptionStyles = {
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.md,
    flex: 1,
  };

  const viewAllButtonStyles = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing.xl,
  };

  return (
    <Section background="offWhite" padding="large">
      <div style={sectionTitleStyles}>
        <h2 style={titleStyles}>Our Medical Treatments</h2>
        <p style={subtitleStyles}>
          We offer a wide range of medical treatments with world-class facilities and experienced doctors
        </p>
      </div>

      <div style={treatmentsGridStyles}>
        {treatments.map((treatment) => (
          <Card key={treatment.id} hoverable elevation="low" style={treatmentCardStyles}>
            <div 
              style={{
                ...cardImageStyles,
                backgroundImage: `url(${treatment.image})`,
              }}
            />
            <div style={cardContentStyles}>
              <h3 style={cardTitleStyles}>
                <i className={`fa ${treatment.icon}`} style={iconStyles}></i>
                {treatment.title}
              </h3>
              <p style={cardDescriptionStyles}>{treatment.description}</p>
              <Button variant="outline" size="small">Learn More</Button>
            </div>
          </Card>
        ))}
      </div>

      <div style={viewAllButtonStyles}>
        <Button variant="primary" size="medium">View All Treatments</Button>
      </div>
    </Section>
  );
};

export default FeaturedTreatments;