import React, { useEffect } from 'react';
import theme from '../../theme';
import Button from './Button';

/**
 * Modal component for displaying pop-up content
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Whether modal is open
 * @param {Function} props.onClose - Function to close modal
 * @param {React.ReactNode} props.children - Modal content
 * @param {string} props.title - Modal title
 * @param {string} props.size - Modal size (small, medium, large)
 * @param {boolean} props.closeOnOverlayClick - Whether to close modal when overlay is clicked
 */
const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  size = 'medium',
  closeOnOverlayClick = true,
}) => {
  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      // Prevent scrolling on body when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Get width based on size
  const getWidth = () => {
    switch (size) {
      case 'small':
        return '400px';
      case 'medium':
        return '600px';
      case 'large':
        return '800px';
      default:
        return '600px';
    }
  };

  // Handle overlay click
  const handleOverlayClick = (e) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: theme.spacing.md,
  };

  const modalStyles = {
    backgroundColor: theme.colors.background.light,
    borderRadius: theme.borderRadius.md,
    boxShadow: theme.shadows.lg,
    width: '100%',
    maxWidth: getWidth(),
    maxHeight: '90vh',
    overflow: 'auto',
    position: 'relative',
  };

  const headerStyles = {
    padding: `${theme.spacing.md} ${theme.spacing.lg}`,
    borderBottom: `1px solid ${theme.colors.border}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const titleStyles = {
    margin: 0,
    fontSize: theme.fonts.sizes.xl,
    fontWeight: theme.fonts.weights.semiBold,
    color: theme.colors.text.primary,
  };

  const closeButtonStyles = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: theme.fonts.sizes.xl,
    color: theme.colors.text.secondary,
    padding: theme.spacing.xs,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: theme.transitions.short,
    borderRadius: '50%',
    width: '32px',
    height: '32px',
    '&:hover': {
      backgroundColor: theme.colors.background.offWhite,
      color: theme.colors.text.primary,
    },
  };

  const bodyStyles = {
    padding: theme.spacing.lg,
  };

  return (
    <div style={overlayStyles} onClick={handleOverlayClick}>
      <div style={modalStyles}>
        {title && (
          <div style={headerStyles}>
            <h2 style={titleStyles}>{title}</h2>
            <button style={closeButtonStyles} onClick={onClose}>
              ×
            </button>
          </div>
        )}
        <div style={bodyStyles}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;