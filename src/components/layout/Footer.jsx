import React from 'react';
import theme from '../../theme';
import { Container, Button } from '../index';

/**
 * Footer component for the website
 */
const Footer = () => {
  const footerStyles = {
    backgroundColor: theme.colors.background.dark,
    color: theme.colors.text.light,
    padding: `${theme.spacing.xl} 0 ${theme.spacing.md}`,
  };

  const footerTopStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: theme.spacing.xl,
    marginBottom: theme.spacing.xl,
  };

  const footerBottomStyles = {
    borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
    paddingTop: theme.spacing.md,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: theme.spacing.md,
  };

  const footerTitleStyles = {
    fontSize: theme.fonts.sizes.lg,
    fontWeight: theme.fonts.weights.semiBold,
    marginBottom: theme.spacing.md,
    position: 'relative',
    paddingBottom: theme.spacing.sm,
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '50px',
      height: '2px',
      backgroundColor: theme.colors.primary,
    },
  };

  const footerLinkStyles = {
    color: theme.colors.text.light,
    textDecoration: 'none',
    display: 'block',
    marginBottom: theme.spacing.sm,
    transition: theme.transitions.short,
    '&:hover': {
      color: theme.colors.primary,
      paddingLeft: theme.spacing.xs,
    },
  };

  const contactItemStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  };

  const iconStyles = {
    color: theme.colors.primary,
    fontSize: theme.fonts.sizes.md,
    marginTop: '4px',
  };

  const socialLinksStyles = {
    display: 'flex',
    gap: theme.spacing.sm,
    marginTop: theme.spacing.md,
  };

  const socialIconStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: theme.colors.text.light,
    transition: theme.transitions.short,
    '&:hover': {
      backgroundColor: theme.colors.primary,
      transform: 'translateY(-3px)',
    },
  };

  const newsletterFormStyles = {
    display: 'flex',
    marginTop: theme.spacing.md,
  };

  const inputStyles = {
    flex: 1,
    padding: theme.spacing.sm,
    border: 'none',
    borderRadius: `${theme.borderRadius.md} 0 0 ${theme.borderRadius.md}`,
    fontSize: theme.fonts.sizes.sm,
  };

  const submitButtonStyles = {
    backgroundColor: theme.colors.primary,
    color: theme.colors.text.light,
    border: 'none',
    borderRadius: `0 ${theme.borderRadius.md} ${theme.borderRadius.md} 0`,
    padding: `0 ${theme.spacing.md}`,
    cursor: 'pointer',
    transition: theme.transitions.short,
    '&:hover': {
      backgroundColor: '#0e8683', // Darker shade of primary
    },
  };

  return (
    <footer style={footerStyles}>
      <Container>
        <div style={footerTopStyles}>
          {/* About Us */}
          <div>
            <h3 style={footerTitleStyles}>About Us</h3>
            <p>
              MedTourism is a leading medical tourism company offering top-quality healthcare services
              at affordable prices. We connect international patients with the best hospitals and doctors.
            </p>
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
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={footerTitleStyles}>Quick Links</h3>
            <a href="/" style={footerLinkStyles}>Home</a>
            <a href="/about" style={footerLinkStyles}>About Us</a>
            <a href="/services" style={footerLinkStyles}>Services</a>
            <a href="/treatments/offered" style={footerLinkStyles}>Treatments</a>
            <a href="/doctors" style={footerLinkStyles}>Our Doctors</a>
            <a href="/contact" style={footerLinkStyles}>Contact Us</a>
          </div>

          {/* Our Services */}
          <div>
            <h3 style={footerTitleStyles}>Our Services</h3>
            <a href="/services/medical-treatment" style={footerLinkStyles}>Medical Treatment</a>
            <a href="/services/visa-assistance" style={footerLinkStyles}>Visa Assistance</a>
            <a href="/services/accommodation" style={footerLinkStyles}>Accommodation</a>
            <a href="/services/transportation" style={footerLinkStyles}>Transportation</a>
            <a href="/services/interpreter" style={footerLinkStyles}>Interpreter Services</a>
            <a href="/services/tourism" style={footerLinkStyles}>Tourism Services</a>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={footerTitleStyles}>Contact Info</h3>
            <div style={contactItemStyles}>
              <i className="fa fa-map-marker" style={iconStyles}></i>
              <span>123 Medical Street, Healthcare City, Country</span>
            </div>
            <div style={contactItemStyles}>
              <i className="fa fa-phone" style={iconStyles}></i>
              <span>+91 7890263000</span>
            </div>
            <div style={contactItemStyles}>
              <i className="fa fa-envelope" style={iconStyles}></i>
              <span>info@medicaltourism.com</span>
            </div>
            <div style={contactItemStyles}>
              <i className="fa fa-clock-o" style={iconStyles}></i>
              <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 style={footerTitleStyles}>Newsletter</h3>
            <p>Subscribe to our newsletter to receive updates on our services and offers.</p>
            <form style={newsletterFormStyles}>
              <input type="email" placeholder="Your Email Address" style={inputStyles} />
              <button type="submit" style={submitButtonStyles}>
                <i className="fa fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        <div style={footerBottomStyles}>
          <p>&copy; {new Date().getFullYear()} MedTourism. All Rights Reserved.</p>
          <div>
            <a href="/privacy-policy" style={footerLinkStyles}>Privacy Policy</a>
            <a href="/terms-conditions" style={footerLinkStyles}>Terms & Conditions</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;