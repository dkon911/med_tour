import React from 'react';
import theme from '../../theme';
import { Section, Container, Button } from '../index';

/**
 * DoctorDetail component to display detailed information about a specific doctor
 */
const DoctorDetail = ({ doctor }) => {
  // In a real app, doctor data would come from props or API
  // This is sample data for demonstration
  const sampleDoctor = {
    id: 1,
    name: 'Dr. Rajesh Kumar',
    specialty: 'Cardiologist',
    qualifications: 'MD, DM (Cardiology), FACC',
    experience: '15+ years',
    hospital: 'Heart Care Hospital, Delhi',
    languages: ['English', 'Hindi', 'Punjabi'],
    image: '/images/doctors/doctor1.jpg',
    bio: 'Dr. Rajesh Kumar is a renowned cardiologist with over 15 years of experience in treating complex cardiac conditions. He specializes in interventional cardiology and has performed more than 5,000 cardiac procedures including angioplasties and stent placements. Dr. Kumar completed his medical education from prestigious institutions and has received advanced training in the latest cardiac techniques.',
    expertise: [
      'Coronary Angioplasty',
      'Cardiac Bypass Surgery',
      'Heart Valve Replacement',
      'Cardiac Rehabilitation',
      'Preventive Cardiology',
    ],
    education: [
      {
        degree: 'DM in Cardiology',
        institution: 'All India Institute of Medical Sciences (AIIMS)',
        year: '2008',
      },
      {
        degree: 'MD in Internal Medicine',
        institution: 'King George\'s Medical University',
        year: '2005',
      },
      {
        degree: 'MBBS',
        institution: 'Maulana Azad Medical College',
        year: '2001',
      },
    ],
    awards: [
      'Best Cardiologist Award - Indian Medical Association (2018)',
      'Excellence in Cardiac Care - Heart Foundation of India (2016)',
      'Young Investigator Award - Cardiological Society of India (2012)',
    ],
    publications: [
      'Kumar R, et al. "Long-term outcomes of drug-eluting stents in Indian patients with coronary artery disease." Indian Heart Journal, 2019.',
      'Sharma P, Kumar R, et al. "Prevalence of cardiovascular risk factors in North Indian population." Journal of Clinical Cardiology, 2017.',
      'Kumar R, Patel A. "Advances in interventional cardiology techniques." Cardiology Review, 2015.',
    ],
    availableSlots: [
      { day: 'Monday', time: '09:00 AM - 01:00 PM' },
      { day: 'Wednesday', time: '02:00 PM - 06:00 PM' },
      { day: 'Friday', time: '10:00 AM - 02:00 PM' },
      { day: 'Saturday', time: '11:00 AM - 03:00 PM' },
    ],
  };

  // Use the provided doctor or fall back to sample data
  const doctorData = doctor || sampleDoctor;

  const heroStyles = {
    backgroundColor: theme.colors.background.offWhite,
    padding: `${theme.spacing.xl} 0`,
  };

  const doctorInfoStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing.xl,
    alignItems: 'center',
  };

  const doctorImageContainerStyles = {
    flexShrink: 0,
    width: '280px',
    height: '320px',
    borderRadius: theme.borderRadius.md,
    overflow: 'hidden',
    boxShadow: theme.shadows.md,
  };

  const doctorImageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const doctorDetailsStyles = {
    flex: '1',
    minWidth: '300px',
  };

  const nameStyles = {
    fontSize: theme.fonts.sizes.xxl,
    fontWeight: theme.fonts.weights.bold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  };

  const specialtyStyles = {
    fontSize: theme.fonts.sizes.xl,
    color: theme.colors.primary,
    marginBottom: theme.spacing.md,
  };

  const metaItemStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
    fontSize: theme.fonts.sizes.md,
    color: theme.colors.text.secondary,
  };

  const iconStyles = {
    color: theme.colors.primary,
    width: '20px',
    textAlign: 'center',
  };

  const sectionTitleStyles = {
    fontSize: theme.fonts.sizes.xl,
    fontWeight: theme.fonts.weights.semiBold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.md,
    paddingBottom: theme.spacing.xs,
    borderBottom: `2px solid ${theme.colors.primary}`,
    display: 'inline-block',
  };

  const paragraphStyles = {
    fontSize: theme.fonts.sizes.md,
    lineHeight: 1.6,
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.lg,
  };

  const expertiseListStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.xl,
  };

  const expertiseItemStyles = {
    backgroundColor: 'rgba(20, 160, 157, 0.1)',
    color: theme.colors.primary,
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.borderRadius.md,
    fontSize: theme.fonts.sizes.sm,
    fontWeight: theme.fonts.weights.medium,
  };

  const educationItemStyles = {
    marginBottom: theme.spacing.md,
  };

  const educationTitleStyles = {
    fontSize: theme.fonts.sizes.md,
    fontWeight: theme.fonts.weights.semiBold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  };

  const educationSubtitleStyles = {
    fontSize: theme.fonts.sizes.md,
    color: theme.colors.text.secondary,
  };

  const listItemStyles = {
    marginBottom: theme.spacing.sm,
    paddingLeft: theme.spacing.md,
    position: 'relative',
    '&::before': {
      content: '"•"',
      color: theme.colors.primary,
      position: 'absolute',
      left: 0,
    },
  };

  const appointmentBoxStyles = {
    backgroundColor: theme.colors.background.light,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    boxShadow: theme.shadows.sm,
    marginTop: theme.spacing.xl,
  };

  const appointmentTitleStyles = {
    fontSize: theme.fonts.sizes.lg,
    fontWeight: theme.fonts.weights.semiBold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.md,
    textAlign: 'center',
  };

  const slotsContainerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  };

  const slotItemStyles = {
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.md,
    textAlign: 'center',
  };

  const slotDayStyles = {
    fontWeight: theme.fonts.weights.semiBold,
    marginBottom: theme.spacing.xs,
  };

  const slotTimeStyles = {
    color: theme.colors.text.secondary,
    fontSize: theme.fonts.sizes.sm,
  };

  return (
    <div>
      {/* Hero Section with Doctor Info */}
      <div style={heroStyles}>
        <Container>
          <div style={doctorInfoStyles}>
            <div style={doctorImageContainerStyles}>
              <img 
                src={doctorData.image} 
                alt={doctorData.name} 
                style={doctorImageStyles} 
              />
            </div>
            <div style={doctorDetailsStyles}>
              <h1 style={nameStyles}>{doctorData.name}</h1>
              <h2 style={specialtyStyles}>{doctorData.specialty}</h2>
              
              <div style={metaItemStyles}>
                <i className="fa fa-graduation-cap" style={iconStyles}></i>
                <span>{doctorData.qualifications}</span>
              </div>
              
              <div style={metaItemStyles}>
                <i className="fa fa-hospital-o" style={iconStyles}></i>
                <span>{doctorData.hospital}</span>
              </div>
              
              <div style={metaItemStyles}>
                <i className="fa fa-clock-o" style={iconStyles}></i>
                <span>Experience: {doctorData.experience}</span>
              </div>
              
              <div style={metaItemStyles}>
                <i className="fa fa-language" style={iconStyles}></i>
                <span>Languages: {doctorData.languages.join(', ')}</span>
              </div>
              
              <div style={{ marginTop: theme.spacing.lg }}>
                <Button variant="primary" size="large">
                  Book Appointment
                </Button>
                <Button variant="outline" size="large" style={{ marginLeft: theme.spacing.md }}>
                  Contact Doctor
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* About Section */}
      <Section background="light">
        <h2 style={sectionTitleStyles}>About</h2>
        <p style={paragraphStyles}>{doctorData.bio}</p>
        
        <h2 style={sectionTitleStyles}>Areas of Expertise</h2>
        <div style={expertiseListStyles}>
          {doctorData.expertise.map((item, index) => (
            <span key={index} style={expertiseItemStyles}>{item}</span>
          ))}
        </div>
        
        <h2 style={sectionTitleStyles}>Education & Training</h2>
        {doctorData.education.map((edu, index) => (
          <div key={index} style={educationItemStyles}>
            <h3 style={educationTitleStyles}>{edu.degree} ({edu.year})</h3>
            <p style={educationSubtitleStyles}>{edu.institution}</p>
          </div>
        ))}
        
        <h2 style={sectionTitleStyles}>Awards & Recognition</h2>
        <ul style={{ padding: 0, margin: 0, marginBottom: theme.spacing.xl }}>
          {doctorData.awards.map((award, index) => (
            <li key={index} style={listItemStyles}>{award}</li>
          ))}
        </ul>
        
        <h2 style={sectionTitleStyles}>Publications</h2>
        <ul style={{ padding: 0, margin: 0 }}>
          {doctorData.publications.map((publication, index) => (
            <li key={index} style={listItemStyles}>{publication}</li>
          ))}
        </ul>
        
        {/* Appointment Booking */}
        <div style={appointmentBoxStyles}>
          <h3 style={appointmentTitleStyles}>Available Appointment Slots</h3>
          <div style={slotsContainerStyles}>
            {doctorData.availableSlots.map((slot, index) => (
              <div key={index} style={slotItemStyles}>
                <div style={slotDayStyles}>{slot.day}</div>
                <div style={slotTimeStyles}>{slot.time}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Button variant="primary" size="large">
              Book Appointment
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default DoctorDetail;