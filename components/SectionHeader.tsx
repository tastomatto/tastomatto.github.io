import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  desc?: string;
  align?: "center" | "left";
};

export default function SectionHeader({
  eyebrow,
  title,
  desc,
  align = "center",
}: Props) {
  return (
    <Reveal
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }
    >
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="mt-4 font-display text-4xl font-700 leading-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {desc && (
        <p className="mt-4 font-body text-lg text-ink/70">{desc}</p>
      )}
    </Reveal>
  );
}
