import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookmarkCheck } from "lucide-react";
import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow"><span className="eyebrow-mark" aria-hidden="true" />{children}</p>;
}

export function ConceptLabel() {
  return <span className="concept-label"><span /> Concept preview</span>;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align,
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "center";
}) {
  return (
    <div className={`section-title${align ? ` section-title--${align}` : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
  note,
}: {
  eyebrow: string;
  title: string;
  description: string;
  note?: string;
}) {
  return (
    <section className="page-intro">
      <div className="container page-intro-inner">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{description}</p>
        {note && <span className="page-intro-note"><span />{note}</span>}
      </div>
    </section>
  );
}

export function CallToAction({
  eyebrow,
  title,
  text,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow: string;
  title: string;
  text: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}) {
  return (
    <div className="cta-panel">
      <div className="cta-decoration" aria-hidden="true">
        <span className="cta-ring cta-ring--one" />
        <span className="cta-ring cta-ring--two" />
        <span className="cta-bookmark"><BookmarkCheck size={24} /></span>
      </div>
      <div className="cta-content">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="button-row">
          <Link className="button button-primary" href={primaryHref}>
            {primaryLabel}<ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <Link className="button button-quiet" href={secondaryHref}>
            {secondaryLabel}<ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <span className="cta-tagline">SAVE TODAY. FIND TOMORROW.</span>
      </div>
    </div>
  );
}
