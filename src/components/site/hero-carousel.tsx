"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { heroImages } from "@/lib/site-data";

type Slide = {
  eyebrow: string;
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  image: string;
  align: "left" | "right";
};

const slides: Slide[] = [
  {
    eyebrow: "Men's Training Gear",
    title: "Heavyweight fabrics, honest fits, zero distractions",
    subtitle:
      "Tees, shorts and layers engineered for lifters. Designed in Brooklyn, tested on gym floors since 2018.",
    cta: "Shop Men",
    href: "/shop/men",
    image: heroImages.men,
    align: "left",
  },
  {
    eyebrow: "Women's Training Apparel",
    title: "Seamless support that squats, sprints and stretches with you",
    subtitle:
      "High-rise waistbands that stay put, fabrics that breathe, and fits that move with you through every set.",
    cta: "Shop Women",
    href: "/shop/women",
    image: heroImages.women,
    align: "right",
  },
  {
    eyebrow: "Equipment",
    title: "Cast iron, hex-shaped heads, knurled handles",
    subtitle:
      "Built for the home gym and the commercial rack — engineered to be dropped, dropped again, and still be there for the next rep.",
    cta: "Shop Equipment",
    href: "/shop/equipment",
    image: heroImages.equipment,
    align: "left",
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const count = slides.length;

  const next = React.useCallback(
    () => setCurrent((c) => (c + 1) % count),
    [count],
  );
  const prev = React.useCallback(
    () => setCurrent((c) => (c - 1 + count) % count),
    [count],
  );

  React.useEffect(() => {
    if (paused) return;
    const t = window.setInterval(next, 6500);
    return () => window.clearInterval(t);
  }, [next, paused]);

  return (
    <section
      className="relative w-full overflow-hidden bg-muted"
      aria-roledescription="carousel"
      aria-label="Featured collections"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[60vh] min-h-[460px] w-full sm:h-[68vh] lg:h-[80vh]">
        {slides.map((slide, i) => {
          const active = i === current;
          return (
            <div
              key={i}
              aria-hidden={!active}
              className={cn(
                "absolute inset-0 transition-opacity duration-700",
                active ? "opacity-100" : "pointer-events-none opacity-0",
              )}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="100vw"
                priority={i === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
              <div
                className={cn(
                  "container-brand absolute inset-0 flex items-center",
                  slide.align === "right" ? "justify-end" : "justify-start",
                )}
              >
                <div
                  className={cn(
                    "max-w-xl animate-fade-in-up text-white",
                    slide.align === "right" && "text-right",
                  )}
                >
                  <div className="mb-3 inline-flex items-center gap-2 rounded-none border border-accent bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-accent-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-foreground animate-volt-pulse" aria-hidden="true" />
                    {slide.eyebrow}
                  </div>
                  <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] text-balance sm:text-5xl lg:text-6xl">
                    {slide.title}
                  </h2>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/90 sm:text-base">
                    {slide.subtitle}
                  </p>
                  <div
                    className={cn(
                      "mt-6 flex items-center gap-3",
                      slide.align === "right" && "justify-end",
                    )}
                  >
                    <Button asChild size="lg" className="gap-2 rounded-none bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link href={slide.href}>
                        <span className="font-display font-bold uppercase tracking-wider">{slide.cta}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="rounded-none border-white/40 text-white hover:bg-white hover:text-primary"
                    >
                      <Link href="/about">View all collections</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Arrows */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-none bg-white/80 text-foreground shadow-sm backdrop-blur transition hover:bg-white lg:grid"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-none bg-white/80 text-foreground shadow-sm backdrop-blur transition hover:bg-white lg:grid"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === current ? "w-8 bg-accent" : "w-2.5 bg-white/70 hover:bg-white",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
