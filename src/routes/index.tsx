import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Layers,
  Wind,
  CircleDot,
  Sun,
  Gem,
  Leaf,
  Sparkles,
  ShieldCheck,
  Wrench,
  Filter,
  CalendarCheck,
} from "lucide-react";
import heroImg from "@/assets/hero-purifier.jpg";
import pureImg from "@/assets/product-pure.jpg";
import plusImg from "@/assets/product-pureplus.jpg";
import flowImg from "@/assets/product-flow.jpg";
import kitchenImg from "@/assets/kitchen.jpg";
import filtersImg from "@/assets/filters.jpg";
import serviceImg from "@/assets/service.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AQUORA — Pure water, without the complexity" },
      {
        name: "description",
        content:
          "Premium RO + UV water purifiers for Indian homes. Find the right purifier in three questions.",
      },
      { property: "og:title", content: "AQUORA — Pure water, without the complexity" },
      {
        property: "og:description",
        content:
          "Premium RO + UV water purifiers for Indian homes. Find the right purifier in three questions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type ProductKey = "pure" | "plus" | "flow";
const products: Record<
  ProductKey,
  { name: string; tech: string; price: string; line: string; img: string }
> = {
  pure: {
    name: "AQUORA PURE",
    tech: "RO + UV",
    price: "₹12,999",
    line: "For everyday family use.",
    img: pureImg,
  },
  plus: {
    name: "AQUORA PURE+",
    tech: "RO + UV + Mineral Balance",
    price: "₹16,999",
    line: "For advanced purification and balanced taste.",
    img: plusImg,
  },
  flow: {
    name: "AQUORA FLOW",
    tech: "RO + UV + Hot & Cold",
    price: "₹21,999",
    line: "Purified water, whenever you need it.",
    img: flowImg,
  },
};

const nav = [
  { label: "Purifiers", href: "#purifiers" },
  { label: "Technology", href: "#technology" },
  { label: "Compare", href: "#find" },
  { label: "Service", href: "#service" },
];

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Trust />
      <Range />
      <Finder />
      <Technology />
      <Feature />
      <Why />
      <Service />
      <Booking />
      <FinalCta />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="text-lg font-bold tracking-[0.3em] text-foreground">
          AQUORA
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-[15px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#find" className="btn btn-primary hidden md:inline-flex !h-11">
          Find Your Purifier
        </a>
        <button
          aria-label="Menu"
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="container-x flex flex-col gap-1 pb-6 md:hidden">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              onClick={() => setOpen(false)}
              className="py-3 text-lg text-foreground border-b"
            >
              {n.label}
            </a>
          ))}
          <a href="#find" onClick={() => setOpen(false)} className="btn btn-primary mt-4">
            Find Your Purifier
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="px-3 md:px-5">
      <div className="bg-hero overflow-hidden rounded-[var(--radius-card)] pt-16 md:pt-24 text-center">
        <div className="container-x">
          <span className="inline-block rounded-full bg-card/70 px-4 py-2 text-[10px] font-semibold tracking-[0.4em] text-foreground">
            PURE WATER. SIMPLY.
          </span>
          <h1 className="mx-auto mt-7 max-w-3xl text-[40px] font-semibold leading-[1.05] md:text-[56px]">
            Pure water,
            <br />
            without the complexity.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-[17px] text-body">
            Advanced purification designed for the water your home actually receives.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#find" className="btn btn-primary w-full sm:w-auto">
              Find Your Purifier
            </a>
            <a href="#purifiers" className="btn btn-ghost w-full sm:w-auto">
              Explore Purifiers
            </a>
          </div>
        </div>
        <img
          src={heroImg}
          alt="AQUORA countertop water purifier"
          width={1600}
          height={1104}
          className="mx-auto mt-12 w-full max-w-4xl object-cover [mask-image:linear-gradient(to_bottom,black_75%,transparent)]"
        />
      </div>
    </section>
  );
}

function Trust() {
  const stats = [
    ["8-STAGE", "Purification"],
    ["10 L", "Storage Capacity"],
    ["1 YEAR", "Comprehensive Warranty"],
  ];
  return (
    <section className="container-x py-20 text-center">
      <p className="label-caps">Designed for everyday water</p>
      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
        {stats.map(([a, b]) => (
          <div key={a}>
            <div className="text-3xl font-semibold text-foreground tracking-tight">{a}</div>
            <div className="mt-1 text-muted-foreground">{b}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHead({
  label,
  title,
  sub,
}: {
  label: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="label-caps">{label}</p>
      <h2 className="mt-5 text-[32px] font-semibold leading-[1.1] md:text-[40px]">{title}</h2>
      {sub && <p className="mt-4 text-[17px] text-muted-foreground">{sub}</p>}
    </div>
  );
}

function ProductCard({ k }: { k: ProductKey }) {
  const p = products[k];
  return (
    <article className="group">
      <div className="overflow-hidden rounded-[var(--radius-card)] bg-secondary shadow-soft transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-lift">
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          width={1024}
          height={1200}
          className="aspect-[5/6] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-6 px-1">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-sm font-bold tracking-[0.2em]">{p.name}</h3>
          <span className="font-semibold text-foreground">{p.price}</span>
        </div>
        <p className="mt-1 text-sm text-clay font-medium">{p.tech}</p>
        <p className="mt-3 text-muted-foreground">{p.line}</p>
        <a
          href="#find"
          className="mt-5 inline-flex items-center gap-2 text-[15px] font-medium text-foreground"
        >
          View Details{" "}
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}

function Range() {
  return (
    <section id="purifiers" className="container-x py-20 md:py-28">
      <SectionHead
        label="The Aquora range"
        title={
          <>
            Choose the purification
            <br />
            that fits your home.
          </>
        }
      />
      <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
        {(["pure", "plus", "flow"] as ProductKey[]).map((k) => (
          <ProductCard key={k} k={k} />
        ))}
      </div>
    </section>
  );
}

const questions = [
  {
    id: "source",
    q: "What is your water source?",
    opts: ["Municipal", "Borewell", "Tanker", "I'm not sure"],
  },
  { id: "people", q: "How many people are in your home?", opts: ["1–2", "3–5", "6+"] },
  {
    id: "priority",
    q: "What matters most to you?",
    opts: ["Maximum purification", "Better taste", "Low maintenance", "Hot & cold water"],
  },
] as const;

function recommend(a: Record<string, string>): { key: ProductKey; reason: string } {
  const source = a["source"] ?? "I'm not sure",
    people = a["people"] ?? "3–5",
    priority = a["priority"] ?? "";
  if (priority === "Hot & cold water")
    return {
      key: "flow",
      reason: `Ideal for ${people} people who want purified hot and cold water on demand from ${source.toLowerCase()} supply.`,
    };
  const hardWater = source === "Borewell" || source === "Tanker" || source === "I'm not sure";
  if (
    hardWater ||
    priority === "Better taste" ||
    priority === "Maximum purification" ||
    people === "6+"
  )
    return {
      key: "plus",
      reason: `Suitable for homes with ${people} people using ${source === "I'm not sure" ? "mixed or unknown" : source.toLowerCase()} water sources, with mineral balance for better taste.`,
    };
  return {
    key: "pure",
    reason: `A reliable, low-maintenance choice for homes with ${people} people on municipal water.`,
  };
}

function Finder() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [step, setStep] = useState(0);
  const done = step >= questions.length;
  const cur = questions[Math.min(step, questions.length - 1)]!;
  const rec = done ? recommend(answers) : null;
  const p = rec ? products[rec.key] : null;

  const pick = (id: string, v: string) => {
    setAnswers((s) => ({ ...s, [id]: v }));
    setTimeout(() => setStep((s) => s + 1), 180);
  };

  return (
    <section id="find" className="px-3 md:px-5 py-8">
      <div className="rounded-[var(--radius-card)] bg-card py-16 shadow-soft md:py-24">
        <div className="container-x">
          <SectionHead
            label="Find your purifier"
            title="Not sure which purifier you need?"
            sub="Answer three questions. We'll recommend the right system for your home."
          />
          <div className="mx-auto mt-12 max-w-2xl">
            <div className="mb-10 flex gap-2">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors duration-500 ${i < step ? "bg-primary" : "bg-secondary"}`}
                />
              ))}
            </div>
            {!done ? (
              <div key={step} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <p className="label-caps">Question {step + 1} of 3</p>
                <h3 className="mt-3 text-2xl font-semibold">{cur.q}</h3>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {cur.opts.map((o) => {
                    const active = answers[cur.id] === o;
                    return (
                      <button
                        key={o}
                        onClick={() => pick(cur.id, o)}
                        className={`rounded-[var(--radius-btn)] border px-5 py-4 text-left text-[15px] font-medium transition-all ${active ? "border-primary bg-primary text-primary-foreground" : "border-border text-foreground hover:border-foreground"}`}
                      >
                        {o}
                      </button>
                    );
                  })}
                </div>
                {step > 0 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="mt-6 text-sm text-muted-foreground hover:text-foreground"
                  >
                    ← Back
                  </button>
                )}
              </div>
            ) : (
              p &&
              rec && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 grid items-center gap-8 overflow-hidden rounded-[var(--radius-card)] bg-background p-6 sm:grid-cols-[200px_1fr] md:p-8">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="aspect-[5/6] w-full rounded-[18px] object-cover"
                  />
                  <div>
                    <p className="label-caps">Recommended for you</p>
                    <h3 className="mt-3 text-2xl font-bold tracking-[0.12em]">{p.name}</h3>
                    <p className="mt-1 text-clay font-medium">{p.tech}</p>
                    <p className="mt-3 text-2xl font-semibold text-foreground">{p.price}</p>
                    <p className="mt-3 text-muted-foreground">“{rec.reason}”</p>
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <a href="#purifiers" className="btn btn-primary">
                        View Recommended Purifier
                      </a>
                      <button
                        onClick={() => {
                          setAnswers({});
                          setStep(0);
                        }}
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        Start over
                      </button>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const stages = [
  ["Sediment Filter", Layers],
  ["Pre Carbon", Wind],
  ["RO Membrane", CircleDot],
  ["UV Purification", Sun],
  ["Mineral Balance", Gem],
  ["Post Carbon", Leaf],
  ["Taste Enhancement", Sparkles],
  ["Final Purification", ShieldCheck],
] as const;

function Technology() {
  return (
    <section id="technology" className="container-x py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="overflow-hidden rounded-[var(--radius-card)]">
          <img
            src={filtersImg}
            alt="AQUORA filter cartridges"
            loading="lazy"
            width={1200}
            height={1408}
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
        <div>
          <p className="label-caps">Purification, explained</p>
          <h2 className="mt-5 text-[32px] font-semibold leading-[1.1] md:text-[40px]">
            Eight stages.
            <br />
            One simple result.
          </h2>
          <ol className="mt-10 divide-y">
            {stages.map(([name, Icon], i) => (
              <li key={name} className="flex items-center gap-5 py-4">
                <span className="w-6 text-sm tabular-nums text-clay">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon size={18} strokeWidth={1.5} className="text-muted-foreground" />
                <span className="text-[17px] text-foreground">{name}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Feature() {
  return (
    <section className="px-3 md:px-5">
      <div className="relative overflow-hidden rounded-[var(--radius-card)]">
        <img
          src={kitchenImg}
          alt="AQUORA purifier in a modern Indian kitchen"
          loading="lazy"
          width={1920}
          height={1088}
          className="h-[520px] w-full object-cover md:h-[680px]"
        />
        <div className="bg-overlay absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 p-8 md:p-14">
          <h2 className="text-[32px] font-semibold text-primary-foreground md:text-[44px]">
            Made for real homes.
          </h2>
          <p className="mt-3 max-w-md text-[17px] text-primary-foreground/80">
            Compact enough for modern kitchens. Powerful enough for everyday family use.
          </p>
          <a href="#purifiers" className="btn btn-light mt-7">
            See How It Fits
          </a>
        </div>
      </div>
    </section>
  );
}

function Why() {
  const items = [
    ["Advanced filtration", "Multi-stage purification for everyday water."],
    ["Low-maintenance design", "Easy filter replacement and service."],
    ["Compact footprint", "Designed for modern kitchens."],
    [
      "Built for Indian water",
      "Purification systems designed around different household water sources.",
    ],
  ];
  return (
    <section className="container-x py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <p className="label-caps">Why Aquora</p>
          <h2 className="mt-5 text-[32px] font-semibold leading-[1.1] md:text-[40px]">
            Everything you need.
            <br />
            Nothing you don't.
          </h2>
        </div>
        <div className="divide-y">
          {items.map(([t, d]) => (
            <div key={t} className="py-6 first:pt-0">
              <h3 className="text-lg font-semibold">{t}</h3>
              <p className="mt-1 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Service() {
  const cards = [
    {
      t: "Installation",
      d: "Professional installation at your home.",
      b: "Book Installation",
      Icon: Wrench,
    },
    {
      t: "Filter Replacement",
      d: "Know when your filters need attention.",
      b: "Check Filter Service",
      Icon: Filter,
    },
    {
      t: "Annual Maintenance",
      d: "Keep your purifier performing at its best.",
      b: "View AMC Plans",
      Icon: CalendarCheck,
    },
  ];
  return (
    <section id="service" className="container-x pb-20 md:pb-28">
      <SectionHead label="After the purchase" title="Support that stays with you." />
      <div className="mt-14 overflow-hidden rounded-[var(--radius-card)]">
        <img
          src={serviceImg}
          alt="AQUORA technician installing a purifier"
          loading="lazy"
          width={1200}
          height={912}
          className="h-[320px] w-full object-cover md:h-[420px]"
        />
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {cards.map(({ t, d, b, Icon }) => (
          <div
            key={t}
            className="flex flex-col rounded-[var(--radius-card)] bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
          >
            <Icon size={22} strokeWidth={1.5} className="text-clay" />
            <h3 className="mt-6 text-xl font-semibold">{t}</h3>
            <p className="mt-2 flex-1 text-muted-foreground">{d}</p>
            <a
              href="#book"
              className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-foreground"
            >
              {b} <ArrowRight size={16} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Booking() {
  return (
    <section id="book" className="px-3 md:px-5">
      <div className="rounded-[var(--radius-card)] bg-primary px-6 py-16 text-center md:py-20">
        <h2 className="text-[30px] font-semibold text-primary-foreground md:text-[36px]">
          Need help with your purifier?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-primary-foreground/70">
          Book an installation, service visit, or filter replacement.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="mailto:care@aquora.in" className="btn btn-light w-full sm:w-auto">
            Book a Service
          </a>
          <a href="mailto:hello@aquora.in" className="btn btn-outline-light w-full sm:w-auto">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="container-x py-24 text-center md:py-32">
      <h2 className="text-[36px] font-semibold leading-[1.08] md:text-[52px]">
        Better water starts
        <br />
        with the right purifier.
      </h2>
      <p className="mx-auto mt-5 max-w-md text-muted-foreground">
        Three questions. One recommendation. Installed by our team.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a href="#find" className="btn btn-primary w-full sm:w-auto">
          Find Your Purifier
        </a>
        <a href="#purifiers" className="btn btn-ghost w-full sm:w-auto">
          Explore All Products
        </a>
      </div>
    </section>
  );
}

function Footer() {
  const links = [
    ["Purifiers", "#purifiers"],
    ["Technology", "#technology"],
    ["Compare", "#find"],
    ["Service", "#service"],
    ["Contact", "#book"],
    ["Privacy", "#top"],
    ["Terms", "#top"],
  ];
  return (
    <footer className="bg-primary">
      <div className="container-x flex flex-col gap-10 py-14 md:flex-row md:items-center md:justify-between">
        <span className="text-lg font-bold tracking-[0.3em] text-primary-foreground">AQUORA</span>
        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {links.map(([l, h]) => (
            <a
              key={l}
              href={h}
              className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
            >
              {l}
            </a>
          ))}
        </nav>
      </div>
      <div className="container-x border-t border-primary-foreground/10 py-6 text-xs text-primary-foreground/50">
        © 2026 Aquora. All rights reserved.
      </div>
    </footer>
  );
}
