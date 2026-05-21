function MarketOpportunity() {
  return (
    <section id="opportunity" className="px-5 md:px-10 py-32 text-white">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="max-w-4xl">

          <p className="text-cyan-400 uppercase tracking-[4px] mb-5">
            Market Opportunity
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Massive
            <span className="text-blue-500"> Untapped Market.</span>
          </h2>

          <p className="text-gray-400 text-xl mt-8 leading-relaxed">
            BondAtlas operates at the intersection of
            global fixed-income expansion, ESG capital flows,
            and India's rapidly growing digital investor base.
          </p>

        </div>

        {/* MARKET SIZE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {/* TAM */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">

            <p className="text-gray-400 text-lg">
              TAM
            </p>

            <h3 className="text-4xl md:text-6xl font-bold mt-6">
              $22T
            </h3>

            <p className="text-emerald-400 mt-5 text-lg">
              Global Bond Market
            </p>

            <p className="text-gray-400 mt-8 leading-relaxed">
              One of the world’s largest financial asset classes
              with increasing retail participation.
            </p>

          </div>

          {/* SAM */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">

            <p className="text-gray-400 text-lg">
              SAM
            </p>

            <h3 className="text-4xl md:text-6xl font-bold mt-6">
              $1.5T
            </h3>

            <p className="text-emerald-400 mt-5 text-lg">
              Green Bond Market
            </p>

            <p className="text-gray-400 mt-8 leading-relaxed">
              ESG and climate-focused debt markets are rapidly
              becoming mainstream investment vehicles.
            </p>

          </div>

          {/* SOM */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">

            <p className="text-gray-400 text-lg">
              SOM
            </p>

            <h3 className="text-4xl md:text-6xl font-bold mt-6">
              $250M
            </h3>

            <p className="text-emerald-400 mt-5 text-lg">
              India Retail Opportunity
            </p>

            <p className="text-gray-400 mt-8 leading-relaxed">
              Initial 3–5 year focus targeting digitally active
              Indian and NRI investors.
            </p>

          </div>

        </div>

        {/* LOWER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20">

          {/* GROWTH CHART */}
          <div className="bg-[#111827] border border-white/10 rounded-3xl p-10">

            <div className="flex justify-between items-center">

              <div>
                <p className="text-gray-400 text-sm">
                  Green Bond Issuance
                </p>

                <h3 className="text-4xl font-bold mt-2">
                  2019 → 2024
                </h3>
              </div>

              <div className="text-emerald-400 text-2xl font-semibold">
                +307%
              </div>

            </div>

            {/* FAKE CHART */}
            <div className="mt-14 flex items-end justify-between h-72">

              <div className="flex flex-col items-center">
                <div className="w-12 h-24 bg-blue-500 rounded-t-xl"></div>
                <p className="mt-3 text-gray-400">2019</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-32 bg-blue-500 rounded-t-xl"></div>
                <p className="mt-3 text-gray-400">2020</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-44 bg-cyan-400 rounded-t-xl"></div>
                <p className="mt-3 text-gray-400">2021</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-52 bg-cyan-400 rounded-t-xl"></div>
                <p className="mt-3 text-gray-400">2022</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-64 bg-emerald-400 rounded-t-xl"></div>
                <p className="mt-3 text-gray-400">2023</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-72 bg-emerald-400 rounded-t-xl"></div>
                <p className="mt-3 text-gray-400">2024</p>
              </div>

            </div>

          </div>

          {/* NRI SEGMENT */}
          <div className="bg-[#111827] border border-white/10 rounded-3xl p-10">

            <p className="text-gray-400 text-sm">
              NRI Investor Landscape
            </p>

            <h3 className="text-4xl font-bold mt-3">
              32M+ Global Diaspora
            </h3>

            {/* SEGMENTS */}
            <div className="space-y-8 mt-14">

              <div>
                <div className="flex justify-between mb-3">
                  <span>Digitally Active NRIs</span>
                  <span>62.5%</span>
                </div>

                <div className="w-full bg-white/10 rounded-full h-4">
                  <div className="bg-blue-500 h-4 rounded-full w-[62%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <span>ESG Focused Investors</span>
                  <span>28.1%</span>
                </div>

                <div className="w-full bg-white/10 rounded-full h-4">
                  <div className="bg-cyan-400 h-4 rounded-full w-[28%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <span>High Net Worth NRIs</span>
                  <span>9.4%</span>
                </div>

                <div className="w-full bg-white/10 rounded-full h-4">
                  <div className="bg-emerald-400 h-4 rounded-full w-[9%]"></div>
                </div>
              </div>

            </div>

            {/* EXTRA METRICS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-14">

              <div className="bg-white/5 rounded-2xl p-5">
                <p className="text-gray-400 text-sm">
                  Demat Accounts
                </p>

                <h4 className="text-3xl font-bold mt-3">
                  185M+
                </h4>
              </div>

              <div className="bg-white/5 rounded-2xl p-5">
                <p className="text-gray-400 text-sm">
                  CAGR Growth
                </p>

                <h4 className="text-3xl font-bold mt-3">
                  32%
                </h4>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default MarketOpportunity;