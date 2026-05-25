function Footer() {
  return (
    <footer className="px-5 md:px-10 pt-20 pb-14 text-white border-t border-white/10">

      <div className="max-w-7xl mx-auto">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

          {/* BRAND */}
          <div>

            <h2 className="text-4xl font-bold">
              Bond<span className="text-blue-500">Atlas</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mt-8">
              Reimagining global fixed-income investing
              through accessibility, ESG integration,
              and digital-first infrastructure.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-10">

              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition">
                in
              </div>

              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition">
                X
              </div>

              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition">
                ⌘
              </div>

            </div>

          </div>

          {/* PRODUCT */}
          <div>

            <h3 className="text-2xl font-bold">
              Platform
            </h3>

            <div className="space-y-5 mt-8 text-gray-400">

              <p className="hover:text-white cursor-pointer transition">
                Bond Marketplace
              </p>

              <p className="hover:text-white cursor-pointer transition">
                ESG Analytics
              </p>

              <p className="hover:text-white cursor-pointer transition">
                Portfolio Tracking
              </p>

              <p className="hover:text-white cursor-pointer transition">
                AI Discovery
              </p>

            </div>

          </div>

          {/* COMPANY */}
          <div>

            <h3 className="text-2xl font-bold">
              Company
            </h3>

            <div className="space-y-5 mt-8 text-gray-400">

              <p className="hover:text-white cursor-pointer transition">
                About
              </p>

              <p className="hover:text-white cursor-pointer transition">
                Investors
              </p>

              <p className="hover:text-white cursor-pointer transition">
                Careers
              </p>

              <p className="hover:text-white cursor-pointer transition">
                Partnerships
              </p>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-2xl font-bold">
              Contact
            </h3>

            <div className="space-y-5 mt-8 text-gray-400">

              <p>
                Bengaluru, India
              </p>

              <p>
                contact@bondatlas.io
              </p>

              <p>
                ESG • Fintech • Bonds
              </p>

            </div>

          </div>

        </div>

        {/* LOWER BAR */}
        <div className="border-t border-white/10 mt-14 pt-10 flex flex-col md:flex-row gap-6 md:gap-0 items-start md:items-center justify-between">

          <p className="text-gray-500">
            © 2026 BondAtlas. All rights reserved.
          </p>

          <div className="flex gap-8 text-gray-500">

            <p className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </p>

            <p className="hover:text-white transition cursor-pointer">
              Terms
            </p>

            <p className="hover:text-white transition cursor-pointer">
              Compliance
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;