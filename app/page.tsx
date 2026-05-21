import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import DashboardShowcase from "@/components/sections/DashboardShowcase";
import MarketStats from "@/components/sections/MarketStats";
import Targets from "@/components/sections/Targets";
import Comparison from "@/components/sections/Comparison";
import TimeSaved from "@/components/sections/TimeSaved";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <DashboardShowcase />
        <MarketStats />
        <Targets />
        <Comparison />
        <TimeSaved />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
