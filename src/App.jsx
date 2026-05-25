import Navbar from "./components/Navbar";
import ScrollIndicator from "./components/ScrollIndicator";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import PlatformExperience, { Watchlist } from "./components/PlatformExperience";
import MarketOpportunity from "./components/MarketOpportunity";
import HowItWorks from "./components/HowItWorks";
import BusinessModel from "./components/BusinessModel";
import CompetitiveAdvantage from "./components/CompetitiveAdvantage";
import Financials from "./components/Financials";
import FinalCTA from "./components/FinalCTA";
import ContactUs from "./components/ContactUs";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-[#081225] min-h-screen">
      <Navbar />
      <ScrollIndicator />
      <Hero />
      <ProblemSection />
      <PlatformExperience />
      <Watchlist />
      <MarketOpportunity />
      <HowItWorks />
      <BusinessModel />
      <CompetitiveAdvantage />
      <Financials />
      <FinalCTA />
      <ContactUs />
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;