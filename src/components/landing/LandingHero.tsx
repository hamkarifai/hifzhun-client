import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ParticleBackground } from "@/components/three/ParticleBakcground";

export const LandingHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f0720]">
      {/* 3D Background */}
      <ParticleBackground />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0f0720]/80 via-transparent to-[#0f0720] z-0 pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6"
          >
            Dulu <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-amber-200">Tidak Tahu</span>.
            <br />
            Sekarang <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-amber-200">Lupa</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-white/90 font-bold mb-6 max-w-4xl"
          >
            Terasa familiar, bukan? <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-amber-200">Lupa itu sistematis</span> -{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-amber-200">dan bisa dikendalikan.</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-purple-100/70 max-w-2xl mb-10 leading-relaxed"
          >
            Pelajari bagaimana <span className="text-amber-400 font-bold">Dura</span> membantu membantu  <span className="text-amber-400 font-bold">Anda</span> menghadapi  <span className="text-amber-400 font-bold">Lupa</span>,
agar perjuangan Anda tidak hanya menjadi sebuah kenangan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-5"
          >
            <button className="px-10 py-5 rounded-2xl bg-purple-600 text-white font-bold flex items-center gap-3">
              Pelajari Selengkapnya
              <ArrowRight />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
