import React from 'react';
import { Container, Section, TreatmentList, CostEstimator } from '../components';
import theme from '../theme';

/**
 * TreatmentsPage component that displays available medical treatments
 */
const TreatmentsPage = () => {
  // Sample treatment data - in a real app, this would come from an API or CMS
  const treatments = [
    {
      id: 1,
      name: 'Cardiac Surgery',
      description: 'World-class cardiac procedures including bypass surgery, valve replacement, and minimally invasive heart surgeries.',
      image: '/images/treatments/cardiac.jpg',
      averageCost: '$8,000 - $15,000',
      recoveryTime: '2-4 weeks',
      hospitals: ['Apollo Hospitals', 'Fortis Heart Institute', 'Max Super Speciality Hospital']
    },
    {
      id: 2,
      name: 'Orthopedic Surgery',
      description: 'Comprehensive orthopedic treatments including joint replacements, spine surgeries, and sports injury treatments.',
      image: '/images/treatments/orthopedic.jpg',
      averageCost: '$6,000 - $12,000',
      recoveryTime: '4-12 weeks',
      hospitals: ['Joint & Spine Center', 'Apollo Orthopedic Hospital', 'Fortis Bone & Joint Institute']
    },
    {
      id: 3,
      name: 'Cosmetic Surgery',
      description: 'Advanced cosmetic procedures performed by experienced plastic surgeons with state-of-the-art facilities.',
      image: '/images/treatments/cosmetic.jpg',
      averageCost: '$3,000 - $8,000',
      recoveryTime: '1-3 weeks',
      hospitals: ['Aesthetic Surgery Center', 'Apollo Cosmetic Clinic', 'Max Institute of Aesthetic Surgery']
    },
    {
      id: 4,
      name: 'Dental Treatments',
      description: 'Comprehensive dental care including implants, cosmetic dentistry, and advanced dental procedures.',
      image: '/images/treatments/dental.jpg',
      averageCost: '$500 - $3,000',
      recoveryTime: '1-7 days',
      hospitals: ['Dental Excellence Center', 'Apollo Dental Clinic', 'Smile Design Studio']
    },
    {
      id: 5,
      name: 'Fertility Treatments',
      description: 'Advanced fertility treatments including IVF, ICSI, and other assisted reproductive technologies.',
      image: '/images/treatments/fertility.jpg',
      averageCost: '$4,000 - $10,000',
      recoveryTime: 'Varies',
      hospitals: ['Fertility Care Center', 'Apollo Fertility Clinic', 'New Life Fertility Center']
    },
    {
      id: 6,
      name: 'Cancer Treatments',
      description: 'Comprehensive cancer care including chemotherapy, radiation therapy, and surgical oncology.',
      image: '/images/treatments/cancer.jpg',
      averageCost: '$10,000 - $30,000',
      recoveryTime: 'Varies',
      hospitals: ['Cancer Care Institute', 'Apollo Cancer Center', 'Max Oncology Center']
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
          <h1 style={{ fontSize: theme.fonts.sizes.xxxl, marginBottom: theme.spacing.md }}>Medical Treatments</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: theme.fonts.sizes.lg }}>
            Explore our wide range of high-quality medical treatments at affordable prices
          </p>
        </Container>
      </div>
      
      <Section background="light" padding="large">
        <Container>
          <div style={{ marginBottom: theme.spacing.xl, textAlign: 'center' }}>
            <h2 style={{ fontSize: theme.fonts.sizes.xxl, color: theme.colors.text.primary, marginBottom: theme.spacing.md }}>
              Treatments We Offer
            </h2>
            <p style={{ fontSize: theme.fonts.sizes.lg, color: theme.colors.text.secondary, maxWidth: '800px', margin: '0 auto' }}>
              We provide a wide range of medical treatments performed by experienced doctors at accredited hospitals
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
            {treatments.map(treatment => (
              <div key={treatment.id} style={{ 
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
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src={treatment.image} 
                    alt={treatment.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: theme.spacing.lg }}>
                  <h3 style={{ fontSize: theme.fonts.sizes.xl, color: theme.colors.text.primary, marginBottom: theme.spacing.sm }}>
                    {treatment.name}
                  </h3>
                  <p style={{ fontSize: theme.fonts.sizes.md, color: theme.colors.text.secondary, marginBottom: theme.spacing.md, lineHeight: 1.6 }}>
                    {treatment.description}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: theme.spacing.sm }}>
                    <div>
                      <span style={{ fontWeight: theme.fonts.weights.semiBold }}>Average Cost:</span>
                      <span style={{ color: theme.colors.primary, marginLeft: theme.spacing.xs }}>{treatment.averageCost}</span>
                    </div>
                    <div>
                      <span style={{ fontWeight: theme.fonts.weights.semiBold }}>Recovery:</span>
                      <span style={{ color: theme.colors.text.secondary, marginLeft: theme.spacing.xs }}>{treatment.recoveryTime}</span>
                    </div>
                  </div>
                  <button style={{
                    backgroundColor: theme.colors.primary,
                    color: theme.colors.text.light,
                    border: 'none',
                    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
                    borderRadius: theme.borderRadius.sm,
                    cursor: 'pointer',
                    fontWeight: theme.fonts.weights.medium,
                    transition: theme.transitions.short,
                    width: '100%',
                    marginTop: theme.spacing.sm,
                    '&:hover': {
                      backgroundColor: '#0e8683', // Darker shade of primary
                    }
                  }}>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      
      <Section background="offWhite" padding="large">
        <Container>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
            <div style={{ flex: '1 1 500px', minWidth: '300px' }}>
              <h2 style={{ fontSize: theme.fonts.sizes.xxl, marginBottom: theme.spacing.md, color: theme.colors.text.primary }}>
                Why Choose Us for Your Medical Treatment?
              </h2>
              <ul style={{ paddingLeft: theme.spacing.xl }}>
                <li style={{ marginBottom: theme.spacing.md, fontSize: theme.fonts.sizes.lg, lineHeight: 1.6 }}>
                  <strong>World-Class Healthcare:</strong> Access to internationally accredited hospitals and clinics.
                </li>
                <li style={{ marginBottom: theme.spacing.md, fontSize: theme.fonts.sizes.lg, lineHeight: 1.6 }}>
                  <strong>Experienced Doctors:</strong> Treatment by highly qualified and experienced medical professionals.
                </li>
                <li style={{ marginBottom: theme.spacing.md, fontSize: theme.fonts.sizes.lg, lineHeight: 1.6 }}>
                  <strong>Cost Savings:</strong> Save up to 70% on medical treatments compared to Western countries.
                </li>
                <li style={{ marginBottom: theme.spacing.md, fontSize: theme.fonts.sizes.lg, lineHeight: 1.6 }}>
                  <strong>Personalized Care:</strong> Customized treatment plans tailored to your specific needs.
                </li>
                <li style={{ marginBottom: theme.spacing.md, fontSize: theme.fonts.sizes.lg, lineHeight: 1.6 }}>
                  <strong>Comprehensive Support:</strong> End-to-end assistance from initial consultation to post-treatment care.
                </li>
              </ul>
            </div>
            <div style={{ flex: '1 1 400px', minWidth: '300px' }}>
              <div style={{ 
                backgroundColor: theme.colors.background.light, 
                borderRadius: theme.borderRadius.md,
                padding: theme.spacing.xl,
                boxShadow: theme.shadows.md
              }}>
                <h3 style={{ fontSize: theme.fonts.sizes.xl, marginBottom: theme.spacing.md, color: theme.colors.primary, textAlign: 'center' }}>
                  Get a Free Cost Estimate
                </h3>
                <p style={{ marginBottom: theme.spacing.lg, textAlign: 'center' }}>
                  Fill out the form below to receive a personalized cost estimate for your treatment.
                </p>
                {/* Cost Estimator Form would go here */}
                <form>
                  <div style={{ marginBottom: theme.spacing.md }}>
                    <label style={{ display: 'block', marginBottom: theme.spacing.xs }}>Treatment Type</label>
                    <select style={{ 
                      width: '100%', 
                      padding: theme.spacing.sm,
                      borderRadius: theme.borderRadius.sm,
                      border: `1px solid ${theme.colors.border}`
                    }}>
                      <option>Select Treatment</option>
                      <option>Cardiac Surgery</option>
                      <option>Orthopedic Surgery</option>
                      <option>Cosmetic Surgery</option>
                      <option>Dental Treatments</option>
                      <option>Fertility Treatments</option>
                      <option>Cancer Treatments</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: theme.spacing.md }}>
                    <label style={{ display: 'block', marginBottom: theme.spacing.xs }}>Email Address</label>
                    <input type="email" placeholder="Your email" style={{ 
                      width: '100%', 
                      padding: theme.spacing.sm,
                      borderRadius: theme.borderRadius.sm,
                      border: `1px solid ${theme.colors.border}`
                    }} />
                  </div>
                  <button style={{
                    backgroundColor: theme.colors.primary,
                    color: theme.colors.text.light,
                    border: 'none',
                    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
                    borderRadius: theme.borderRadius.sm,
                    cursor: 'pointer',
                    fontWeight: theme.fonts.weights.medium,
                    transition: theme.transitions.short,
                    width: '100%',
                    '&:hover': {
                      backgroundColor: '#0e8683', // Darker shade of primary
                    }
                  }}>
                    Get Estimate
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default TreatmentsPage;