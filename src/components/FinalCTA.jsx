function FinalCTA() {
  return (
    <section id="vision" className="px-5 md:px-10 py-32 text-white overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* MAIN CTA CARD */}
        <div className="relative bg-gradient-to-br from-blue-500/10 via-cyan-400/5 to-emerald-400/10 border border-white/10 rounded-[50px] p-20 backdrop-blur-xl overflow-hidden">

          {/* BACKGROUND GLOW */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 blur-[120px] rounded-full"></div>

          {/* CONTENT */}
          <div className="relative z-10 text-center max-w-5xl mx-auto">

            <p className="text-cyan-400 uppercase tracking-[4px] mb-6">
              Vision & Future
            </p>

            <h2 className="text-3xl md:text-5xl md:text-7xl font-bold leading-tight">
              The Future of
              <span className="text-blue-500">
                {" "}Fixed-Income Investing.
              </span>
            </h2>

            <p className="text-gray-300 text-2xl leading-relaxed mt-10 max-w-4xl mx-auto">
              BondAtlas aims to become the digital infrastructure
              layer for global fixed-income accessibility —
              bridging traditional finance, ESG investing,
              and future-ready tokenized debt ecosystems.
            </p>

            {/* FUTURE POINTS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

                <div className="text-3xl md:text-5xl mb-6">
                  🌍
                </div>

                <h3 className="text-3xl font-bold">
                  Global Access
                </h3>

                <p className="text-gray-400 mt-5 leading-relaxed">
                  Democratized fixed-income markets for
                  retail investors worldwide.
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

                <div className="text-3xl md:text-5xl mb-6">
                  🏛️
                </div>

                <h3 className="text-3xl font-bold">
                  Institutional Layer
                </h3>

                <p className="text-gray-400 mt-5 leading-relaxed">
                  Infrastructure powering modern debt
                  distribution ecosystems.
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

                <div className="text-3xl md:text-5xl mb-6">
                  ⛓️
                </div>

                <h3 className="text-3xl font-bold">
                  Tokenized Bonds
                </h3>

                <p className="text-gray-400 mt-5 leading-relaxed">
                  Blockchain-ready programmable fixed-income
                  investment architecture.
                </p>

              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex items-center justify-center gap-6 mt-20">

              <button className="bg-gradient-to-r from-blue-600 to-cyan-400 px-5 md:px-10 py-5 rounded-2xl text-xl font-semibold hover:scale-105 transition duration-300">
                Join Waitlist
              </button>

              <button className="border border-white/20 px-5 md:px-10 py-5 rounded-2xl text-xl hover:bg-white/5 transition duration-300">
                Request Demo
              </button>

              <button className="border border-cyan-400/30 text-cyan-400 px-5 md:px-10 py-5 rounded-2xl text-xl hover:bg-cyan-400/10 transition duration-300">
                Download Pitch Deck
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default FinalCTA;