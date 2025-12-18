import { BookOpen, Brain, CheckCircle2, Star } from "lucide-react";

export const LandingFeatures = () => {
  return (
    <section id="features" className="py-24 container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-3 block">
          Fitur Unggulan
        </span>
        <h2 className="text-4xl font-bold text-slate-900 mb-6">
          Sistem Belajar Tanpa Celah
        </h2>
        <p className="text-xl text-slate-500">
          Didesain khusus untuk pembelajar serius yang menghargai waktu dan
          ilmu.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="group relative bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300">
          <div className="absolute inset-0 bg-linear-to-br from-purple-50 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-purple-600 mb-8 shadow-md shadow-purple-100 ring-1 ring-purple-50 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Hafalan Cerdas
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Sistem mengatur antrian hafalan harian. Tidak ada lagi beban
              menumpuk yang membuat stress.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Prioritas
                Otomatis
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Mode Fokus
                Penuh
              </li>
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group relative bg-slate-900 rounded-[2rem] p-8 border border-slate-800 shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-white">
          <div className="absolute inset-0 bg-linear-to-br from-slate-800 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-amber-400 mb-8 shadow-md shadow-black/20 ring-1 ring-slate-700 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
              <Star className="w-8 h-8 fill-current" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Validasi Guru
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Belajar mandiri itu baik, tapi belajar dengan guru jauh lebih
              terarah. Dapatkan feedback nyata.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-amber-500" /> Pantauan
                Progress
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-amber-500" /> Koreksi
                Bacaan/Konsep
              </li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group relative bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300">
          <div className="absolute inset-0 bg-linear-to-br from-purple-50 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-purple-600 mb-8 shadow-md shadow-purple-100 ring-1 ring-purple-50 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <Brain className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Long-term Asset
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Bangun perpustakaan di kepala Anda. Bukan di catatan yang hilang,
              tapi di neuron yang kuat.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Retensi &gt;
                95%
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Algoritma
                FSRS-5
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
