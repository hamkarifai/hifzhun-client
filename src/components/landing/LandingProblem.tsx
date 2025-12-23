import { Brain, Clock, AlertTriangle, HelpCircle, ArrowRight } from "lucide-react";

export const LandingProblem = () => {
  const problems = [
    {
      id: "01",
      text: "Belajar bertahun-tahun, hanya untuk jadi kenangan.",
      highlight: "Rugi, bukan?",
      icon: Clock,
      color: "purple",
      delay: "delay-0"
    },
    {
      id: "02",
      text: "Belajar seharusnya untuk diingat,",
      highlight: "bukan untuk dilupakan.",
      icon: Brain,
      color: "emerald",
      delay: "delay-100"
    },
    {
      id: "03",
      text: "Kalau akhirnya dilupakan,",
      highlight: "hasil belajarnya kemana?",
      icon: HelpCircle,
      color: "amber",
      delay: "delay-200"
    },
    {
      id: "04",
      text: "Lupa yang dibiarkan, bisa membuat lelah, waktu, dan usaha panjang",
      highlight: "terasa sia-sia.",
      icon: AlertTriangle,
      color: "red",
      delay: "delay-300"
    }
  ];

  const getIconStyles = (color: string) => {
    // 3D Glassy Effect Base
    const base = "w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 relative z-20 overflow-hidden";
    const glass = "backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border-t border-l border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]";
    
    switch (color) {
      case "purple":
        return `${base} ${glass} shadow-[0_8px_32px_-6px_rgba(168,85,247,0.4),0_0_10px_rgba(168,85,247,0.2)] group-hover:shadow-[0_15px_40px_-5px_rgba(168,85,247,0.6),0_0_25px_rgba(168,85,247,0.4)] border-b border-r border-purple-500/30 text-purple-300 group-hover:text-white group-hover:-translate-y-2 group-hover:scale-105`;
      case "emerald":
        return `${base} ${glass} shadow-[0_8px_32px_-6px_rgba(16,185,129,0.4),0_0_10px_rgba(16,185,129,0.2)] group-hover:shadow-[0_15px_40px_-5px_rgba(16,185,129,0.6),0_0_25px_rgba(16,185,129,0.4)] border-b border-r border-emerald-500/30 text-emerald-300 group-hover:text-white group-hover:-translate-y-2 group-hover:scale-105`;
      case "amber":
        return `${base} ${glass} shadow-[0_8px_32px_-6px_rgba(245,158,11,0.4),0_0_10px_rgba(245,158,11,0.2)] group-hover:shadow-[0_15px_40px_-5px_rgba(245,158,11,0.6),0_0_25px_rgba(245,158,11,0.4)] border-b border-r border-amber-500/30 text-amber-300 group-hover:text-white group-hover:-translate-y-2 group-hover:scale-105`;
      case "red":
        return `${base} ${glass} shadow-[0_8px_32px_-6px_rgba(239,68,68,0.4),0_0_10px_rgba(239,68,68,0.2)] group-hover:shadow-[0_15px_40px_-5px_rgba(239,68,68,0.6),0_0_25px_rgba(239,68,68,0.4)] border-b border-r border-red-500/30 text-red-300 group-hover:text-white group-hover:-translate-y-2 group-hover:scale-105`;
      default: return "";
    }
  };

  const getGradient = (color: string) => {
    switch (color) {
      case "purple": return "from-purple-500/20 via-purple-500/5 to-transparent";
      case "emerald": return "from-emerald-500/20 via-emerald-500/5 to-transparent";
      case "amber": return "from-amber-500/20 via-amber-500/5 to-transparent";
      case "red": return "from-red-500/20 via-red-500/5 to-transparent";
      default: return "";
    }
  };

  return (
    <section className="py-32 bg-[#0f0720] relative border-t border-white/5 overflow-hidden">
      {/* Abstract Background */}
  
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <span className="text-purple-400 font-semibold tracking-wider text-sm uppercase mb-3 block">Reality Check</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
           Ketika Belajar Berakhir dengan <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Dilupakan</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((item, index) => (
            <div 
              key={index}
              className={`group relative min-h-80 p-8 md:p-10 rounded-[2rem] bg-[#130b24] border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col justify-between ${item.delay}`}
            >
              {/* Hover Gradient Glow */}
              <div className={`absolute top-0 right-0 w-75 h-75 bg-gradient-to-bl ${getGradient(item.color)} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none translate-x-1/3 -translate-y-1/3`}></div>
              
              {/* Large Number Background */}
              <div className="absolute -bottom-4 -right-4 text-[12rem] font-bold text-white/2 group-hover:text-white/4 transition-colors duration-500 select-none leading-none">
                {item.id}
              </div>

              {/* Icon Container with 3D Effect */}
              <div className={getIconStyles(item.color)}>
                {/* Inner Shine */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <item.icon className="w-8 h-8 relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:rotate-6" />
              </div>

              {/* Content */}
              <div className="relative z-10 mt-8">
                <p className="text-2xl md:text-3xl font-medium text-white/90 leading-snug mb-2">
                  {item.text}
                </p>
                <div className="flex items-center gap-3">
                  <span className={`text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-${item.color}-400 to-${item.color}-200`}>
                    {item.highlight}
                  </span>
                </div>
              </div>
              
              {/* Subtle Indicator */}
              <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                 <ArrowRight className="w-6 h-6 text-white/20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
