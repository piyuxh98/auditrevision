import Link from "next/link";
import type { Topic } from "@/lib/utils";

type TopicCardProps = {
  topic: Topic;
};

export function TopicCard({ topic }: TopicCardProps) {
  return (
    <Link
      href={`/topics/${topic.slug}`}
      className="group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[1.25rem] border border-line bg-white p-5 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-accent/25 hover:shadow-lg"
    >
      <span className="absolute inset-x-0 top-0 h-1 bg-transparent transition-colors duration-200 group-hover:bg-accent" />

      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-muted/75">
            Study Topic
          </span>
          <span className="rounded-full bg-panel px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
            Topic
          </span>
        </div>

        <div className="space-y-3">
          <h3 className="pb-1 text-[1.3rem] font-bold leading-8 text-ink transition-colors duration-200 group-hover:text-accent.deep">
            {topic.title}
          </h3>
          <p className="text-sm leading-7 text-muted">{topic.summary}</p>
        </div>
      </div>

      <span className="mt-6 inline-flex w-fit items-center rounded-lg border border-accent/15 bg-accent.soft px-4 py-2.5 text-sm font-semibold text-accent transition-all duration-200 group-hover:bg-accent group-hover:text-white">
        Open topic
      </span>
    </Link>
  );
}
