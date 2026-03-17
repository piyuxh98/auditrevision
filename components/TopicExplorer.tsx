"use client";

import { useMemo, useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { TopicCard } from "@/components/TopicCard";
import type { Topic } from "@/lib/utils";

type TopicExplorerProps = {
  topics: Topic[];
};

export function TopicExplorer({ topics }: TopicExplorerProps) {
  const [query, setQuery] = useState("");

  const filteredTopics = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return topics;
    }

    return topics.filter((topic) =>
      [topic.title, topic.summary, ...topic.examPoints]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery)
    );
  }, [query, topics]);

  return (
    <section className="grid gap-6 xl:grid-cols-[300px_1fr] xl:items-start">
      <aside className="rounded-[1.5rem] border border-line bg-white p-5 shadow-card xl:sticky xl:top-24">
        <div className="space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted/80">
            Topic Explorer
          </span>
          <h2 className="text-3xl font-bold text-ink">Core AA Topics</h2>
          <p className="text-sm leading-7 text-muted">
            Search by topic, concept, or exam point and open the relevant note.
          </p>
        </div>

        <div className="mt-5">
          <SearchBar value={query} onChange={setQuery} />
        </div>

        <div className="mt-5 rounded-[1.25rem] border border-line bg-panel p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Available</p>
          <p className="mt-2 text-3xl font-bold text-ink">{filteredTopics.length}</p>
          <p className="mt-2 text-sm leading-7 text-muted">
            Topic notes ready for revision and practice support.
          </p>
        </div>
      </aside>

      <div className="space-y-5">
        <div className="rounded-[1.25rem] border border-line bg-white px-5 py-4 shadow-card">
          <p className="text-sm leading-7 text-muted">
            Select a topic to open the note, then move into practice or revision when needed.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {filteredTopics.map((topic) => (
            <TopicCard key={topic.slug} topic={topic} />
          ))}
        </div>

        {filteredTopics.length === 0 ? (
          <div className="rounded-[1.25rem] border border-dashed border-line bg-white px-6 py-10 text-center text-muted shadow-card">
            No topic matched your search. Try another keyword such as <span className="font-semibold text-ink">evidence</span>, <span className="font-semibold text-ink">ethics</span>, or <span className="font-semibold text-ink">reporting</span>.
          </div>
        ) : null}
      </div>
    </section>
  );
}
