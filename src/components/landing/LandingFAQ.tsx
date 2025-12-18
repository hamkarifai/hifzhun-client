import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const LandingFAQ = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
  return (
    <section id="faq" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Sering Ditanyakan
        </h2>
        <div className="space-y-4">
          {[
            {
              q: "Apakah ini hanya untuk menghafal Al-Qur'an?",
              a: "Tidak. Meskipun sistem ini sangat efektif untuk tahfidz, Anda bisa menggunakannya untuk mempelajari bahasa asing, materi kedokteran, hukum, koding, atau subjek apapun yang membutuhkan retensi jangka panjang.",
            },
            {
              q: "Berapa lama waktu yang dibutuhkan setiap hari?",
              a: "Sangat fleksibel. Untuk pemula, 15-20 menit sehari sudah cukup untuk menjaga ratusan kartu hafalan tetap aktif. Anda bisa mengatur batas beban harian sesuai kesibukan.",
            },
            {
              q: "Apa bedanya dengan flashcard biasa?",
              a: "Flashcard biasa statis. FSRS (Free Spaced Repetition Scheduler) adalah dinamis. Sistem menghitung kapan tepatnya Anda akan lupa, dan hanya menampilkan kartu tersebut di saat itu. Ini menghemat waktu belajar Anda hingga 70%.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group border border-slate-200 rounded-2xl bg-white overflow-hidden transition-colors hover:border-purple-300"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left font-bold text-slate-900 hover:bg-slate-50/50 transition-colors"
              >
                <span className="text-lg">{item.q}</span>
                <div
                  className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-transform duration-300 ${
                    openFaqIndex === idx
                      ? "rotate-180 bg-purple-100 text-purple-600"
                      : "text-slate-400"
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaqIndex === idx
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-8 pt-0 text-slate-600 leading-relaxed">
                  <p className="pt-2 border-t border-slate-100">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
