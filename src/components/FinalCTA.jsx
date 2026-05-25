import { useState } from "react";

function FinalCTA() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="vision" className="px-5 md:px-10 py-12 md:py-16 text-white overflow-hidden min-h-screen flex items-center">

      <div className="max-w-7xl mx-auto w-full">

        {/* MAIN CTA CARD */}
        <div className="relative bg-gradient-to-br from-blue-500/10 via-cyan-400/5 to-emerald-400/10 border border-white/10 rounded-[36px] p-10 md:p-12 backdrop-blur-xl overflow-hidden">

          {/* BACKGROUND GLOW */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-[100px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-400/10 blur-[100px] rounded-full"></div>

          {/* CONTENT */}
          <div className="relative z-10 text-center max-w-5xl mx-auto">

            <p className="text-cyan-400 uppercase tracking-[3px] mb-4 text-sm md:text-sm">Vision & Future</p>

            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">The Future of <span className="text-blue-500">Fixed-Income Investing.</span></h2>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-6 md:mt-8 max-w-3xl mx-auto">BondAtlas aims to become the digital infrastructure layer for global fixed-income accessibility — bridging traditional finance, ESG investing, and future-ready tokenized debt ecosystems.</p>

            {/* FUTURE POINTS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <div className="text-2xl md:text-4xl mb-4">🌍</div>
                <h3 className="text-xl md:text-2xl font-bold">Global Access</h3>
                <p className="text-gray-400 mt-3 leading-relaxed text-sm md:text-base">Democratized fixed-income markets for retail investors worldwide.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <div className="text-2xl md:text-4xl mb-4">🏛️</div>
                <h3 className="text-xl md:text-2xl font-bold">Institutional Layer</h3>
                <p className="text-gray-400 mt-3 leading-relaxed text-sm md:text-base">Infrastructure powering modern debt distribution ecosystems.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <div className="text-2xl md:text-4xl mb-4">⛓️</div>
                <h3 className="text-xl md:text-2xl font-bold">Tokenized Bonds</h3>
                <p className="text-gray-400 mt-3 leading-relaxed text-sm md:text-base">Blockchain-ready programmable fixed-income investment architecture.</p>
              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex items-center justify-center gap-4 mt-8">

              <button onClick={() => { setShowForm(true); setSubmitted(false); }} className="bg-gradient-to-r from-blue-600 to-cyan-400 px-4 md:px-6 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:scale-105 transition duration-200">Join Waitlist</button>

              <a href="https://docs.google.com/presentation/d/1uQBS_3n600xHMeS2C5903yD7i6XdSe87IZBX8vUu7pE/edit?usp=drive_link" target="_blank" rel="noreferrer" className="border border-cyan-400/30 text-cyan-400 px-4 md:px-6 py-3 md:py-4 rounded-lg text-base md:text-lg hover:bg-cyan-400/10 transition duration-200">View Pitch Deck</a>

            </div>

          </div>

        </div>

      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-[#071323] w-11/12 max-w-md rounded-2xl p-6 border border-white/10">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="text-xl font-bold">Join the Waitlist</h3>
                <p className="text-gray-400 text-sm">We'll notify you when early access opens.</p>

                <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className="w-full p-3 rounded-lg bg-white/5 border border-white/5 text-white" />

                <input required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" type="email" className="w-full p-3 rounded-lg bg-white/5 border border-white/5 text-white" />

                <div className="flex justify-end gap-3 mt-2">
                  <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 rounded-lg border border-white/10">Cancel</button>
                  <button type="submit" className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-400 font-semibold">Submit</button>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <h3 className="text-xl font-bold">Thanks — you're on the list!</h3>
                <p className="text-gray-400 mt-2">We'll email <span className="text-white">{email}</span> with next steps.</p>
                <div className="mt-6">
                  <button onClick={() => setShowForm(false)} className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-400">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  );
}

export default FinalCTA;