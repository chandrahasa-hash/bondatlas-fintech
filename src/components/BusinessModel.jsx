function BusinessModel() {
  return (
    <section id="business-model" className="px-5 md:px-10 py-32 text-white">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="max-w-4xl">

          <p className="text-cyan-400 uppercase tracking-[4px] mb-5">
            Business Model
          </p>

          <h2 className="text-6xl font-bold leading-tight">
            Built for
            <span className="text-blue-500"> Sustainable Scale.</span>
          </h2>

          <p className="text-gray-400 text-xl mt-8 leading-relaxed">
            BondAtlas combines issuer-side monetization,
            premium analytics, and scalable transaction revenue
            into a multi-layered fintech business model.
          </p>

        </div>

        {/* PHASE CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20">

          {/* PHASE 1 */}
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-400/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-xl">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-cyan-400 uppercase tracking-[3px] text-sm">
                  Phase 1
                </p>

                <h3 className="text-3xl md:text-5xl font-bold mt-4">
                  Build Trust & Volume
                </h3>
              </div>

              <div className="text-6xl">
                🚀
              </div>

            </div>

            {/* FEATURES */}
            <div className="space-y-8 mt-14">

              <div className="bg-white/5 rounded-3xl p-6 border border-white/10">

                <h4 className="text-2xl font-semibold">
                  Zero Retail Fees
                </h4>

                <p className="text-gray-400 mt-4 text-lg leading-relaxed">
                  Free onboarding drives rapid investor adoption
                  and lowers entry barriers.
                </p>

              </div>

              <div className="bg-white/5 rounded-3xl p-6 border border-white/10">

                <h4 className="text-2xl font-semibold">
                  Issuer-Side Revenue
                </h4>

                <p className="text-gray-400 mt-4 text-lg leading-relaxed">
                  Listing and distribution commissions
                  generate early monetization.
                </p>

                <div className="mt-6 text-emerald-400 text-xl font-semibold">
                  1% – 2% Fee Range
                </div>

              </div>

            </div>

          </div>

          {/* PHASE 2 */}
          <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-400/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-xl">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-emerald-400 uppercase tracking-[3px] text-sm">
                  Phase 2
                </p>

                <h3 className="text-3xl md:text-5xl font-bold mt-4">
                  Monetize Engagement
                </h3>
              </div>

              <div className="text-6xl">
                📈
              </div>

            </div>

            {/* FEATURES */}
            <div className="space-y-8 mt-14">

              <div className="bg-white/5 rounded-3xl p-6 border border-white/10">

                <h4 className="text-2xl font-semibold">
                  Premium Analytics
                </h4>

                <p className="text-gray-400 mt-4 text-lg leading-relaxed">
                  Advanced portfolio dashboards,
                  insights, and ESG analytics subscriptions.
                </p>

              </div>

              <div className="bg-white/5 rounded-3xl p-6 border border-white/10">

                <h4 className="text-2xl font-semibold">
                  Retail Spread Revenue
                </h4>

                <p className="text-gray-400 mt-4 text-lg leading-relaxed">
                  Small transaction spreads introduced
                  post-scale to optimize platform profitability.
                </p>

                <div className="mt-6 text-emerald-400 text-xl font-semibold">
                  0.15% – 0.35%
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* REVENUE FLOW */}
        <div className="mt-20 bg-[#111827] border border-white/10 rounded-[40px] p-12">

          <div className="flex items-center justify-between">

            {/* ISSUER */}
            <div className="text-center">

              <div className="w-28 h-28 rounded-3xl bg-blue-500/20 flex items-center justify-center text-3xl md:text-5xl mx-auto">
                🏢
              </div>

              <h4 className="text-3xl font-bold mt-6">
                Issuers
              </h4>

              <p className="text-gray-400 mt-3">
                Green energy companies
              </p>

            </div>

            {/* ARROW */}
            <div className="text-6xl text-blue-500">
              →
            </div>

            {/* PLATFORM */}
            <div className="text-center">

              <div className="w-28 h-28 rounded-3xl bg-cyan-400/20 flex items-center justify-center text-3xl md:text-5xl mx-auto">
                🌐
              </div>

              <h4 className="text-3xl font-bold mt-6">
                BondAtlas
              </h4>

              <p className="text-gray-400 mt-3">
                Digital infrastructure layer
              </p>

            </div>

            {/* ARROW */}
            <div className="text-6xl text-cyan-400">
              →
            </div>

            {/* INVESTORS */}
            <div className="text-center">

              <div className="w-28 h-28 rounded-3xl bg-emerald-400/20 flex items-center justify-center text-3xl md:text-5xl mx-auto">
                👤
              </div>

              <h4 className="text-3xl font-bold mt-6">
                Investors
              </h4>

              <p className="text-gray-400 mt-3">
                Retail + NRI investors
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default BusinessModel;