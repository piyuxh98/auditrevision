"use client";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <label className="relative block">
      <span className="sr-only">Search topics</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search topics or exam focus areas"
        className="w-full rounded-xl border border-line bg-white px-4 py-3.5 text-sm font-medium text-ink shadow-sm outline-none transition-all duration-200 placeholder:text-muted focus:border-accent focus:ring-4 focus:ring-accent.soft"
      />
    </label>
  );
}
