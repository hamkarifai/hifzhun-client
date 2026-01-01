import { SlideContainer } from "@/components/shared/SlideContainer";
import { AlertTriangle, ArrowDown, Siren, ShieldAlert } from "lucide-react";

export const Conclusion = ({ index }: { index: number }) => {
  return (
    <SlideContainer>
      {/* Header */}
      <div className="flex justify-between items-start text-xs font-mono tracking-widest border-b border-white/5 pb-6">
        <div className="flex items-center gap-2 text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]">
          <AlertTriangle className="w-4 h-4 animate-pulse text-orange-500" />
          KESIMPULAN
        </div>
        <span className="text-white/30">0{index} / 08</span>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10 mt-2">
        {/* Background Neon Elements - Orange/Warning Theme */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] animate-pulse pointer-events-none" />
        
        {/* Hazard Stripes Background */}
        <div className="absolute inset-0 pointer-events-none opacity-5 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#f97316_10px,#f97316_20px)]"></div>

        <div className="relative space-y-8 max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl text-white/90 font-light tracking-wide leading-tight">
            TERASA
          </h2>
          
          <div className="relative group">
            {/* Main Glowing Text */}
            <h1 className="relative z-10 font-display font-black text-6xl sm:text-7xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-orange-300 via-orange-500 to-red-600 drop-shadow-[0_0_40px_rgba(249,115,22,0.6)] tracking-tight leading-tight transition-transform duration-500 group-hover:scale-105">
              SIA-SIA
            </h1>
            
            {/* Warning Border Effect */}
            <div className="absolute -inset-4 border-2 border-orange-500/0 group-hover:border-orange-500/20 rounded-xl transition-all duration-500 scale-95 group-hover:scale-100"></div>
          </div>

          <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto">
            Jangan biarkan siklus ini terus berulang. <br/>
            <span className="text-white font-medium">Ada cara yang lebih baik.</span>
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-12 md:mt-16">
          <button className="group relative px-10 py-4 rounded-xl bg-white text-black font-bold text-sm tracking-widest uppercase hover:bg-gray-100 transition-all flex items-center gap-3 overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:-translate-y-1">
            <span className="relative z-10">Lihat Solusinya</span>
            <ArrowDown className="w-4 h-4 relative z-10 group-hover:translate-y-1 transition-transform" />
            
            {/* Button Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>
        </div>

        {/* Floating Icons */}
        <div className="absolute left-8 md:left-24 bottom-32 hidden md:block opacity-60 animate-float delay-500">
           <div className="p-4 rounded-full border border-orange-500/20 bg-orange-500/5 shadow-[0_0_20px_rgba(249,115,22,0.15)]">
             <Siren className="w-8 h-8 text-orange-400" />
           </div>
        </div>
        <div className="absolute right-8 md:right-24 top-32 hidden md:block opacity-60 animate-float delay-200">
           <div className="p-4 rounded-full border border-orange-500/20 bg-orange-500/5 shadow-[0_0_20px_rgba(249,115,22,0.15)]">
             <ShieldAlert className="w-8 h-8 text-orange-400" />
           </div>
        </div>
      </div>
    </SlideContainer>
  );
};
