import React from 'react';
import theme from '../../theme';
import { Card, Button } from '../index';

/**
 * TreatmentCard component for displaying treatment information in a card format
 * @param {Object} props - Component props
 * @param {Object} props.treatment - Treatment data
 */
const TreatmentCard = ({ treatment }) => {
  const cardStyles = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: 'hidden',
  };

  const imageContainerStyles = {
    height: '200px',
    overflow: 'hidden',
    borderRadius: `${theme.borderRadius.md} ${theme.borderRadius.md} 0 0`,
  };

  const imageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: theme.transitions.medium,
  };

  const contentStyles = {
    padding: theme.spacing.lg,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  };

  const titleStyles = {
    fontSize: theme.fonts.sizes.lg,
    fontWeight: theme.fonts.weights.semiBold,
    marginBottom: theme.spacing.sm,
    color: theme.colors.text.primary,
  };

  const descriptionStyles = {
    fontSize: theme.fonts.sizes.md,
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.md,
    flex: 1,
  };

  const iconStyles = {
    fontSize: '24px',
    color: theme.colors.primary,
    marginBottom: theme.spacing.sm,
  };

  return (
    <Card hoverable style={cardStyles}>
      <div style={imageContainerStyles}>
        <img 
          src={treatment.image} 
          alt={treatment.title} 
          style={imageStyles} 
        />
      </div>
      <div style={contentStyles}>
        <i className={`fa ${treatment.icon}`} style={iconStyles}></i>
        <h3 style={titleStyles}>{treatment.title}</h3>
        <p style={descriptionStyles}>{treatment.description}</p>
        <Button variant="primary" size="medium">
          Learn More
        </Button>
      </div>
    </Card>
  );
};

export default TreatmentCard;