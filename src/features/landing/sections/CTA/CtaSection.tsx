import { Sparkles, ArrowRight } from "lucide-react";

export const CtaSection = () => {
  return (
    <section className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden py-32">
      <div className="gate-container">
        <div className="gate-glow"></div>

        {/* 1. INTRO (Helpful Tone) */}
        <div className="mb-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-500/80 text-[10px] font-mono tracking-widest uppercase mb-6">
            <Sparkles className="w-3 h-3" /> Niatkan untuk Menjaga
          </div>

          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6 leading-tight">
            Mulai Perjalanan Anda <br />
            <span className="text-gold-gradient italic">Tanpa Beban</span>
          </h2>

          <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Kami ingin Anda merasakan ketenangannya terlebih dahulu. Sistem ini
            dibangun untuk membantu, bukan memberatkan.
          </p>
        </div>

        {/* 2. THE BUTTON (Simple CTA) */}
        <div className="relative inline-block animate-fade-in-up delay-100 group">
          <div className="particle-orbit opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <a href="#" className="btn-start">
            <span>Mulai Menjaga Sekarang</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3. FOOTER NOTE */}
        <div className="mt-20 border-t border-white/5 pt-8 animate-fade-in-up delay-200">
          <p className="text-gray-600 text-xs mb-4 font-light">
            Kebermanfaatan adalah prioritas kami.
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="footer-link">
              Tentang Kontribusi
            </a>
            <a href="#" className="footer-link">
              Filosofi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
