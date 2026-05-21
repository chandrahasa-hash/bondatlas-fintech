function CompetitiveAdvantage() {
  return (
    <section id="advantage" className="px-5 md:px-10 py-32 text-white">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="max-w-4xl">

          <p className="text-cyan-400 uppercase tracking-[4px] mb-5">
            Competitive Advantage
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Why
            <span className="text-blue-500"> BondAtlas Wins.</span>
          </h2>

          <p className="text-gray-400 text-xl mt-8 leading-relaxed">
            BondAtlas combines regulatory infrastructure,
            investor trust systems, and intelligent engagement
            mechanics to build long-term defensibility.
          </p>

        </div>

        {/* SPLIT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20">

          {/* LEFT SIDE */}
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-400/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-xl">

            <div className="flex items-center gap-5">

              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-3xl">
                🔒
              </div>

              <div>
                <p className="text-cyan-400 uppercase tracking-[3px] text-sm">
                  Entry Barriers
                </p>

                <h3 className="text-4xl font-bold mt-2">
                  Structural Defensibility
                </h3>
              </div>

            </div>

            {/* ITEMS */}
            <div className="space-y-8 mt-14">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                <h4 className="text-2xl font-semibold">
                  Regulatory Infrastructure
                </h4>

                <p className="text-gray-400 mt-4 text-lg leading-relaxed">
                  SEBI, RBI, KYC, and AML compliance create
                  strong operational barriers for competitors.
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                <h4 className="text-2xl font-semibold">
                  Financial Partnerships
                </h4>

                <p className="text-gray-400 mt-4 text-lg leading-relaxed">
                  Custodian, issuer, and institutional relationships
                  require long-term trust and integration.
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                <h4 className="text-2xl font-semibold">
                  Proprietary Risk Analytics
                </h4>

                <p className="text-gray-400 mt-4 text-lg leading-relaxed">
                  AI-driven bond discovery and ESG scoring
                  strengthen platform intelligence over time.
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-400/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-xl">

            <div className="flex items-center gap-5">

              <div className="w-16 h-16 rounded-2xl bg-emerald-400/20 flex items-center justify-center text-3xl">
                ♻️
              </div>

              <div>
                <p className="text-emerald-400 uppercase tracking-[3px] text-sm">
                  Customer Retention
                </p>

                <h3 className="text-4xl font-bold mt-2">
                  Engagement Flywheel
                </h3>
              </div>

            </div>

            {/* ITEMS */}
            <div className="space-y-8 mt-14">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                <h4 className="text-2xl font-semibold">
                  Yield & Maturity Alerts
                </h4>

                <p className="text-gray-400 mt-4 text-lg leading-relaxed">
                  Automated reminders encourage recurring
                  investing and platform retention.
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                <h4 className="text-2xl font-semibold">
                  ESG Impact Reporting
                </h4>

                <p className="text-gray-400 mt-4 text-lg leading-relaxed">
                  Investors can track measurable sustainability
                  metrics connected to their portfolios.
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                <h4 className="text-2xl font-semibold">
                  Auto-Reinvestment System
                </h4>

                <p className="text-gray-400 mt-4 text-lg leading-relaxed">
                  One-click reinvestment keeps capital circulating
                  inside the BondAtlas ecosystem.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* LOWER METRICS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">

            <h3 className="text-3xl md:text-5xl font-bold text-blue-500">
              SEBI
            </h3>

            <p className="text-gray-400 mt-4">
              Regulatory Alignment
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">

            <h3 className="text-3xl md:text-5xl font-bold text-cyan-400">
              AI
            </h3>

            <p className="text-gray-400 mt-4">
              Smart Bond Discovery
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">

            <h3 className="text-3xl md:text-5xl font-bold text-emerald-400">
              ESG
            </h3>

            <p className="text-gray-400 mt-4">
              Sustainability Tracking
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">

            <h3 className="text-3xl md:text-5xl font-bold text-white">
              NRI
            </h3>

            <p className="text-gray-400 mt-4">
              Global Expansion Ready
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CompetitiveAdvantage;