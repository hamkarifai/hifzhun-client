import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { ParticleBackground } from "@/components/three/ParticleBakcground";

export const LandingHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f0720]">
      {/* 3D Background */}
      <ParticleBackground />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0720]/80 via-transparent to-[#0f0720] z-0 pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-purple-200 text-xs font-bold mb-8 uppercase tracking-wider"
          >
            <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>Revolusi Cara Belajar Anda</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8"
          >
            Belajar Sekali,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-amber-200">
              Ingat Selamanya
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-purple-100/80 max-w-3xl mb-12"
          >
            Gunakan algoritma{" "}
            <span className="text-amber-400 font-bold">Spaced Repetition</span>{" "}
            untuk mengubah memori jangka pendek menjadi aset seumur hidup.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-5"
          >
            <button className="px-10 py-5 rounded-2xl bg-purple-600 text-white font-bold flex items-center gap-3">
              Mulai Belajar
              <ArrowRight />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
