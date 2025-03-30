import React from 'react';
import theme from '../../theme';
import { Card, Button } from '../index';

/**
 * DoctorCard component for displaying doctor information in a card format
 * @param {Object} props - Component props
 * @param {Object} props.doctor - Doctor data
 */
const DoctorCard = ({ doctor }) => {
  const cardStyles = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: 'hidden',
  };

  const imageContainerStyles = {
    height: '280px',
    overflow: 'hidden',
    borderRadius: `${theme.borderRadius.md} ${theme.borderRadius.md} 0 0`,
    position: 'relative',
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
    alignItems: 'center',
    textAlign: 'center',
  };

  const nameStyles = {
    fontSize: theme.fonts.sizes.lg,
    fontWeight: theme.fonts.weights.semiBold,
    marginBottom: theme.spacing.xs,
    color: theme.colors.text.primary,
  };

  const specialtyStyles = {
    fontSize: theme.fonts.sizes.md,
    color: theme.colors.primary,
    marginBottom: theme.spacing.sm,
  };

  const metaStyles = {
    fontSize: theme.fonts.sizes.sm,
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.md,
  };

  const buttonContainerStyles = {
    marginTop: 'auto',
  };

  return (
    <Card hoverable style={cardStyles}>
      <div style={imageContainerStyles}>
        <img 
          src={doctor.image} 
          alt={doctor.name} 
          style={imageStyles} 
        />
      </div>
      <div style={contentStyles}>
        <h3 style={nameStyles}>{doctor.name}</h3>
        <p style={specialtyStyles}>{doctor.specialty}</p>
        <p style={metaStyles}>
          {doctor.hospital}<br />
          Experience: {doctor.experience}
        </p>
        <div style={buttonContainerStyles}>
          <Button variant="primary" size="medium">
            View Profile
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default DoctorCard;