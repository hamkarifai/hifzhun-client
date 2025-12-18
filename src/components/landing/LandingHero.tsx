import { ArrowRight, Zap } from "lucide-react";

export const LandingHero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 container mx-auto px-6 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-200 h-200 bg-purple-200/30 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-200 h-200 bg-amber-100/40 rounded-full blur-[100px] -z-10"></div>

      <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-purple-100 text-purple-700 text-xs font-bold mb-8 uppercase tracking-wider shadow-sm hover:shadow-md transition-shadow cursor-default">
          <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          <span>Revolusi Cara Belajar Anda</span>
        </div>

        <h1 className="animate-fade-up delay-100 text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-8">
          Belajar Sekali, <br className="hidden md:block" />
          <span className="relative z-10 inline-block">
            Ingat Selamanya
            <div className="absolute -bottom-2 left-0 right-0 h-4 bg-amber-300/30 -z-10 -rotate-1"></div>
          </span>
        </h1>

        <p className="animate-fade-up delay-200 text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
          Jangan biarkan ilmu menguap begitu saja. Gunakan algoritma{" "}
          <span className="text-purple-700 font-bold">Spaced Repetition</span>{" "}
          untuk mengubah memori jangka pendek menjadi aset intelektual seumur
          hidup.
        </p>

        <div className="animate-fade-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-purple-600 text-white font-bold text-lg hover:bg-purple-700 hover:scale-105 transition-all shadow-xl shadow-purple-600/30 flex items-center justify-center gap-3 group ring-4 ring-purple-600/10">
            Mulai Belajar Sekarang
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
              <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-8 border-l-slate-700 border-b-[5px] border-b-transparent ml-1"></div>
            </div>
            Lihat Demo
          </button>
        </div>

        {/* Social Proof / Trust Indicators */}
        <div className="animate-fade-up delay-300 mt-16 pt-8 border-t border-slate-200/60 flex flex-col md:flex-row items-center gap-6 text-sm font-semibold text-slate-500">
          <span>Dipercaya oleh pembelajar dari:</span>
          <div className="flex gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Universitas
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Pesantren
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Profesional
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
