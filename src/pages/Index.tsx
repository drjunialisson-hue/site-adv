import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PracticeAreasSection from "@/components/PracticeAreasSection";
import TeamSection from "@/components/TeamSection";
import StatsSection from "@/components/StatsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO 
        canonical="/"
        title="Junialisson Costa - Advocacia Criminal"
        description="Dr. Junialisson é graduado em Direito pela Universidade Católica do Salvador (UCSal), com formação acadêmica voltada à área penal."
      />
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PracticeAreasSection />
      <TeamSection />
      <StatsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
      <AccessibilityWidget />
    </main>
  );
};

export default Index;
