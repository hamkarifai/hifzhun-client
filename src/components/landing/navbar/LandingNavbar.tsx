import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export const LandingNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f0720]/90 backdrop-blur-md border-b border-white/10 h-16 shadow-lg"
          : "bg-transparent h-24"
      }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-purple-600 rounded-xl rotate-3 group-hover:rotate-6 transition-transform shadow-[0_0_15px_rgba(147,51,234,0.5)]"></div>
            <div className="absolute inset-0 bg-[#1a102e] rounded-xl -rotate-3 group-hover:-rotate-6 transition-transform flex items-center justify-center text-white font-bold border border-white/10">
              F
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight transition-colors text-white">
            FSRS<span className="text-purple-400">.edu</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <a
            href="#how"
            className="text-sm font-semibold text-purple-100/80 hover:text-white transition-colors"
          >
            Cara Kerja
          </a>
          <a
            href="#faq"
            className="text-sm font-semibold text-purple-100/80 hover:text-white transition-colors"
          >
            FAQ
          </a>
          <a
            href="#contribution"
            className="text-sm font-semibold text-purple-100/80 hover:text-white transition-colors"
          >
            Kontribusi
          </a>

          {/* Dropdown Tentang */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-semibold text-purple-100/80 hover:text-white transition-colors py-2">
              Tentang <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full right-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right z-50">
              <div className="bg-[#1a102e] border border-white/10 rounded-xl shadow-xl overflow-hidden">
                <div className="flex flex-col">
                  <a
                    href="#about-dura"
                    className="px-4 py-3 text-sm text-purple-100/80 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    Tentang Dura
                  </a>
                  <a
                    href="#values"
                    className="px-4 py-3 text-sm text-purple-100/80 hover:text-white hover:bg-white/5 transition-colors border-t border-white/5"
                  >
                    Nilai & Prinsip
                  </a>
                  <a
                    href="#terms"
                    className="px-4 py-3 text-sm text-purple-100/80 hover:text-white hover:bg-white/5 transition-colors border-t border-white/5"
                  >
                    Term & Value
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 pl-6 border-l border-white/10">
            <button className="text-sm font-semibold text-purple-100 hover:text-white transition-colors">
              Masuk
            </button>
            <button className="px-6 py-2.5 rounded-full bg-white text-purple-900 text-sm font-bold hover:bg-purple-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all transform hover:-translate-y-0.5">
              Daftar Gratis
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#1a102e] border-b border-white/10 p-6 flex flex-col gap-4 shadow-xl animate-fade-up max-h-[80vh] overflow-y-auto">
          <a
            href="#how"
            className="text-base font-medium text-purple-100 p-2 hover:bg-white/5 rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Cara Kerja
          </a>
          <a
            href="#faq"
            className="text-base font-medium text-purple-100 p-2 hover:bg-white/5 rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </a>

          <a
            href="#contribution"
            className="text-base font-medium text-purple-100 p-2 hover:bg-white/5 rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Kontribusi
          </a>

          {/* Mobile About Dropdown */}
          <div className="flex flex-col">
            <button
              className="flex items-center justify-between text-base font-medium text-purple-100 p-2 hover:bg-white/5 rounded-lg w-full"
              onClick={() => setIsAboutOpen(!isAboutOpen)}
            >
              <span>Tentang</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isAboutOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isAboutOpen && (
              <div className="flex flex-col pl-4 gap-1 mt-1 border-l-2 border-white/10 ml-2">
                <a
                  href="#about-dura"
                  className="text-sm text-purple-100/80 p-2 hover:bg-white/5 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tentang Dura
                </a>
                <a
                  href="#values"
                  className="text-sm text-purple-100/80 p-2 hover:bg-white/5 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Nilai & Prinsip
                </a>
                <a
                  href="#terms"
                  className="text-sm text-purple-100/80 p-2 hover:bg-white/5 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Term & Value
                </a>
              </div>
            )}
          </div>

          <hr className="border-white/10" />
          <button className="w-full text-center py-3 font-medium text-purple-100 hover:text-white">
            Masuk
          </button>
          <button className="w-full py-3 rounded-xl bg-purple-600 text-white font-bold shadow-lg shadow-purple-600/20">
            Daftar Sekarang
          </button>
        </div>
      )}
    </nav>
  );
};
