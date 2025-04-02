import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import theme from '../../theme';
import Button from '../ui/Button';

/**
 * Navbar component for website navigation
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  // Add this inside the component function, not outside
  const [openDropdowns, setOpenDropdowns] = useState({});

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Add this function inside the component
  const toggleDropdown = (key, event) => {
    if (isMobile) {
      event.preventDefault();
      setOpenDropdowns(prev => ({
        ...prev,
        [key]: !prev[key]
      }));
    }
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    position: 'relative',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
  };

  const logoContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  };

  const navListStyles = {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: theme.spacing.lg,
    ...(isMobile && {
      display: isMenuOpen ? 'flex' : 'none',
      flexDirection: 'column',
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      backgroundColor: theme.colors.background.light,
      padding: theme.spacing.md,
      boxShadow: theme.shadows.md,
      zIndex: 100,
      alignItems: 'center',
    }),
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

  // Replace the dropdownStyles object with this:
  const dropdownStyles = {
    position: 'relative',
    ...(isMobile && {
      width: '100%',
      textAlign: 'center',
    }),
    // Remove the &:hover selector as it's not supported in inline styles
  };
  
  // Add this CSS class to your mobile-components.css file

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
    ...(isMobile && {
      position: 'static',
      display: isMenuOpen ? 'block' : 'none',
      width: '100%',
      boxShadow: 'none',
      padding: 0,
      marginTop: theme.spacing.xs,
      marginBottom: theme.spacing.xs,
    }),
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
    display: isMobile ? 'block' : 'none',
    background: 'none',
    border: 'none',
    fontSize: theme.fonts.sizes.xl,
    color: theme.colors.text.primary,
    cursor: 'pointer',
    padding: theme.spacing.xs,
    marginLeft: 'auto',
  };

  const ctaButtonStyles = {
    marginLeft: isMobile ? 0 : theme.spacing.md,
    ...(isMobile && {
      display: isMenuOpen ? 'block' : 'none',
      margin: `${theme.spacing.md} 0 0 0`,
      width: '100%',
    }),
  };

  return (
    <nav style={navStyles} className="main-nav">
      <div style={logoContainerStyles}>
        <Link to="/" className="logo" onClick={closeMenu}>
          {/* <img src="/images/logo.png" alt="Medical Tourism" height="40" /> */}
        </Link>
        <button 
          style={mobileMenuButtonStyles} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          className="mobile-menu-button"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>
      
      <ul style={navListStyles} className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" style={navLinkStyles} onClick={closeMenu}>Home</Link>
        </li>
        {/* // In your render method, update the dropdown li elements: */}
        <li style={dropdownStyles} className="dropdown-parent">
          <Link 
            to="/about" 
            style={navLinkStyles} 
            className="dropdown-toggle"
            onClick={isMobile ? (e) => toggleDropdown('about', e) : closeMenu}
          >
            About Us 
            <span className="dropdown-indicator">
              {isMobile && (openDropdowns.about ? '▲' : '▼')}
            </span>
          </Link>
          <div className="dropdown-menu" style={{
            ...dropdownMenuStyles,
            display: isMobile && openDropdowns.about ? 'block' : 'none'
          }}>
            <Link to="/about/company-profile" style={dropdownItemStyles} onClick={closeMenu}>Company Profile</Link>
            <Link to="/about/disclaimer" style={dropdownItemStyles} onClick={closeMenu}>Disclaimer</Link>
          </div>
        </li>
        
        {/* Apply the same pattern to other dropdown menus */}
        
        <li>
          <Link to="/services" style={navLinkStyles} onClick={closeMenu}>Services</Link>
        </li>
        <li style={dropdownStyles}>
          <Link to="/treatments" style={navLinkStyles} onClick={closeMenu}>Treatments</Link>
          <div className="dropdown-menu" style={dropdownMenuStyles}>
            <Link to="/treatments/offered" style={dropdownItemStyles} onClick={closeMenu}>Treatments Offered</Link>
            <Link to="/treatments/cost" style={dropdownItemStyles} onClick={closeMenu}>Cost of Treatments</Link>
          </div>
        </li>
        <li>
          <Link to="/doctors" style={navLinkStyles} onClick={closeMenu}>Our Doctors</Link>
        </li>
        <li style={dropdownStyles}>
          <Link to="/partners" style={navLinkStyles} onClick={closeMenu}>Our Partners</Link>
          <div className="dropdown-menu" style={dropdownMenuStyles}>
            <Link to="/partners/hospitals" style={dropdownItemStyles} onClick={closeMenu}>Hospitals</Link>
            <Link to="/partners/diagnostics" style={dropdownItemStyles} onClick={closeMenu}>Diagnostics</Link>
            <Link to="/partners/hotels" style={dropdownItemStyles} onClick={closeMenu}>Hotels & Guesthouse</Link>
            <Link to="/partners/travel" style={dropdownItemStyles} onClick={closeMenu}>Travel Partner</Link>
            <Link to="/partners/join" style={dropdownItemStyles} onClick={closeMenu}>Partner with us</Link>
            <Link to="/partners/global" style={dropdownItemStyles} onClick={closeMenu}>Global Partner</Link>
          </div>
        </li>
        <li>
          <Link to="/testimonials" style={navLinkStyles} onClick={closeMenu}>Testimonials</Link>
        </li>
        <li>
          <Link to="/blog" style={navLinkStyles} onClick={closeMenu}>Blog</Link>
        </li>
        <li>
          <Link to="/contact" style={navLinkStyles} onClick={closeMenu}>Contact Us</Link>
        </li>
        
        <div style={ctaButtonStyles}>
          <Button variant="primary" size="small">Treatment Request</Button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;