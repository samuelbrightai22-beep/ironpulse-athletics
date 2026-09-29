"use client";

import * as React from "react";
import Link from "next/link";
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
  RotateCcw,
  CreditCard,
} from "lucide-react";
import { categories } from "@/lib/site-data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function SiteFooter() {
  const { toast } = useToast();
  const [email, setEmail] = React.useState("");

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast({
        title: "Please enter a valid email",
        description: "We promise we won't share it.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Be the first to know",
      description: "You're on the list — first dispatch drops Sunday morning.",
    });
    setEmail("");
  };

  return (
    <footer className="mt-auto bg-primary text-primary-foreground">
      {/* Newsletter */}
      <section className="border-b border-white/10 bg-accent text-accent-foreground">
        <div className="container-brand grid items-center gap-8 py-12 lg:grid-cols-2 lg:py-14">
          <div>
            <h3 className="font-display text-3xl font-bold uppercase leading-none tracking-tight sm:text-4xl">
              Be the first who learns about our great promotions!
            </h3>
            <p className="mt-3 max-w-md text-sm text-accent-foreground/85">
              One short email each Sunday — new drops, restocked favorites, and a training note from our coaches. No spam.
            </p>
          </div>
          <form
            onSubmit={onSubscribe}
            className="flex flex-col gap-3 sm:flex-row lg:justify-end"
          >
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              aria-label="Email address"
              className="max-w-sm border-accent-foreground/20 bg-accent-foreground/10 text-accent-foreground placeholder:text-accent-foreground/60"
            />
            <Button
              type="submit"
              variant="secondary"
              className="shrink-0 gap-2 rounded-none bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Mail className="h-4 w-4" />
              <span className="font-display font-bold uppercase tracking-wider">Subscribe</span>
            </Button>
          </form>
        </div>
      </section>

      {/* Trust badges */}
      <section className="border-b border-white/10">
        <div className="container-brand grid grid-cols-2 gap-4 py-8 sm:grid-cols-4">
          {[
            { icon: Truck, title: "Free shipping over $75", note: "Ships in 1 business day from Brooklyn" },
            { icon: RotateCcw, title: "30-day returns", note: "No restocking fee on unworn items" },
            { icon: ShieldCheck, title: "Lifetime iron guarantee", note: "On all cast-iron equipment" },
            { icon: CreditCard, title: "Secure checkout", note: "Shop Pay, Apple Pay, all major cards" },
          ].map((badge) => (
            <div key={badge.title} className="flex items-start gap-3">
              <badge.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <div className="font-display text-sm font-bold uppercase tracking-wider text-primary-foreground">{badge.title}</div>
                <div className="mt-0.5 text-[12px] leading-snug text-primary-foreground/65">{badge.note}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main footer */}
      <section className="container-brand grid grid-cols-2 gap-8 py-12 md:grid-cols-4 lg:grid-cols-5">
        <div className="col-span-2 lg:col-span-1">
          <img
            src="/logo.svg"
            alt="IRONPULSE ATHLETICS"
            width={220}
            height={40}
            className="h-9 w-auto"
            style={{ filter: "invert(1) brightness(2)" }}
          />
          <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-primary-foreground/70">
            Performance apparel, equipment and accessories built for people who show up. Designed in Brooklyn, tested on gym floors since 2018.
          </p>
          <div className="mt-4 space-y-2 text-[13px] text-primary-foreground/80">
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>18 Furnace Street, Unit 4, Brooklyn, NY 11206</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <span>(718) 555-0142</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <Link href="/contact" className="hover:text-accent transition-colors">
                hello@ironpulseathletics.com
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
            Shop
          </div>
          <ul className="mt-4 space-y-2.5 text-[13px] text-primary-foreground/85">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link href={`/shop/${cat.slug}`} className="hover:text-accent transition-colors">
                  {cat.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/shop" className="hover:text-accent transition-colors">
                All products
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
            About
          </div>
          <ul className="mt-4 space-y-2.5 text-[13px] text-primary-foreground/85">
            <li><Link href="/about" className="hover:text-accent transition-colors">Our story</Link></li>
            <li><Link href="/journal" className="hover:text-accent transition-colors">Journal</Link></li>
            <li><Link href="/about" className="hover:text-accent transition-colors">Brooklyn showroom</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Trade program</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Wholesale</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
            Customer service
          </div>
          <ul className="mt-4 space-y-2.5 text-[13px] text-primary-foreground/85">
            <li><Link href="/shipping-returns" className="hover:text-accent transition-colors">Shipping & returns</Link></li>
            <li><Link href="/shipping-returns" className="hover:text-accent transition-colors">Track your order</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact us</Link></li>
            <li><Link href="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
            Follow along
          </div>
          <ul className="mt-4 space-y-2.5 text-[13px] text-primary-foreground/85">
            <li className="flex items-center gap-2">
              <Instagram className="h-4 w-4 text-accent" />
              <a href="#contact" className="hover:text-accent transition-colors">Instagram</a>
            </li>
            <li className="flex items-center gap-2">
              <Facebook className="h-4 w-4 text-accent" />
              <a href="#contact" className="hover:text-accent transition-colors">Facebook</a>
            </li>
            <li className="flex items-center gap-2">
              <Twitter className="h-4 w-4 text-accent" />
              <a href="#contact" className="hover:text-accent transition-colors">TikTok</a>
            </li>
            <li className="flex items-center gap-2">
              <Youtube className="h-4 w-4 text-accent" />
              <a href="#contact" className="hover:text-accent transition-colors">YouTube</a>
            </li>
          </ul>
        </div>
      </section>

      {/* Bottom bar */}
      <section className="border-t border-white/10">
        <div className="container-brand flex flex-col items-center justify-between gap-4 py-6 text-[12px] text-primary-foreground/60 sm:flex-row">
          <div>© {new Date().getFullYear()} IRONPULSE ATHLETICS LLC. All rights reserved. Built for athletes.</div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link href="/privacy" className="hover:text-accent">Privacy policy</Link>
            <Link href="/terms" className="hover:text-accent">Terms of service</Link>
            <Link href="/contact" className="hover:text-accent">Accessibility</Link>
          </div>
          <div className="flex items-center gap-1.5" aria-label="Accepted payment methods">
            {["VISA", "MC", "AMEX", "Pay", "GPay"].map((p) => (
              <span
                key={p}
                className="rounded border border-white/15 bg-white/5 px-1.5 py-0.5 text-[10px] font-bold tracking-wide"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
}
