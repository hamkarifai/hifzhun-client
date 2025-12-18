export const LandingFooter = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-100 text-center">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-2 mb-6 opacity-80">
          <div className="w-6 h-6 bg-slate-900 rounded-lg flex items-center justify-center text-white text-xs font-bold">
            F
          </div>
          <span className="font-bold text-slate-900">FSRS.edu</span>
        </div>
        <div className="flex justify-center gap-8 mb-8 text-sm font-medium text-slate-500">
          <a href="#" className="hover:text-purple-600 transition-colors">
            Tentang Kami
          </a>
          <a href="#" className="hover:text-purple-600 transition-colors">
            Kebijakan Privasi
          </a>
          <a href="#" className="hover:text-purple-600 transition-colors">
            Syarat & Ketentuan
          </a>
          <a href="#" className="hover:text-purple-600 transition-colors">
            Kontak
          </a>
        </div>
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} FSRS Education Platform. Dibuat
          dengan <span className="text-red-500">❤</span> untuk penuntut ilmu.
        </p>
      </div>
    </footer>
  );
};
