import Link from "next/link";

/** A glossary/definition entry. When `term` is present it renders bold, inline
 *  before the definition text (e.g. **Account** means a unique account…). */
export type LegalDefinition = { term?: string; definition: string };

/** An optional nested block under a section (e.g. "Interpretation",
 *  "Personal Data", "Tracking Technologies and Cookies"). */
export type LegalSubsection = {
  subheading?: string;
  paragraphs?: string[];
  bullets?: string[];
  definitions?: LegalDefinition[];
};

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  definitions?: LegalDefinition[];
  subsections?: LegalSubsection[];
};

function Paragraphs({ items }: { items?: string[] }) {
  if (!items) return null;
  return (
    <>
      {items.map((p, j) => (
        <p key={j} className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
          {p}
        </p>
      ))}
    </>
  );
}

function Bullets({ items }: { items?: string[] }) {
  if (!items) return null;
  return (
    <ul className="mt-4 space-y-2">
      {items.map((b, j) => (
        <li key={j} className="flex gap-3 text-sm leading-relaxed text-slate-400 sm:text-base">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

function Definitions({ items }: { items?: LegalDefinition[] }) {
  if (!items) return null;
  return (
    <ul className="mt-4 space-y-3">
      {items.map((d, j) => (
        <li key={j} className="flex gap-3 text-sm leading-relaxed text-slate-400 sm:text-base">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
          <span>
            {d.term && <span className="font-semibold text-slate-200">{d.term} </span>}
            {d.definition}
          </span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Shared layout for static legal pages (Privacy Policy, Terms & Conditions).
 * Server component — renders inside the global SiteNav/SiteFooter chrome.
 */
export default function LegalPage({
  title,
  lastUpdated,
  intro,
  sections,
  contactEmail = "growth@hybridmonks.com",
}: {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
  contactEmail?: string;
}) {
  return (
    <main className="min-h-screen bg-brand-bg font-(family-name:--font-inter)">
      {/* Header */}
      <header className="border-b border-slate-800/80 bg-[#0b1120]">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Legal</span>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-slate-400">Last updated: {lastUpdated}</p>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <p className="text-base leading-relaxed text-slate-300">{intro}</p>

        <div className="mt-10 space-y-10">
          {sections.map((section, i) => (
            <section key={section.heading}>
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                {i + 1}. {section.heading}
              </h2>
              <Paragraphs items={section.paragraphs} />
              <Bullets items={section.bullets} />
              <Definitions items={section.definitions} />

              {section.subsections?.map((sub, j) => (
                <div key={j} className="mt-6">
                  {sub.subheading && (
                    <h3 className="text-base font-semibold text-white sm:text-lg">{sub.subheading}</h3>
                  )}
                  <Paragraphs items={sub.paragraphs} />
                  <Bullets items={sub.bullets} />
                  <Definitions items={sub.definitions} />
                </div>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <p className="text-sm text-slate-400">
            Questions about this page?{" "}
            <Link href="/contact" className="font-semibold text-blue-400 hover:text-blue-300">
              Contact us
            </Link>{" "}
            or email{" "}
            <a href={`mailto:${contactEmail}`} className="font-semibold text-blue-400 hover:text-blue-300">
              {contactEmail}
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
