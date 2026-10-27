"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { sources } from "@/content/sources";
import { awardYears, companyAwardCount } from "@/content/awards";
import { ButtonLink, ExternalLink, Reveal, SectionHeading } from "@/components/ui";

const stats = [
  { value: 2007, prefix: "", suffix: "", label: "Year co-founded", source: sources.dreAbout, plain: true },
  { value: companyAwardCount, prefix: "", suffix: "", label: `Company honours, ${awardYears.from}\u2013${awardYears.to}`, source: sources.dreAbout },
  { value: awardYears.to - awardYears.from + 1, prefix: "", suffix: "", label: "Consecutive award years", source: sources.dreAbout },
  { value: 2, prefix: "AED ", suffix: "bn", label: "Meraas & Nakheel sales, 2023\u201324", source: sources.gulfNewsBlackOnyx },
];

const pillars = [
  {
    title: "Financial strategy & stability",
    body: "His grounding in international business and finance has been pivotal in strengthening DRE\u2019s financial strategy and overall stability.",
  },
  {
    title: "Personalised service",
    body: "Understanding each client\u2019s needs is paramount. Matching the right property to the right person takes analytical skill and in-depth knowledge of each developer and project.",
  },
  {
    title: "Developer relationships",
    body: "Strong relationships built over many years with most of Dubai\u2019s leading developers have helped DRE secure the right units at launch and flourish in the region.",
  },
  {
    title: "DRE Academy",
    body: "Expansion requires a strong workforce, so DRE developed its own academy \u2014 setting new standards in training and education for its sales force.",
  },
];

const services = ["Off-plan sales", "Secondary residential sales", "Leasing", "Property management"];
const developers = ["Emaar", "DAMAC", "Nakheel", "Meraas", "Dubai Holding", "Sobha", "Aldar", "Deyaar", "Nshama", "Danube", "Binghatti", "Ellington", "Azizi"];

function Counter({ value, prefix, suffix, plain }: { value: number; prefix: string; suffix: string; plain?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [n, setN] = useState(value);

  useEffect(() => {
    if (!inView || reduce || plain) return;
    const controls = animate(0, value, { duration: 1.8, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) });
    return () => controls.stop();
  }, [inView, reduce, plain, value]);

  return (
    <span ref={ref} aria-label={`${prefix}${value}${suffix}`}>
      <span aria-hidden>
        {prefix}
        {n}
        {suffix && <span className="ml-1 text-[0.5em]">{suffix}</span>}
      </span>
    </span>
  );
}

export function BuildingDre() {
  return (
    <section id="dre-homes" aria-labelledby="dre-title" className="relative overflow-hidden bg-sand py-24 lg:py-36">
      <div className="container-luxe relative">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              index="04"
              eyebrow="Building DRE Homes"
              title={
                <span id="dre-title">
                  From a first office in Karama <span className="italic text-champagne-dark">to a Tier One brokerage</span>
                </span>
              }
              intro="Founded in 2007, DRE grew from its first commercial sale into a major contender in Dubai's off-plan market, and now serves clients across secondary sales, leasing and property management from its headquarters in Dubai Hills Estate."
            />
          </div>
          <Reveal delay={0.15} className="self-end lg:col-span-5">
            <div className="pinstripe bg-charcoal p-8 text-ivory sm:p-10">
              <p className="eyebrow text-gold-soft">Then &amp; now</p>
              <ol className="mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                <li>
                  <span className="block font-serif text-4xl">2007</span>
                  <span className="mt-2 block text-sm text-ivory/70">First office, Karama</span>
                </li>
                <li aria-hidden className="gold-rule h-px w-12" />
                <li>
                  <span className="block font-serif text-4xl italic text-gold-soft">Today</span>
                  <span className="mt-2 block text-sm text-ivory/70">Headquarters, Dubai Hills Estate</span>
                </li>
              </ol>
            </div>
            <div className="mt-8">
              <ButtonLink href={site.companyUrl} external>
                Explore DRE Homes
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-px bg-charcoal/10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="bg-sand p-6 sm:p-8">
              <dt className="eyebrow text-charcoal/60">{s.label}</dt>
              <dd className="mt-3 font-serif text-4xl whitespace-nowrap text-charcoal sm:text-5xl xl:text-6xl">
                <Counter {...s} />
              </dd>
              <dd className="mt-3">
                <ExternalLink href={s.source} className="text-[0.65rem] tracking-[0.18em] text-charcoal/55 uppercase hover:text-charcoal">
                  Source
                </ExternalLink>
              </dd>
            </Reveal>
          ))}
        </dl>

        <ul className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={i * 0.08}>
                <span className="font-serif text-lg text-champagne-dark">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-serif text-2xl leading-tight text-charcoal">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{p.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-xs text-charcoal/55">
          Sources:{" "}
          <ExternalLink href={sources.dreAbout} className="underline decoration-gold underline-offset-4">
            DRE Homes
          </ExternalLink>
          ,{" "}
          <ExternalLink href={sources.gulfNewsPersonalised} className="underline decoration-gold underline-offset-4">
            Gulf News, 30 Sep 2024
          </ExternalLink>
        </p>

        <div className="mt-20 grid gap-12 border-t border-charcoal/10 pt-14 md:grid-cols-2">
          <Reveal>
            <h3 className="eyebrow text-champagne-dark">Service lines</h3>
            <ul className="mt-6 flex flex-wrap gap-3">
              {services.map((s) => (
                <li key={s} className="border border-charcoal/20 px-4 py-2 text-sm text-charcoal/85">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="eyebrow text-champagne-dark">Recognised by Dubai&rsquo;s leading developers</h3>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {developers.map((d) => (
                <li key={d} className="font-serif text-xl text-charcoal/80 italic">
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
