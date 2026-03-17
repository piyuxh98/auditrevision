"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Flashcard } from "@/components/Flashcard";
import topics from "@/data/topics.json";

type FlashcardState = Record<number, boolean>;

export function RevisionClient() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState<FlashcardState>({});

  const cards = useMemo(() => {
    return topics.map((topic) => ({
      title: topic.title,
      slug: topic.slug,
      summary: topic.summary,
      prompt: `How would you revise ${topic.title}?`,
      answer: topic.revision.join(" "),
      revision: topic.revision,
      examPoints: topic.examPoints.slice(0, 3),
      conceptFocus: topic.concept[0]
    }));
  }, []);

  const activeCard = cards[activeIndex];

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] xl:grid-cols-[0.74fr_1.26fr]">
        <aside className="rounded-[1.5rem] border border-line bg-white p-6 shadow-card sm:p-8">
          <div className="space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted/80">
              Revision Planner
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Structured revision sheet
            </h1>
            <p className="text-base leading-8 text-muted">
              Move topic by topic, flip the recall card, and use the checklist blocks
              below as your last-minute AA exam revision sheet.
            </p>
          </div>

          <div className="mt-6 rounded-[1.25rem] border border-line bg-accent.soft p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              How To Use
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-muted">
              <li>1. Pick one topic from the list.</li>
              <li>2. Flip the recall card before reading the notes.</li>
              <li>3. Scan recap points and exam focus together.</li>
              <li>4. Open the full topic only if you need extra detail.</li>
            </ul>
          </div>

          <div className="mt-6 space-y-3">
            {cards.map((card, index) => (
              <button
                key={card.slug}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`w-full rounded-[1.25rem] border px-4 py-4 text-left transition-all duration-200 ${
                  activeIndex === index
                    ? "border-accent bg-accent text-white shadow-sm"
                    : "border-line bg-white text-ink hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold">{card.title}</p>
                  <span className={`text-[11px] uppercase tracking-[0.18em] ${activeIndex === index ? "text-red-100" : "text-muted/80"}`}>
                    Topic
                  </span>
                </div>
                <p className={`mt-2 text-sm leading-6 ${activeIndex === index ? "text-red-50" : "text-muted"}`}>
                  {card.summary}
                </p>
              </button>
            ))}
          </div>
        </aside>

        <div className="space-y-6">
          <section className="rounded-[1.5rem] border border-line bg-white p-6 shadow-card sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl space-y-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted/80">
                  Active Topic
                </span>
                <h2 className="text-3xl font-bold text-ink sm:text-4xl">{activeCard.title}</h2>
                <p className="text-base leading-8 text-muted">{activeCard.summary}</p>
              </div>
              <Link
                href={`/topics/${activeCard.slug}`}
                className="inline-flex rounded-xl border border-accent bg-accent px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent.deep hover:shadow-md"
              >
                Open full topic
              </Link>
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
              <Flashcard
                prompt={activeCard.prompt}
                answer={activeCard.answer}
                flipped={Boolean(flippedCards[activeIndex])}
                onFlip={() =>
                  setFlippedCards((current) => ({
                    ...current,
                    [activeIndex]: !current[activeIndex]
                  }))
                }
              />

              <div className="rounded-[1.25rem] border border-line bg-accent.soft p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  Topic Snapshot
                </p>
                <div className="mt-4 space-y-4 text-sm leading-7 text-muted">
                  <div>
                    <p className="font-semibold text-ink">Core idea</p>
                    <p>{activeCard.conceptFocus}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-ink">Revision goal</p>
                    <p>Be able to explain the issue, spot the risk, and link it to an audit response.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-ink">Exam reminder</p>
                    <p>Use precise audit language, not generic business commentary.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.25rem] border border-line bg-white p-6 shadow-card">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl font-bold text-ink">Quick recap checklist</h3>
                <span className="rounded-full bg-accent.soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  Recall
                </span>
              </div>
              <ul className="mt-4 space-y-3">
                {activeCard.revision.map((point, index) => (
                  <li key={point} className="flex gap-3 rounded-xl border border-line bg-white px-4 py-3 text-sm leading-7 text-muted">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent.soft text-xs font-semibold text-accent">
                      {index + 1}
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.25rem] border border-line bg-white p-6 shadow-card">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl font-bold text-ink">Exam focus checklist</h3>
                <span className="rounded-full bg-accent.soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  Practice
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-muted">
                These are the main angles to practise after revising the topic.
              </p>
              <ul className="mt-4 space-y-3">
                {activeCard.examPoints.map((point) => (
                  <li key={point} className="flex gap-3 rounded-xl border border-line bg-white px-4 py-3 text-sm leading-7 text-muted">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
