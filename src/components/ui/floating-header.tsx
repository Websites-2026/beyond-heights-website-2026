"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IMAGES } from "@/constants/images";

type HeaderProps = {
  theme?: "dark" | "light"; // dark = on black bg, light = on white bg
  className?: string;
};

export function FloatingHeader({ theme = "dark", className }: HeaderProps) {
  const pathname = usePathname();
  const onLight = theme === "light";

  const links = [
    { label: "View", href: "/view" },
    { label: "Heroes", href: "/books" },
    { label: "About Us", href: "/about-us" },
  ];

  const linkBase =
    "inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium " +
    "motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const linkLight =
    "text-gray-900 hover:bg-gray-100 hover:text-gray-900 active:bg-gray-200 " +
    "focus-visible:ring-gray-900/30 focus-visible:ring-offset-white";

  const linkDark =
    "text-white hover:bg-white/10 hover:text-white active:bg-white/20 " +
    "focus-visible:ring-white/50 focus-visible:ring-offset-gray-900";

  const activeBg = onLight ? "bg-gray-100" : "bg-white/15";

  let logoSrc = "https://gfkoahjtzykilyvxzzto.supabase.co/storage/v1/object/public/Assets/beyond%20heights/Beyond%20Heights%20Logo-01.svg";
  if (["/view", "/about-us", "/refund-policy", "/privacy-policy", "/terms-and-conditions", "/contact-us"].includes(pathname)) {
    logoSrc = "https://gfkoahjtzykilyvxzzto.supabase.co/storage/v1/object/public/Assets/beyond%20heights/Beyond%20Heights%20Logo-02.svg";
  }

  return (
    <header
      className={cn(
        "absolute top-0 left-0 right-0 z-[100]",
        "mx-auto w-full max-w-7xl bg-transparent",
        onLight ? "text-black" : "text-white",
        className
      )}
    >
      <nav className="mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="hover:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 rounded-lg"
        >
          <Image src={logoSrc} alt="Company Logo" width={150} height={150} priority />
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(linkBase, onLight ? linkLight : linkDark, isActive && activeBg)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          <a
            href="https://marathon.beyond-heights.com"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group relative inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.15em]",
              "bg-gradient-to-r from-[#8B0000] via-[#DC2626] to-[#FF4040]",
              "text-white",
              "shadow-[0_4px_24px_rgba(220,38,38,0.35)] hover:shadow-[0_8px_40px_rgba(220,38,38,0.6)]",
              "hover:scale-105 active:scale-95",
              "transition-all duration-300 ease-out",
              "before:absolute before:inset-0 before:rounded-full before:bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.15)_50%,transparent_70%)] before:bg-[length:200%_100%] before:bg-[position:100%] hover:before:bg-[position:-100%] before:transition-all before:duration-700"
            )}
          >
            Marathon
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="p-2 md:hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/20"
                aria-label="Open navigation"
              >
                <Menu className={cn("h-6 w-6", onLight ? "text-gray-900" : "text-white")} />
              </button>
            </SheetTrigger>

            <SheetContent side="left" className="pt-8">
              <VisuallyHidden><SheetTitle>Navigation Menu</SheetTitle></VisuallyHidden>
              <nav className="flex flex-col gap-1 p-4">
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "rounded-lg px-3 py-2 text-base font-medium motion-safe:transition-colors",
                          onLight
                            ? "text-gray-900 hover:bg-gray-100 active:bg-gray-200"
                            : "text-gray-100 hover:bg-white/10 active:bg-white/20",
                          isActive && activeBg
                        )}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  );
                })}
                <SheetClose asChild>
                  <a
                    href="https://marathon.beyond-heights.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group relative mt-6 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold uppercase tracking-[0.15em]",
                      "bg-gradient-to-r from-[#8B0000] via-[#DC2626] to-[#FF4040]",
                      "text-white",
                      "shadow-[0_4px_24px_rgba(220,38,38,0.35)]",
                      "transition-all duration-300 ease-out",
                      "before:absolute before:inset-0 before:rounded-full before:bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.15)_50%,transparent_70%)] before:bg-[length:200%_100%] before:bg-[position:100%] hover:before:bg-[position:-100%] before:transition-all before:duration-700"
                    )}
                  >
                    Marathon
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}