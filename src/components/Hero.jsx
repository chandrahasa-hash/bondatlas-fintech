function Hero() {
  return (
    <section id="home" className="text-white px-5 md:px-10 py-24 min-h-screen flex items-center pt-24">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LEFT SIDE */}
        <div>

          <p className="uppercase tracking-[4px] text-cyan-400 mb-6">
            Global Bonds. Local Access.
          </p>

          <h1 className="text-3xl md:text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
            Fixed-Income Investing
            <span className="text-blue-500"> Reimagined.</span>
          </h1>

          <p className="text-gray-400 text-xl mt-8 max-w-2xl leading-relaxed">
            BondAtlas enables fractional access to global green
            bonds through a modern digital investment platform.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-4 mt-10">

  <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300">
    Explore Platform
  </button>

  <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300">
    Market Opportunity
  </button>

  <a
    href="#contact"
    className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300"
  >
    Request Demo
  </a>

</div>

          {/* STATS */}
          <div className="flex gap-5 mt-14">

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl px-6 py-5">
              <p className="text-sm text-gray-300">
                ₹1,000 Minimum Investing
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl px-6 py-5">
              <p className="text-sm text-gray-300">
                ESG Focused
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl px-6 py-5">
              <p className="text-sm text-gray-300">
                AI Discovery
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE DASHBOARD */}
        <div className="relative">

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-400/10 rounded-3xl md:rounded-[40px] p-8 border border-white/10 backdrop-blur-xl shadow-2xl">

            <div className="bg-[#111827] rounded-3xl p-8">

              {/* HEADER */}
              <div className="flex justify-between items-center mb-10">

                <div>
                  <p className="text-gray-400 text-sm">
                    Portfolio Overview
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
                    ₹12.8L
                  </h2>
                </div>

                <div className="text-emerald-400 text-xl font-semibold">
                  +12.8%
                </div>

              </div>

              {/* BONDS */}
              <div className="space-y-5">

                {/* CARD */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex justify-between items-center">

                  <div>
                    <h3 className="font-semibold">
                      Adani Green Bond
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">
                      ESG Rated
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-bold">
                      7.2%
                    </p>

                    <p className="text-emerald-400 text-sm">
                      Active
                    </p>
                  </div>

                </div>

                {/* CARD */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex justify-between items-center">

                  <div>
                    <h3 className="font-semibold">
                      NTPC Energy Bond
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">
                      Green Infrastructure
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-bold">
                      6.8%
                    </p>

                    <p className="text-emerald-400 text-sm">
                      Stable
                    </p>
                  </div>

                </div>

                {/* CARD */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex justify-between items-center">

                  <div>
                    <h3 className="font-semibold">
                      Reliance Infra Bond
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">
                      Corporate Debt
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-bold">
                      8.1%
                    </p>

                    <p className="text-emerald-400 text-sm">
                      Performing
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;