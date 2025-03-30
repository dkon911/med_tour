// Global theme configuration for the medical tourism website
// This file contains all the customizable variables that can be easily modified by the client

const theme = {
  // Color palette
  colors: {
    primary: '#14A09D', // Teal - main brand color from reference site
    secondary: '#0056b3', // Dark blue for secondary elements
    accent: '#ff9800', // Orange for call-to-action elements
    text: {
      primary: '#333333', // Dark gray for main text
      secondary: '#666666', // Medium gray for secondary text
      light: '#ffffff', // White text for dark backgrounds
    },
    background: {
      light: '#ffffff', // White background
      offWhite: '#f8f9fa', // Light gray background
      dark: '#333333', // Dark background
    },
    border: '#e0e0e0', // Light gray for borders
    success: '#28a745', // Green for success messages
    error: '#dc3545', // Red for error messages
    warning: '#ffc107', // Yellow for warning messages
  },
  
  // Typography
  fonts: {
    primary: '"system-ui", "Avenir", "Helvetica", "Arial", sans-serif',
    secondary: '"Georgia", "Times New Roman", serif',
    sizes: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      md: '1rem',     // 16px
      lg: '1.25rem',  // 20px
      xl: '1.5rem',   // 24px
      xxl: '2rem',    // 32px
      xxxl: '2.5rem', // 40px
    },
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
  
  // Spacing
  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem',  // 8px
    md: '1rem',    // 16px
    lg: '1.5rem',  // 24px
    xl: '2rem',    // 32px
    xxl: '3rem',   // 48px
  },
  
  // Breakpoints for responsive design
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  
  // Border radius
  borderRadius: {
    sm: '0.25rem', // 4px
    md: '0.5rem',  // 8px
    lg: '1rem',    // 16px
    xl: '2rem',    // 32px
    circle: '50%',
  },
  
  // Box shadows
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    md: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    lg: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    xl: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  },
  
  // Transitions
  transitions: {
    short: '0.2s ease-in-out',
    medium: '0.3s ease-in-out',
    long: '0.5s ease-in-out',
  },
};

export default theme;