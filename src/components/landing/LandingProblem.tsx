import { Brain, X } from "lucide-react"

export const LandingProblem = () => {
  return (
    <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute inset-0 bg-linear-to-tr from-purple-600 to-amber-500 rounded-3xl blur-2xl opacity-20 transform rotate-3"></div>
              <div className="relative bg-white border border-slate-100 p-8 md:p-10 rounded-3xl shadow-2xl shadow-slate-200/50">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1 text-red-600">
                      <X className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        Belajar SKS (Sistem Kebut Semalam)
                      </h3>
                      <p className="text-slate-500 mt-1">
                        Hafal saat ujian, lupa total 2 hari kemudian. Waktu
                        terbuang percuma.
                      </p>
                    </div>
                  </div>
                  <div className="w-px h-8 bg-slate-200 ml-5"></div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1 text-red-600">
                      <X className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        Catatan Menumpuk
                      </h3>
                      <p className="text-slate-500 mt-1">
                        Punya banyak buku catatan tapi tidak pernah dibaca ulang
                        secara efektif.
                      </p>
                    </div>
                  </div>
                  <div className="w-px h-8 bg-slate-200 ml-5"></div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1 text-red-600">
                      <X className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        Frustrasi & Merasa "Bodoh"
                      </h3>
                      <p className="text-slate-500 mt-1">
                        Menyalahkan otak sendiri padahal metodenya yang salah.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Masalahnya Bukan <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-purple-400">
                  Otak Anda.
                </span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Otak manusia didesain untuk melupakan informasi yang tidak
                dianggap "penting" untuk bertahan hidup. Tanpa sinyal yang
                tepat, 90% hafalan Anda akan dibuang oleh otak dalam 7 hari.
              </p>
              <div className="flex items-center gap-4 text-slate-700 font-medium p-4 bg-amber-50 rounded-xl border border-amber-100 border-l-4 border-l-amber-400">
                <Brain className="w-6 h-6 text-amber-600" />
                <p>Kami memberi "sinyal" yang tepat ke otak Anda.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}