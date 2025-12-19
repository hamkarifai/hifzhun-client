export const LandingHowItWorks = () => {
  return (
    <section
      id="how"
      className="py-24 bg-[#0f0720] text-white relative overflow-hidden border-t border-white/5"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-purple-900/10 via-[#0f0720] to-[#0f0720] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Sains di Balik <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-amber-400">
                  Ingatan Super
                </span>
              </h2>
              <p className="text-purple-200/80 text-lg leading-relaxed">
                Kami tidak menggunakan magic. Kami menggunakan data. Setiap
                interaksi Anda dicatat untuk memprediksi momen "lupa" yang
                presisi.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Input Materi",
                  desc: "Masukkan hafalan atau pilih dari kurikulum tersedia.",
                  color: "bg-purple-500",
                },
                {
                  title: "Review Terjadwal",
                  desc: "Sistem memanggil Anda HANYA saat Anda hampir lupa.",
                  color: "bg-amber-500",
                },
                {
                  title: "Konsolidasi Memori",
                  desc: "Jalur saraf menebal, ingatan menjadi permanen.",
                  color: "bg-emerald-500",
                },
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center font-bold text-[#0f0720] shadow-[0_0_20px_rgba(255,255,255,0.2)] z-10 group-hover:scale-110 transition-transform`}
                    >
                      {idx + 1}
                    </div>
                    {idx !== 2 && (
                      <div className="w-0.5 h-full bg-white/10 my-2 group-hover:bg-white/20 transition-colors"></div>
                    )}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-purple-200/60 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Graph/Demo */}
          <div className="lg:w-1/2 w-full">
            <div className="relative bg-[#1a102e]/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>

              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-sm font-medium text-purple-200/60 uppercase tracking-wider">
                    Kurva Melupakan (Forgetting Curve)
                  </span>
                  <div className="flex gap-3">
                    <div className="flex items-center gap-2 text-xs text-purple-200/60">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      Normal
                    </div>
                    <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
                      FSRS
                    </div>
                  </div>
                </div>

                {/* Graph Area */}
                <div className="h-64 w-full relative">
                  <svg
                    className="w-full h-full overflow-visible"
                    viewBox="0 0 400 200"
                    preserveAspectRatio="none"
                  >
                    {/* Grid lines */}
                    <line
                      x1="0"
                      y1="100"
                      x2="400"
                      y2="100"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1="0"
                      y1="50"
                      x2="400"
                      y2="50"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />

                    {/* Normal Curve (Dropping fast) */}
                    <path
                      d="M0,10 Q50,180 400,190"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="3"
                      className="opacity-40"
                    />

                    {/* SRS Curve (Sawtooth rising) */}
                    <path
                      d="M0,10 
                                  Q40,40 50,10 
                                  Q100,60 120,10
                                  Q180,80 220,10
                                  Q300,50 400,10"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                    />

                    {/* Nodes */}
                    <circle cx="0" cy="10" r="4" fill="#10b981" />
                    <circle cx="50" cy="10" r="4" fill="#10b981" />
                    <circle cx="120" cy="10" r="4" fill="#10b981" />
                    <circle cx="220" cy="10" r="4" fill="#10b981" />
                    <circle cx="400" cy="10" r="4" fill="#10b981" />
                  </svg>
                </div>

                <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                  <p className="text-emerald-400 text-sm font-medium text-center">
                    "Dengan FSRS, waktu belajar berkurang 50% tapi retensi
                    meningkat 300%."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
