function ProblemSection() {
  return (
    <section id="problem" className="px-5 md:px-10 py-20 text-white">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="max-w-3xl">

          <p className="text-cyan-400 uppercase tracking-[4px] mb-5">
            The Problem
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            The Fixed-Income Market
            <span className="text-blue-500"> Is Still Broken.</span>
          </h2>

          <p className="text-gray-400 text-xl mt-8 leading-relaxed">
            Traditional bond markets remain fragmented,
            inaccessible, and disconnected from modern
            digital investing behavior.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {/* CARD 1 */}
          <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-3xl mb-8">
              📈
            </div>

            <h3 className="text-3xl font-bold mb-6">
              Retail Investors
            </h3>

            <ul className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <li>• High minimum investments</li>
              <li>• Fragmented bond access</li>
              <li>• No centralized research</li>
              <li>• Complex onboarding process</li>
            </ul>

          </div>

          {/* CARD 2 */}
          <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-3xl mb-8">
              ₿
            </div>

            <h3 className="text-3xl font-bold mb-6">
              Crypto Holders
            </h3>

            <ul className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <li>• Extreme volatility exposure</li>
              <li>• No stable yield instruments</li>
              <li>• Lack of regulated pathways</li>
              <li>• Unpredictable market swings</li>
            </ul>

          </div>

          {/* CARD 3 */}
          <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-3xl mb-8">
              🌱
            </div>

            <h3 className="text-3xl font-bold mb-6">
              Green Energy Firms
            </h3>

            <ul className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <li>• Institution-heavy fundraising</li>
              <li>• Slow capital access</li>
              <li>• Expensive issuance structures</li>
              <li>• Minimal retail participation</li>
            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProblemSection;