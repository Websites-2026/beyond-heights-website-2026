import { FloatingHeader } from "@/components/ui/floating-header";
import { cn } from "@/lib/utils";
import MoonShot1 from "./MoonShot1";
import MoonShot2 from "./MoonShot2"; // 👈 Import your new section
import MoonShot3 from "./MoonShot3"; // 👈 Import your new section
import MoonShot4 from "./MoonShot4"; // 👈 Import your new section
import MoonShot5 from "./MoonShot5"; // 👈 Import your new section
import MoonShot6 from "./MoonShot6"; // 👈 Import your new section
import Footer from "@/components/footer";

export default function ViewPage() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen">
        <MoonShot1 />
      </section>

      {/* Floating Navbar (always on top) */}
      <div className="absolute top-0 left-0 w-full z-50">
        <FloatingHeader theme="light" />
      </div>

      {/* 👉 Second Section */}
      <section className="relative w-full">
        <MoonShot2 />
      </section>

       {/* 👉 third Section */}
       <section className="relative w-full">
        <MoonShot3 />
      </section>

      {/* 👉 Four Section */}
      <section className="relative w-full">
        <MoonShot4 />
      </section>

       {/* 👉 Four Section */}
       <section className="relative w-full">
        <MoonShot5 />
      </section>

      {/* 👉 Four Section */}
      <section className="relative w-full">
        <MoonShot6 />
      </section>

      <Footer />

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
