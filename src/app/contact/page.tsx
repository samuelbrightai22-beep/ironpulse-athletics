"use client";

import * as React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  ArrowRight,
} from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = React.useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Message sent",
        description: "We'll reply within one business day — usually much sooner.",
      });
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="We answer our own email."
        description="Questions about a product, an order, or a piece of kit you're trying to fix? Drop us a note — a real person in Brooklyn reads every one and usually replies within a business day."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="py-12 lg:py-16">
        <div className="container-brand grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: info */}
          <div>
            <h2 className="font-display text-2xl font-bold uppercase text-foreground sm:text-3xl">
              Visit, call, or write.
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-foreground/80">
              18 Furnace Street is our Brooklyn showroom and workshop. Stop by Tuesday through Saturday — most of the catalog is on display, and our team is happy to walk you through materials, fit, and what to choose for your training.
            </p>

            <div className="mt-8 space-y-4">
              <ContactRow
                icon={MapPin}
                title="Visit the showroom"
                lines={["18 Furnace Street, Unit 4", "Brooklyn, NY 11206"]}
                note="Open Tue–Sat, 10am–6pm ET"
              />
              <ContactRow
                icon={Mail}
                title="Email us"
                lines={["hello@ironpulseathletics.com", "trade@ironpulseathletics.com (trade & wholesale)", "returns@ironpulseathletics.com (returns)"]}
                note="Replies within 1 business day"
              />
              <ContactRow
                icon={Phone}
                title="Call the shop"
                lines={["(718) 555-0142"]}
                note="Tue–Sat, 10am–6pm ET"
              />
              <ContactRow
                icon={Clock}
                title="Customer service hours"
                lines={["Mon–Fri: 9am–6pm ET", "Sat: 10am–5pm ET", "Sun: Closed"]}
                note="Closed Sundays & major US holidays"
              />
            </div>

            {/* Social */}
            <div className="mt-8 border-t border-border pt-6">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Follow along
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  { icon: Instagram, label: "Instagram", handle: "@ironpulseathletics" },
                  { icon: Facebook, label: "Facebook", handle: "/ironpulseathletics" },
                  { icon: Twitter, label: "TikTok", handle: "/ironpulse" },
                  { icon: Youtube, label: "YouTube", handle: "@ironpulseathletics" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-none border border-border bg-card px-3 py-1.5 font-display text-[13px] font-bold uppercase tracking-wider text-foreground/80 transition-colors hover:border-accent hover:text-accent"
                  >
                    <s.icon className="h-3.5 w-3.5" />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-none border border-border bg-card p-6 product-card-shadow lg:p-8">
            <h2 className="font-display text-xl font-bold uppercase text-foreground">
              Send us a message
            </h2>
            <p className="mt-1 text-[13px] text-muted-foreground">
              Required fields marked with *
            </p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="First name *" htmlFor="firstName">
                  <Input id="firstName" name="firstName" required placeholder="Marcus" />
                </Field>
                <Field label="Last name *" htmlFor="lastName">
                  <Input id="lastName" name="lastName" required placeholder="Hale" />
                </Field>
              </div>
              <Field label="Email address *" htmlFor="email">
                <Input id="email" name="email" type="email" required placeholder="you@email.com" />
              </Field>
              <Field label="Subject" htmlFor="subject">
                <Input id="subject" name="subject" placeholder="What's this about?" />
              </Field>
              <Field label="Order number (if applicable)" htmlFor="order">
                <Input id="order" name="order" placeholder="IPA-12345" />
              </Field>
              <Field label="Message *" htmlFor="message">
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us what you need — the more detail, the better."
                />
              </Field>
              <div className="flex items-center justify-between gap-4 pt-2">
                <p className="text-[11px] text-muted-foreground">
                  We&apos;ll never share your email. See our{" "}
                  <a href="/privacy" className="font-bold text-accent underline">privacy policy</a>.
                </p>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="gap-2 rounded-none"
                >
                  <span className="font-display font-bold uppercase tracking-wider">{submitting ? "Sending…" : "Send message"}</span>
                  {!submitting && <ArrowRight className="h-4 w-4" />}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map embed */}
      <section className="border-t border-border bg-secondary/40 py-12 lg:py-16">
        <div className="container-brand">
          <div className="rounded-none overflow-hidden border border-border bg-card">
            <div className="grid lg:grid-cols-[1fr_2fr]">
              <div className="p-6 lg:p-8">
                <div className="mb-2 inline-flex items-center gap-2 rounded-none border border-accent bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-volt-pulse" aria-hidden="true" />
                  Find us
                </div>
                <h2 className="font-display text-2xl font-bold uppercase text-foreground sm:text-3xl">
                  18 Furnace Street, Brooklyn
                </h2>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                  In the Bushwick industrial corridor, two blocks from the Jefferson St L train. Street parking is available on Furnace and the surrounding blocks.
                </p>
                <div className="mt-4 text-[13px] text-muted-foreground">
                  <div className="font-display font-bold uppercase tracking-wider text-foreground">Public transit</div>
                  <div className="mt-1">
                    Jefferson St (L train) — 4 minute walk. M14 bus to Bushwick Av — 8 minute walk.
                  </div>
                </div>
                <Button asChild variant="outline" className="mt-6 gap-2 rounded-none">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=18+Furnace+Street+Brooklyn+NY+11206"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="h-4 w-4" /> <span className="font-display font-bold uppercase tracking-wider">Open in Google Maps</span>
                  </a>
                </Button>
              </div>
              <div className="relative min-h-[280px] bg-muted">
                <iframe
                  title="IRONPULSE ATHLETICS location map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-73.9280%2C40.6980%2C-73.9170%2C40.7060&layer=mapnik&marker=40.7020%2C-73.9225"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({ icon: Icon, title, lines, note }: { icon: React.ComponentType<{ className?: string }>; title: string; lines: string[]; note: string }) {
  return (
    <div className="flex gap-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-none bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="font-display text-[13px] font-bold uppercase tracking-wider text-foreground">
          {title}
        </div>
        {lines.map((l) => (
          <div key={l} className="text-[14px] text-foreground/85">{l}</div>
        ))}
        <div className="mt-0.5 text-[12px] text-muted-foreground">{note}</div>
      </div>
    </div>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={htmlFor} className="font-display text-[12px] font-bold uppercase tracking-wider text-foreground">
        {label}
      </Label>
      {children}
    </div>
  );
}
