import { BrothersRhythm } from "@/components/brothers-rhythm";
import FamilysMoonshot from "@/components/familys-moonshot";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import InsideRithviks from "@/components/InsideRithviks";
import LearnedFromMyBrother from "@/components/LearnedFromMyBrother";
import Navbar from "@/components/navbar";
import { WrongAboutAutism } from "@/components/WrongAboutAutism";

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <BrothersRhythm />
      <WrongAboutAutism />
      <LearnedFromMyBrother />
      <InsideRithviks />     
      <FamilysMoonshot />
      <Footer />
    </main>
  );
}
