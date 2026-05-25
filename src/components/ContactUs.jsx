function ContactUs() {

  const teamMembers = [
    {
      name: "Aaryak Garg",
      initials: "AG",
      roll: "24120036",
      email: "aaryak.garg24@iimb.ac.in",
    },
    {
      name: "Akshit Pai",
      initials: "AP",
      roll: "24120102",
      email: "akshit.n24@iimb.ac.in",
    },
    {
      name: "Chandrahasa L",
      initials: "CL",
      roll: "24120246",
      email: "chandrahasa.l24@iimb.ac.in",
    },
    {
      name: "Chinmay P Dev",
      initials: "CD",
      roll: "24120251",
      email: "chinmay.dev24@iimb.ac.in",
    },
    {
      name: "Dhanush H Y",
      initials: "DH",
      roll: "24120284",
      email: "dhanush.hy24@iimb.ac.in",
    },
    {
      name: "Revanth Rajeev",
      initials: "RR",
      roll: "24120698",
      email: "revanth.rajeev24@iimb.ac.in",
    },
  ];

  return (
    <section id="ContactUs" className="px-5 md:px-10 py-8 md:py-12 text-white overflow-hidden min-h-screen flex items-center">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="max-w-4xl">

          <p className="text-cyan-400 uppercase tracking-[4px] mb-4">
            Team & Contact
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Built by a Team Focused on the Future of <span className="text-blue-500">Digital Finance.</span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg mt-4 leading-relaxed">
            BondAtlas is being developed by a multidisciplinary
            team focused on fintech innovation, ESG accessibility,
            and modern wealth infrastructure.
          </p>

        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

          {/* TEAM GRID */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">

            {teamMembers.map((member, index) => (

              <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-200 backdrop-blur-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm">
                    {member.initials}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold">{member.name}</h3>
                    <p className="text-cyan-400 text-sm mt-2">{member.roll}</p>
                    <p className="text-gray-400 text-sm mt-1">{member.email}</p>
                  </div>
                </div>
              </div>

            ))}

          </div>

          {/* CONTACT PANEL */}
          <div className="bg-gradient-to-br from-blue-500/10 via-cyan-400/5 to-emerald-400/10 border border-white/10 rounded-[28px] p-4 md:p-6 backdrop-blur-xl">

            <p className="text-cyan-400 uppercase tracking-[3px] text-sm">Get in Touch</p>

            <h3 className="text-lg md:text-xl font-bold mt-2 leading-tight">Let’s Build the Future of Fixed-Income Together.</h3>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed mt-4">
              Whether you are an investor, financial institution,
              issuer, or fintech collaborator —
              BondAtlas is open to partnerships and strategic conversations.
            </p>

            {/* CONTACT BOXES */}
            <div className="space-y-3 mt-6">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-3">

                <p className="text-gray-400 text-sm">
                  Email
                </p>

                <h4 className="text-lg font-semibold mt-2">
                  contact@bondatlas.io
                </h4>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-3">

                <p className="text-gray-400 text-sm">
                  Location
                </p>

                <h4 className="text-lg font-semibold mt-2">
                  Bengaluru, India
                </h4>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-3">

                <p className="text-gray-400 text-sm">
                  Focus Areas
                </p>

                <h4 className="text-lg font-semibold mt-2">
                  ESG • Fintech • Fixed-Income
                </h4>

              </div>

            </div>

           

          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactUs;