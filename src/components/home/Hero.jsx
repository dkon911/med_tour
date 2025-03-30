import React from 'react';
import theme from '../../theme';
import { Button, Container } from '../index';

/**
 * Hero component for the homepage banner
 */
const Hero = () => {
  const heroStyles = {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/hero-bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: theme.colors.text.light,
    padding: `${theme.spacing.xxl} 0`,
    position: 'relative',
  };

  const contentStyles = {
    maxWidth: '600px',
    position: 'relative',
    zIndex: 1,
  };

  const titleStyles = {
    fontSize: theme.fonts.sizes.xxxl,
    fontWeight: theme.fonts.weights.bold,
    marginBottom: theme.spacing.md,
    lineHeight: 1.2,
  };

  const subtitleStyles = {
    fontSize: theme.fonts.sizes.lg,
    marginBottom: theme.spacing.lg,
    lineHeight: 1.5,
  };

  const buttonGroupStyles = {
    display: 'flex',
    gap: theme.spacing.md,
    flexWrap: 'wrap',
  };

  return (
    <div style={heroStyles}>
      <Container>
        <div style={contentStyles}>
          <h1 style={titleStyles}>Quality Healthcare at Affordable Prices</h1>
          <p style={subtitleStyles}>
            Leading medical tourism company offering top-quality healthcare services.
            Connect with the best hospitals and doctors for your treatment needs.
          </p>
          <div style={buttonGroupStyles}>
            <Button variant="primary" size="large">Get Treatment</Button>
            <Button variant="outline" size="large">Learn More</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;