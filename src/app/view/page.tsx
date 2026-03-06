import { FloatingHeader } from "@/components/ui/floating-header";
import { Hero } from "@/components/ui/hero-with-image-text-and-two-buttons";
import { cn } from "@/lib/utils";
import StorySection from "./StorySection";
import StorySectionV2 from "./StorySectionV2";
import StorySectionV3 from "./StorySectionV3";
import StorySectionV4 from "./StorySectionV4";
import StorySectionV5 from "./StorySectionV5";
import Footer from "@/components/footer";

export default function ViewPage() {
  return (
    <div className="relative w-full">
      {/* Header (light = black text for white bg) */}
      <FloatingHeader className="z-10" theme="light" />

      {/* Main content below the absolute header */}
      <main className="pt-18 mt-[-10px] lg:pt-28">
        <Hero />
        <StorySection />
        <StorySectionV2 />
        <StorySectionV3 />
        <StorySectionV4 />
        <StorySectionV5 />
        <Footer />
      </main>

      {/* Optional background pattern */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 -z-10 h-full w-full",
          "bg-[radial-gradient(color-mix(in_oklab,var(--color-foreground)_30%,transparent)_2px,transparent_2px)]",
          "bg-[size:12px_12px]"
        )}
      />
    </div>
  );
}