function Hero() {
  return (
    <section
      id="home"
      className="text-white px-4 md:px-10 py-10 md:py-14 min-h-screen flex items-center overflow-hidden"
    >

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT SIDE */}
        <div>

          {/* BRAND */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-none tracking-tight">

            <span className="text-white">
              Bond
            </span>

            <span className="text-blue-500">
              Atlas
            </span>

          </h1>

          {/* TAGLINE */}
          <p className="uppercase tracking-[4px] text-cyan-400 mt-4 mb-4 text-sm">
            Global Bonds. Local Access.
          </p>

          {/* MAIN HEADING */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-4xl">
            Fixed-Income Investing
            <span className="text-blue-500">
              {" "}Reimagined.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-400 text-lg md:text-xl mt-4 max-w-2xl leading-relaxed">
            BondAtlas enables fractional access to global green
            bonds through a modern digital investment platform.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a href="#platform" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-400 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition duration-300">Explore Platform</a>
          </div>

          {/* STATS */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8">

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl px-4 py-3">
              <p className="text-sm md:text-base text-gray-300">
                ₹1,000 Minimum Investing
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl px-6 py-5">
              <p className="text-sm md:text-base text-gray-300">
                ESG Focused
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl px-6 py-5">
              <p className="text-sm md:text-base text-gray-300">
                AI Discovery
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE DASHBOARD */}
        <div className="relative">

          {/* MAIN DASHBOARD */}
            <div className="bg-white/[0.06] border border-white/10 backdrop-blur-2xl rounded-[40px] p-4 md:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.35)]">

            {/* TOP BAR */}
            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-400 text-sm">
                  Portfolio Value
                </p>

                <h3 className="text-2xl md:text-3xl font-bold mt-1">
                  ₹12,48,920
                </h3>

              </div>

              <div className="bg-emerald-400/20 text-emerald-400 px-3 py-1.5 rounded-2xl text-sm font-semibold">
                +12.8%
              </div>

            </div>

            {/* PERFORMANCE */}
            <div className="mt-8 bg-white/[0.04] border border-white/10 rounded-3xl p-4">

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-gray-400 text-sm">
                    Annual Yield
                  </p>

                  <h4 className="text-2xl font-bold mt-1">
                    8.4%
                  </h4>

                </div>

                <div>

                  <p className="text-gray-400 text-sm">
                    ESG Score
                  </p>

                  <h4 className="text-2xl font-bold mt-1 text-cyan-400">
                    AA+
                  </h4>

                </div>

              </div>

              {/* MINI CHART */}
              <div className="flex items-end gap-2 h-16 mt-6">

                <div className="w-3 bg-cyan-400/40 rounded-full h-6"></div>
                <div className="w-3 bg-cyan-400/40 rounded-full h-10"></div>
                <div className="w-3 bg-cyan-400/40 rounded-full h-8"></div>
                <div className="w-3 bg-cyan-400 rounded-full h-12"></div>
                <div className="w-3 bg-cyan-400 rounded-full h-10"></div>
                <div className="w-3 bg-cyan-400 rounded-full h-14"></div>
                <div className="w-3 bg-blue-500 rounded-full h-12"></div>
                <div className="w-3 bg-blue-500 rounded-full h-16"></div>

              </div>

            </div>

            {/* HOLDINGS */}
            <div className="mt-8 space-y-3">

              {[
                {
                  name: "HDFC Green Bonds",
                  detail: "Coupon Yield • 7.8%",
                  value: "₹2.4L",
                  growth: "+8.2%",
                },
                {
                  name: "REC Infrastructure Bonds",
                  detail: "Maturity • 2029",
                  value: "₹3.1L",
                  growth: "+10.4%",
                },
                {
                  name: "SBI ESG Debt Fund",
                  detail: "ESG Linked • AA+",
                  value: "₹1.8L",
                  growth: "+7.1%",
                },
              ].map((holding, index) => (

                <div
                  key={index}
                  className="bg-white/[0.04] border border-white/10 rounded-2xl p-3 flex items-center justify-between"
                >

                  <div>

                    <h5 className="font-semibold">
                      {holding.name}
                    </h5>

                    <p className="text-gray-400 text-sm mt-1">
                      {holding.detail}
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="font-semibold">
                      {holding.value}
                    </p>

                    <p className="text-emerald-400 text-sm mt-1">
                      {holding.growth}
                    </p>

                  </div>

                </div>

              ))}

            </div>

            {/* BOTTOM METRICS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">

              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4">

                <p className="text-gray-400 text-sm">
                  Diversification
                </p>

                <h4 className="text-2xl font-bold mt-2">
                  14 Assets
                </h4>

              </div>

              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4">

                <p className="text-gray-400 text-sm">
                  Avg Duration
                </p>

                <h4 className="text-2xl font-bold mt-2">
                  4.2Y
                </h4>

              </div>

              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4">

                <p className="text-gray-400 text-sm">
                  Risk Rating
                </p>

                <h4 className="text-2xl font-bold mt-2 text-cyan-400">
                  Low
                </h4>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;