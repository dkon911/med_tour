import React from 'react';
import theme from '../../theme';

/**
 * Button component with customizable styles
 * @param {Object} props - Component props
 * @param {string} props.variant - Button variant (primary, secondary, outline, text)
 * @param {string} props.size - Button size (small, medium, large)
 * @param {boolean} props.fullWidth - Whether button should take full width
 * @param {React.ReactNode} props.children - Button content
 * @param {Function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.rest - Additional props to pass to button element
 */
const Button = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  children,
  onClick,
  className = '',
  ...rest
}) => {
  // Define styles based on variant
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: theme.colors.primary,
          color: theme.colors.text.light,
          border: 'none',
          '&:hover': {
            backgroundColor: '#0e8683', // Darker shade of primary
          },
        };
      case 'secondary':
        return {
          backgroundColor: theme.colors.secondary,
          color: theme.colors.text.light,
          border: 'none',
          '&:hover': {
            backgroundColor: '#004494', // Darker shade of secondary
          },
        };
      case 'accent':
        return {
          backgroundColor: theme.colors.accent,
          color: theme.colors.text.light,
          border: 'none',
          '&:hover': {
            backgroundColor: '#e68a00', // Darker shade of accent
          },
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: theme.colors.primary,
          border: `1px solid ${theme.colors.primary}`,
          '&:hover': {
            backgroundColor: 'rgba(20, 160, 157, 0.1)', // Light primary with opacity
          },
        };
      case 'text':
        return {
          backgroundColor: 'transparent',
          color: theme.colors.primary,
          border: 'none',
          '&:hover': {
            backgroundColor: 'rgba(20, 160, 157, 0.1)', // Light primary with opacity
          },
        };
      default:
        return {
          backgroundColor: theme.colors.primary,
          color: theme.colors.text.light,
          border: 'none',
        };
    }
  };

  // Define styles based on size
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
          fontSize: theme.fonts.sizes.sm,
        };
      case 'medium':
        return {
          padding: `${theme.spacing.sm} ${theme.spacing.md}`,
          fontSize: theme.fonts.sizes.md,
        };
      case 'large':
        return {
          padding: `${theme.spacing.md} ${theme.spacing.lg}`,
          fontSize: theme.fonts.sizes.lg,
        };
      default:
        return {
          padding: `${theme.spacing.sm} ${theme.spacing.md}`,
          fontSize: theme.fonts.sizes.md,
        };
    }
  };

  const buttonStyles = {
    ...getVariantStyles(),
    ...getSizeStyles(),
    borderRadius: theme.borderRadius.md,
    fontWeight: theme.fonts.weights.medium,
    cursor: 'pointer',
    transition: theme.transitions.short,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: fullWidth ? '100%' : 'auto',
    textDecoration: 'none',
    boxSizing: 'border-box',
    fontFamily: theme.fonts.primary,
  };

  return (
    <button
      onClick={onClick}
      className={className}
      style={buttonStyles}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;