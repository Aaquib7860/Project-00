import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustedBySection } from "@/components/home/TrustedBySection";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { IndustryExpertise } from "@/components/home/IndustryExpertise";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { TechStackSection } from "@/components/home/TechStackSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustedBySection />
      <CapabilitiesSection />
      <StatsSection />
      <IndustryExpertise />
      <CaseStudiesSection />
      <TechStackSection />
    </Layout>
  );
};

export default Index;
