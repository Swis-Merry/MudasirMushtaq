import Image from "next/image";
import { press, type PressItem } from "@/content/press";
import { Reveal, SectionHeading } from "@/components/ui";

const formatDate = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

function CardBody({ item, featured }: { item: PressItem; featured?: boolean }) {
  return (
    <>
      <div className={`relative overflow-hidden bg-sand ${featured ? "aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[30rem]" : "aspect-[16/10]"}`}>
        {item.image ? (
          <Image
            src={item.image}
            alt=""
            fill
            sizes={featured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
            className={`object-cover transition-transform duration-[1.2s] ease-luxe group-hover:scale-105 ${featured ? "object-[70%_45%]" : ""}`}
          />
        ) : (
          <div className="pinstripe flex h-full items-center justify-center bg-charcoal p-8">
            <span className="text-center font-serif text-4xl leading-none text-gold-soft italic">{item.publication}</span>
          </div>
        )}
      </div>
      <div className={`flex flex-col p-7 ${featured ? "lg:justify-center lg:p-14" : ""}`}>
        <p className="eyebrow flex flex-wrap gap-x-3 text-champagne-dark">
          <span>{item.publication}</span>
          <span aria-hidden>&middot;</span>
          {item.date ? <time dateTime={item.date}>{formatDate(item.date)}</time> : <span>{item.type}</span>}
        </p>
        <h3 className={`mt-4 font-serif leading-tight text-charcoal ${featured ? "text-3xl sm:text-4xl lg:text-5xl" : "text-2xl"}`}>
          {item.headline}
        </h3>
        <p className="mt-auto pt-6 text-xs font-semibold tracking-[0.18em] text-charcoal uppercase">
          {item.url ? (
            <>
              Read {item.type.toLowerCase()}{" "}
              <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
              <span className="sr-only"> on {item.publication} (opens in a new tab)</span>
            </>
          ) : (
            <span className="text-charcoal/55">Campaign creative &middot; DRE &times; Bayut</span>
          )}
        </p>
      </div>
    </>
  );
}

function PressCard({ item, featured }: { item: PressItem; featured?: boolean }) {
  const className = `group grid h-full bg-white transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(36,36,36,0.35)] ${
    featured ? "lg:grid-cols-2" : ""
  }`;
  return item.url ? (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className={className}>
      <CardBody item={item} featured={featured} />
    </a>
  ) : (
    <article className={className}>
      <CardBody item={item} featured={featured} />
    </article>
  );
}

export function Press() {
  const [lead, ...rest] = press;
  return (
    <section id="press" aria-labelledby="press-title" className="bg-ivory py-24 lg:py-36">
      <div className="container-luxe">
        <SectionHeading
          index="05"
          eyebrow="Media & Press"
          title={
            <span id="press-title">
              In the <span className="italic text-champagne-dark">headlines</span>
            </span>
          }
          intro="Interviews, features and campaigns from the region's leading publications and property platforms."
        />
        <Reveal className="mt-14">
          <PressCard item={lead} featured />
        </Reveal>
        <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <li key={p.headline}>
              <Reveal delay={i * 0.08} className="h-full">
                <PressCard item={p} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
