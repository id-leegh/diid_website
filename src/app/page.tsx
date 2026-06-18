import { SiteLayout } from "@/components/layout/SiteLayout";
import {
  HeroClobe,
  FeatureGrid,
  ValueSection,
  TrustGrid,
  TestimonialSection,
  FinalCTA,
} from "@/components/home/ClobeSections";

export default function HomePage() {
  return (
    <SiteLayout>
      <HeroClobe />
      <FeatureGrid />
      <ValueSection />
      <TrustGrid />
      <TestimonialSection />
      <FinalCTA />
    </SiteLayout>
  );
}
