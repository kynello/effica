import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { AboutSection, ServicesSection } from '../components/Sections';
import { WhyUsSection, HowSection } from '../components/WhyUs';
import { CaseStudySection, TeamSection } from '../components/CaseStudy';
import { StatsSection, PricingSection, FAQSection } from '../components/Pricing';
import { NewsSection, ManifestoSection, ContactFooter } from '../components/Footer';

export const metadata = {
  title: 'Effica · Practical AI Consulting & Workflow Automation for SMEs',
  description: 'Effica helps small and mid-sized businesses implement AI and automation that actually delivers.',
};

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <HowSection />
      <CaseStudySection />
      <TeamSection />
      <StatsSection />
      <PricingSection />
      <ManifestoSection />
      <NewsSection />
      <FAQSection />
      <ContactFooter />
    </main>
  );
}
