"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Truck,
  RotateCcw,
  ShieldCheck,
  Flame,
  Star,
  Instagram,
  Clock,
} from "lucide-react";

import { HeroCarousel } from "@/components/site/hero-carousel";
import { ProductCard } from "@/components/site/product-card";
import {
  categories,
  staffPicks,
  onSaleProducts,
  blogPosts,
} from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <TrustBar />
      <MenWomenSection />
      <StaffPicks />
      <AccessoriesSale />
      <HomeGymCTA />
      <JournalSection />
      <InstagramStrip />
    </>
  );
}

/* Trust bar */
function TrustBar() {
  const items = [
    { icon: Truck, title: "Free shipping over $75", note: "Ships in 1 business day" },
    { icon: RotateCcw, title: "30-day easy returns", note: "No restocking fee" },
    { icon: ShieldCheck, title: "Lifetime iron guarantee", note: "On all cast-iron equipment" },
    { icon: Flame, title: "Tested on gym floors", note: "Brooklyn since 2018" },
  ];
  return (
    <section className="border-b border-border bg-secondary/60">
      <div className="container-brand grid grid-cols-2 gap-4 py-5 sm:grid-cols-4 lg:py-6">
        {items.map((item) => (
          <div key={item.title} className="flex items-center gap-3">
            <item.icon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <div className="font-display text-[13px] font-bold uppercase tracking-wider leading-tight text-foreground">
                {item.title}
              </div>
              <div className="text-[11px] text-muted-foreground">{item.note}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* Men's / Women's hero section */
function MenWomenSection() {
  return (
    <section className="py-14 lg:py-20">
      <div className="container-brand">
        <div className="mb-2 inline-flex items-center gap-2 rounded-none border border-accent bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-volt-pulse" aria-hidden="true" />
          Train In Style
        </div>
        <h2 className="font-display text-3xl font-bold uppercase leading-[0.95] text-foreground sm:text-4xl lg:text-5xl text-balance">
          Built for lifters. Tested on gym floors.
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          Two collections. One purpose. Gear that works as hard as the rep you're grinding through.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Men */}
          <Link href="/shop/men" className="group relative overflow-hidden rounded-none bg-muted">
            <div className="relative aspect-[16/11] w-full lg:aspect-[16/9]">
              <Image
                src={categories[0].image}
                alt="Men's training apparel"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white lg:p-8">
              <div className="font-display text-[12px] font-bold uppercase tracking-[0.2em] text-accent">Men Fashion</div>
              <h3 className="mt-2 font-display text-3xl font-bold uppercase leading-none sm:text-4xl">Heavyweight fabrics, honest fits</h3>
              <p className="mt-2 text-[14px] text-white/85">Tees, shorts and layers engineered for lifters.</p>
              <div className="mt-4 inline-flex items-center gap-2">
                <span className="font-display text-sm font-bold uppercase tracking-wider text-accent">Shop Men</span>
                <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Women */}
          <Link href="/shop/women" className="group relative overflow-hidden rounded-none bg-muted">
            <div className="relative aspect-[16/11] w-full lg:aspect-[16/9]">
              <Image
                src={categories[1].image}
                alt="Women's training apparel"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white lg:p-8">
              <div className="font-display text-[12px] font-bold uppercase tracking-[0.2em] text-accent">Women Fashion</div>
              <h3 className="mt-2 font-display text-3xl font-bold uppercase leading-none sm:text-4xl">Seamless support, color that lasts</h3>
              <p className="mt-2 text-[14px] text-white/85">Squats, sprints and stretches — in colors that refuse to fade.</p>
              <div className="mt-4 inline-flex items-center gap-2">
                <span className="font-display text-sm font-bold uppercase tracking-wider text-accent">Shop Women</span>
                <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* Staff Picks */
function StaffPicks() {
  return (
    <section className="bg-secondary/40 py-14 lg:py-20">
      <div className="container-brand">
        <SectionHeading
          eyebrow="Staff Picks"
          title="The pieces our team actually trains in"
          description="Tested through months of sessions before they ever make this list."
          action={
            <Button asChild variant="outline" className="rounded-none">
              <Link href="/shop"><span className="font-display font-bold uppercase tracking-wider">View All</span> <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          }
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
          {staffPicks.slice(0, 8).map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* Accessories Sale — with countdown */
function AccessoriesSale() {
  const [timeLeft, setTimeLeft] = React.useState({ d: 0, h: 0, m: 0, s: 0 });
  React.useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 3);
    target.setHours(0, 0, 0, 0);
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ d: 0, h: 0, m: 0, s: 0 });
        return;
      }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ d, h, m, s });
    };
    tick();
    const i = window.setInterval(tick, 1000);
    return () => window.clearInterval(i);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <section className="py-14 lg:py-20">
      <div className="container-brand">
        <div className="rounded-none bg-primary p-6 text-primary-foreground lg:p-10">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-none bg-destructive px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                <Flame className="h-3 w-3" /> Sale — 40% Off
              </div>
              <h2 className="font-display text-3xl font-bold uppercase leading-[0.95] sm:text-4xl lg:text-5xl">
                Accessories Sale — 40% Off
              </h2>
              <p className="mt-3 max-w-md text-[14px] leading-relaxed text-primary-foreground/85">
                Gloves, belts, shakers, bags and ropes. Gear up for less while the clock runs — prices return to full when it hits zero.
              </p>
              <div className="mt-4 flex items-center gap-3 text-[12px] text-primary-foreground/70">
                <Clock className="h-3.5 w-3.5 text-accent" />
                Offer ends in
              </div>
              <div className="mt-2 flex items-center gap-3">
                {[
                  { label: "Days", value: pad(timeLeft.d) },
                  { label: "Hours", value: pad(timeLeft.h) },
                  { label: "Min", value: pad(timeLeft.m) },
                  { label: "Sec", value: pad(timeLeft.s) },
                ].map((t) => (
                  <div key={t.label} className="rounded-none bg-primary-foreground/10 px-3 py-2 text-center">
                    <div className="font-display text-2xl font-bold text-accent">{t.value}</div>
                    <div className="text-[9px] font-bold uppercase tracking-wider text-primary-foreground/70">{t.label}</div>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-6 gap-2 rounded-none bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/shop/sale"><span className="font-display font-bold uppercase tracking-wider">Shop the Sale</span> <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
              {onSaleProducts.slice(0, 4).map((p) => (
                <Link key={p.id} href={`/product/${p.slug}`} className="group rounded-none bg-primary-foreground/5 p-3 transition-colors hover:bg-primary-foreground/10">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-none bg-muted">
                    <Image src={p.image} alt={p.name} fill sizes="200px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="mt-2 font-display text-[12px] font-bold uppercase tracking-wider text-primary-foreground line-clamp-1">{p.name}</div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-base font-bold text-accent">${p.price.toFixed(0)}</span>
                    {p.compareAtPrice && <span className="text-[11px] text-primary-foreground/50 line-through">${p.compareAtPrice.toFixed(0)}</span>}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Home Gym CTA */
function HomeGymCTA() {
  return (
    <section className="bg-secondary/40 py-14 lg:py-20">
      <div className="container-brand">
        <SectionHeading
          eyebrow="Home Gym Setup"
          title="Build the rack you've been dreaming of"
          description="Bundles, racks, benches and plates — everything you need to turn the spare bedroom into the gym that's actually open when you are."
          action={
            <Button asChild variant="outline" className="rounded-none">
              <Link href="/shop/home-gym"><span className="font-display font-bold uppercase tracking-wider">Shop Home Gym</span> <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          }
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
          {staffPicks.filter(p => p.category === "Equipment").slice(0, 4).map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* Journal */
function JournalSection() {
  return (
    <section className="py-14 lg:py-20">
      <div className="container-brand">
        <SectionHeading
          eyebrow="Latest News"
          title="The Journal"
          description="Training and nutrition from our coaches — practical, opinionated, written by people who actually lift."
          action={
            <Button asChild variant="outline" className="rounded-none">
              <Link href="/journal"><span className="font-display font-bold uppercase tracking-wider">Read Journal</span> <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          }
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col overflow-hidden rounded-none border border-border bg-card product-card-shadow transition-all hover:-translate-y-1 hover:product-card-shadow-hover"
            >
              <Link href={`/journal/${post.slug}`} className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-none bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
                  {post.category}
                </span>
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                  <time dateTime={post.date}>{post.date}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-2 font-display text-xl font-bold uppercase leading-tight text-foreground">
                  <Link href={`/journal/${post.slug}`} className="hover:text-accent transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-primary text-[12px] font-bold text-primary-foreground">
                    {post.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-foreground">{post.author}</div>
                    <div className="text-[11px] text-muted-foreground">Coach</div>
                  </div>
                  <Link
                    href={`/journal/${post.slug}`}
                    className="ml-auto inline-flex items-center gap-1 text-[12px] font-bold uppercase tracking-wider text-accent hover:text-primary transition-colors"
                  >
                    Read
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Instagram strip */
function InstagramStrip() {
  const igPosts = [
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=400&q=70",
    "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=400&q=70",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=70",
    "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=400&q=70",
    "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=400&q=70",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=70",
  ];
  return (
    <section className="bg-primary py-14 text-primary-foreground lg:py-20">
      <div className="container-brand">
        <div className="mb-2 inline-flex items-center gap-2 rounded-none border border-accent bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-volt-pulse" aria-hidden="true" />
          IRONPULSE ON INSTAGRAM
        </div>
        <h2 className="font-display text-3xl font-bold uppercase leading-[0.95] sm:text-4xl lg:text-5xl">
          Tag <span className="text-accent">@ironpulseathletics</span> in your training posts
        </h2>
        <div className="mt-8 grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3">
          {igPosts.map((src, i) => (
            <a
              key={i}
              href="#contact"
              className="group relative aspect-square overflow-hidden rounded-none bg-muted"
              aria-label="Open Instagram post"
            >
              <Image
                src={src}
                alt="IRONPULSE on Instagram"
                fill
                sizes="(max-width: 640px) 33vw, 200px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 grid place-items-center bg-primary/80 opacity-0 transition-opacity group-hover:opacity-100">
                <Instagram className="h-6 w-6 text-accent" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Section heading helper */
function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
      <div className="max-w-2xl">
        <div className="mb-2 inline-flex items-center gap-2 rounded-none border border-accent bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-volt-pulse" aria-hidden="true" />
          {eyebrow}
        </div>
        <h2 className="font-display text-3xl font-bold uppercase leading-[0.95] text-foreground sm:text-4xl lg:text-[2.6rem] text-balance">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
