import { Clock, GraduationCap, Users } from "lucide-react";

export const LandingUserPersonas = () => {
  return (
    <section className="py-24 container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">
        Dibuat untuk Pembelajar Jangka Panjang
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: <GraduationCap className="w-10 h-10 text-white" />,
            title: "Santri & Mahasiswa",
            desc: "Hafalan lancar tanpa begadang. Hadits, rumus, kosa kata, semua aman.",
            bg: "bg-purple-600",
            hover: "group-hover:bg-purple-700",
          },
          {
            icon: <Users className="w-10 h-10 text-white" />,
            title: "Guru & Pendidik",
            desc: "Pastikan murid benar-benar paham. Bukan sekadar hafal untuk ujian lalu lupa.",
            bg: "bg-slate-800",
            hover: "group-hover:bg-slate-900",
          },
          {
            icon: <Clock className="w-10 h-10 text-white" />,
            title: "Lifelong Learner",
            desc: "Profesional sibuk? Cukup 15 menit sehari untuk menguasai skill baru.",
            bg: "bg-amber-500",
            hover: "group-hover:bg-amber-600",
          },
        ].map((item, idx) => (
          <div key={idx} className="group cursor-default">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center text-center relative overflow-hidden">
              <div
                className={`absolute top-0 left-0 w-full h-2 ${item.bg}`}
              ></div>
              <div
                className={`w-20 h-20 ${item.bg} rounded-2xl flex items-center justify-center mb-6 shadow-lg rotate-3 group-hover:rotate-6 transition-transform duration-300`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
