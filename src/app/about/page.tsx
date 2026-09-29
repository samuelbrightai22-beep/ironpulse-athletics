"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Flame,
  ShieldCheck,
  Heart,
  MapPin,
  ArrowRight,
  Quote,
  Users,
} from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title="Train Hard. Live Strong."
        description="IRONPULSE ATHLETICS is a strength-training brand built for people who show up. Performance apparel, equipment and accessories designed in Brooklyn and tested on gym floors since 2018."
        crumbs={[{ label: "About" }]}
      />

      {/* Hero image */}
      <section className="py-10 lg:py-14">
        <div className="container-brand">
          <div className="relative aspect-[21/9] overflow-hidden rounded-none bg-muted">
            <Image
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80"
              alt="IRONPULSE training in Brooklyn"
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Founder story */}
      <section className="py-12 lg:py-20">
        <div className="container-brand grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-none border border-accent bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-volt-pulse" aria-hidden="true" />
              How it started
            </div>
            <h2 className="font-display text-3xl font-bold uppercase leading-[0.95] text-foreground sm:text-4xl text-balance">
              Built in Brooklyn for people who show up.
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-foreground/80">
              <p>
                IRONPULSE started in a 400-square-foot garage in Bushwick in 2018. Marcus had been coaching lifters out of a commercial gym in Manhattan for eight years, and he was tired of recommending gear that fell apart in three months. The hoodie that pilled, the leggings that went sheer after one wash, the dumbbell whose handle started peeling chrome in week two.
              </p>
              <p>
                So he started making his own. The first batch — 50 oversized cotton tees, screen-printed in a friend's basement — sold out in a week. The second batch, 200 tees and 50 pairs of leggings, sold out in three weeks. By 2020, IRONPULSE was in a proper warehouse on Furnace Street, and the catalog had grown to include cast-iron equipment cast in Pennsylvania and kettlebells that didn't roll away between sets.
              </p>
              <p>
                Today we work with factories in the US, Turkey, Pakistan, and Vietnam. Every product gets tested on real gym floors for at least six months before it goes into the catalog. If our coaches won't train in it, we won't sell it. That's the only filter we apply.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="gap-2 rounded-none">
                <Link href="/shop"><span className="font-display font-bold uppercase tracking-wider">Shop the collection</span> <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" className="rounded-none">
                <Link href="/contact"><span className="font-display font-bold uppercase tracking-wider">Visit our Brooklyn showroom</span></Link>
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-none">
              <Image
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=80"
                alt="Marcus Hale, founder, at the Brooklyn showroom"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="rounded-none border border-border bg-card p-6">
              <div className="font-display text-3xl font-bold text-accent">Since 2018</div>
              <div className="mt-1 text-[13px] leading-snug text-muted-foreground">
                Independently owned and operated from Brooklyn, NY. Eight years of testing, refining, and shipping kit that actually lasts.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-14 text-primary-foreground lg:py-20">
        <div className="container-brand">
          <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {[
              { stat: "8 yrs", label: "Designed in Brooklyn" },
              { stat: "180+", label: "Products in catalog" },
              { stat: "12,000+", label: "Orders shipped" },
              { stat: "4.8★", label: "Average rating" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl font-bold uppercase text-accent sm:text-5xl">{s.stat}</div>
                <div className="mt-2 text-[12px] font-bold uppercase tracking-wider text-primary-foreground/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 lg:py-20">
        <div className="container-brand">
          <div className="mb-2 inline-flex items-center gap-2 rounded-none border border-accent bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-volt-pulse" aria-hidden="true" />
            What we believe
          </div>
          <h2 className="font-display text-3xl font-bold uppercase leading-[0.95] text-foreground sm:text-4xl text-balance">
            Three principles guide every product.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Built to outlast",
                body: "Heavyweight fabrics, cast-iron heads, full-tang handles. We don't carry anything we wouldn't still be using in three years. If a piece fails under normal use, we'll replace it.",
              },
              {
                icon: Flame,
                title: "Tested on gym floors",
                body: "Every product gets six months of real-world testing with our coaches before it goes into the catalog. If it doesn't survive the test, it doesn't make the list.",
              },
              {
                icon: Heart,
                title: "Honest pricing",
                body: "We charge a fair price for the work that goes into a piece. No fake markdowns, no inflated MSRPs, no perpetual sales. If something is on sale, it's a real discount.",
              },
            ].map((v) => (
              <div key={v.title} className="rounded-none border border-border bg-card p-6">
                <div className="grid h-11 w-11 place-items-center rounded-none bg-primary/10 text-primary">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold uppercase text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-secondary/40 py-14 lg:py-20">
        <div className="container-brand">
          <div className="mb-2 inline-flex items-center gap-2 rounded-none border border-accent bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-volt-pulse" aria-hidden="true" />
            Categories
          </div>
          <h2 className="font-display text-3xl font-bold uppercase leading-[0.95] text-foreground sm:text-4xl">
            Shop by category
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/shop/${cat.slug}`} className="group relative overflow-hidden rounded-none bg-muted">
                <div className="relative aspect-[16/11] w-full">
                  <Image src={cat.image} alt={cat.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                  <div className="font-display text-2xl font-bold uppercase">{cat.name}</div>
                  <div className="mt-1 text-[12px] text-white/85">{cat.tagline}</div>
                  <div className="mt-2 inline-flex items-center gap-1 font-display text-[11px] font-bold uppercase tracking-wider text-accent">
                    Shop {cat.name.toLowerCase()} <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Founder quote */}
      <section className="py-14 lg:py-20">
        <div className="container-brand">
          <div className="mx-auto max-w-3xl rounded-none border border-border bg-card p-8 text-center lg:p-12">
            <Quote className="mx-auto h-8 w-8 text-accent" aria-hidden="true" />
            <p className="mt-6 font-display text-2xl font-bold uppercase leading-relaxed text-foreground sm:text-3xl text-balance">
              "We don't want to be the biggest. We want to be the brand you reach for at 5am when the alarm goes off."
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-[13px] text-muted-foreground">
              <Users className="h-4 w-4 text-primary" />
              Marcus Hale · Founder & Head Coach, IRONPULSE ATHLETICS
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
