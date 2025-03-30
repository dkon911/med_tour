import React from 'react';
import { Container, Section } from '../components';
import theme from '../theme';

/**
 * TestimonialsPage component that displays patient testimonials
 */
const TestimonialsPage = () => {
  // Sample testimonial data - in a real app, this would come from an API or CMS
  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      country: 'United States',
      treatment: 'Knee Replacement Surgery',
      image: '/images/testimonials/patient1.jpg',
      quote: 'I was hesitant about traveling abroad for my knee replacement, but MedTourism made the entire process seamless. The quality of care I received was exceptional, and I saved over 60% compared to what I would have paid in the US. The doctors were world-class, and the staff was incredibly attentive.',
      rating: 5,
      date: 'March 2023'
    },
    {
      id: 2,
      name: 'Emma Johnson',
      country: 'Canada',
      treatment: 'Dental Implants',
      image: '/images/testimonials/patient2.jpg',
      quote: 'After being quoted an astronomical amount for dental implants in Canada, I decided to explore medical tourism. MedTourism connected me with an excellent dental clinic where I received top-notch care at a fraction of the cost. The results are amazing, and I couldn\'t be happier with my new smile!',
      rating: 5,
      date: 'January 2023'
    },
    {
      id: 3,
      name: 'Ahmed Hassan',
      country: 'United Kingdom',
      treatment: 'Cardiac Bypass Surgery',
      image: '/images/testimonials/patient3.jpg',
      quote: 'When I needed cardiac bypass surgery, the waiting time in the UK was too long. MedTourism arranged everything for me - from selecting the right hospital and surgeon to handling all travel logistics. The care I received was exceptional, and the follow-up support was outstanding. I\'m grateful for their services.',
      rating: 5,
      date: 'November 2022'
    },
    {
      id: 4,
      name: 'Maria Rodriguez',
      country: 'Australia',
      treatment: 'IVF Treatment',
      image: '/images/testimonials/patient4.jpg',
      quote: 'After years of struggling with fertility issues, we decided to try IVF abroad due to the high costs in Australia. MedTourism helped us find a reputable fertility clinic with excellent success rates. Today, we are blessed with twins! The medical team was compassionate and professional throughout our journey.',
      rating: 5,
      date: 'February 2023'
    },
    {
      id: 5,
      name: 'David Chen',
      country: 'Singapore',
      treatment: 'Spine Surgery',
      image: '/images/testimonials/patient5.jpg',
      quote: 'I had been suffering from chronic back pain for years and needed spinal fusion surgery. MedTourism recommended a neurosurgeon who specializes in minimally invasive techniques. The surgery was successful, and my recovery was much faster than expected. The cost savings were significant, and the quality of care was outstanding.',
      rating: 4,
      date: 'April 2023'
    },
    {
      id: 6,
      name: 'Sophie Martin',
      country: 'France',
      treatment: 'Cosmetic Surgery',
      image: '/images/testimonials/patient6.jpg',
      quote: 'I chose MedTourism for my cosmetic surgery after researching various options. They connected me with a highly skilled plastic surgeon who understood exactly what I wanted. The results exceeded my expectations, and the price was much more reasonable than in France. The entire experience was positive from start to finish.',
      rating: 5,
      date: 'May 2023'
    },
  ];

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={{ color: i <= rating ? theme.colors.accent : '#ccc', marginRight: '2px' }}>
          ★
        </span>
      );
    }
    return stars;
  };

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
          <h1 style={{ fontSize: theme.fonts.sizes.xxxl, marginBottom: theme.spacing.md }}>Patient Testimonials</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: theme.fonts.sizes.lg }}>
            Hear from our satisfied patients about their medical tourism experience
          </p>
        </Container>
      </div>
      
      <Section background="light" padding="large">
        <Container>
          <div style={{ marginBottom: theme.spacing.xl, textAlign: 'center' }}>
            <h2 style={{ fontSize: theme.fonts.sizes.xxl, color: theme.colors.text.primary, marginBottom: theme.spacing.md }}>
              Success Stories from Our Patients
            </h2>
            <p style={{ fontSize: theme.fonts.sizes.lg, color: theme.colors.text.secondary, maxWidth: '800px', margin: '0 auto' }}>
              Read about the experiences of patients who chose our medical tourism services
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px' }}>
            {testimonials.map(testimonial => (
              <div key={testimonial.id} style={{ 
                backgroundColor: theme.colors.background.light,
                borderRadius: theme.borderRadius.md,
                padding: theme.spacing.xl,
                boxShadow: theme.shadows.md,
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: theme.spacing.md }}>
                  <div style={{ 
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    marginRight: theme.spacing.md,
                    flexShrink: 0
                  }}>
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h3 style={{ fontSize: theme.fonts.sizes.lg, marginBottom: theme.spacing.xs }}>{testimonial.name}</h3>
                    <p style={{ color: theme.colors.text.secondary, marginBottom: theme.spacing.xs }}>{testimonial.country}</p>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                
                <div style={{ 
                  backgroundColor: theme.colors.background.offWhite,
                  padding: theme.spacing.md,
                  borderRadius: theme.borderRadius.sm,
                  marginBottom: theme.spacing.md,
                  position: 'relative',
                  flex: 1
                }}>
                  <p style={{ 
                    fontStyle: 'italic',
                    lineHeight: 1.6,
                    marginBottom: 0,
                    color: theme.colors.text.primary
                  }}>
                    "{testimonial.quote}"
                  </p>
                  <div style={{ 
                    position: 'absolute',
                    bottom: '-10px',
                    left: '20px',
                    width: '20px',
                    height: '20px',
                    backgroundColor: theme.colors.background.offWhite,
                    transform: 'rotate(45deg)'
                  }}></div>
                </div>
                
                <div style={{ marginTop: 'auto' }}>
                  <p style={{ 
                    color: theme.colors.primary,
                    fontWeight: theme.fonts.weights.semiBold,
                    marginBottom: theme.spacing.xs
                  }}>
                    Treatment: {testimonial.treatment}
                  </p>
                  <p style={{ color: theme.colors.text.secondary, fontSize: theme.fonts.sizes.sm }}>
                    {testimonial.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ 
            marginTop: theme.spacing.xxl,
            textAlign: 'center',
            backgroundColor: theme.colors.primary,
            color: theme.colors.text.light,
            padding: theme.spacing.xl,
            borderRadius: theme.borderRadius.md
          }}>
            <h3 style={{ fontSize: theme.fonts.sizes.xl, marginBottom: theme.spacing.md }}>Share Your Experience</h3>
            <p style={{ marginBottom: theme.spacing.lg }}>
              Have you used our medical tourism services? We'd love to hear about your experience!
            </p>
            <button style={{
              backgroundColor: theme.colors.text.light,
              color: theme.colors.primary,
              border: 'none',
              padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
              borderRadius: theme.borderRadius.sm,
              fontWeight: theme.fonts.weights.medium,
              cursor: 'pointer',
              transition: theme.transitions.short,
              '&:hover': {
                backgroundColor: '#f0f0f0',
              }
            }}>
              Submit Your Testimonial
            </button>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default TestimonialsPage;