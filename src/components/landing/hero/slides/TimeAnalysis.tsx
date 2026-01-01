import { SlideContainer } from "../../LandingHero";

export const TimeAnalysis = () => {
  return (
    <>
      <SlideContainer>
        {/* Dynamic Background Glow */}
        <div
          className={`absolute top-0 right-0 w-125 h-125 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 transition-all duration-1000 ${
            bgGlow || "bg-primary/5"
          }`}
        />

        <SlideHeader index={index} icon={icon} />
        <div className="flex-1 flex flex-col items-center justify-center text-center mt-4 z-10">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-4xl mx-auto drop-shadow-2xl">
            {title}
          </h2>
        </div>
      </SlideContainer>
    </>
  );
};
