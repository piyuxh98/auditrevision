import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionBlock } from "@/components/SectionBlock";
import { QuickRevisionBox } from "@/components/QuickRevisionBox";
import topics from "@/data/topics.json";

type TopicPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return topics.map((topic) => ({ slug: topic.slug }));
}

export function generateMetadata({ params }: TopicPageProps): Metadata {
  const topic = topics.find((item) => item.slug === params.slug);

  if (!topic) {
    return { title: "Topic Not Found" };
  }

  return {
    title: topic.title,
    description: topic.revision.join(" ")
  };
}

export default function TopicPage({ params }: TopicPageProps) {
  const topic = topics.find((item) => item.slug === params.slug);

  if (!topic) {
    notFound();
  }

  const sectionLinks = [
    { id: "concept", label: "Concept" },
    { id: "exam-points", label: "Exam Points" },
    { id: "examples", label: "Examples" },
    { id: "mistakes", label: "Common Mistakes" },
    { id: "revision", label: "Quick Revision" }
  ];

  return (
    <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[1fr_17rem] lg:px-8">
      <article className="rounded-[2rem] border border-white/70 bg-white/88 p-6 shadow-card backdrop-blur sm:p-10">
        <div className="space-y-6 border-b border-slate-200/80 pb-8">
          <Link
            href="/"
            className="inline-flex text-sm font-medium text-accent transition hover:text-accent.deep"
          >
            Back to all topics
          </Link>
          <div className="space-y-4">
            <span className="inline-flex rounded-full border border-accent/10 bg-accent.soft px-3 py-1 text-sm font-semibold text-accent.deep">
              Topic Note
            </span>
            <h1 className="font-serif text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              {topic.title}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-muted">
              {topic.summary}
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-8">
          <SectionBlock id="concept" title="Concept">
            <div className="space-y-4">
              {topic.concept.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>
          </SectionBlock>

          <SectionBlock id="exam-points" title="Exam Points">
            <ul className="space-y-3">
              {topic.examPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock id="examples" title="Examples">
            <div className="space-y-4">
              {topic.examples.map((example) => (
                <div key={example.title} className="rounded-2xl border border-slate-200 bg-surface p-5">
                  <h3 className="text-lg font-semibold text-slate-950">{example.title}</h3>
                  <p className="mt-2 leading-7 text-muted">{example.body}</p>
                </div>
              ))}
            </div>
          </SectionBlock>

          <SectionBlock id="mistakes" title="Common Mistakes">
            <ul className="space-y-3">
              {topic.mistakes.map((mistake) => (
                <li key={mistake} className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-red-900">
                  {mistake}
                </li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock id="revision" title="Quick Revision">
            <QuickRevisionBox content={topic.revision} />
          </SectionBlock>
        </div>
      </article>

      <aside className="hidden lg:block">
        <div className="sticky top-24 rounded-[1.5rem] border border-white/70 bg-white/88 p-5 shadow-card backdrop-blur">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            On This Page
          </h2>
          <nav className="mt-4 flex flex-col gap-3">
            {sectionLinks.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm font-medium text-slate-700 transition hover:text-accent"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </div>
  );
}
