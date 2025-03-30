import React from 'react';
import theme from '../../theme';
import { Section, Container, Button } from '../index';

/**
 * TreatmentDetail component to display detailed information about a specific treatment
 */
const TreatmentDetail = ({ treatment }) => {
  // In a real app, treatment data would come from props or API
  // This is sample data for demonstration
  const sampleTreatment = {
    id: 1,
    title: 'Cardiac Bypass Surgery',
    description: 'Coronary artery bypass grafting (CABG) is a surgical procedure used to treat coronary artery disease. It diverts blood around narrowed or clogged parts of the major arteries to improve blood flow and oxygen supply to the heart.',
    longDescription: [
      'Coronary artery bypass grafting (CABG) is a type of surgery that improves blood flow to the heart. Its used for people who have severe coronary heart disease (CHD), also called coronary artery disease.',
      'In CHD, a waxy substance called plaque builds up inside the coronary arteries: These arteries supply oxygen-rich blood to your heart. Plaque narrows the arteries and reduces blood flow to your heart muscle. It also increases your risk of having a heart attack.',
      'During CABG, a healthy artery or vein from the body is connected, or grafted, to the blocked coronary artery. The grafted artery or vein bypasses (that is, goes around) the blocked portion of the coronary artery. This creates a new path for oxygen-rich blood to flow to the heart muscle.',
    ],
    image: '/images/treatments/cardiology-detail.jpg',
    cost: {
      min: 7000,
      max: 9000,
      currency: 'USD',
    },
    duration: {
      hospital: '5-7 days',
      total: '2-3 weeks',
    },
    procedures: [
      'Pre-surgery evaluation and tests',
      'Anesthesia administration',
      'Harvesting of blood vessels for grafts',
      'Performing the bypass procedure',
      'Post-operative care and monitoring',
      'Rehabilitation and recovery guidance',
    ],
    hospitals: [
      {
        name: 'Apollo Hospitals',
        location: 'Delhi, India',
        accreditation: 'JCI Accredited',
        image: '/images/hospitals/apollo.jpg',
      },
      {
        name: 'Fortis Healthcare',
        location: 'Mumbai, India',
        accreditation: 'NABH Accredited',
        image: '/images/hospitals/fortis.jpg',
      },
      {
        name: 'Max Healthcare',
        location: 'Bangalore, India',
        accreditation: 'JCI Accredited',
        image: '/images/hospitals/max.jpg',
      },
    ],
    doctors: [
      {
        name: 'Dr. Rajesh Kumar',
        specialty: 'Cardiac Surgeon',
        experience: '20+ years',
        image: '/images/doctors/doctor1.jpg',
      },
      {
        name: 'Dr. Priya Sharma',
        specialty: 'Cardiologist',
        experience: '15+ years',
        image: '/images/doctors/doctor2.jpg',
      },
    ],
    faqs: [
      {
        question: 'How long does the surgery take?',
        answer: 'The surgery typically takes 3-6 hours, depending on the number of bypasses needed.',
      },
      {
        question: 'What is the recovery time?',
        answer: 'Most patients stay in the hospital for 5-7 days after surgery. Full recovery can take 6-12 weeks.',
      },
      {
        question: 'What are the success rates?',
        answer: 'The success rate for CABG is high, with more than 95% of patients experiencing relief from symptoms.',
      },
      {
        question: 'Are there any alternatives to CABG?',
        answer: 'Alternatives include medication, lifestyle changes, and less invasive procedures like angioplasty with stent placement.',
      },
    ],
  };

  // Use the provided treatment or fall back to sample data
  const treatmentData = treatment || sampleTreatment;

  const heroStyles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${treatmentData.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: theme.colors.text.light,
    padding: `${theme.spacing.xxl} 0`,
  };

  const sectionStyles = {
    padding: `${theme.spacing.xl} 0`,
  };

  const titleStyles = {
    fontSize: theme.fonts.sizes.xxxl,
    fontWeight: theme.fonts.weights.bold,
    marginBottom: theme.spacing.md,
  };

  const subtitleStyles = {
    fontSize: theme.fonts.sizes.xl,
    fontWeight: theme.fonts.weights.semiBold,
    marginBottom: theme.spacing.md,
    color: theme.colors.primary,
  };

  const paragraphStyles = {
    fontSize: theme.fonts.sizes.md,
    lineHeight: 1.6,
    marginBottom: theme.spacing.md,
  };

  const costBoxStyles = {
    backgroundColor: theme.colors.background.offWhite,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.md,
  };

  const costTitleStyles = {
    fontSize: theme.fonts.sizes.lg,
    fontWeight: theme.fonts.weights.semiBold,
    color: theme.colors.text.primary,
  };

  const costValueStyles = {
    fontSize: theme.fonts.sizes.xxl,
    fontWeight: theme.fonts.weights.bold,
    color: theme.colors.primary,
  };

  const costNoteStyles = {
    fontSize: theme.fonts.sizes.sm,
    color: theme.colors.text.secondary,
  };

  const listStyles = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  };

  const listItemStyles = {
    padding: `${theme.spacing.sm} 0`,
    borderBottom: `1px solid ${theme.colors.border}`,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
  };

  const iconStyles = {
    color: theme.colors.primary,
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: theme.spacing.lg,
    marginTop: theme.spacing.lg,
  };

  const cardStyles = {
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.borderRadius.md,
    overflow: 'hidden',
  };

  const cardImageStyles = {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
  };

  const cardContentStyles = {
    padding: theme.spacing.md,
  };

  const cardTitleStyles = {
    fontSize: theme.fonts.sizes.lg,
    fontWeight: theme.fonts.weights.semiBold,
    marginBottom: theme.spacing.xs,
  };

  const cardSubtitleStyles = {
    fontSize: theme.fonts.sizes.sm,
    color: theme.colors.text.secondary,
  };

  const faqItemStyles = {
    marginBottom: theme.spacing.md,
  };

  const faqQuestionStyles = {
    fontSize: theme.fonts.sizes.lg,
    fontWeight: theme.fonts.weights.semiBold,
    marginBottom: theme.spacing.xs,
    color: theme.colors.text.primary,
  };

  const faqAnswerStyles = {
    fontSize: theme.fonts.sizes.md,
    color: theme.colors.text.secondary,
    lineHeight: 1.6,
  };

  return (
    <div>
      {/* Hero Section */}
      <div style={heroStyles}>
        <Container>
          <h1 style={titleStyles}>{treatmentData.title}</h1>
          <p style={{ ...paragraphStyles, maxWidth: '800px' }}>
            {treatmentData.description}
          </p>
          <Button variant="primary" size="large">
            Get Free Consultation
          </Button>
        </Container>
      </div>

      {/* Overview Section */}
      <Section background="light">
        <Container>
          <h2 style={subtitleStyles}>Treatment Overview</h2>
          {treatmentData.longDescription.map((paragraph, index) => (
            <p key={index} style={paragraphStyles}>
              {paragraph}
            </p>
          ))}

          {/* Cost and Duration */}
          <div style={costBoxStyles}>
            <h3 style={costTitleStyles}>Estimated Cost</h3>
            <div style={costValueStyles}>
              {treatmentData.cost.currency} {treatmentData.cost.min.toLocaleString()} - {treatmentData.cost.max.toLocaleString()}
            </div>
            <p style={costNoteStyles}>
              *The cost includes surgery, hospital stay, pre-surgery tests, and follow-up consultations.
              It does not include travel, accommodation, or additional treatments that may be required.
            </p>
            <div style={{ marginTop: theme.spacing.md }}>
              <h3 style={costTitleStyles}>Duration</h3>
              <p style={paragraphStyles}>
                <strong>Hospital Stay:</strong> {treatmentData.duration.hospital}<br />
                <strong>Total Stay Required:</strong> {treatmentData.duration.total}
              </p>
            </div>
          </div>

          {/* Procedure Steps */}
          <h2 style={subtitleStyles}>Procedure Steps</h2>
          <ul style={listStyles}>
            {treatmentData.procedures.map((procedure, index) => (
              <li key={index} style={listItemStyles}>
                <i className="fa fa-check-circle" style={iconStyles}></i>
                {procedure}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Hospitals Section */}
      <Section background="offWhite">
        <Container>
          <h2 style={subtitleStyles}>Top Hospitals for {treatmentData.title}</h2>
          <div style={gridStyles}>
            {treatmentData.hospitals.map((hospital) => (
              <div key={hospital.name} style={cardStyles}>
                <img src={hospital.image} alt={hospital.name} style={cardImageStyles} />
                <div style={cardContentStyles}>
                  <h3 style={cardTitleStyles}>{hospital.name}</h3>
                  <p style={cardSubtitleStyles}>{hospital.location}</p>
                  <p style={cardSubtitleStyles}>{hospital.accreditation}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Doctors Section */}
      <Section background="light">
        <Container>
          <h2 style={subtitleStyles}>Specialist Doctors</h2>
          <div style={gridStyles}>
            {treatmentData.doctors.map((doctor) => (
              <div key={doctor.name} style={cardStyles}>
                <img src={doctor.image} alt={doctor.name} style={cardImageStyles} />
                <div style={cardContentStyles}>
                  <h3 style={cardTitleStyles}>{doctor.name}</h3>
                  <p style={cardSubtitleStyles}>{doctor.specialty}</p>
                  <p style={cardSubtitleStyles}>Experience: {doctor.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQs Section */}
      <Section background="offWhite">
        <Container>
          <h2 style={subtitleStyles}>Frequently Asked Questions</h2>
          <div>
            {treatmentData.faqs.map((faq, index) => (
              <div key={index} style={faqItemStyles}>
                <h3 style={faqQuestionStyles}>{faq.question}</h3>
                <p style={faqAnswerStyles}>{faq.answer}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: theme.spacing.xl, textAlign: 'center' }}>
            <h3 style={{ ...subtitleStyles, marginBottom: theme.spacing.lg }}>
              Have more questions about {treatmentData.title}?
            </h3>
            <Button variant="primary" size="large">
              Contact Our Medical Experts
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}; // End of TreatmentDetail component

export default TreatmentDetail;