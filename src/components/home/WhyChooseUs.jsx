import React from 'react';
import theme from '../../theme';
import { Section } from '../index';

/**
 * WhyChooseUs component to highlight benefits of the service
 */
const WhyChooseUs = () => {
  // Features data
  const features = [
    {
      id: 1,
      title: 'Quality Healthcare',
      description: 'Access to world-class hospitals and internationally trained doctors.',
      icon: 'fa-hospital-o',
    },
    {
      id: 2,
      title: 'Affordable Prices',
      description: 'Save up to 70% on medical treatments compared to Western countries.',
      icon: 'fa-money',
    },
    {
      id: 3,
      title: 'Personalized Care',
      description: 'Customized treatment plans and dedicated patient coordinators.',
      icon: 'fa-user-md',
    },
    {
      id: 4,
      title: 'No Waiting Time',
      description: 'Immediate access to medical treatments without long waiting lists.',
      icon: 'fa-clock-o',
    },
    {
      id: 5,
      title: 'Complete Assistance',
      description: 'Support with visa, accommodation, transportation, and interpretation.',
      icon: 'fa-handshake-o',
    },
    {
      id: 6,
      title: 'Tourism Opportunities',
      description: 'Combine your medical treatment with exploring tourist attractions.',
      icon: 'fa-plane',
    },
  ];

  const sectionTitleStyles = {
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
  };

  const titleStyles = {
    fontSize: theme.fonts.sizes.xxl,
    fontWeight: theme.fonts.weights.bold,
    color: theme.colors.text.light,
    marginBottom: theme.spacing.sm,
  };

  const subtitleStyles = {
    fontSize: theme.fonts.sizes.lg,
    color: theme.colors.text.light,
    opacity: 0.9,
    maxWidth: '700px',
    margin: '0 auto',
  };

  const featuresGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: theme.spacing.xl,
  };

  const featureItemStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    transition: theme.transitions.medium,
    '&:hover': {
      transform: 'translateY(-5px)',
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
    },
  };

  const featureIconStyles = {
    fontSize: '48px',
    color: theme.colors.accent,
    marginBottom: theme.spacing.md,
  };

  const featureTitleStyles = {
    fontSize: theme.fonts.sizes.xl,
    fontWeight: theme.fonts.weights.semiBold,
    color: theme.colors.text.light,
    marginBottom: theme.spacing.sm,
  };

  const featureDescriptionStyles = {
    color: theme.colors.text.light,
    opacity: 0.9,
    lineHeight: 1.6,
  };

  return (
    <Section background="primary" padding="large">
      <div style={sectionTitleStyles}>
        <h2 style={titleStyles}>Why Choose Us</h2>
        <p style={subtitleStyles}>
          We provide comprehensive medical tourism services to ensure you receive the best care possible
        </p>
      </div>

      <div style={featuresGridStyles}>
        {features.map((feature) => (
          <div key={feature.id} style={featureItemStyles}>
            <i className={`fa ${feature.icon}`} style={featureIconStyles}></i>
            <h3 style={featureTitleStyles}>{feature.title}</h3>
            <p style={featureDescriptionStyles}>{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default WhyChooseUs;