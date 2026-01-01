import {
  Hourglass,
  Target,
  HelpCircle,
  HeartCrack,
  Search,
  Stars,
  AlertTriangle,
  ArrowDown,
} from "lucide-react";
import { HeroNavButton } from "./hero/HeroNavButton";
import { HeroPagination } from "./hero/HeroPagination";
import { RealityCheckSlide } from "./hero/slides/RealityCheck";
import { useHeroSlider } from "./hero/useHeroSlider";
import { SlideContainer } from "../shared/SlideContainer";

export const LandingHero = () => {
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
        <div className="relative w-full max-w-7xl mx-auto h-[600px] flex items-center">
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
            <SimpleSlide
              index={2}
              icon={<Hourglass className="w-5 h-5 text-primary" />}
              title={
                <>
                  Menghafal{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 font-bold drop-shadow-[0_0_15px_rgba(124,58,237,0.5)]">
                    bertahun-tahun
                  </span>
                  ,<br />
                  hanya untuk menjadi{" "}
                  <span className="line-through text-muted-foreground decoration-destructive/50 decoration-2">
                    kenangan
                  </span>
                  .
                </>
              }
            />

            {/* SLIDE 3 */}
            <SimpleSlide
              index={3}
              icon={<Target className="w-5 h-5 text-accent" />}
              title={
                <>
                  Belajar seharusnya untuk <br />
                  <span className="text-6xl md:text-8xl font-display font-black text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.5)] tracking-tight mt-4 block">
                    DIINGAT
                  </span>
                </>
              }
            />

            {/* SLIDE 4 */}
            <QuestionSlide
              index={4}
              icon={<HelpCircle className="w-5 h-5 text-secondary" />}
              text="HASIL BELAJAR ITU SEBENARNYA KE MANA?"
              glowColor="text-secondary"
            />

            {/* SLIDE 5 */}
            <QuestionSlide
              index={5}
              icon={<HeartCrack className="w-5 h-5 text-destructive" />}
              text="KE MANA PERGINYA USAHA DAN WAKTU?"
              danger
            />

            {/* SLIDE 6 */}
            <QuestionSlide
              index={6}
              icon={<Search className="w-5 h-5 text-primary" />}
              text="APA YANG SEBENARNYA TERSISA?"
              glowColor="text-primary"
            />

            {/* SLIDE 7 */}
            <QuestionSlide
              index={7}
              icon={<Stars className="w-5 h-5 text-accent" />}
              text="APA MAKNA DARI SEMUA PERJUANGAN ITU?"
              glowColor="text-gold"
            />

            {/* SLIDE 8 */}
            <QuestionSlide
              index={8}
              icon={<AlertTriangle className="w-5 h-5 text-destructive" />}
              text="TERASA SIA-SIA"
              danger
              cta
            />
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

/* ======================================================
   SUB COMPONENTS
====================================================== */

const SlideHeader = ({
  index,
  label,
  icon,
}: {
  index: number;
  label?: string;
  icon: React.ReactNode;
}) => (
  <div className="flex justify-between items-start text-xs font-mono text-muted-foreground tracking-widest border-b border-white/5 pb-6">
    <div className="flex items-center gap-3 uppercase group/header">
      <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover/header:border-white/20 group-hover/header:bg-white/10 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
        {icon}
      </div>
      {label && (
        <span className="text-white/60 font-medium tracking-[0.2em] group-hover/header:text-white transition-colors">
          {label}
        </span>
      )}
    </div>
    <span className="text-white/30 font-light text-sm">
      0{index} <span className="text-white/10 mx-2">/</span> 08
    </span>
  </div>
);

const SimpleSlide = ({
  index,
  icon,
  title,
  bgGlow,
}: {
  index: number;
  icon: React.ReactNode;
  title: React.ReactNode;
  bgGlow?: string;
}) => {
  return (
    <SlideContainer className="overflow-hidden">
      {/* Dynamic Background Glow */}
      <div
        className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 transition-all duration-1000 ${
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
  );
};

const QuestionSlide = ({
  index,
  icon,
  text,
  danger,
  cta,
  glowColor,
}: {
  index: number;
  icon: React.ReactNode;
  text: string;
  danger?: boolean;
  cta?: boolean;
  glowColor?: string;
}) => {
  return (
    <SlideContainer>
      <SlideHeader index={index} icon={icon} />
      <div className="flex-1 flex flex-col items-center justify-center text-center mt-4 gap-10">
        <h2
          className={`font-serif text-4xl md:text-6xl lg:text-7xl leading-tight transition-all duration-500 hover:scale-105 ${
            danger
              ? "text-red-fading drop-shadow-[0_0_20px_rgba(248,113,113,0.3)]"
              : glowColor === "text-gold"
              ? "text-gold-premium drop-shadow-[0_0_20px_rgba(217,119,6,0.3)]"
              : "text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          } ${glowColor || ""}`}
        >
          {text}
        </h2>
        {cta && (
          <button className="group relative px-10 py-4 rounded-xl bg-white text-black font-bold text-sm tracking-widest uppercase hover:bg-gray-100 transition-all flex items-center gap-3 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] hover:-translate-y-1">
            <span className="relative z-10">Lihat Solusinya</span>
            <ArrowDown className="w-4 h-4 relative z-10 group-hover:translate-y-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>
        )}
      </div>
    </SlideContainer>
  );
};
