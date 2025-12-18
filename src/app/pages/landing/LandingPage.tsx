import { LandingHero } from "@/components/landing/LandingHero";
import { LandingProblem } from "@/components/landing/LandingProblem";
import { LandingFeatures } from "@/components/landing/LandingFeatures";
import { LandingHowItWorks } from "@/components/landing/LandingHowItWork";
import { LandingUserPersonas } from "@/components/landing/LandingUserPersonas";
import { LandingFAQ } from "@/components/landing/LandingFAQ";
import { LandingCTA } from "@/components/landing/LandingCTA";

export const LandingPage = () => {
  return (
    <>
      <LandingHero />
      <LandingProblem />
      <LandingFeatures />
      <LandingHowItWorks />
      <LandingUserPersonas />
      <LandingFAQ />
      <LandingCTA />
    </>
  );
};
