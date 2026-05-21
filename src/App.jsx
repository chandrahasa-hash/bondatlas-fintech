import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import WhyNow from "./components/WhyNow";
import PlatformExperience from "./components/PlatformExperience";
import HowItWorks from "./components/HowItWorks";
import MarketOpportunity from "./components/MarketOpportunity";
import BusinessModel from "./components/BusinessModel";
import CompetitiveAdvantage from "./components/CompetitiveAdvantage";
import Financials from "./components/Financials";
import FinalCTA from "./components/FinalCTA";
import TeamContactUs from "./components/TeamContactUs";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-[#081225] min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSection />
      <WhyNow />
      <PlatformExperience />
      <HowItWorks />
      <MarketOpportunity />
      <BusinessModel />
      <CompetitiveAdvantage />
      <Financials />
      <FinalCTA />
      <TeamContactUs />
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;