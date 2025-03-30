import React from 'react';
import theme from '../../theme';
import { Section, Card } from '../index';

/**
 * Testimonials component to showcase patient reviews
 */
const Testimonials = () => {
  // Sample testimonial data - in a real app, this would come from an API or CMS
  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      country: 'United States',
      treatment: 'Knee Replacement Surgery',
      image: '/images/testimonials/patient1.jpg',
      quote: 'I saved over 60% on my knee replacement surgery compared to costs in the US. The quality of care was exceptional, and I recovered faster than expected.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      country: 'United Kingdom',
      treatment: 'Dental Implants',
      image: '/images/testimonials/patient2.jpg',
      quote: 'The dental work I received was world-class. The doctors were professional, facilities were modern, and the cost was a fraction of what I would have paid at home.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Ahmed Hassan',
      country: 'UAE',
      treatment: 'Cardiac Bypass Surgery',
      image: '/images/testimonials/patient3.jpg',
      quote: 'From the moment I arrived, I felt I was in good hands. The cardiac team was excellent, and the post-surgery care was attentive and thorough.',
      rating: 4,
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

  const testimonialsContainerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: theme.spacing.lg,
  };

  const testimonialCardStyles = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  };

  const quoteStyles = {
    fontSize: theme.fonts.sizes.md,
    fontStyle: 'italic',
    marginBottom: theme.spacing.md,
    flex: 1,
    position: 'relative',
    paddingLeft: theme.spacing.md,
    '&::before': {
      content: '"\u201C"',
      fontSize: '3rem',
      position: 'absolute',
      left: '-10px',
      top: '-20px',
      color: theme.colors.primary,
      opacity: 0.3,
    },
  };

  const patientInfoStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.md,
  };

  const patientImageStyles = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: `2px solid ${theme.colors.primary}`,
  };

  const patientDetailsStyles = {
    display: 'flex',
    flexDirection: 'column',
  };

  const patientNameStyles = {
    fontWeight: theme.fonts.weights.semiBold,
    color: theme.colors.text.primary,
  };

  const patientMetaStyles = {
    fontSize: theme.fonts.sizes.sm,
    color: theme.colors.text.secondary,
  };

  const ratingStyles = {
    display: 'flex',
    gap: '2px',
    marginTop: theme.spacing.xs,
  };

  const starStyles = {
    color: theme.colors.accent,
    fontSize: theme.fonts.sizes.md,
  };

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i 
          key={i} 
          className={i <= rating ? 'fa fa-star' : 'fa fa-star-o'} 
          style={starStyles}
        />
      );
    }
    return stars;
  };

  return (
    <Section background="light" padding="large">
      <div style={sectionTitleStyles}>
        <h2 style={titleStyles}>Patient Testimonials</h2>
        <p style={subtitleStyles}>
          Read what our patients have to say about their medical tourism experience with us
        </p>
      </div>

      <div style={testimonialsContainerStyles}>
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} elevation="low" style={testimonialCardStyles}>
            <div style={quoteStyles}>
              {testimonial.quote}
            </div>
            <div style={patientInfoStyles}>
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                style={patientImageStyles} 
              />
              <div style={patientDetailsStyles}>
                <span style={patientNameStyles}>{testimonial.name}</span>
                <span style={patientMetaStyles}>
                  {testimonial.country} | {testimonial.treatment}
                </span>
                <div style={ratingStyles}>
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;