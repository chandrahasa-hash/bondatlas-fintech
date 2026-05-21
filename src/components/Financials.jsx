function Financials() {
  return (
    <section id="financials" className="px-5 md:px-10 py-32 text-white">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="max-w-4xl">

          <p className="text-cyan-400 uppercase tracking-[4px] mb-5">
            Growth & Financials
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Scaling the Future of
            <span className="text-blue-500">
              {" "}Digital Fixed-Income.
            </span>
          </h2>

          <p className="text-gray-400 text-xl mt-8 leading-relaxed">
            BondAtlas is designed to scale through phased expansion,
            strong user economics, and long-term infrastructure positioning.
          </p>

        </div>

        {/* TOP GRID */}
        <div className="grid grid-cols-2 gap-10 mt-20">

          {/* REVENUE CHART */}
          <div className="bg-[#111827] border border-white/10 rounded-[40px] p-10">

            <div className="flex justify-between items-center">

              <div>
                <p className="text-gray-400 text-sm">
                  Revenue Trajectory
                </p>

                <h3 className="text-4xl font-bold mt-2">
                  Year 1 → Year 5
                </h3>
              </div>

              <div className="text-emerald-400 text-2xl font-semibold">
                ₹18.6Cr
              </div>

            </div>

            {/* GRAPH */}
            <div className="mt-16 flex items-end justify-between h-80">

              <div className="flex flex-col items-center">
                <div className="w-14 h-10 bg-blue-500 rounded-t-2xl"></div>
                <p className="mt-4 text-gray-400">Y1</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-14 h-24 bg-blue-500 rounded-t-2xl"></div>
                <p className="mt-4 text-gray-400">Y2</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-14 h-40 bg-cyan-400 rounded-t-2xl"></div>
                <p className="mt-4 text-gray-400">Y3</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-14 h-56 bg-cyan-400 rounded-t-2xl"></div>
                <p className="mt-4 text-gray-400">Y4</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-14 h-72 bg-emerald-400 rounded-t-2xl"></div>
                <p className="mt-4 text-gray-400">Y5</p>
              </div>

            </div>

          </div>

          {/* FUND ALLOCATION */}
          <div className="bg-[#111827] border border-white/10 rounded-[40px] p-10">

            <p className="text-gray-400 text-sm">
              Fund Utilization
            </p>

            <h3 className="text-4xl font-bold mt-3">
              ₹1.5Cr Funding Ask
            </h3>

            {/* ALLOCATION */}
            <div className="space-y-8 mt-14">

              <div>

                <div className="flex justify-between mb-3">
                  <span>Product & Technology</span>
                  <span>40%</span>
                </div>

                <div className="w-full bg-white/10 rounded-full h-4">
                  <div className="bg-blue-500 h-4 rounded-full w-[40%]"></div>
                </div>

              </div>

              <div>

                <div className="flex justify-between mb-3">
                  <span>Compliance & Licensing</span>
                  <span>22%</span>
                </div>

                <div className="w-full bg-white/10 rounded-full h-4">
                  <div className="bg-cyan-400 h-4 rounded-full w-[22%]"></div>
                </div>

              </div>

              <div>

                <div className="flex justify-between mb-3">
                  <span>Marketing & Growth</span>
                  <span>20%</span>
                </div>

                <div className="w-full bg-white/10 rounded-full h-4">
                  <div className="bg-emerald-400 h-4 rounded-full w-[20%]"></div>
                </div>

              </div>

              <div>

                <div className="flex justify-between mb-3">
                  <span>Operations</span>
                  <span>13%</span>
                </div>

                <div className="w-full bg-white/10 rounded-full h-4">
                  <div className="bg-white h-4 rounded-full w-[13%]"></div>
                </div>

              </div>

            </div>

            {/* RUNWAY */}
            <div className="grid grid-cols-2 gap-5 mt-14">

              <div className="bg-white/5 rounded-2xl p-6">

                <p className="text-gray-400 text-sm">
                  Runway
                </p>

                <h4 className="text-4xl font-bold mt-3">
                  24M
                </h4>

              </div>

              <div className="bg-white/5 rounded-2xl p-6">

                <p className="text-gray-400 text-sm">
                  Break Even
                </p>

                <h4 className="text-4xl font-bold mt-3">
                  Y3
                </h4>

              </div>

            </div>

          </div>

        </div>

        {/* ROADMAP */}
        <div className="mt-20 bg-gradient-to-br from-blue-500/10 to-cyan-400/5 border border-white/10 rounded-[40px] p-12">

          <p className="text-cyan-400 uppercase tracking-[4px] text-sm">
            Expansion Roadmap
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">

            {/* PHASE */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <div className="text-3xl md:text-5xl mb-8">
                🇮🇳
              </div>

              <h3 className="text-3xl font-bold">
                Phase 1
              </h3>

              <p className="text-cyan-400 mt-3 text-lg">
                India Retail Expansion
              </p>

              <p className="text-gray-400 mt-6 leading-relaxed">
                Build trust and investor adoption through
                digitally native Indian retail audiences.
              </p>

            </div>

            {/* PHASE */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <div className="text-3xl md:text-5xl mb-8">
                🌍
              </div>

              <h3 className="text-3xl font-bold">
                Phase 2
              </h3>

              <p className="text-cyan-400 mt-3 text-lg">
                NRI & GIFT City
              </p>

              <p className="text-gray-400 mt-6 leading-relaxed">
                Expand into cross-border fixed-income
                investing for global Indian investors.
              </p>

            </div>

            {/* PHASE */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <div className="text-3xl md:text-5xl mb-8">
                ⛓️
              </div>

              <h3 className="text-3xl font-bold">
                Phase 3
              </h3>

              <p className="text-cyan-400 mt-3 text-lg">
                Tokenized Bond Layer
              </p>

              <p className="text-gray-400 mt-6 leading-relaxed">
                Enable blockchain-ready infrastructure
                and programmable debt accessibility.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Financials;