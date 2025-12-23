import { Brain, ShieldCheck, Sparkles, XCircle } from "lucide-react";

export const LandingFeatures = () => {
  return (
    <section
      id="features"
      className="py-24 container mx-auto px-6 bg-[#0f0720] border-t border-white/5"
    >
      {/* Title */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Kerugian ini sebenarnya <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-400">
            bisa dicegah.
          </span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-stretch">
        {/* Left Column: The Problem / Analysis */}
        <div className="space-y-8 flex flex-col justify-center">
          <div className="bg-[#1a102e] p-8 rounded-[2rem] border border-white/10 relative group hover:border-white/20 transition-colors shadow-lg shadow-purple-900/10">
            <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-400 mb-6 border border-red-500/20">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Bukan Datang Tiba-tiba
            </h3>
            <p className="text-purple-200/70 leading-relaxed text-lg">
              Lupa bukan sesuatu yang datang tiba-tiba. Dalam banyak kasus, ia
              muncul karena{" "}
              <span className="text-white font-medium">tidak adanya sistem</span>{" "}
              yang benar-benar membantu pembelajar mengulang dan menjaga ilmunya
              secara konsisten.
            </p>
          </div>

          <div className="bg-[#1a102e] p-8 rounded-[2rem] border border-white/10 relative group hover:border-white/20 transition-colors shadow-lg shadow-purple-900/10">
            <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-400 mb-6 border border-red-500/20">
              <XCircle className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Bukan Salah Kemampuan
            </h3>
            <p className="text-purple-200/70 leading-relaxed text-lg">
              Jadi ketika lupa terjadi, itu bukan karena Anda kurang mampu atau
              kurang sungguh-sungguh. Sering kali, yang tidak ada adalah{" "}
              <span className="text-white font-medium">sistem yang tepat</span>{" "}
              untuk menjaga ingatan tetap hidup.
            </p>
          </div>
        </div>

        {/* Right Column: The Solution (Dura) */}
        <div className="bg-linear-to-br from-[#2d1b4e] to-[#1a102e] p-10 rounded-[2.5rem] border border-purple-500/20 shadow-2xl shadow-purple-900/20 relative overflow-hidden h-full flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-bold mb-8">
              <Sparkles className="w-4 h-4" />
              Solusi Dura.id
            </div>

            <h3 className="text-3xl font-bold text-white mb-6">
              Menghadapi lupa dengan <br />
              <span className="text-purple-300">tenang & berkelanjutan.</span>
            </h3>

            <div className="space-y-6 text-lg text-purple-100/80 leading-relaxed">
              <p>
                <span className="font-bold text-white">Dura.id</span> hadir
                untuk membantu pembelajar menghadapi lupa dengan cara yang lebih
                tenang.
              </p>

              <div className="pl-6 border-l-2 border-purple-500/30 space-y-4">
                <p className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400/60 shrink-0"></span>
                  Bukan dengan tekanan.
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400/60 shrink-0"></span>
                  Bukan dengan jadwal yang memaksa dan padat.
                </p>
              </div>

              <p className="pt-4 border-t border-white/5">
                Melainkan dengan memperhatikan{" "}
                <span className="text-amber-400 font-bold">
                  waktu dan jarak yang tepat
                </span>
                .
              </p>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 mt-6">
                <ShieldCheck className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                <p className="text-base text-white leading-relaxed">
                  Agar ilmu tidak hanya dipelajari untuk dilupakan dan tinggal
                  sebagai kenangan,{" "}
                  <span className="text-green-400 font-bold">
                    tetapi benar-benar bertahan lama.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
