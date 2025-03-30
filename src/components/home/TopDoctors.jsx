import React from 'react';
import theme from '../../theme';
import { Section, Card, Button } from '../index';

/**
 * TopDoctors component to showcase featured doctors
 */
const TopDoctors = () => {
  // Sample doctor data - in a real app, this would come from an API or CMS
  const doctors = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      specialty: 'Cardiologist',
      hospital: 'Heart Care Hospital',
      experience: '15+ years',
      image: '/images/doctors/doctor1.jpg',
    },
    {
      id: 2,
      name: 'Dr. Priya Sharma',
      specialty: 'Orthopedic Surgeon',
      hospital: 'Joint & Spine Center',
      experience: '12+ years',
      image: '/images/doctors/doctor2.jpg',
    },
    {
      id: 3,
      name: 'Dr. Amit Patel',
      specialty: 'Oncologist',
      hospital: 'Cancer Care Institute',
      experience: '18+ years',
      image: '/images/doctors/doctor3.jpg',
    },
    {
      id: 4,
      name: 'Dr. Sunita Reddy',
      specialty: 'Neurologist',
      hospital: 'Brain & Spine Hospital',
      experience: '14+ years',
      image: '/images/doctors/doctor4.jpg',
    },
  ];

  const sectionTitleStyles = {
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
  };

  const titleStyles = {
    fontSize: theme.fonts.sizes.xxl,
    fontWeight: theme.fonts.weights.bold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.sm,
  };

  const subtitleStyles = {
    fontSize: theme.fonts.sizes.lg,
    color: theme.colors.text.secondary,
    maxWidth: '700px',
    margin: '0 auto',
  };

  const doctorsGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: theme.spacing.lg,
  };

  const doctorCardStyles = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    textAlign: 'center',
    transition: theme.transitions.medium,
    overflow: 'hidden',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  };

  const doctorImageContainerStyles = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: `${theme.borderRadius.md} ${theme.borderRadius.md} 0 0`,
    height: '280px',
  };

  const doctorImageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: theme.transitions.medium,
    '&:hover': {
      transform: 'scale(1.05)',
    },
  };

  const doctorContentStyles = {
    padding: theme.spacing.lg,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  };

  const doctorNameStyles = {
    fontSize: theme.fonts.sizes.xl,
    fontWeight: theme.fonts.weights.semiBold,
    marginBottom: theme.spacing.xs,
    color: theme.colors.text.primary,
  };

  const doctorSpecialtyStyles = {
    color: theme.colors.primary,
    fontWeight: theme.fonts.weights.medium,
    marginBottom: theme.spacing.sm,
  };

  const doctorInfoStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.xs,
    marginBottom: theme.spacing.md,
    color: theme.colors.text.secondary,
  };

  const infoItemStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.xs,
  };

  const iconStyles = {
    color: theme.colors.primary,
    fontSize: theme.fonts.sizes.sm,
  };

  const viewAllButtonStyles = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing.xl,
  };

  return (
    <Section background="light" padding="large">
      <div style={sectionTitleStyles}>
        <h2 style={titleStyles}>Our Top Doctors</h2>
        <p style={subtitleStyles}>
          Meet our team of experienced and highly qualified doctors who provide exceptional medical care
        </p>
      </div>

      <div style={doctorsGridStyles}>
        {doctors.map((doctor) => (
          <Card key={doctor.id} hoverable elevation="low" style={doctorCardStyles}>
            <div style={doctorImageContainerStyles}>
              <img src={doctor.image} alt={doctor.name} style={doctorImageStyles} />
            </div>
            <div style={doctorContentStyles}>
              <h3 style={doctorNameStyles}>{doctor.name}</h3>
              <p style={doctorSpecialtyStyles}>{doctor.specialty}</p>
              <div style={doctorInfoStyles}>
                <div style={infoItemStyles}>
                  <i className="fa fa-hospital-o" style={iconStyles}></i>
                  <span>{doctor.hospital}</span>
                </div>
                <div style={infoItemStyles}>
                  <i className="fa fa-clock-o" style={iconStyles}></i>
                  <span>{doctor.experience} Experience</span>
                </div>
              </div>
              <Button variant="outline" size="small">View Profile</Button>
            </div>
          </Card>
        ))}
      </div>

      <div style={viewAllButtonStyles}>
        <Button variant="primary" size="medium">View All Doctors</Button>
      </div>
    </Section>
  );
};

export default TopDoctors;