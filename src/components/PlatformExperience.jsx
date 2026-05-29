import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
const portfolioData = [
  { month: "Jan", value: 8 },
  { month: "Feb", value: 9 },
  { month: "Mar", value: 10 },
  { month: "Apr", value: 11 },
  { month: "May", value: 12 },
  { month: "Jun", value: 14 },
  { month: "Jul", value: 16 },
];

const allocationData = [
  { name: "Gov Bonds", value: 40 },
  { name: "Corporate", value: 35 },
  { name: "Green", value: 25 },
];

const COLORS = ["#22d3ee", "#3b82f6", "#10b981"];

function PlatformExperience() {

  return (
    <section id="platform" className="px-5 md:px-10 py-4 md:py-6 text-white overflow-hidden min-h-screen flex items-center">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="max-w-5xl mb-4">

          <p className="text-cyan-400 uppercase tracking-[4px] mb-2 text-sm">
            Platform Experience
          </p>

          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            Designed for the Next Generation of
            <span className="text-blue-500"> {" "}Fixed-Income Investing.</span>
          </h2>

          <p className="text-gray-400 text-sm md:text-base mt-1 leading-relaxed">
            Unified platform for discovery, portfolio tracking, and ESG.
          </p>

        </div>

        {/* MAIN DASHBOARD */}
        <div className="mt-4 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-[28px] p-2 backdrop-blur-2xl shadow-[0_6px_24px_rgba(0,0,0,0.28)]">

          {/* MARKET PULSE */}
          <div className="flex flex-wrap gap-2 mb-4">

            <div className="bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 px-3 py-1 rounded-lg text-xs">India 10Y Bond ↑ 7.12%</div>

            <div className="bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 px-3 py-1 rounded-lg text-xs">ESG Market Positive</div>

            <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1 rounded-lg text-xs">AI Signals: Stable Yield</div>

          </div>

          {/* MAIN GRID */}
<div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-3 items-start">
            {/* LEFT SIDE */}
            <div className="space-y-2">

              {/* ESG CARD */}
              <div className="bg-[#111827]/90 border border-white/10 rounded-2xl p-2 md:p-3 backdrop-blur-2xl transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400/30">

                <div className="flex justify-between items-start">

                  <div>

                    <p className="text-gray-400 text-xs">AI Bond Discovery</p>

                    <h3 className="text-lg font-semibold mt-1">ESG Matched Portfolio</h3>

                    <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 px-2 py-1 rounded-full text-[10px] mt-2">
                      <span>✦</span>
                      AI Recommended Allocation
                    </div>

                  </div>

                  <div className="text-cyan-400 text-3xl">
                    ✨
                  </div>

                </div>

                <div className="mt-4 space-y-2">

                  {[
                    {
                      title: "Green Infrastructure Bond",
                      sub: "ESG Certified • 2030",
                      value: "7.4%",
                    },
                    {
                      title: "Renewable Energy Debt",
                      sub: "Stable Yield • AA+",
                      value: "6.9%",
                    },
                    {
                      title: "Climate Impact Bond",
                      sub: "High Growth • ESG Linked",
                      value: "8.1%",
                    },
                  ].map((item, index) => (

                    <div key={index} className="bg-white/5 rounded-2xl p-2 flex justify-between items-center">

                      <div>

                          <p className="font-medium text-xs">
                          {item.title}
                        </p>
                        <p className="text-gray-400 text-[11px] mt-1">
                          {item.sub}
                        </p>

                      </div>

                      <span className="text-emerald-400 font-semibold text-xs">
                        {item.value}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

              {/* START INVESTING */}
              <div className="bg-[#111827]/90 border border-white/10 rounded-2xl p-2 md:p-3 backdrop-blur-2xl transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400/30">

                <p className="text-gray-400 text-xs">Fractional Investing</p>

<h3 className="text-lg md:text-xl font-bold mt-1 leading-tight"></h3>
                <p className="text-gray-400 mt-2 leading-relaxed text-sm">Paperless onboarding and instant allocation.</p>

                <div className="flex gap-2 mt-3">
                  <div className="bg-white/5 rounded-2xl p-2 flex-1">
                    <p className="text-gray-400 text-xs">Avg Yield</p>
                    <h4 className="text-lg font-bold mt-1">7.8%</h4>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-2 flex-1">
                    <p className="text-gray-400 text-xs">Investors</p>
                    <h4 className="text-lg font-bold mt-1">12.4K</h4>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <button className="mt-2 bg-blue-600 px-3 py-2 rounded-lg hover:bg-blue-500 transition duration-200 text-sm">Start</button>
                  <div className="text-xs text-gray-400">Avg. Maturity <span className="text-cyan-400">4.2y</span></div>
                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-3">

              {/* DASHBOARD CARD */}
              <div className="bg-[#111827]/90 border border-white/10 rounded-2xl p-2 md:p-3 backdrop-blur-2xl transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400/30">

                {/* HEADER */}
                <div className="flex justify-between items-start">

                  <div>

                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                      <span className="text-gray-400 text-xs">Live Portfolio Dashboard</span>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold mt-1">₹18.4L</h3>

                  </div>

                  <div className="text-right">
                    <div className="text-emerald-400 text-base font-semibold">+14.2%</div>
                    <p className="text-gray-400 text-xs mt-1">Annual Return</p>
                  </div>

                </div>

                {/* LINE CHART */}
                  <div className="mt-4 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-2xl p-2 border border-white/10">

                    <div className="flex items-center justify-between mb-3">

                    <div>

                      <p className="text-xs text-gray-400">Portfolio Growth</p>
                      <h4 className="text-lg font-bold mt-1">+28.4%</h4>

                    </div>

                    <div className="text-emerald-400 text-sm">
                      12M Performance
                    </div>

                  </div>

                    <div className="h-20">

                    <ResponsiveContainer width="100%" height="100%">

                      <LineChart data={portfolioData}>

                        <Tooltip />

                        <Line type="monotone" dataKey="value" stroke="#22d3ee" strokeWidth={1.2} dot={false} />

                      </LineChart>

                    </ResponsiveContainer>

                  </div>

                </div>

                {/* LOWER GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-5">

                  {/* ALLOCATION */}
                  <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-3">

                    <div className="flex items-center justify-between mb-5">

                      <div>

                        <p className="text-gray-400 text-sm">
                          Portfolio Allocation
                        </p>

                        <h4 className="text-lg font-bold mt-1">
                          Diversified
                        </h4>

                      </div>

                    </div>

                    <div className="space-y-4">

                      {allocationData.map((item, index) => (

                        <div key={index}>

                          <div className="flex justify-between text-sm mb-2">

                            <span>{item.name}</span>

                            <span>{item.value}%</span>

                          </div>

                          <div className="w-full h-2 bg-white/10 rounded-full">

                            <div
                              className="h-2 rounded-full"
                              style={{
                                width: `${item.value}%`,
                                backgroundColor: COLORS[index],
                              }}
                            ></div>

                          </div>

                        </div>

                      ))}

                    </div>

                  </div>

                  {/* DONUT */}
                  <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-3">

                    <div>

                      <p className="text-gray-400 text-sm">
                        Asset Allocation
                      </p>

                      <h4 className="text-lg font-bold mt-1">
                        AI Balanced
                      </h4>

                    </div>

                    <div className="h-[140px] mt-3">

                      <ResponsiveContainer width="100%" height="100%">

                        <PieChart>

                          <Pie
                            data={allocationData}
                            dataKey="value"
                            cx="50%"
                            cy="50%"
                            innerRadius={45}
                            outerRadius={70}
                          >

                            {allocationData.map((entry, index) => (

                              <Cell
                                key={index}
                                fill={COLORS[index]}
                              />

                            ))}

                          </Pie>

                        </PieChart>

                      </ResponsiveContainer>

                    </div>

                  </div>

                </div>

                {/* FEATURES */}
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {[{ label: "ESG Score", value: "AAA" }, { label: "Yield Tracking", value: "7.8%" }, { label: "Active Bonds", value: "12" }, { label: "Auto Reinvest", value: "Enabled" }].map((item, index) => (
                    <div key={index} className="bg-white/5 rounded-2xl p-2">
                      <p className="text-gray-400 text-xs">{item.label}</p>
                      <h4 className="text-base font-bold mt-1">{item.value}</h4>
                    </div>
                  ))}
                </div>

              </div>

            </div>

          </div>

          {/* Watchlist moved to its own section (see below) */}

        </div>

      </div>

    </section>
  );
}

// Watchlist split into its own section to keep platform compact
export default PlatformExperience;

export function Watchlist() {
  return (
<section id="watchlist" className="px-5 md:px-10 py-0 text-white">
      <div className="max-w-7xl mx-auto">

        <div className="mt-0 bg-[#111827]/90 border border-white/10 rounded-3xl p-6 md:p-7 backdrop-blur-2xl transition duration-300 hover:border-cyan-400/30 hover:shadow-[0_10px_40px_rgba(34,211,238,0.12)]">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div>

              <p className="text-cyan-400 uppercase tracking-[3px] text-sm">Market Watchlist</p>

              <h3 className="text-2xl md:text-3xl font-bold mt-2">AI Curated Bond Opportunities</h3>

            </div>

            <div className="bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 px-3 py-1.5 rounded-xl text-sm w-fit">Updated Live</div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">

            {[
              { name: "Reliance Infra Bonds", type: "Infrastructure • 2031", yield: "+6.8%", status: "Stable" },
              { name: "NTPC Green Debt", type: "ESG Certified • AA+", yield: "+7.2%", status: "Trending" },
              { name: "SBI Infrastructure Fund", type: "Yield • 8.1%", yield: "+5.9%", status: "Low Risk" },
              { name: "Adani Energy Bonds", type: "Green Energy • 2034", yield: "+8.4%", status: "High Yield" },
            ].map((bond, index) => (

              <div key={index} className="bg-white/[0.05] border border-white/10 rounded-2xl p-4 hover:-translate-y-1 hover:border-cyan-400/20 transition duration-300">

                <div className="flex items-start justify-between">

                  <div>

                    <h4 className="font-semibold text-base">{bond.name}</h4>

                    <p className="text-gray-400 text-sm mt-2">{bond.type}</p>

                  </div>

                  <div className="text-emerald-400 font-semibold">{bond.yield}</div>

                </div>

                <div className="flex items-center justify-between mt-4">

                  <span className="text-xs text-gray-500 uppercase tracking-[2px]">AI Signal</span>

                  <span className="text-cyan-400 text-sm">{bond.status}</span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}