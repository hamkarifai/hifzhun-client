
import { HeroSection } from "@/features/landing/sections/Hero/HeroSection";
import { SolutionSection } from "@/features/landing/sections/Solutions/SolutionSection";
import { MetodologiSection } from "@/features/landing/sections/Metodologi/MetodologiSection";
import { FeatureSection } from "@/features/landing/sections/FeatureSection/FeatureSection";
import { InklusivitasSection } from "@/features/landing/sections/Inklusivitas/InklusivitasSection";
import { TestimonialSection } from "@/features/landing/sections/Testimonial/TestimonialSection";

export const LandingPage = () => {
  return (
    <div className="bg-[#0f0720] min-h-screen text-white">
      <HeroSection />
      <SolutionSection />
      <MetodologiSection />
      <FeatureSection />
      <InklusivitasSection />
      <TestimonialSection />
    </div>
  );
};
