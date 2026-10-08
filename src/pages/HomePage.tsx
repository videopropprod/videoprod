import { Hero } from "../components/Hero";
import { PortfolioSection } from "../components/PortfolioSection";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <div>
      <Hero />
      <PortfolioSection />
      <Footer />
    </div>
  );
}
