import { ResponsiveContainer, ComposedChart, Bar, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

function Financials() {
  const revenueData = [
    { year: "Y1", value: 1200000 },
    { year: "Y2", value: 4200000 },
    { year: "Y3", value: 7600000 },
    { year: "Y4", value: 13200000 },
    { year: "Y5", value: 18600000 },
  ];

  const currency = (v) => {
    try {
      return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(v).replace("₹", "₹");
    } catch (e) {
      return `₹${Math.round(v)}`;
    }
  };

  return (
    <section id="financials" className="px-5 md:px-10 py-10 md:py-14 text-white overflow-hidden min-h-screen flex items-center">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="max-w-4xl">

          <p className="text-cyan-400 uppercase tracking-[4px] mb-5">
            Growth & Financials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Scaling the Future of
            <span className="text-blue-500">
              {" "}Digital Fixed-Income.
            </span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg mt-4 leading-relaxed">
            BondAtlas is designed to scale through phased expansion,
            strong user economics, and long-term infrastructure positioning.
          </p>

        </div>

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

          {/* REVENUE CHART */}
          <div className="bg-[#111827] border border-white/10 rounded-[40px] p-6">

            <div className="flex justify-between items-center">

              <div>
                <p className="text-gray-400 text-sm">
                  Revenue Trajectory
                </p>

                <h3 className="text-2xl md:text-3xl font-bold mt-2">
                  Year 1 → Year 5
                </h3>
              </div>

              <div className="text-emerald-400 text-xl font-semibold">
                ₹18.6Cr
              </div>

            </div>

            {/* INTERACTIVE GRAPH */}
            <div className="mt-8 w-full h-56">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={revenueData} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#111827" />
                  <XAxis dataKey="year" tick={{ fill: '#9CA3AF' }} />
                  <YAxis tickFormatter={(v) => (v >= 1000000 ? `${v/1000000}M` : v)} tick={{ fill: '#9CA3AF' }} />
                  <Tooltip formatter={(value) => currency(value)} labelFormatter={(label) => `Year: ${label}`} />
                  <Bar dataKey="value" barSize={28} fill="#06b6d4" radius={[8,8,0,0]} />
                  <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={3} dot={{ r: 3 }} activeDot={{ r: 6 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

          </div>

          {/* FUND ALLOCATION */}
          <div className="bg-[#111827] border border-white/10 rounded-[40px] p-6">

            <p className="text-gray-400 text-sm">
              Fund Utilization
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mt-3">
              ₹1.5Cr Funding Ask
            </h3>

            {/* ALLOCATION */}
            <div className="space-y-6 mt-8">

              <div>

                <div className="flex justify-between mb-3">
                  <span>Product & Technology</span>
                  <span>40%</span>
                </div>

                <div className="w-full bg-white/10 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full w-[40%]"></div>
                </div>

              </div>

              <div>

                <div className="flex justify-between mb-3">
                  <span>Compliance & Licensing</span>
                  <span>22%</span>
                </div>

                <div className="w-full bg-white/10 rounded-full h-3">
                  <div className="bg-cyan-400 h-3 rounded-full w-[22%]"></div>
                </div>

              </div>

              <div>

                <div className="flex justify-between mb-3">
                  <span>Marketing & Growth</span>
                  <span>20%</span>
                </div>

                <div className="w-full bg-white/10 rounded-full h-3">
                  <div className="bg-emerald-400 h-3 rounded-full w-[20%]"></div>
                </div>

              </div>

              <div>

                <div className="flex justify-between mb-3">
                  <span>Operations</span>
                  <span>13%</span>
                </div>

                <div className="w-full bg-white/10 rounded-full h-3">
                  <div className="bg-white h-3 rounded-full w-[13%]"></div>
                </div>

              </div>

            </div>

            {/* RUNWAY */}
            <div className="grid grid-cols-2 gap-4 mt-8">

              <div className="bg-white/5 rounded-2xl p-4">

                <p className="text-gray-400 text-sm">
                  Runway
                </p>

                <h4 className="text-2xl font-bold mt-2">
                  24M
                </h4>

              </div>

              <div className="bg-white/5 rounded-2xl p-4">

                <p className="text-gray-400 text-sm">
                  Break Even
                </p>

                <h4 className="text-2xl font-bold mt-2">
                  Y3
                </h4>

              </div>

            </div>

          </div>

        </div>

        {/* ROADMAP */}
        <div className="mt-10 bg-gradient-to-br from-blue-500/10 to-cyan-400/5 border border-white/10 rounded-[40px] p-6">

          <p className="text-cyan-400 uppercase tracking-[4px] text-sm">
            Expansion Roadmap
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

            {/* PHASE */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-5">

              <div className="text-2xl md:text-4xl mb-6">
                🇮🇳
              </div>

              <h3 className="text-2xl font-bold">
                Phase 1
              </h3>

              <p className="text-cyan-400 mt-3 text-sm md:text-base">
                India Retail Expansion
              </p>

              <p className="text-gray-400 mt-4 leading-relaxed text-sm">
                Build trust and investor adoption through
                digitally native Indian retail audiences.
              </p>

            </div>

            {/* PHASE */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-5">

              <div className="text-2xl md:text-4xl mb-6">
                🌍
              </div>

              <h3 className="text-2xl font-bold">
                Phase 2
              </h3>

              <p className="text-cyan-400 mt-3 text-sm md:text-base">
                NRI & GIFT City
              </p>

              <p className="text-gray-400 mt-4 leading-relaxed text-sm">
                Expand into cross-border fixed-income
                investing for global Indian investors.
              </p>

            </div>

            {/* PHASE */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-5">

              <div className="text-2xl md:text-4xl mb-6">
                ⛓️
              </div>

              <h3 className="text-2xl font-bold">
                Phase 3
              </h3>

              <p className="text-cyan-400 mt-3 text-sm md:text-base">
                Tokenized Bond Layer
              </p>

              <p className="text-gray-400 mt-4 leading-relaxed text-sm">
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