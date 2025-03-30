import React from 'react';
import { Container, Section, Button } from '../components';
import theme from '../theme';

/**
 * BlogPage component that displays blog articles related to medical tourism
 */
const BlogPage = () => {
  // Sample blog data - in a real app, this would come from an API or CMS
  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Destinations for Medical Tourism in 2023',
      excerpt: 'Discover the best countries for medical tourism this year, offering a perfect blend of quality healthcare and attractive destinations.',
      image: '/images/blog/medical-tourism-destinations.jpg',
      author: 'Dr. Sarah Johnson',
      date: 'June 15, 2023',
      category: 'Destinations',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'Understanding the Cost Benefits of Medical Tourism',
      excerpt: 'A comprehensive analysis of how medical tourism can save you up to 80% on medical procedures without compromising on quality.',
      image: '/images/blog/cost-benefits.jpg',
      author: 'Michael Chen',
      date: 'May 28, 2023',
      category: 'Cost Analysis',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'Patient Safety in Medical Tourism: What You Need to Know',
      excerpt: 'Learn about the safety standards, accreditations, and precautions to ensure a safe medical journey abroad.',
      image: '/images/blog/patient-safety.jpg',
      author: 'Dr. Robert Williams',
      date: 'May 10, 2023',
      category: 'Safety',
      readTime: '10 min read'
    },
    {
      id: 4,
      title: 'Recovery After Surgery: Tips for Medical Tourists',
      excerpt: 'Essential advice for a smooth recovery when undergoing surgery abroad, including travel considerations and follow-up care.',
      image: '/images/blog/recovery-tips.jpg',
      author: 'Nurse Emily Parker',
      date: 'April 22, 2023',
      category: 'Recovery',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'How to Choose the Right Hospital for Your Medical Treatment Abroad',
      excerpt: 'A step-by-step guide to selecting the best hospital for your specific medical needs when considering treatment overseas.',
      image: '/images/blog/choosing-hospital.jpg',
      author: 'Dr. Anita Patel',
      date: 'April 5, 2023',
      category: 'Planning',
      readTime: '9 min read'
    },
    {
      id: 6,
      title: 'Medical Tourism Insurance: Protecting Your Health Journey',
      excerpt: 'Understanding the importance of specialized insurance for medical tourism and how to select the right coverage for your needs.',
      image: '/images/blog/insurance.jpg',
      author: 'James Wilson',
      date: 'March 18, 2023',
      category: 'Insurance',
      readTime: '5 min read'
    },
  ];

  // Categories for filter
  const categories = [
    'All Categories',
    'Destinations',
    'Cost Analysis',
    'Safety',
    'Recovery',
    'Planning',
    'Insurance'
  ];

  return (
    <main>
      <div style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/hero-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: theme.colors.text.light,
        padding: `${theme.spacing.xl} 0`,
        textAlign: 'center'
      }}>
        <Container>
          <h1 style={{ fontSize: theme.fonts.sizes.xxxl, marginBottom: theme.spacing.md }}>Medical Tourism Blog</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: theme.fonts.sizes.lg }}>
            Insights, tips, and information about medical tourism and healthcare abroad
          </p>
        </Container>
      </div>
      
      <Section>
        <Container>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: theme.spacing.lg, marginBottom: theme.spacing.xl }}>
            {/* Category filters */}
            <div style={{ width: '100%', display: 'flex', gap: theme.spacing.sm, flexWrap: 'wrap', marginBottom: theme.spacing.lg }}>
              {categories.map(category => (
                <Button key={category} variant="outline" style={{ marginRight: theme.spacing.sm, marginBottom: theme.spacing.sm }}>
                  {category}
                </Button>
              ))}
            </div>
            
            {/* Blog posts grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: theme.spacing.lg, width: '100%' }}>
              {blogPosts.map(post => (
                <div key={post.id} style={{ 
                  border: `1px solid ${theme.colors.border}`,
                  borderRadius: theme.borderRadius.md,
                  overflow: 'hidden',
                  boxShadow: theme.shadows.sm,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: theme.shadows.md
                  }
                }}>
                  <div style={{ height: '200px', backgroundColor: '#e0e0e0', position: 'relative', overflow: 'hidden' }}>
                    <img 
                      src={post.image} 
                      alt={post.title}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)'
                        }
                      }}
                    />
                    <div style={{ 
                      position: 'absolute', 
                      top: theme.spacing.sm, 
                      left: theme.spacing.sm, 
                      backgroundColor: theme.colors.primary,
                      color: theme.colors.text.light,
                      padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
                      borderRadius: theme.borderRadius.sm,
                      fontSize: theme.fonts.sizes.sm
                    }}>
                      {post.category}
                    </div>
                  </div>
                  <div style={{ padding: theme.spacing.lg }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      color: theme.colors.text.secondary,
                      fontSize: theme.fonts.sizes.sm,
                      marginBottom: theme.spacing.sm
                    }}>
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 style={{ 
                      fontSize: theme.fonts.sizes.xl, 
                      marginBottom: theme.spacing.md,
                      color: theme.colors.text.primary
                    }}>
                      {post.title}
                    </h3>
                    <p style={{ 
                      color: theme.colors.text.secondary,
                      marginBottom: theme.spacing.lg,
                      lineHeight: 1.6
                    }}>
                      {post.excerpt}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.sm }}>
                        <div style={{ 
                          width: '40px', 
                          height: '40px', 
                          borderRadius: '50%', 
                          backgroundColor: theme.colors.primary,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: theme.colors.text.light,
                          fontWeight: theme.fonts.weights.bold
                        }}>
                          {post.author.split(' ').map(name => name[0]).join('')}
                        </div>
                        <span style={{ fontSize: theme.fonts.sizes.sm }}>{post.author}</span>
                      </div>
                      <Button variant="text">Read More</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
};

export default BlogPage;