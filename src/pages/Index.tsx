
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import PhotoGallery from '@/components/PhotoGallery';
import QuickImpactStats from '@/components/QuickImpactStats';
import AboutMinistry from '@/components/AboutMinistry';

import ProgramsPreview from '@/components/ProgramsPreview';
import ImpactStories from '@/components/ImpactStories';
import ValuesApproach from '@/components/ValuesApproach';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import HowToHelp from '@/components/HowToHelp';
import VolunteerOpportunitiesPreview from '@/components/VolunteerOpportunitiesPreview';
import DonationImpactSection from '@/components/DonationImpactSection';
import SEO from '@/components/SEO';
import { useEffect } from 'react';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="Hope and Faith Foundation - Transforming Children's Lives in Uganda" 
        description="Hope and Faith Foundation is a registered Ugandan NGO transforming children's lives through comprehensive education, healthcare, protection, and community development programs. Join our mission to create lasting change for vulnerable children and families in Central Region Uganda."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['Hope and Faith Foundation', 'children foundation Uganda', 'child welfare Kampala', 'education programs Uganda', 'sponsor child Uganda', 'Uganda NGO', 'donate children Uganda', 'community development Uganda', 'child protection Uganda', 'vulnerable children support']}
      />
      <Hero />
      <PhotoGallery />
      <QuickImpactStats />
      <AboutMinistry />
      
      <ProgramsPreview />
      <ImpactStories />
      <ValuesApproach />
      <TestimonialsCarousel />
      <HowToHelp />
      <VolunteerOpportunitiesPreview />
      <DonationImpactSection />
    </PageLayout>
  );
};

export default Index;
