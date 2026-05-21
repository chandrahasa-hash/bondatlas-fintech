function TeamContactUs() {

  const teamMembers = [
    {
      name: "Aaryak Garg",
      role: "Strategy & Operations",
    },
    {
      name: "Akshit Pai",
      role: "Finance & Research",
    },
    {
      name: "Chandrahasa L",
      role: "Product & Growth",
    },
    {
      name: "Chinmay P Dev",
      role: "Technology & UX",
    },
    {
      name: "Dhanush H Y",
      role: "Market Expansion",
    },
    {
      name: "Revanth Rajeev",
      role: "Investor Relations",
    },
  ];

  return (
    <section id="contact" className="px-5 md:px-10 py-32 text-white">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="max-w-4xl">

          <p className="text-cyan-400 uppercase tracking-[4px] mb-5">
            Team & Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Built by a Team Focused on the Future of
            <span className="text-blue-500">
              {" "}Digital Finance.
            </span>
          </h2>

          <p className="text-gray-400 text-xl mt-8 leading-relaxed">
            BondAtlas is being developed by a multidisciplinary
            team focused on fintech innovation, ESG accessibility,
            and modern wealth infrastructure.
          </p>

        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20">

          {/* TEAM GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {teamMembers.map((member, index) => (

              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition duration-300 backdrop-blur-xl"
              >

                {/* AVATAR */}
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-3xl font-bold">
                  {member.name.charAt(0)}
                </div>

                {/* INFO */}
                <h3 className="text-2xl font-bold mt-8">
                  {member.name}
                </h3>

                <p className="text-cyan-400 mt-3">
                  {member.role}
                </p>

                <div className="flex gap-4 mt-8">

                  <button className="bg-white/10 px-4 py-2 rounded-xl text-sm">
                    LinkedIn
                  </button>

                  <button className="bg-white/10 px-4 py-2 rounded-xl text-sm">
                    Email
                  </button>

                </div>

              </div>

            ))}

          </div>

          {/* CONTACT PANEL */}
          <div className="bg-gradient-to-br from-blue-500/10 via-cyan-400/5 to-emerald-400/10 border border-white/10 rounded-[40px] p-12 backdrop-blur-xl">

            <p className="text-cyan-400 uppercase tracking-[4px] text-sm">
              Get in Touch
            </p>

            <h3 className="text-3xl md:text-5xl font-bold mt-6 leading-tight">
              Let’s Build the Future of Fixed-Income Together.
            </h3>

            <p className="text-gray-400 text-xl leading-relaxed mt-8">
              Whether you are an investor, financial institution,
              issuer, or fintech collaborator —
              BondAtlas is open to partnerships and strategic conversations.
            </p>

            {/* CONTACT BOXES */}
            <div className="space-y-6 mt-14">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                <p className="text-gray-400 text-sm">
                  Email
                </p>

                <h4 className="text-2xl font-semibold mt-3">
                  contact@bondatlas.io
                </h4>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                <p className="text-gray-400 text-sm">
                  Location
                </p>

                <h4 className="text-2xl font-semibold mt-3">
                  Bengaluru, India
                </h4>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                <p className="text-gray-400 text-sm">
                  Focus Areas
                </p>

                <h4 className="text-2xl font-semibold mt-3">
                  ESG • Fintech • Fixed-Income
                </h4>

              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-5 mt-14">

              <button className="bg-gradient-to-r from-blue-600 to-cyan-400 px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition duration-300">
                Contact Team
              </button>

              <button className="border border-white/20 px-8 py-4 rounded-2xl text-lg hover:bg-white/5 transition duration-300">
                Investor Deck
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default TeamContactUs;