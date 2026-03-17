"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";

type MCQCardProps = {
  questionNumber: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  source?: string;
  selectedOption?: string;
  onSelect: (option: string) => void;
};

export function MCQCard({
  questionNumber,
  question,
  options,
  answer,
  explanation,
  source,
  selectedOption,
  onSelect
}: MCQCardProps) {
  const isAnswered = Boolean(selectedOption);
  const isCorrect = selectedOption === answer;

  const statusText = useMemo(() => {
    if (!isAnswered) {
      return "Choose the best answer.";
    }

    return isCorrect ? "Correct. Nice work." : `Not quite. Correct answer: ${answer}.`;
  }, [answer, isAnswered, isCorrect]);

  return (
    <article className="group relative overflow-hidden rounded-[1.25rem] border border-line bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <span className="absolute inset-x-0 top-0 h-1 bg-transparent transition-colors duration-200 group-hover:bg-accent" />

      <div className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
              Question {questionNumber}
            </span>
            {source ? (
              <span className="rounded-full bg-accent.soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                {source}
              </span>
            ) : null}
          </div>
          <span
            className={cn(
              "text-sm font-semibold",
              isAnswered ? (isCorrect ? "text-success" : "text-red-700") : "text-muted"
            )}
          >
            {statusText}
          </span>
        </div>

        <h2 className="text-2xl font-bold leading-9 text-accent">{question}</h2>

        <div className="grid gap-3">
          {options.map((option) => {
            const isChosen = selectedOption === option;
            const isAnswer = answer === option;

            return (
              <button
                key={option}
                type="button"
                onClick={() => onSelect(option)}
                disabled={isAnswered}
                className={cn(
                  "rounded-xl border px-4 py-3.5 text-left text-sm font-medium leading-7 transition-all duration-200",
                  !isAnswered && "border-line bg-white hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-sm",
                  isAnswered && "cursor-default",
                  isAnswered && isAnswer && "border-accent bg-accent text-white",
                  isAnswered && isChosen && !isAnswer && "border-red-200 bg-red-50 text-red-900",
                  isAnswered && !isChosen && !isAnswer && "border-line bg-slate-50 text-slate-600"
                )}
              >
                {option}
              </button>
            );
          })}
        </div>

        {isAnswered ? (
          <div className="rounded-xl border border-accent bg-accent px-4 py-4 text-sm leading-7 text-white">
            <span className="font-semibold text-white">Solution:</span>{" "}
            {explanation}
          </div>
        ) : null}
      </div>
    </article>
  );
}
