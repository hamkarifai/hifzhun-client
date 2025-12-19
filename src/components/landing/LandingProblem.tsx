import { Brain, X } from "lucide-react"

export const LandingProblem = () => {
  return (
    <section className="py-24 bg-[#0f0720] relative border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute inset-0 bg-linear-to-tr from-purple-600/30 to-amber-500/30 rounded-3xl blur-2xl opacity-20 transform rotate-3"></div>
              <div className="relative bg-[#1a102e] border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl shadow-purple-900/20">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-1 text-red-400">
                      <X className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        Belajar SKS (Sistem Kebut Semalam)
                      </h3>
                      <p className="text-purple-200/60 mt-1">
                        Hafal saat ujian, lupa total 2 hari kemudian. Waktu
                        terbuang percuma.
                      </p>
                    </div>
                  </div>
                  <div className="w-px h-8 bg-white/10 ml-5"></div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-1 text-red-400">
                      <X className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        Catatan Menumpuk
                      </h3>
                      <p className="text-purple-200/60 mt-1">
                        Punya banyak buku catatan tapi tidak pernah dibaca ulang
                        secara efektif.
                      </p>
                    </div>
                  </div>
                  <div className="w-px h-8 bg-white/10 ml-5"></div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-1 text-red-400">
                      <X className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        Frustrasi & Merasa "Bodoh"
                      </h3>
                      <p className="text-purple-200/60 mt-1">
                        Menyalahkan otak sendiri padahal metodenya yang salah.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Belajar bertahun-tahun, hanya untuk jadi kenangan. <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 to-amber-400">
                  Rugi, bukan?
                </span>
              </h2>
              <p className="text-lg text-purple-200/80 mb-8 leading-relaxed">
                Belajar seharusnya untuk diingat, bukan untuk dilupakan. Kalau akhirnya dilupakan, hasil belajarnya kemana?
              </p>
              <div className="flex items-center gap-4 text-purple-100 font-medium p-6 bg-red-500/10 rounded-xl border border-red-500/20 border-l-4 border-l-red-500">
                <div className="shrink-0">
                   <Brain className="w-8 h-8 text-red-400" />
                </div>
                <p className="italic text-purple-100/90">"Lupa yang dibiarkan, bisa membuat lelah, waktu, dan usaha panjang terasa sia-sia."</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}