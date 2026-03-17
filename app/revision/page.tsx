import dynamic from "next/dynamic";

const RevisionClient = dynamic(
  () => import("@/components/RevisionClient").then((mod) => mod.RevisionClient),
  {
    ssr: false,
    loading: () => (
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-white p-8 shadow-card">Loading revision mode...</div>
      </div>
    )
  }
);

export default function RevisionPage() {
  return <RevisionClient />;
}
