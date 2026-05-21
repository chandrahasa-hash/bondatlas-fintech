import { useState } from "react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  { label: "Home", link: "#home" },
  { label: "Problem", link: "#problem" },
  { label: "Market Timing", link: "#market" },
  { label: "Platform", link: "#platform" },
  { label: "How It Works", link: "#how-it-works" },
  { label: "Opportunity", link: "#opportunity" },
  { label: "Business Model", link: "#business-model" },
  { label: "Advantage", link: "#advantage" },
  { label: "Financials", link: "#financials" },
  { label: "Vision", link: "#vision" },
  { label: "Contact", link: "#contact" },
];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#081225]/80 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-4 md:px-10 py-5 flex items-center justify-between">

        {/* LOGO */}
        <a
          href="#home"
          className="text-2xl md:text-3xl font-bold text-white tracking-tight hover:scale-105 transition duration-300"
        >
          Bond<span className="text-blue-500">Atlas</span>
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">

          {navItems.map((item, index) => (

            <a
              key={index}
              href={item.link}
              className="relative text-sm text-gray-300 hover:text-white transition duration-300 group"
            >

              {item.label}

              {/* UNDERLINE EFFECT */}
              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>

            </a>

          ))}


        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="lg:hidden bg-[#0b172d] border-t border-white/10 px-6 py-6 flex flex-col gap-6">

          {navItems.map((item, index) => (

            <a
              key={index}
              href={item.link}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 text-lg hover:text-white transition"
            >
              {item.label}
            </a>

          ))}

          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-cyan-400 px-5 py-4 rounded-2xl text-center font-semibold"
          >
            Request Demo
          </a>

        </div>

      )}

    </nav>
  );
}

export default Navbar;