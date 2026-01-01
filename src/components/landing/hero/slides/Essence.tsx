import { SlideContainer } from "@/components/shared/SlideContainer";
import { Search, Database, FileSearch, ScanSearch } from "lucide-react";

export const Essence = ({ index }: { index: number }) => {
  return (
    <SlideContainer>
      {/* Header */}
      <div className="flex justify-between items-start text-xs font-mono tracking-widest border-b border-white/5 pb-6">
        <div className="flex items-center gap-2 text-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
          <Search className="w-4 h-4 animate-pulse text-primary" />
          ESENSI
        </div>
        <span className="text-white/30">0{index} / 08</span>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10 mt-2">
        {/* Background Neon Elements - Primary/Purple Theme */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-pulse pointer-events-none" />
        
        {/* Search Grid Background */}
        <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(168,85,247,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.2)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="relative space-y-8 max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl text-white/90 font-light tracking-wide leading-tight">
            APA YANG
          </h2>
          
          <div className="relative group perspective-1000">
            {/* 3D Glowing Text */}
            <h1 className="relative z-10 font-display font-black text-5xl sm:text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-purple-200 via-primary to-indigo-600 drop-shadow-[0_0_35px_rgba(168,85,247,0.5)] tracking-tight leading-tight transition-transform duration-700 group-hover:scale-105 group-hover:rotate-x-12">
              SEBENARNYA TERSISA?
            </h1>
            
            {/* Reflection Effect */}
            <h1 className="absolute top-full left-0 right-0 z-0 font-display font-black text-5xl sm:text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-t from-white/10 to-transparent blur-sm transform scale-y-[-0.5] opacity-30 pointer-events-none">
              SEBENARNYA TERSISA?
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white/70 font-light text-lg md:text-xl">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              Potongan informasi?
            </span>
            <span className="hidden md:block text-white/20">|</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              Atau pemahaman utuh?
            </span>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute right-8 md:right-24 bottom-32 hidden md:block opacity-60 animate-float delay-200">
           <div className="p-4 rounded-full border border-primary/20 bg-primary/5 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
             <Database className="w-8 h-8 text-purple-300" />
           </div>
        </div>
        <div className="absolute left-8 md:left-24 top-32 hidden md:block opacity-60 animate-float delay-500">
           <div className="p-4 rounded-full border border-primary/20 bg-primary/5 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
             <FileSearch className="w-8 h-8 text-purple-300" />
           </div>
        </div>

        {/* Bottom Badge */}
        <div className="mt-16 flex items-center gap-3 px-6 py-2 rounded-full border border-primary/30 bg-primary/10 shadow-[0_0_20px_rgba(168,85,247,0.1)] backdrop-blur-md">
          <ScanSearch className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-purple-200 text-xs md:text-sm font-mono tracking-widest uppercase">
            Searching Memory Banks...
          </span>
        </div>
      </div>
    </SlideContainer>
  );
};
