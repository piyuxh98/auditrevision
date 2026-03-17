import { TopicExplorer } from "@/components/TopicExplorer";
import topics from "@/data/topics.json";

export default function HomePage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <section className="rounded-[1.5rem] border border-line bg-white p-6 shadow-card sm:p-8">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-4">
            <span className="inline-flex rounded-full bg-accent.soft px-3 py-1 text-sm font-semibold text-accent">
              ACCA Audit & Assurance
            </span>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                Study dashboard
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted">
                Topics, practice, and revision arranged in a clean portal layout.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-3">
            <div className="rounded-[1.1rem] border border-line bg-panel p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Topics</p>
              <p className="mt-2 text-3xl font-bold text-ink">{topics.length}</p>
            </div>
            <div className="rounded-[1.1rem] border border-line bg-panel p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Practice</p>
              <p className="mt-2 text-lg font-bold text-ink">MCQ + PYQ</p>
            </div>
            <div className="rounded-[1.1rem] border border-line bg-panel p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Revision</p>
              <p className="mt-2 text-lg font-bold text-ink">Checklists</p>
            </div>
          </div>
        </div>
      </section>

      <TopicExplorer topics={topics} />
    </div>
  );
}
