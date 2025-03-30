import React, { useState } from 'react';
import theme from '../../theme';
import { Section, Button } from '../index';

/**
 * CostEstimator component for estimating treatment costs
 */
const CostEstimator = () => {
  // Form state
  const [formData, setFormData] = useState({
    treatment: '',
    country: '',
    hospital: 'any',
  });

  // Estimated cost state
  const [estimatedCost, setEstimatedCost] = useState(null);

  // Treatment options with cost ranges
  const treatments = [
    { value: '', label: 'Select Treatment', min: 0, max: 0 },
    { value: 'cardiac_bypass', label: 'Cardiac Bypass Surgery', min: 7000, max: 9000 },
    { value: 'knee_replacement', label: 'Knee Replacement', min: 6000, max: 8000 },
    { value: 'hip_replacement', label: 'Hip Replacement', min: 6500, max: 8500 },
    { value: 'spine_surgery', label: 'Spine Surgery', min: 8000, max: 12000 },
    { value: 'dental_implants', label: 'Dental Implants (per tooth)', min: 500, max: 900 },
    { value: 'ivf_treatment', label: 'IVF Treatment', min: 3000, max: 5000 },
    { value: 'cosmetic_surgery', label: 'Cosmetic Surgery', min: 3500, max: 7000 },
    { value: 'lasik_surgery', label: 'LASIK Eye Surgery', min: 1000, max: 1800 },
    { value: 'gastric_bypass', label: 'Gastric Bypass', min: 5000, max: 7000 },
  ];

  // Country options with cost multipliers
  const countries = [
    { value: '', label: 'Select Your Country' },
    { value: 'us', label: 'United States', multiplier: 1 },
    { value: 'uk', label: 'United Kingdom', multiplier: 0.9 },
    { value: 'canada', label: 'Canada', multiplier: 0.95 },
    { value: 'australia', label: 'Australia', multiplier: 0.9 },
    { value: 'europe', label: 'Europe', multiplier: 0.85 },
    { value: 'middle_east', label: 'Middle East', multiplier: 0.8 },
    { value: 'other', label: 'Other', multiplier: 0.9 },
  ];

  // Hospital options with cost multipliers
  const hospitals = [
    { value: 'any', label: 'Any Hospital', multiplier: 1 },
    { value: 'premium', label: 'Premium Hospital', multiplier: 1.2 },
    { value: 'standard', label: 'Standard Hospital', multiplier: 1 },
    { value: 'budget', label: 'Budget-Friendly Hospital', multiplier: 0.8 },
  ];

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Reset estimated cost when form changes
    setEstimatedCost(null);
  };

  // Calculate estimated cost
  const calculateCost = () => {
    if (!formData.treatment || !formData.country) {
      alert('Please select both treatment and country');
      return;
    }
    
    // Find selected treatment
    const selectedTreatment = treatments.find(t => t.value === formData.treatment);
    
    // Find selected country
    const selectedCountry = countries.find(c => c.value === formData.country);
    
    // Find selected hospital
    const selectedHospital = hospitals.find(h => h.value === formData.hospital);
    
    if (selectedTreatment && selectedCountry && selectedHospital) {
      // Calculate cost range based on treatment, country, and hospital
      const minCost = Math.round(selectedTreatment.min * selectedCountry.multiplier * selectedHospital.multiplier);
      const maxCost = Math.round(selectedTreatment.max * selectedCountry.multiplier * selectedHospital.multiplier);
      
      // Set estimated cost
      setEstimatedCost({
        min: minCost,
        max: maxCost,
        currency: 'USD',
        savings: Math.round(((selectedTreatment.max * 3) - maxCost) / (selectedTreatment.max * 3) * 100),
      });
    }
  };

  const sectionStyles = {
    backgroundColor: theme.colors.background.offWhite,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.xl,
    boxShadow: theme.shadows.sm,
  };

  const titleStyles = {
    fontSize: theme.fonts.sizes.xl,
    fontWeight: theme.fonts.weights.bold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.md,
    textAlign: 'center',
  };

  const subtitleStyles = {
    fontSize: theme.fonts.sizes.md,
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.lg,
    textAlign: 'center',
  };

  const formStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
  };

  const formGroupStyles = {
    display: 'flex',
    flexDirection: 'column',
  };

  const labelStyles = {
    marginBottom: theme.spacing.xs,
    fontWeight: theme.fonts.weights.medium,
  };

  const selectStyles = {
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.sm,
    border: `1px solid ${theme.colors.border}`,
    fontSize: theme.fonts.sizes.md,
  };

  const buttonContainerStyles = {
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
  };

  const resultContainerStyles = {
    backgroundColor: theme.colors.background.light,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.md,
    boxShadow: theme.shadows.sm,
    textAlign: 'center',
    display: estimatedCost ? 'block' : 'none',
  };

  const costRangeStyles = {
    fontSize: theme.fonts.sizes.xxl,
    fontWeight: theme.fonts.weights.bold,
    color: theme.colors.primary,
    margin: `${theme.spacing.md} 0`,
  };

  const savingsStyles = {
    backgroundColor: 'rgba(40, 167, 69, 0.1)',
    color: theme.colors.success,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.borderRadius.sm,
    display: 'inline-block',
    fontWeight: theme.fonts.weights.medium,
    marginTop: theme.spacing.sm,
  };

  const noteStyles = {
    fontSize: theme.fonts.sizes.sm,
    color: theme.colors.text.secondary,
    marginTop: theme.spacing.md,
    fontStyle: 'italic',
  };

  const ctaContainerStyles = {
    marginTop: theme.spacing.xl,
    textAlign: 'center',
  };

  return (
    <Section>
      <div style={sectionStyles}>
        <h2 style={titleStyles}>Treatment Cost Estimator</h2>
        <p style={subtitleStyles}>
          Get an estimate of how much you can save on your medical treatment in India
        </p>
        
        <div style={formStyles}>
          <div style={formGroupStyles}>
            <label style={labelStyles} htmlFor="treatment">Select Treatment</label>
            <select
              id="treatment"
              name="treatment"
              value={formData.treatment}
              onChange={handleChange}
              style={selectStyles}
            >
              {treatments.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          
          <div style={formGroupStyles}>
            <label style={labelStyles} htmlFor="country">Your Country</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              style={selectStyles}
            >
              {countries.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          
          <div style={formGroupStyles}>
            <label style={labelStyles} htmlFor="hospital">Hospital Type</label>
            <select
              id="hospital"
              name="hospital"
              value={formData.hospital}
              onChange={handleChange}
              style={selectStyles}
            >
              {hospitals.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div style={buttonContainerStyles}>
          <Button 
            variant="primary" 
            size="large" 
            onClick={calculateCost}
          >
            Calculate Estimated Cost
          </Button>
        </div>
        
        {/* Results */}
        <div style={resultContainerStyles}>
          <h3>Estimated Cost for Treatment</h3>
          <div style={costRangeStyles}>
            {estimatedCost && `${estimatedCost.currency} ${estimatedCost.min.toLocaleString()} - ${estimatedCost.max.toLocaleString()}`}
          </div>
          <div style={savingsStyles}>
            {estimatedCost && `Save up to ${estimatedCost.savings}% compared to your country`}
          </div>
          <p style={noteStyles}>
            *This is an estimate. Actual costs may vary based on specific medical conditions, hospital, and doctor.
          </p>
          
          <div style={ctaContainerStyles}>
            <Button variant="primary" size="medium">
              Get Detailed Quote
            </Button>
            <Button 
              variant="outline" 
              size="medium" 
              style={{ marginLeft: theme.spacing.md }}
            >
              Speak to Medical Advisor
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CostEstimator;