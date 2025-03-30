import React from 'react';
import { Container, Section } from '../components';
import theme from '../theme';

/**
 * DoctorsPage component that displays information about doctors
 */
const DoctorsPage = () => {
  // Sample doctor data - in a real app, this would come from an API or CMS
  const doctors = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      specialty: 'Cardiologist',
      hospital: 'Heart Care Hospital',
      experience: '15+ years',
      image: '/images/doctors/doctor1.jpg',
      bio: 'Dr. Rajesh Kumar is a renowned cardiologist with over 15 years of experience in treating complex cardiac conditions. He specializes in interventional cardiology and has performed more than 5,000 successful procedures.',
      education: 'MD in Cardiology from All India Institute of Medical Sciences',
      certifications: ['American Board of Cardiology', 'Fellow of Royal College of Physicians']
    },
    {
      id: 2,
      name: 'Dr. Priya Sharma',
      specialty: 'Orthopedic Surgeon',
      hospital: 'Joint & Spine Center',
      experience: '12+ years',
      image: '/images/doctors/doctor2.jpg',
      bio: 'Dr. Priya Sharma is a skilled orthopedic surgeon specializing in joint replacements and sports injuries. She has successfully performed over 3,000 joint replacement surgeries with excellent outcomes.',
      education: 'MS in Orthopedics from King Edward Memorial Hospital',
      certifications: ['American Academy of Orthopedic Surgeons', 'International Society of Arthroscopy']
    },
    {
      id: 3,
      name: 'Dr. Amit Patel',
      specialty: 'Oncologist',
      hospital: 'Cancer Care Institute',
      experience: '18+ years',
      image: '/images/doctors/doctor3.jpg',
      bio: 'Dr. Amit Patel is a leading oncologist with expertise in treating various types of cancer. He is known for his patient-centered approach and has helped thousands of patients in their fight against cancer.',
      education: 'MD in Oncology from Tata Memorial Hospital',
      certifications: ['American Society of Clinical Oncology', 'European Society for Medical Oncology']
    },
    {
      id: 4,
      name: 'Dr. Sunita Reddy',
      specialty: 'Neurologist',
      hospital: 'Brain & Spine Hospital',
      experience: '14+ years',
      image: '/images/doctors/doctor4.jpg',
      bio: 'Dr. Sunita Reddy is a highly skilled neurologist specializing in the treatment of neurological disorders. She has extensive experience in managing complex neurological conditions and is known for her compassionate care.',
      education: 'DM in Neurology from National Institute of Mental Health and Neurosciences',
      certifications: ['American Academy of Neurology', 'International Headache Society']
    },
  ];

  return (
    <>
      <div style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/hero-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: theme.colors.text.light,
        padding: `${theme.spacing.xl} 0`,
        textAlign: 'center'
      }}>
        <Container>
          <h1 style={{ fontSize: theme.fonts.sizes.xxxl, marginBottom: theme.spacing.md }}>Our Doctors</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: theme.fonts.sizes.lg }}>
            Meet our team of experienced and highly qualified medical professionals
          </p>
        </Container>
      </div>
      
      <Section background="light" padding="large">
        <Container>
          <div style={{ marginBottom: theme.spacing.xl, textAlign: 'center' }}>
            <h2 style={{ fontSize: theme.fonts.sizes.xxl, color: theme.colors.text.primary, marginBottom: theme.spacing.md }}>
              Expert Medical Professionals
            </h2>
            <p style={{ fontSize: theme.fonts.sizes.lg, color: theme.colors.text.secondary, maxWidth: '800px', margin: '0 auto' }}>
              Our doctors are leaders in their respective fields with extensive experience and international recognition
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
            {doctors.map(doctor => (
              <div key={doctor.id} style={{ 
                backgroundColor: theme.colors.background.light,
                borderRadius: theme.borderRadius.md,
                overflow: 'hidden',
                boxShadow: theme.shadows.md,
                transition: theme.transitions.medium,
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.shadows.lg,
                }
              }}>
                <div style={{ height: '300px', overflow: 'hidden' }}>
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: theme.spacing.lg }}>
                  <h3 style={{ fontSize: theme.fonts.sizes.xl, color: theme.colors.text.primary, marginBottom: theme.spacing.xs }}>
                    {doctor.name}
                  </h3>
                  <p style={{ fontSize: theme.fonts.sizes.md, color: theme.colors.primary, marginBottom: theme.spacing.sm }}>
                    {doctor.specialty}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: theme.spacing.sm }}>
                    <i className="fa fa-hospital" style={{ color: theme.colors.text.secondary, marginRight: theme.spacing.xs }}></i>
                    <span style={{ fontSize: theme.fonts.sizes.sm, color: theme.colors.text.secondary }}>
                      {doctor.hospital}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: theme.spacing.md }}>
                    <i className="fa fa-clock" style={{ color: theme.colors.text.secondary, marginRight: theme.spacing.xs }}></i>
                    <span style={{ fontSize: theme.fonts.sizes.sm, color: theme.colors.text.secondary }}>
                      {doctor.experience} experience
                    </span>
                  </div>
                  <p style={{ fontSize: theme.fonts.sizes.md, color: theme.colors.text.secondary, marginBottom: theme.spacing.md, lineHeight: 1.6 }}>
                    {doctor.bio.substring(0, 150)}...
                  </p>
                  <button style={{
                    backgroundColor: theme.colors.primary,
                    color: theme.colors.text.light,
                    border: 'none',
                    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
                    borderRadius: theme.borderRadius.sm,
                    cursor: 'pointer',
                    fontWeight: theme.fonts.weights.medium,
                    transition: theme.transitions.short,
                    '&:hover': {
                      backgroundColor: theme.colors.primaryDark,
                    }
                  }}>
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default DoctorsPage;