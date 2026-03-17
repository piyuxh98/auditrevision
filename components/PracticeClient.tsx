"use client";

import { useEffect, useMemo, useState } from "react";
import { MCQCard } from "@/components/MCQCard";
import questions from "@/data/questions.json";

const STORAGE_KEY = "acca-audit-mastery-practice-progress";

export function PracticeClient() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setAnswers(JSON.parse(stored) as Record<number, string>);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  }, [answers, hydrated]);

  const score = useMemo(() => {
    return questions.reduce((total, question, index) => {
      return answers[index] === question.answer ? total + 1 : total;
    }, 0);
  }, [answers]);

  const completed = Object.keys(answers).length;
  const pyqCount = questions.filter((question) => question.source?.includes("PYQ")).length;

  function handleReset() {
    setAnswers({});
    window.localStorage.removeItem(STORAGE_KEY);
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <section className="rounded-[1.5rem] border border-line bg-white p-6 shadow-card sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted/80">
              Practice Mode
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Practice questions
            </h1>
          </div>

          <div className="grid min-w-[20rem] grid-cols-2 gap-3 rounded-[1.25rem] border border-line bg-white p-4 sm:grid-cols-4">
            <div className="rounded-xl border border-line bg-white px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Answered</p>
              <p className="mt-2 text-2xl font-bold text-ink">
                {completed}/{questions.length}
              </p>
            </div>
            <div className="rounded-xl border border-line bg-white px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Score</p>
              <p className="mt-2 text-2xl font-bold text-ink">
                {score}/{questions.length}
              </p>
            </div>
            <div className="rounded-xl border border-line bg-white px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">PYQs</p>
              <p className="mt-2 text-2xl font-bold text-ink">{pyqCount}</p>
            </div>
            <div className="flex items-stretch">
              <button
                type="button"
                onClick={handleReset}
                className="w-full rounded-xl border border-accent bg-white px-4 py-3 text-sm font-semibold text-accent transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent hover:text-white hover:shadow-md"
              >
                Reset all
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 space-y-6">
        {questions.map((question, index) => (
          <MCQCard
            key={`${question.question}-${index}`}
            questionNumber={index + 1}
            question={question.question}
            options={question.options}
            answer={question.answer}
            explanation={question.explanation}
            source={question.source}
            selectedOption={answers[index]}
            onSelect={(option) =>
              setAnswers((current) => ({
                ...current,
                [index]: option
              }))
            }
          />
        ))}
      </div>
    </div>
  );
}
