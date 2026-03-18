import { FloatingHeader } from "@/components/ui/floating-header";
import Footer from "@/components/footer";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <main className="relative min-h-screen pt-24 pb-12 flex flex-col bg-white text-black overflow-hidden">
      <FloatingHeader theme="light" />
      
      {/* Content Section */}
      <div className="flex-1 mx-auto max-w-7xl px-6 w-full mt-12 lg:mt-24 mb-32 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        
        {/* Text Column */}
        <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex px-4 py-2 rounded-full bg-black/5 text-sm font-semibold tracking-wide text-black/80">
            Our Mission
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            About <span className="text-black/30">Us</span>
          </h1>
          <p className="text-lg lg:text-xl text-black/90 leading-relaxed font-medium mt-6">
            Beyond Heights is a human potential platform for individuals—including those with autism and neurodivergent profiles—who don’t fit standardized systems but can excel when the environment is designed right.
          </p>
          <div className="w-16 h-1 bg-black/20 rounded-full my-8"></div>
          <p className="text-base lg:text-lg text-black/70 leading-relaxed font-light mt-4">
            We combine neuroscience, AI-driven personalization, robotics, and structured coaching to convert engagement into measurable progress—shifting from fixing individuals to engineering systems that unlock their capabilities. <strong className="text-black font-semibold">This isn’t about catching up; it’s about breaking through.</strong>
          </p>
        </div>

        {/* Image Column */}
        <div className="flex-1 w-full flex justify-center lg:justify-end relative animate-in fade-in zoom-in-95 duration-1000 delay-150">
          <div className="relative w-full max-w-sm lg:max-w-md aspect-square rounded-3xl overflow-hidden shadow-xl border border-black/5">
            <Image 
              src="https://gfkoahjtzykilyvxzzto.supabase.co/storage/v1/object/public/Assets/beyond%20heights/autism.svg"
              alt="Creative representation of human potential"
              priority
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>
          {/* Decorative element background */}
          <div className="absolute -z-10 top-1/2 -translate-y-1/2 right-4 lg:-right-12 w-[110%] h-[110%] bg-gradient-to-tr from-black/5 to-transparent rounded-[3rem] rotate-6"></div>
          {/* Decorative blur elements for modern feel */}
          <div className="absolute -z-20 -bottom-10 -left-10 w-40 h-40 bg-black/5 rounded-full blur-3xl"></div>
          <div className="absolute -z-20 -top-10 -right-10 w-60 h-60 bg-black/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
