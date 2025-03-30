import React from 'react';
import theme from '../../theme';
import Navbar from './Navbar';
import { Container } from '../index';

/**
 * Header component for the website
 */
const Header = () => {
  const headerStyles = {
    backgroundColor: theme.colors.background.light,
    boxShadow: theme.shadows.sm,
    position: 'sticky',
    top: 0,
    zIndex: 100,
  };

  const topBarStyles = {
    backgroundColor: theme.colors.primary,
    padding: `${theme.spacing.xs} 0`,
    color: theme.colors.text.light,
  };

  const topBarContentStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const contactInfoStyles = {
    display: 'flex',
    gap: theme.spacing.md,
  };

  const contactItemStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.xs,
    fontSize: theme.fonts.sizes.sm,
  };

  const socialLinksStyles = {
    display: 'flex',
    gap: theme.spacing.sm,
  };

  const socialIconStyles = {
    color: theme.colors.text.light,
    fontSize: theme.fonts.sizes.md,
    transition: theme.transitions.short,
    '&:hover': {
      color: theme.colors.accent,
    },
  };

  const logoContainerStyles = {
    padding: `${theme.spacing.md} 0`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoStyles = {
    fontSize: theme.fonts.sizes.xl,
    fontWeight: theme.fonts.weights.bold,
    color: theme.colors.primary,
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
  };

  return (
    <header style={headerStyles}>
      {/* Top Bar */}
      <div style={topBarStyles}>
        <Container>
          <div style={topBarContentStyles}>
            <div style={socialLinksStyles}>
              <a href="#" style={socialIconStyles}>
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" style={socialIconStyles}>
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" style={socialIconStyles}>
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#" style={socialIconStyles}>
                <i className="fa fa-youtube"></i>
              </a>
            </div>
            <div style={contactInfoStyles}>
              <div style={contactItemStyles}>
                <i className="fa fa-phone"></i>
                <span>+91 7890263000</span>
              </div>
              <div style={contactItemStyles}>
                <i className="fa fa-envelope"></i>
                <span>info@medicaltourism.com</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Logo and Navigation */}
      <Container>
        <div style={logoContainerStyles}>
          <a href="/" style={logoStyles}>
            <span>MedTourism</span>
          </a>
          <Navbar />
        </div>
      </Container>
    </header>
  );
};

export default Header;