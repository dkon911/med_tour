import React from 'react';
import theme from '../../theme';
import { Section, DoctorCard } from '../index';

/**
 * DoctorList component to display a grid of doctor cards
 */
const DoctorList = ({ doctors }) => {
  // Sample doctor data - in a real app, this would come from props or API
  const sampleDoctors = [
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
    {
      id: 5,
      name: 'Dr. Vikram Singh',
      specialty: 'Plastic Surgeon',
      hospital: 'Cosmetic Surgery Center',
      experience: '16+ years',
      image: '/images/doctors/doctor5.jpg',
    },
    {
      id: 6,
      name: 'Dr. Ananya Gupta',
      specialty: 'Dentist',
      hospital: 'Dental Care Clinic',
      experience: '10+ years',
      image: '/images/doctors/doctor6.jpg',
    },
  ];

  // Use provided doctors or fall back to sample data
  const doctorData = doctors || sampleDoctors;

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

  return (
    <Section background="light" padding="large">
      <div style={sectionTitleStyles}>
        <h2 style={titleStyles}>Our Specialist Doctors</h2>
        <p style={subtitleStyles}>
          Meet our team of experienced doctors who provide world-class medical care
        </p>
      </div>

      <div style={doctorsGridStyles}>
        {doctorData.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </Section>
  );
};

export default DoctorList;