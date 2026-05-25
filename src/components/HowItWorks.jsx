function HowItWorks() {

  const steps = [
    {
      title: "Digital KYC",
      description:
        "Complete onboarding securely through paperless verification.",
      icon: "🛡️",
    },
    {
      title: "Risk Profiling",
      description:
        "Set investment goals, ESG preferences, and risk appetite.",
      icon: "📊",
    },
    {
      title: "Discover Bonds",
      description:
        "Explore AI-curated fixed-income opportunities instantly.",
      icon: "🔍",
    },
    {
      title: "Invest via UPI",
      description:
        "Start fractional investing seamlessly from ₹1,000.",
      icon: "💳",
    },
    {
      title: "Track Performance",
      description:
        "Monitor yields, maturity dates, and ESG impact live.",
      icon: "📈",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="px-4 md:px-10 py-10 md:py-14 text-white overflow-hidden min-h-screen flex items-center"
    >

      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="max-w-4xl">

          <p className="text-cyan-400 uppercase tracking-[4px] mb-5">
            Investment Journey
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Invest in
            <span className="text-blue-500"> {" "}Minutes.</span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg mt-4 leading-relaxed">
            BondAtlas simplifies fixed-income investing into
            a seamless digital-first experience.
          </p>

        </div>

        {/* TIMELINE */}
        <div className="relative mt-10">

          {/* CENTER LINE */}

          <div className="absolute left-5 top-0 w-[2px] h-full bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent"></div>

          {/* STEPS */}
          <div className="space-y-6">

            {steps.map((step, index) => (

              <div key={index} className="relative flex items-start gap-4">

                {/* ICON */}
                <div className="relative z-10 min-w-[44px] h-[44px] rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-xl shadow-[0_0_16px_rgba(34,211,238,0.28)]">

                  {step.icon}

                </div>

                {/* CARD */}
                <div className="w-full bg-white/[0.05] border border-white/10 backdrop-blur-2xl rounded-3xl p-4 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.20)] transition duration-300">

                  <div className="flex items-center justify-between">

                    <h3 className="text-lg md:text-xl font-bold">
                      {step.title}
                    </h3>

                    <span className="text-cyan-400 text-xs">
                      0{index + 1}
                    </span>

                  </div>

                  <p className="text-gray-400 mt-3 leading-relaxed text-sm md:text-base">
                    {step.description}
                  </p>

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