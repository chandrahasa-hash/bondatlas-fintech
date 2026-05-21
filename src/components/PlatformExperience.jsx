function PlatformExperience() {
  return (
    <section id="platform" className="px-5 md:px-10 py-32 text-white overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="max-w-4xl">

          <p className="text-cyan-400 uppercase tracking-[4px] mb-5">
            Platform Experience
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Designed for the Next Generation of
            <span className="text-blue-500">
              {" "}Fixed-Income Investing.
            </span>
          </h2>

          <p className="text-gray-400 text-xl mt-8 leading-relaxed">
            BondAtlas combines intelligent discovery,
            real-time portfolio tracking, ESG transparency,
            and frictionless investing into one unified platform.
          </p>

        </div>

        {/* MAIN DASHBOARD */}
        <div className="mt-24 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-xl">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* LEFT SIDE */}
            <div className="space-y-6">

              {/* DISCOVERY */}
              <div className="bg-[#111827] border border-white/10 rounded-3xl p-8">

                <div className="flex justify-between items-center">

                  <div>
                    <p className="text-gray-400 text-sm">
                      AI Bond Discovery
                    </p>

                    <h3 className="text-3xl font-bold mt-3">
                      ESG Matched Portfolio
                    </h3>
                  </div>

                  <div className="text-cyan-400 text-4xl">
                    ✨
                  </div>

                </div>

                <div className="mt-8 space-y-4">

                  <div className="bg-white/5 rounded-2xl p-4 flex justify-between">
                    <span>Green Infrastructure Bond</span>
                    <span className="text-emerald-400">
                      7.4%
                    </span>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-4 flex justify-between">
                    <span>Renewable Energy Debt</span>
                    <span className="text-emerald-400">
                      6.9%
                    </span>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-4 flex justify-between">
                    <span>Climate Impact Bond</span>
                    <span className="text-emerald-400">
                      8.1%
                    </span>
                  </div>

                </div>

              </div>

              {/* INVESTING */}
              <div className="bg-[#111827] border border-white/10 rounded-3xl p-8">

                <p className="text-gray-400 text-sm">
                  Fractional Investing
                </p>

                <h3 className="text-4xl md:text-6xl font-bold mt-3">
                  Start from ₹1,000
                </h3>

                <p className="text-gray-400 mt-5 text-lg leading-relaxed">
                  Invest seamlessly through UPI with
                  paperless onboarding and instant allocation.
                </p>

                <button className="mt-8 bg-blue-600 px-6 py-4 rounded-2xl">
                  Start Investing
                </button>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="bg-[#111827] border border-white/10 rounded-3xl p-8">

              {/* HEADER */}
              <div className="flex justify-between items-center">

                <div>
                  <p className="text-gray-400 text-sm">
                    Live Portfolio Dashboard
                  </p>

                  <h3 className="text-4xl font-bold mt-2">
                    ₹18.4L
                  </h3>
                </div>

                <div className="text-emerald-400 text-2xl font-semibold">
                  +14.2%
                </div>

              </div>

              {/* GRAPH AREA */}
              <div className="mt-12 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-400/10 rounded-3xl flex items-end justify-around p-6">

                <div className="w-10 bg-blue-500 rounded-t-xl h-20"></div>
                <div className="w-10 bg-blue-500 rounded-t-xl h-32"></div>
                <div className="w-10 bg-blue-500 rounded-t-xl h-40"></div>
                <div className="w-10 bg-cyan-400 rounded-t-xl h-52"></div>
                <div className="w-10 bg-cyan-400 rounded-t-xl h-44"></div>
                <div className="w-10 bg-cyan-400 rounded-t-xl h-60"></div>

              </div>

              {/* FEATURES */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">

                <div className="bg-white/5 rounded-2xl p-5">
                  <p className="text-gray-400 text-sm">
                    ESG Score
                  </p>

                  <h4 className="text-3xl font-bold mt-3">
                    AAA
                  </h4>
                </div>

                <div className="bg-white/5 rounded-2xl p-5">
                  <p className="text-gray-400 text-sm">
                    Yield Tracking
                  </p>

                  <h4 className="text-3xl font-bold mt-3">
                    7.8%
                  </h4>
                </div>

                <div className="bg-white/5 rounded-2xl p-5">
                  <p className="text-gray-400 text-sm">
                    Active Bonds
                  </p>

                  <h4 className="text-3xl font-bold mt-3">
                    12
                  </h4>
                </div>

                <div className="bg-white/5 rounded-2xl p-5">
                  <p className="text-gray-400 text-sm">
                    Auto Reinvest
                  </p>

                  <h4 className="text-3xl font-bold mt-3">
                    Enabled
                  </h4>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default PlatformExperience;