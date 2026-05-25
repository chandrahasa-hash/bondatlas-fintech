function BusinessModel() {
  return (
    <section
      id="business-model"
      className="px-5 md:px-10 py-10 md:py-14 text-white overflow-hidden min-h-screen flex items-center"
    >

      <div className="max-w-7xl mx-auto w-full">

        {/* HEADING */}
        <div className="max-w-4xl">

          <p className="text-cyan-400 uppercase tracking-[4px] mb-4">
            Business Model
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Built for
            <span className="text-blue-500">
              {" "}Sustainable Scale.
            </span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg mt-4 leading-relaxed">
            BondAtlas combines issuer-side monetization,
            premium analytics, and scalable transaction revenue
            into a multi-layered fintech business model.
          </p>

        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-6 mt-10 items-center">

          {/* LEFT SIDE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* PHASE 1 */}
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-400/5 border border-white/10 rounded-[32px] p-5 md:p-6 backdrop-blur-xl hover:-translate-y-1 transition duration-300">

              <div className="flex items-start justify-between gap-4">

                <div>

                  <p className="text-cyan-400 uppercase tracking-[3px] text-xs">
                    Phase 1
                  </p>

                  <h3 className="text-xl md:text-2xl font-bold mt-4 leading-tight">
                    Build Trust & Volume
                  </h3>

                </div>

                <div className="text-4xl">
                  🚀
                </div>

              </div>

              {/* FEATURES */}
              <div className="space-y-4 mt-6">

                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">

                  <h4 className="text-xl font-semibold">
                    Zero Retail Fees
                  </h4>

                  <p className="text-gray-400 mt-3 leading-relaxed text-sm md:text-base">
                    Free onboarding drives rapid investor adoption
                    and lowers entry barriers.
                  </p>

                </div>

                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">

                  <h4 className="text-xl font-semibold">
                    Issuer Revenue
                  </h4>

                  <p className="text-gray-400 mt-3 leading-relaxed text-sm md:text-base">
                    Listing and distribution commissions
                    generate early monetization.
                  </p>

                  <div className="mt-5 text-emerald-400 text-lg font-semibold">
                    1% – 2% Fee Range
                  </div>

                </div>

              </div>

            </div>

            {/* PHASE 2 */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-400/5 border border-white/10 rounded-[32px] p-5 md:p-6 backdrop-blur-xl hover:-translate-y-1 transition duration-300">

              <div className="flex items-start justify-between gap-4">

                <div>

                  <p className="text-emerald-400 uppercase tracking-[3px] text-xs">
                    Phase 2
                  </p>

                  <h3 className="text-xl md:text-2xl font-bold mt-4 leading-tight">
                    Monetize Engagement
                  </h3>

                </div>

                <div className="text-4xl">
                  📈
                </div>

              </div>

              {/* FEATURES */}
              <div className="space-y-4 mt-6">

                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">

                  <h4 className="text-xl font-semibold">
                    Premium Analytics
                  </h4>

                  <p className="text-gray-400 mt-3 leading-relaxed text-sm md:text-base">
                    Advanced portfolio dashboards,
                    insights, and ESG subscriptions.
                  </p>

                </div>

                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">

                  <h4 className="text-xl font-semibold">
                    Spread Revenue
                  </h4>

                  <p className="text-gray-400 mt-3 leading-relaxed text-sm md:text-base">
                    Small transaction spreads introduced
                    post-scale for platform profitability.
                  </p>

                  <div className="mt-5 text-emerald-400 text-lg font-semibold">
                    0.15% – 0.35%
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-[#111827]/90 border border-white/10 rounded-[32px] p-5 md:p-6 backdrop-blur-2xl">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-cyan-400 uppercase tracking-[3px] text-xs">
                  Revenue Flow
                </p>

                <h3 className="text-2xl md:text-3xl font-bold mt-4 leading-tight">
                  Connecting Capital Efficiently
                </h3>

              </div>

              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>

            </div>

            {/* FLOW */}
            <div className="mt-6 space-y-3">

              {/* ISSUERS */}
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:-translate-y-1 transition duration-300">

                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-2xl">

                  🏢

                </div>

                <div>

                  <h3 className="text-2xl font-bold">
                    Issuers
                  </h3>

                  <p className="text-gray-400 text-sm mt-1">
                    Green energy companies
                  </p>

                </div>

              </div>

              {/* ARROW */}
              <div className="flex justify-center text-cyan-400 text-2xl">
                ↓
              </div>

              {/* BONDATLAS */}
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:-translate-y-1 transition duration-300">

                <div className="w-14 h-14 rounded-2xl bg-cyan-400/20 flex items-center justify-center text-2xl">

                  🌐

                </div>

                <div>

                  <h3 className="text-2xl font-bold">
                    BondAtlas
                  </h3>

                  <p className="text-gray-400 text-sm mt-1">
                    Digital infrastructure layer
                  </p>

                </div>

              </div>

              {/* ARROW */}
              <div className="flex justify-center text-cyan-400 text-2xl">
                ↓
              </div>

              {/* INVESTORS */}
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:-translate-y-1 transition duration-300">

                <div className="w-14 h-14 rounded-2xl bg-emerald-400/20 flex items-center justify-center text-2xl">

                  👤

                </div>

                <div>

                  <h3 className="text-2xl font-bold">
                    Investors
                  </h3>

                  <p className="text-gray-400 text-sm mt-1">
                    Retail + NRI investors
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default BusinessModel;