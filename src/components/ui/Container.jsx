import React from 'react';
import theme from '../../theme';

/**
 * Container component for consistent layout and spacing
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Container content
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.fluid - Whether container should be fluid width
 * @param {string} props.maxWidth - Maximum width of container
 */
const Container = ({
  children,
  className = '',
  fluid = false,
  maxWidth = 'lg',
  ...rest
}) => {
  // Get max width based on size
  const getMaxWidth = () => {
    if (fluid) return '100%';
    
    switch (maxWidth) {
      case 'sm':
        return theme.breakpoints.sm;
      case 'md':
        return theme.breakpoints.md;
      case 'lg':
        return theme.breakpoints.lg;
      case 'xl':
        return theme.breakpoints.xl;
      default:
        return theme.breakpoints.lg;
    }
  };

  const containerStyles = {
    width: '100%',
    maxWidth: getMaxWidth(),
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    boxSizing: 'border-box',
  };

  return (
    <div
      className={`container ${className}`}
      style={containerStyles}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;