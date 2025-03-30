import React from 'react';
import theme from '../../theme';

/**
 * Card component for displaying content in a contained box
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.hoverable - Whether card should have hover effect
 * @param {boolean} props.bordered - Whether card should have border
 * @param {string} props.elevation - Card elevation (none, low, medium, high)
 */
const Card = ({
  children,
  className = '',
  hoverable = false,
  bordered = true,
  elevation = 'low',
  ...rest
}) => {
  // Get shadow based on elevation
  const getShadow = () => {
    switch (elevation) {
      case 'none':
        return 'none';
      case 'low':
        return theme.shadows.sm;
      case 'medium':
        return theme.shadows.md;
      case 'high':
        return theme.shadows.lg;
      default:
        return theme.shadows.sm;
    }
  };

  const cardStyles = {
    backgroundColor: theme.colors.background.light,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    border: bordered ? `1px solid ${theme.colors.border}` : 'none',
    boxShadow: getShadow(),
    transition: theme.transitions.medium,
    overflow: 'hidden',
    ...(hoverable && {
      '&:hover': {
        boxShadow: theme.shadows.md,
        transform: 'translateY(-4px)',
      },
    }),
  };

  return (
    <div
      className={`card ${className}`}
      style={cardStyles}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;