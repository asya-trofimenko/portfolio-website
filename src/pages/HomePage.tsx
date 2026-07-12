import HeroSection from '../components/sections/HeroSection';
import PhotoScrollSection from '../components/sections/PhotoScrollSection';
import CoreExpertise from '../components/sections/CoreExpertise';
import ServicesSection from '../components/sections/ServicesSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import CTASection from '../components/sections/CTASection';
import TestimonialsSection from '../components/sections/TestimonialsSection';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <PhotoScrollSection />
      <CoreExpertise />
      <ServicesSection />
      <ProjectsSection />
      <CTASection />
      <TestimonialsSection />
    </div>
  );
}
