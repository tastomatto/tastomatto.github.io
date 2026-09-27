import AudioPlayer from "./AudioPlayer";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import FloatingNotes from "./FloatingNotes";
import type { Track } from "@/lib/data";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  desc?: string;
  tracks: Track[];
  variant?: "cream" | "lime";
};

export default function TracksSection({
  id,
  eyebrow,
  title,
  desc,
  tracks,
  variant = "cream",
}: Props) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-20 sm:py-28 ${
        variant === "lime" ? "bg-lime" : ""
      }`}
    >
      {variant === "lime" && <FloatingNotes count={7} />}
      <div className="relative mx-auto max-w-4xl px-4">
        <SectionHeader eyebrow={eyebrow} title={title} desc={desc} />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {tracks.map((t, i) => (
            <Reveal key={t.id} delay={(i % 2) * 0.08} from="up">
              <AudioPlayer
                title={t.title}
                subtitle={t.subtitle}
                src={t.src}
                color={t.color}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
