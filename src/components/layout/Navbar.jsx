import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import theme from '../../theme';
import Button from '../ui/Button';

/**
 * Navbar component for website navigation
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navStyles = {
    display: 'flex',
    alignItems: 'center',
  };

  const navListStyles = {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: theme.spacing.lg,
    '@media (max-width: 768px)': {
      display: isMenuOpen ? 'flex' : 'none',
      flexDirection: 'column',
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      backgroundColor: theme.colors.background.light,
      padding: theme.spacing.md,
      boxShadow: theme.shadows.md,
    },
  };

  const navLinkStyles = {
    color: theme.colors.text.primary,
    textDecoration: 'none',
    fontWeight: theme.fonts.weights.medium,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.borderRadius.sm,
    transition: theme.transitions.short,
    '&:hover': {
      color: theme.colors.primary,
      backgroundColor: 'rgba(20, 160, 157, 0.1)',
    },
  };

  const dropdownStyles = {
    position: 'relative',
    '&:hover .dropdown-menu': {
      display: 'block',
    },
  };

  const dropdownMenuStyles = {
    display: 'none',
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: theme.colors.background.light,
    minWidth: '200px',
    boxShadow: theme.shadows.md,
    borderRadius: theme.borderRadius.sm,
    padding: `${theme.spacing.xs} 0`,
    zIndex: 10,
  };

  const dropdownItemStyles = {
    display: 'block',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    color: theme.colors.text.primary,
    textDecoration: 'none',
    transition: theme.transitions.short,
    '&:hover': {
      backgroundColor: theme.colors.background.offWhite,
      color: theme.colors.primary,
    },
  };

  const mobileMenuButtonStyles = {
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'block',
      background: 'none',
      border: 'none',
      fontSize: theme.fonts.sizes.xl,
      color: theme.colors.text.primary,
      cursor: 'pointer',
    },
  };

  const ctaButtonStyles = {
    marginLeft: theme.spacing.md,
    '@media (max-width: 768px)': {
      display: isMenuOpen ? 'block' : 'none',
      margin: `${theme.spacing.md} 0 0 0`,
    },
  };

  return (
    <nav style={navStyles}>
      <button style={mobileMenuButtonStyles} onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </button>
      <ul style={navListStyles}>
        <li>
          <Link to="/" style={navLinkStyles}>Home</Link>
        </li>
        <li style={dropdownStyles}>
          <Link to="/about" style={navLinkStyles}>About Us</Link>
          <div className="dropdown-menu" style={dropdownMenuStyles}>
            <Link to="/about/company-profile" style={dropdownItemStyles}>Company Profile</Link>
            <Link to="/about/disclaimer" style={dropdownItemStyles}>Disclaimer</Link>
          </div>
        </li>
        <li>
          <Link to="/services" style={navLinkStyles}>Services</Link>
        </li>
        <li style={dropdownStyles}>
          <Link to="/treatments" style={navLinkStyles}>Treatments</Link>
          <div className="dropdown-menu" style={dropdownMenuStyles}>
            <Link to="/treatments/offered" style={dropdownItemStyles}>Treatments Offered</Link>
            <Link to="/treatments/cost" style={dropdownItemStyles}>Cost of Treatments</Link>
          </div>
        </li>
        <li>
          <Link to="/doctors" style={navLinkStyles}>Our Doctors</Link>
        </li>
        <li style={dropdownStyles}>
          <Link to="/partners" style={navLinkStyles}>Our Partners</Link>
          <div className="dropdown-menu" style={dropdownMenuStyles}>
            <Link to="/partners/hospitals" style={dropdownItemStyles}>Hospitals</Link>
            <Link to="/partners/diagnostics" style={dropdownItemStyles}>Diagnostics</Link>
            <Link to="/partners/hotels" style={dropdownItemStyles}>Hotels & Guesthouse</Link>
            <Link to="/partners/travel" style={dropdownItemStyles}>Travel Partner</Link>
            <Link to="/partners/join" style={dropdownItemStyles}>Partner with us</Link>
            <Link to="/partners/global" style={dropdownItemStyles}>Global Partner</Link>
          </div>
        </li>
        <li>
          <Link to="/testimonials" style={navLinkStyles}>Testimonials</Link>
        </li>
        <li>
          <Link to="/blog" style={navLinkStyles}>Blog</Link>
        </li>
        <li>
          <a href="/contact" style={navLinkStyles}>Contact Us</a>
        </li>
      </ul>
      <div style={ctaButtonStyles}>
        <Button variant="primary" size="small">Treatment Request</Button>
      </div>
    </nav>
  );
};

export default Navbar;