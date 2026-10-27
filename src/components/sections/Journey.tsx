"use client";

import { motion, useScroll } from "motion/react";
import { useRef } from "react";
import { timeline } from "@/content/story";
import { ExternalLink, SectionHeading } from "@/components/ui";

export function Journey() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });

  return (
    <section id="journey" aria-labelledby="journey-title" className="pinstripe relative bg-charcoal py-24 text-ivory lg:py-36">
      <div className="container-luxe grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              tone="light"
              index="02"
              eyebrow="My Journey"
              title={
                <span id="journey-title">
                  From Karama to Dubai Hills, <span className="italic text-gold-soft">one disciplined step at a time</span>
                </span>
              }
              intro="Each milestone is drawn from DRE Homes' official history and published interviews. Dates appear only where they are verified."
            />
          </div>
        </div>

        <div className="relative lg:col-span-8 lg:pt-4">
          <div aria-hidden className="absolute top-0 bottom-0 left-1.5 w-px bg-ivory/15 sm:left-[7.5rem]" />
          <motion.div
            aria-hidden
            style={{ scaleY: scrollYProgress }}
            className="absolute top-0 bottom-0 left-1.5 w-px origin-top bg-gold sm:left-[7.5rem]"
          />
          <ol ref={ref} className="relative space-y-14">
            {timeline.map((m) => (
              <motion.li
                key={m.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative grid pl-10 sm:grid-cols-[7.5rem_1fr] sm:pl-0"
              >
                <p
                  className={`mb-3 font-serif leading-none text-gold-soft sm:mb-0 sm:pr-8 sm:text-right ${/^\d{4}$/.test(m.year) ? "text-3xl sm:text-4xl" : "pt-1 text-[0.65rem] font-sans font-semibold tracking-[0.2em] uppercase sm:text-xs"}`}
                >
                  {m.year}
                </p>
                <span
                  aria-hidden
                  className="absolute top-2 left-1.5 h-3 w-3 -translate-x-1/2 rotate-45 border border-gold bg-charcoal sm:left-[7.5rem]"
                />
                <div className="max-w-2xl sm:pl-12">
                  <h3 className="font-serif text-2xl leading-tight text-ivory sm:text-3xl">{m.title}</h3>
                  <p className="mt-3 leading-relaxed text-ivory/70">{m.body}</p>
                  {m.source ? (
                    <ExternalLink
                      href={m.source}
                      className="mt-3 inline-block text-[0.68rem] font-semibold tracking-[0.18em] text-ivory/50 uppercase underline-offset-4 hover:text-gold-soft hover:underline"
                    >
                      Source
                    </ExternalLink>
                  ) : (
                    <p className="mt-3 text-[0.68rem] font-semibold tracking-[0.18em] text-ivory/50 uppercase">
                      Source: Bayut &times; DRE campaign
                    </p>
                  )}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
