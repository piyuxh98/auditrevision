type SectionBlockProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export function SectionBlock({ id, title, children }: SectionBlockProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="rounded-[1.75rem] border border-white/70 bg-white/88 shadow-card backdrop-blur">
        <div className="border-b border-slate-200/80 px-6 py-5">
          <h2 className="font-serif text-2xl font-semibold text-slate-950">{title}</h2>
        </div>
        <div className="px-6 py-6 text-base leading-8 text-slate-700">{children}</div>
      </div>
    </section>
  );
}
