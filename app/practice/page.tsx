import dynamic from "next/dynamic";

const PracticeClient = dynamic(
  () => import("@/components/PracticeClient").then((mod) => mod.PracticeClient),
  {
    ssr: false,
    loading: () => (
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-white p-8 shadow-card">Loading practice questions...</div>
      </div>
    )
  }
);

export default function PracticePage() {
  return <PracticeClient />;
}
