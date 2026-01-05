import { HeroNavButton } from "./HeroNavButton";
import { useHeroSlider } from "./useHeroSlider";
import { HeroPagination } from "./HeroPagination";
import { Afterthought } from "./slides/Afterthought";
import { Essence } from "./slides/Essence";
import { Meaning } from "./slides/Meaning";
import { Conclusion } from "./slides/Conclusion";
import { RealityCheckSlide } from "./slides/RealityCheck";
import { TimeAnalysis } from "./slides/TimeAnalysis";
import { TimePurpose } from "./slides/TimePurpose";
import { Reflection } from "./slides/Reflection";

export const HeroSection = () => {
  const { sliderRef, activeIndex, slideCount, goTo, next, prev } =
    useHeroSlider({ slideCount: 8 });

  return (
    <main className="bg-deep-universe h-screen w-full relative overflow-hidden flex flex-col pt-24">
      {/* Stars Overlay */}
      <div className="stars-overlay z-0" />

      {/* Additional Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[128px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[128px] pointer-events-none animate-pulse delay-700" />

      <section className="flex-1 flex flex-col justify-center items-center relative z-10 px-6">
        <div className="relative w-full max-w-7xl mx-auto h-150 flex items-center">
          <HeroNavButton
            direction="left"
            disabled={activeIndex === 0}
            onClick={prev}
          />

          <HeroNavButton
            direction="right"
            disabled={activeIndex === slideCount - 1}
            onClick={next}
          />

          <div
            ref={sliderRef}
            className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide items-center scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* SLIDE 1 */}
            <RealityCheckSlide index={1} />

            {/* SLIDE 2 */}
            <TimeAnalysis index={2} />

            {/* SLIDE 3 */}
            <TimePurpose index={3} /> 

            {/* SLIDE 4 */}
            <Reflection index={4} />

            {/* SLIDE 5 */}
            <Afterthought index={5} />

            {/* SLIDE 6 */}
            <Essence index={6} />

            {/* SLIDE 7 */}
            <Meaning index={7} />

            {/* SLIDE 8 */}
            <Conclusion index={8} />
          </div>
        </div>

        <HeroPagination
          count={slideCount}
          activeIndex={activeIndex}
          onSelect={goTo}
        />
      </section>
    </main>
  );
};
