import React, { useState } from 'react';
import theme from '../../theme';
import { Button } from '../index';

/**
 * ContactForm component for user inquiries
 */
const ContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    treatment: '',
    message: '',
  });

  // Error state
  const [errors, setErrors] = useState({});
  
  // Success message state
  const [showSuccess, setShowSuccess] = useState(false);

  // Treatment options
  const treatmentOptions = [
    'Select Treatment',
    'Cardiology',
    'Orthopedics',
    'Oncology',
    'Neurology',
    'Cosmetic Surgery',
    'Dental Treatments',
    'Other',
  ];

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }
    
    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
    }
    
    if (!formData.treatment || formData.treatment === 'Select Treatment') {
      newErrors.treatment = 'Please select a treatment';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, this would send data to a server
      console.log('Form submitted:', formData);
      
      // Show success message
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        treatment: '',
        message: '',
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  };

  const formStyles = {
    backgroundColor: theme.colors.background.light,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.xl,
    boxShadow: theme.shadows.md,
  };

  const formTitleStyles = {
    fontSize: theme.fonts.sizes.xl,
    fontWeight: theme.fonts.weights.bold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.md,
  };

  const formGroupStyles = {
    marginBottom: theme.spacing.md,
  };

  const labelStyles = {
    display: 'block',
    marginBottom: theme.spacing.xs,
    fontWeight: theme.fonts.weights.medium,
    color: theme.colors.text.primary,
  };

  const inputStyles = {
    width: '100%',
    padding: theme.spacing.sm,
    fontSize: theme.fonts.sizes.md,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.borderRadius.sm,
    transition: theme.transitions.short,
    '&:focus': {
      borderColor: theme.colors.primary,
      outline: 'none',
    },
  };

  const errorStyles = {
    color: theme.colors.error,
    fontSize: theme.fonts.sizes.sm,
    marginTop: theme.spacing.xs,
  };

  const successMessageStyles = {
    backgroundColor: 'rgba(40, 167, 69, 0.1)',
    color: theme.colors.success,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.sm,
    marginBottom: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
  };

  return (
    <div style={formStyles}>
      {showSuccess && (
        <div style={successMessageStyles}>
          <i className="fa fa-check-circle"></i>
          <span>Thank you for your inquiry! We'll contact you shortly.</span>
        </div>
      )}
      
      <h3 style={formTitleStyles}>Get a Free Consultation</h3>
      
      <form onSubmit={handleSubmit}>
        <div style={formGroupStyles}>
          <label style={labelStyles} htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyles}
            placeholder="Enter your full name"
          />
          {errors.name && <div style={errorStyles}>{errors.name}</div>}
        </div>
        
        <div style={formGroupStyles}>
          <label style={labelStyles} htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyles}
            placeholder="Enter your email address"
          />
          {errors.email && <div style={errorStyles}>{errors.email}</div>}
        </div>
        
        <div style={formGroupStyles}>
          <label style={labelStyles} htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={inputStyles}
            placeholder="Enter your phone number"
          />
          {errors.phone && <div style={errorStyles}>{errors.phone}</div>}
        </div>
        
        <div style={formGroupStyles}>
          <label style={labelStyles} htmlFor="country">Country *</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            style={inputStyles}
            placeholder="Enter your country"
          />
          {errors.country && <div style={errorStyles}>{errors.country}</div>}
        </div>
        
        <div style={formGroupStyles}>
          <label style={labelStyles} htmlFor="treatment">Treatment Required *</label>
          <select
            id="treatment"
            name="treatment"
            value={formData.treatment}
            onChange={handleChange}
            style={inputStyles}
          >
            {treatmentOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.treatment && <div style={errorStyles}>{errors.treatment}</div>}
        </div>
        
        <div style={formGroupStyles}>
          <label style={labelStyles} htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ ...inputStyles, minHeight: '120px', resize: 'vertical' }}
            placeholder="Tell us more about your treatment needs"
          ></textarea>
        </div>
        
        <Button 
          type="submit" 
          variant="primary" 
          size="large" 
          fullWidth
        >
          Submit Inquiry
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;