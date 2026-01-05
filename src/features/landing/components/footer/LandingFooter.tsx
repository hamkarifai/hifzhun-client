export const LandingFooter = () => {
  return (
    <footer className="py-12 bg-[#0f0720] border-t border-white/5 text-center">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-2 mb-6 opacity-80">
          <div className="w-6 h-6 bg-purple-600 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-[0_0_10px_rgba(147,51,234,0.5)]">
            F
          </div>
          <span className="font-bold text-white">FSRS.edu</span>
        </div>
        <div className="flex justify-center gap-8 mb-8 text-sm font-medium text-purple-200/60">
          <a href="#" className="hover:text-purple-400 transition-colors">
            Tentang Kami
          </a>
          <a href="#" className="hover:text-purple-400 transition-colors">
            Kebijakan Privasi
          </a>
          <a href="#" className="hover:text-purple-400 transition-colors">
            Syarat & Ketentuan
          </a>
          <a href="#" className="hover:text-purple-400 transition-colors">
            Kontak
          </a>
        </div>
        <p className="text-purple-200/40 text-sm">
          &copy; {new Date().getFullYear()} FSRS Education Platform. Dibuat
          dengan <span className="text-red-500">❤</span> untuk penuntut ilmu.
        </p>
      </div>
    </footer>
  );
};
