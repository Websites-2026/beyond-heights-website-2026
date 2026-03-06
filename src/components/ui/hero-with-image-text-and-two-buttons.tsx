import Image from "next/image";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {IMAGES} from "../../constants/images"

function Hero() {
  return (
    <section className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl md:text-5xl max-w-lg tracking-tighter text-left font-regular">
              What began as a diagnosis became a blueprint — not for cure, but for connection.
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Autism didn’t break our rhythm. It rewrote it — until we finally learned how to listen.
              </p>
            </div>

          
          </div>

          {/* Right: Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-muted">
            <Image
              src={IMAGES.viewImageHero}
              alt="Team collaboration"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };