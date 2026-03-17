type QuickRevisionBoxProps = {
  content: string[];
};

export function QuickRevisionBox({ content }: QuickRevisionBoxProps) {
  return (
    <div className="rounded-[1.5rem] border border-red-100 bg-red-50 p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent.deep">
        Last-minute recap
      </p>
      <ul className="mt-4 space-y-3 text-slate-800">
        {content.map((item, index) => (
          <li key={item} className="flex gap-3 rounded-2xl bg-white px-4 py-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent.soft text-xs font-semibold text-accent.deep">
              {index + 1}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
