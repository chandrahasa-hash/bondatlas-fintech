function WhyNow() {
  return (
    <section id="market" className="px-5 md:px-10 py-32 text-white">

      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>

          <p className="text-cyan-400 uppercase tracking-[4px] mb-5">
            Market Timing
          </p>

          <h2 className="text-6xl font-bold leading-tight">
            A Trillion-Dollar
            <span className="text-blue-500"> Shift Is Underway.</span>
          </h2>

          <p className="text-gray-400 text-xl mt-8 leading-relaxed">
            BondAtlas sits at the intersection of three
            transformative macro trends:
            ESG investing, fintech adoption, and
            digital fixed-income accessibility.
          </p>

          {/* TREND LIST */}
          <div className="space-y-8 mt-14">

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-semibold">
                ESG Investing Boom
              </h3>

              <p className="text-gray-400 mt-2 text-lg">
                Global ESG assets are projected to exceed
                $53T as sustainable investing accelerates.
              </p>
            </div>

            <div className="border-l-4 border-cyan-400 pl-6">
              <h3 className="text-2xl font-semibold">
                Fintech Democratization
              </h3>

              <p className="text-gray-400 mt-2 text-lg">
                Digital onboarding and reduced friction
                are rapidly increasing retail participation.
              </p>
            </div>

            <div className="border-l-4 border-emerald-400 pl-6">
              <h3 className="text-2xl font-semibold">
                SEBI Bond Reforms
              </h3>

              <p className="text-gray-400 mt-2 text-lg">
                Lower ticket sizes and digital bond platforms
                are unlocking new investor segments.
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT STATS */}
        <div className="grid grid-cols-2 gap-6">

          {/* CARD */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl hover:scale-105 transition duration-300">

            <p className="text-gray-400 text-lg">
              Global Bond Market
            </p>

            <h3 className="text-4xl md:text-6xl font-bold mt-6">
              $22T
            </h3>

            <p className="text-emerald-400 mt-4">
              Largest global asset class
            </p>

          </div>

          {/* CARD */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl hover:scale-105 transition duration-300">

            <p className="text-gray-400 text-lg">
              Green Bond Market
            </p>

            <h3 className="text-4xl md:text-6xl font-bold mt-6">
              $1.1T
            </h3>

            <p className="text-emerald-400 mt-4">
              Rapid ESG growth
            </p>

          </div>

          {/* CARD */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl hover:scale-105 transition duration-300">

            <p className="text-gray-400 text-lg">
              Digital Investors
            </p>

            <h3 className="text-4xl md:text-6xl font-bold mt-6">
              185M+
            </h3>

            <p className="text-emerald-400 mt-4">
              India retail expansion
            </p>

          </div>

          {/* CARD */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl hover:scale-105 transition duration-300">

            <p className="text-gray-400 text-lg">
              Fintech Adoption
            </p>

            <h3 className="text-4xl md:text-6xl font-bold mt-6">
              87%
            </h3>

            <p className="text-emerald-400 mt-4">
              Digital finance penetration
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyNow;