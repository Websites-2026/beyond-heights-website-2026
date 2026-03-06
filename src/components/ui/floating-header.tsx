"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
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
    // { label: "Heroes", href: "/heroes" },
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

  const logoSrc = pathname === "/view" ? IMAGES.colourWhiteOfBeyondHeights : IMAGES.logoWhiteOfBeyondHeights;

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
          <Button size="sm" variant="secondary">Contact Us</Button>

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
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}