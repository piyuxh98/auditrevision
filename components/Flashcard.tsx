"use client";

import { cn } from "@/lib/utils";

type FlashcardProps = {
  prompt: string;
  answer: string;
  flipped: boolean;
  onFlip: () => void;
};

export function Flashcard({ prompt, answer, flipped, onFlip }: FlashcardProps) {
  return (
    <button
      type="button"
      onClick={onFlip}
      className="group min-h-[18rem] w-full rounded-[1.25rem] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
      aria-pressed={flipped}
    >
      <div
        className={cn(
          "flex h-full flex-col justify-between rounded-[1.25rem] border p-6 shadow-card transition-all duration-200",
          flipped
            ? "border-accent/20 bg-accent.soft"
            : "border-line bg-white group-hover:-translate-y-1 group-hover:border-accent/30 group-hover:shadow-lg"
        )}
      >
        <div className="space-y-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted/80">
            {flipped ? "Answer" : "Prompt"}
          </span>
          <p className="text-2xl font-bold leading-9 text-ink">
            {flipped ? answer : prompt}
          </p>
        </div>
        <span className="text-sm font-medium text-muted">
          {flipped ? "Tap to view the prompt again." : "Tap to reveal the answer."}
        </span>
      </div>
    </button>
  );
}
