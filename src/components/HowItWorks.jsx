function HowItWorks() {

  const steps = [
    {
      number: "01",
      title: "Digital KYC",
      description:
        "Complete onboarding securely through paperless digital verification.",
    },
    {
      number: "02",
      title: "Risk Profiling",
      description:
        "Set investment goals, risk appetite, and ESG preferences.",
    },
    {
      number: "03",
      title: "Discover Bonds",
      description:
        "Explore AI-curated fixed-income opportunities matched to your profile.",
    },
    {
      number: "04",
      title: "Invest via UPI",
      description:
        "Start fractional investing seamlessly from ₹1,000.",
    },
    {
      number: "05",
      title: "Track Performance",
      description:
        "Monitor yields, maturity dates, and ESG impact live.",
    },
    {
      number: "06",
      title: "Auto Reinvest",
      description:
        "Reinvest returns automatically into new opportunities.",
    },
  ];

  return (
    <section id="how-it-works" className="px-5 md:px-10 py-32 text-white">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="max-w-4xl">

          <p className="text-cyan-400 uppercase tracking-[4px] mb-5">
            Investment Journey
          </p>

          <h2 className="text-6xl font-bold leading-tight">
            Invest in
            <span className="text-blue-500"> Minutes.</span>
          </h2>

          <p className="text-gray-400 text-xl mt-8 leading-relaxed">
            BondAtlas simplifies fixed-income investing into
            a seamless digital-first experience built for modern investors.
          </p>

        </div>

        {/* TIMELINE */}
        <div className="relative mt-24">

          {/* CENTER LINE */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-cyan-400 to-emerald-400 transform -translate-x-1/2"></div>

          {/* STEPS */}
          <div className="space-y-16">

            {steps.map((step, index) => (

              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0
                    ? "justify-start"
                    : "justify-end"
                }`}
              >

                <div className="w-full lg:w-[48%]">

                  <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-[1.02] transition duration-300">

                    {/* NUMBER */}
                    <div className="flex items-center justify-between">

                      <div className="text-4xl md:text-6xl font-bold text-blue-500/30">
                        {step.number}
                      </div>

                      <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-xl">
                        ✓
                      </div>

                    </div>

                    {/* CONTENT */}
                    <div className="mt-8">

                      <h3 className="text-3xl font-bold">
                        {step.title}
                      </h3>

                      <p className="text-gray-400 text-lg leading-relaxed mt-5">
                        {step.description}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;