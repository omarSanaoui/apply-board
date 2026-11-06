import BoardMockup from "@/components/landing/BoardMockup";
import Hero from "@/components/landing/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-12 flex-1 p-10">
      <Hero />
      <BoardMockup />
    </div>
  );
}
