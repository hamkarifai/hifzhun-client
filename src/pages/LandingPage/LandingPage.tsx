
import { HeroSection } from "@/features/landing/sections/Hero/HeroSection";
import { SolutionSection } from "@/features/landing/sections/Solutions/SolutionSection";

export const LandingPage = () => {
  return (
    <div className="bg-[#0f0720] min-h-screen text-white">
      <HeroSection />
      <SolutionSection />
    </div>
  );
};
