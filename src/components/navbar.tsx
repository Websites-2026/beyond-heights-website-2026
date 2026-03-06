import { FloatingHeader } from "@/components/ui/floating-header";
import { cn } from '@/lib/utils';

export default function Navbar() {
  return (
    <div className="relative w-full">
      {/* Floating Header always visible */}
      <FloatingHeader />

      {/* Background pattern if you still want it */}
      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0 -z-10 h-full w-full',
          'bg-[radial-gradient(color-mix(in_oklab,var(--color-foreground)_30%,transparent)_2px,transparent_2px)]',
          'bg-[size:12px_12px]'
        )}
      />
    </div>
  );
}
