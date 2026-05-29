import { useState } from "react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  { label: "Home", link: "#home" },
  { label: "Problem", link: "#problem" },
  { label: "Platform", link: "#platform" },
  { label: "Why Now", link: "#why-now" },
  { label: "How It Works", link: "#how-it-works" },
  { label: "Business Model", link: "#business-model" },
  { label: "Advantage", link: "#advantage" },
  { label: "Financials", link: "#financials" },
  { label: "Vision", link: "#vision" },
  { label: "ContactUs", link: "#ContactUs" },
];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#081225]/80 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-4 md:px-10 py-0 flex items-center justify-between">

        {/* LOGO */}
    <a href="#home" className="flex items-center justify-center hover:scale-105 transition duration-300 -my-2">
      <img src="/logo.png" alt="BondAtlas" className="w-20 h-25 object-contain" />
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

          

        </div>

      )}

    </nav>
  );
}

export default Navbar;