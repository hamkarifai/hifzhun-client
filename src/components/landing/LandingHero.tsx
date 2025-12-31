import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Hourglass,
  Target,
  HelpCircle,
  HeartCrack,
  Search,
  Stars,
  AlertTriangle,
  ArrowDown,
  Sparkles,
} from "lucide-react";
import { RealityCheckSlide } from "./hero/RealityCheck";
import type { SlideContainerProps } from "@/types/slideContainer";

export const LandingHero = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = 8;

  const scrollToIndex = (index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slideWidth = slider.clientWidth;
    slider.scrollTo({
      left: index * slideWidth,
      behavior: "smooth",
    });
  };

  const scrollSlider = (direction: number) => {
    const newIndex = activeIndex + direction;
    if (newIndex >= 0 && newIndex < slideCount) {
      scrollToIndex(newIndex);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!slider) return;
          const index = Math.round(slider.scrollLeft / slider.clientWidth);
          setActiveIndex(index);
          ticking = false;
        });
        ticking = true;
      }
    };

    slider.addEventListener("scroll", onScroll);
    return () => slider.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="bg-deep-universe h-screen flex flex-col relative overflow-hidden text-foreground">
      {/* Stars Overlay from index.css */}
      <div className="stars-overlay z-0" />

      {/* Additional Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[128px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[128px] pointer-events-none animate-pulse delay-700" />

      {/* HERO SECTION */}
      <section className="flex-1 flex flex-col justify-center relative z-10 px-4 md:px-6">
        <div className="relative w-full max-w-7xl mx-auto h-150 flex items-center">
          {/* Nav Buttons */}
          <button
            onClick={() => scrollSlider(-1)}
            disabled={activeIndex === 0}
            className="absolute left-0 md:-left-16 z-20 p-4 rounded-full border border-white/10 bg-black/40 hover:bg-primary/20 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] backdrop-blur-md transition-all disabled:opacity-30 disabled:cursor-not-allowed group active:scale-95"
          >
            <ChevronLeft className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={() => scrollSlider(1)}
            disabled={activeIndex === slideCount - 1}
            className="absolute right-0 md:-right-16 z-20 p-4 rounded-full border border-white/10 bg-black/40 hover:bg-primary/20 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] backdrop-blur-md transition-all disabled:opacity-30 disabled:cursor-not-allowed group active:scale-95"
          >
            <ChevronRight className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
          </button>

          {/* SLIDER CONTAINER */}
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
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-400 font-bold drop-shadow-[0_0_15px_rgba(124,58,237,0.5)]">
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
                  <span className="text-2xl">Belajar seharusnya untuk</span>{" "}
                  <br />
                  <span className="text-6xl md:text-8xl font-display font-black text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.5)] tracking-tight mt-4 block">
                    DIINGAT
                  </span>
                  <span className="text-2xl">
                    Bukan untuk{" "}
                    <span className="text-red-fading">dilupakan</span>
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

        {/* PAGINATION DOTS */}
        <div className="flex justify-center gap-3 mt-8">
          {Array.from({ length: slideCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                i === activeIndex
                  ? "w-12 bg-linear-to-r from-primary to-purple-400 shadow-[0_0_15px_var(--primary)]"
                  : "w-2 bg-white/10 hover:bg-white/30"
              }`}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

/* ======================================================
   SUB COMPONENTS (STRICT BAQEN STYLING + ENHANCEMENTS)
====================================================== */

export const SlideContainer = ({ children }: SlideContainerProps) => (
  <div className="min-w-full h-full snap-center flex items-center justify-center p-4">
    <div className="vanishing-card w-full max-w-5xl h-112.5 md:h-125 rounded-[2rem] p-8 md:p-16 flex flex-col justify-between border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors duration-500">
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-all duration-1000" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 group-hover:bg-accent/10 transition-all duration-1000 delay-100" />

      {/* Decorative Particles */}
      <div className="absolute top-12 right-12 opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-pulse">
        <Sparkles className="w-12 h-12 text-white" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  </div>
);

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

<RealityCheckSlide index={1} />;

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
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        )}
      </div>
    </SlideContainer>
  );
};
