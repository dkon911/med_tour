import React from 'react';
import theme from '../../theme';

/**
 * Spinner component for loading states
 * @param {Object} props - Component props
 * @param {string} props.size - Spinner size (small, medium, large)
 * @param {string} props.color - Spinner color (primary, secondary, accent, light, dark)
 * @param {string} props.className - Additional CSS classes
 */
const Spinner = ({
  size = 'medium',
  color = 'primary',
  className = '',
  ...rest
}) => {
  // Get size in pixels
  const getSize = () => {
    switch (size) {
      case 'small':
        return '20px';
      case 'medium':
        return '30px';
      case 'large':
        return '40px';
      default:
        return '30px';
    }
  };

  // Get color
  const getColor = () => {
    switch (color) {
      case 'primary':
        return theme.colors.primary;
      case 'secondary':
        return theme.colors.secondary;
      case 'accent':
        return theme.colors.accent;
      case 'light':
        return theme.colors.text.light;
      case 'dark':
        return theme.colors.text.primary;
      default:
        return theme.colors.primary;
    }
  };

  const spinnerSize = getSize();
  const spinnerColor = getColor();

  const spinnerStyles = {
    display: 'inline-block',
    width: spinnerSize,
    height: spinnerSize,
    border: `3px solid rgba(${spinnerColor.replace('#', '').match(/.{2}/g).map(hex => parseInt(hex, 16)).join(', ')}, 0.2)`,
    borderRadius: '50%',
    borderTop: `3px solid ${spinnerColor}`,
    animation: 'spin 1s linear infinite',
  };

  // Add keyframes for spin animation
  const keyframes = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div
        className={`spinner ${className}`}
        style={spinnerStyles}
        {...rest}
      />
    </>
  );
};

export default Spinner;