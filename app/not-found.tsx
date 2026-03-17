import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
      <span className="rounded-full bg-accent.soft px-3 py-1 text-sm font-semibold text-accent.deep">
        Page not found
      </span>
      <h1 className="mt-4 text-3xl font-bold text-slate-950">The study note you requested is missing.</h1>
      <p className="mt-3 max-w-xl text-muted">
        Head back to the homepage to browse the core ACCA AA topics, practice
        questions, and revision tools.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent.deep"
      >
        Return home
      </Link>
    </div>
  );
}
