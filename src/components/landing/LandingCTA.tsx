export const LandingCTA = () => {
  return (
    <section className="py-24 container mx-auto px-6 bg-[#0f0720]">
      <div className="bg-[#1a102e] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-purple-900/40 border border-white/10">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-125 h-125 bg-purple-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-amber-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
            Mulai Investasi Leher ke Atas. <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-amber-400">
              Sekarang Juga.
            </span>
          </h2>
          <p className="text-purple-200/80 text-xl mb-12 max-w-2xl mx-auto">
            Akses penuh ke metode belajar paling efisien di dunia. Gratis untuk
            selamanya bagi para penuntut ilmu yang serius.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-12 py-5 rounded-full bg-purple-600 text-white font-bold text-xl hover:bg-purple-500 transition-all shadow-lg shadow-purple-600/40 hover:-translate-y-1">
              Buat Akun Gratis
            </button>
            <button className="w-full sm:w-auto px-12 py-5 rounded-full bg-transparent border-2 border-white/20 text-white font-bold text-xl hover:bg-white hover:text-purple-900 hover:border-white transition-all">
              Pelajari Lebih Lanjut
            </button>
          </div>
          <p className="mt-8 text-purple-200/40 text-sm font-medium">
            Tanpa kartu kredit. Tanpa komitmen.
          </p>
        </div>
      </div>
    </section>
  );
};
