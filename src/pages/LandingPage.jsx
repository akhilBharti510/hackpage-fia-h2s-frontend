import Layout from "../components/layout/Layout.jsx";
import HeroSection from "../components/sections/HeroSection.jsx";
import AboutSection from "../components/sections/AboutSection.jsx";
import FeaturesSection from "../components/sections/FeaturesSection.jsx";
import ImageGridSection from "../components/sections/ImageGridSection.jsx";
import BenefitsSection from "../components/sections/BenefitsSection.jsx";
import ProcessSection from "../components/sections/ProcessSection.jsx";
import ChallengesSection from "../components/sections/ChallengesSection.jsx";
import TimelineSection from "../components/sections/TimelineSection.jsx";
import RewardsSection from "../components/sections/RewardsSection.jsx";
import FaqSection from "../components/sections/FaqSection.jsx";
import CtaSection from "../components/sections/CtaSection.jsx";

export default function LandingPage() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ImageGridSection />
      <BenefitsSection />
      <ProcessSection />
      <ChallengesSection />
      <TimelineSection />
      <RewardsSection />
      <FaqSection />
      <CtaSection />
    </Layout>
  );
}
