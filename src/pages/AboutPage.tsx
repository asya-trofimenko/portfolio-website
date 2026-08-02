import AboutHeroSection from '../components/sections/AboutHeroSection';
import AboutBioSection from '../components/sections/AboutBioSection';
import CareersSection from '../components/sections/CareersSection';
import CoreValuesSection from '../components/sections/CoreValuesSection';
import CTASection from '../components/sections/CTASection';
import TestimonialsSection from '../components/sections/TestimonialsSection';

export default function AboutPage() {
  return (
    <div>
      <AboutHeroSection />
      <AboutBioSection />
      <CareersSection />
      <CoreValuesSection />
      <CTASection />
      <TestimonialsSection />
    </div>
  );
}
