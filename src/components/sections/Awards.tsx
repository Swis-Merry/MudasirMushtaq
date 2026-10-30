"use client";

import Image from "next/image";
import { useState } from "react";
import { awardYears, companyAwardCount, companyAwards, developerAwards, personalAwards, type Award } from "@/content/awards";
import { sources } from "@/content/sources";
import { ExternalLink, Reveal, SectionHeading } from "@/components/ui";

const kindLabel = { award: "Award", recognition: "Recognition", feature: "Media feature" } as const;

function SourceLink({ award, className }: { award: Award; className: string }) {
  return award.source ? (
    <ExternalLink href={award.source} className={`${className} underline-offset-4 hover:underline`}>
      Source: {award.sourceLabel} <span aria-hidden>&#8599;</span>
    </ExternalLink>
  ) : (
    <p className={className}>Source: {award.sourceLabel}</p>
  );
}

function PersonalCard({ award }: { award: Award }) {
  return (
    <article className="group grid h-full bg-white shadow-[0_1px_0_rgba(36,36,36,0.06)] transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(36,36,36,0.35)] sm:grid-cols-[2fr_3fr]">
      <div className="relative aspect-[4/5] overflow-hidden bg-charcoal sm:aspect-auto sm:min-h-[22rem]">
        {award.image && (
          <Image
            src={award.image}
            alt={`${award.title} \u2014 ${award.organisation}`}
            fill
            sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 100vw"
            className="object-cover object-[70%_30%] transition-transform duration-[1.2s] ease-luxe group-hover:scale-105"
          />
        )}
      </div>
      <div className="flex flex-col p-7 lg:p-9">
        <p className="eyebrow flex flex-wrap gap-x-3 text-champagne-dark">
          <span>{kindLabel[award.kind]}</span>
          <span aria-hidden>&middot;</span>
          <span>{award.year ?? "Year to be confirmed"}</span>
        </p>
        <h4 className="mt-4 font-serif text-3xl leading-tight text-charcoal">{award.title}</h4>
        <p className="mt-2 text-sm font-medium text-charcoal/80">{award.organisation}</p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal/70">{award.description}</p>
        <SourceLink award={award} className="mt-6 text-xs font-semibold tracking-[0.18em] text-charcoal uppercase" />
      </div>
    </article>
  );
}

export function Awards() {
  const [showAll, setShowAll] = useState(false);
  const years = showAll ? developerAwards : developerAwards.slice(0, 6);

  return (
    <section id="awards" aria-labelledby="awards-title" className="bg-ivory py-24 lg:py-36">
      <div className="container-luxe">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            index="03"
            eyebrow="Awards & Achievements"
            title={
              <span id="awards-title">
                Recognition, <span className="italic text-champagne-dark">earned and evidenced</span>
              </span>
            }
          />
          <Reveal className="max-w-sm text-charcoal/70">
            Personal recognition is shown separately from honours awarded to DRE Homes as a company. Each entry links to its source.
          </Reveal>
        </div>

        <Reveal className="mt-16 flex items-baseline gap-4 border-b border-charcoal/10 pb-4">
          <h3 className="font-serif text-3xl text-charcoal">Personal recognition</h3>
          <span className="eyebrow text-charcoal/55">Mudasir Mushtaq</span>
        </Reveal>
        <ul className="mt-10 grid gap-8 lg:grid-cols-2">
          {personalAwards.map((a, i) => (
            <li key={a.title}>
              <Reveal delay={i * 0.08} className="h-full">
                <PersonalCard award={a} />
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-28">
          <Reveal className="flex flex-col gap-3 border-b border-charcoal/10 pb-4 md:flex-row md:items-baseline md:justify-between">
            <h3 className="font-serif text-3xl text-charcoal">DRE Homes company recognition</h3>
            <p className="text-sm text-charcoal/65">Awarded to DRE Homes Real Estate as an organisation, under his leadership.</p>
          </Reveal>

          <ul className="mt-10 grid gap-px bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-4">
            {companyAwards.map((a, i) => (
              <li key={a.title} className="bg-ivory">
                <Reveal delay={i * 0.06} className="flex h-full flex-col p-7">
                  <span className="font-serif text-5xl text-charcoal">{a.year}</span>
                  <span aria-hidden className="gold-rule mt-5 h-px w-16" />
                  <p className="eyebrow mt-5 text-champagne-dark">{a.organisation}</p>
                  <h4 className="mt-2 font-serif text-2xl leading-tight text-charcoal">{a.title}</h4>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/70">{a.description}</p>
                  <p className="mt-4 text-[0.68rem] font-semibold tracking-[0.18em] text-charcoal/55 uppercase">Awarded to DRE Homes</p>
                  <SourceLink award={a} className="mt-2 text-[0.68rem] font-semibold tracking-[0.18em] text-charcoal uppercase" />
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal className="mt-16 bg-charcoal p-8 text-ivory sm:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow text-gold-soft">Developer &amp; industry honours</p>
                <p className="mt-4 font-serif text-4xl sm:text-5xl">
                  {companyAwardCount} honours &middot;{" "}
                  <span className="italic text-gold-soft">
                    {awardYears.from}&ndash;{awardYears.to}
                  </span>
                </p>
              </div>
              <p className="max-w-md text-sm text-ivory/70">
                Partner and broker awards received by DRE Homes from Dubai&rsquo;s leading developers and institutions, as listed by{" "}
                <ExternalLink href={sources.dreAbout} className="underline decoration-gold underline-offset-4">
                  DRE Homes
                </ExternalLink>
                .
              </p>
            </div>
            <dl id="developer-awards" className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {years.map((y) => (
                <div key={y.year} className="border-t border-ivory/15 pt-5">
                  <dt className="font-serif text-2xl text-gold-soft">{y.year}</dt>
                  <dd>
                    <ul className="mt-3 space-y-1.5 text-sm text-ivory/80">
                      {y.awards.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
            <button
              type="button"
              aria-expanded={showAll}
              aria-controls="developer-awards"
              onClick={() => setShowAll((v) => !v)}
              className="mt-10 border border-ivory/30 px-6 py-3 text-[0.72rem] font-semibold tracking-[0.2em] text-ivory uppercase transition-colors hover:border-gold hover:text-gold-soft"
            >
              {showAll ? "Show fewer years" : `Show all years (${awardYears.from}\u2013${awardYears.to})`}
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
