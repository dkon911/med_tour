import React from 'react';
import theme from '../../theme';
import Container from './Container';

/**
 * Section component for consistent section styling throughout the website
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Section content
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.background - Background color (light, offWhite, dark, primary, etc.)
 * @param {string} props.padding - Padding size (none, small, medium, large)
 * @param {boolean} props.fluid - Whether section container should be fluid width
 * @param {string} props.id - Section ID for navigation
 */
const Section = ({
  children,
  className = '',
  background = 'light',
  padding = 'medium',
  fluid = false,
  id,
  ...rest
}) => {
  // Get background color
  const getBackgroundColor = () => {
    switch (background) {
      case 'light':
        return theme.colors.background.light;
      case 'offWhite':
        return theme.colors.background.offWhite;
      case 'dark':
        return theme.colors.background.dark;
      case 'primary':
        return theme.colors.primary;
      case 'secondary':
        return theme.colors.secondary;
      case 'accent':
        return theme.colors.accent;
      default:
        return background; // Allow custom color
    }
  };

  // Get padding based on size
  const getPadding = () => {
    switch (padding) {
      case 'none':
        return '0';
      case 'small':
        return `${theme.spacing.md} 0`;
      case 'medium':
        return `${theme.spacing.xl} 0`;
      case 'large':
        return `${theme.spacing.xxl} 0`;
      default:
        return `${theme.spacing.xl} 0`;
    }
  };

  const sectionStyles = {
    backgroundColor: getBackgroundColor(),
    padding: getPadding(),
    color: background === 'dark' || background === 'primary' || background === 'secondary' 
      ? theme.colors.text.light 
      : theme.colors.text.primary,
  };

  return (
    <section
      id={id}
      className={`section ${className}`}
      style={sectionStyles}
      {...rest}
    >
      <Container fluid={fluid}>
        {children}
      </Container>
    </section>
  );
};

export default Section;