import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import './responsive.css'
import './mobile-components.css'  // Add this import
import App from './App.jsx'
import { 
  HomePage, 
  AboutPage, 
  TreatmentsPage, 
  BlogPage, 
  ServicesPage, 
  DoctorsPage,
  PartnersPage,
  TestimonialsPage,
  ContactPage 
} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'treatments', element: <TreatmentsPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'doctors', element: <DoctorsPage /> },
      { path: 'partners', element: <PartnersPage /> },
      { path: 'testimonials', element: <TestimonialsPage /> },
      { path: 'contact', element: <ContactPage /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
