import { useEffect, useRef, useState } from "react";

interface UseHeroSliderProps {
  slideCount: number;
}

export const useHeroSlider = ({ slideCount }: UseHeroSliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // scroll listener
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const onScroll = () => {
      const index = Math.round(slider.scrollLeft / slider.clientWidth);
      setActiveIndex(index);
    };

    slider.addEventListener("scroll", onScroll);
    return () => slider.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    // Clamp index
    const targetIndex = Math.max(0, Math.min(index, slideCount - 1));
    
    slider.scrollTo({
      left: targetIndex * slider.clientWidth,
      behavior: "smooth",
    });
  };

  return {
    sliderRef,
    activeIndex,
    slideCount,
    goTo: (index: number) => scrollTo(index),
    next: () => scrollTo(activeIndex + 1),
    prev: () => scrollTo(activeIndex - 1),
  };
};
