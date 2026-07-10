import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import PainPoints from "@/components/PainPoints";
import StrategyCircle from "@/components/StrategyCircle";
import ProcessSteps from "@/components/ProcessSteps";
import Pricing from "@/components/Pricing";
import WhyWorkWithSage from "@/components/WhyWorkWithSage";
import Results from "@/components/Results";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <PainPoints />
      <StrategyCircle />
      <ProcessSteps />
      <Pricing />
      <WhyWorkWithSage />
      <Results />
      <FinalCTA />
      <Footer />
    </main>
  );
}
