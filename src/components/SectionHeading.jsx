import { useReveal } from "../hooks/useReveal";

export default function SectionHeading({ eyebrow, title, sub, className = "" }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal mb-14 max-w-2xl ${className}`}>
      <p className="label mb-4 text-accent">{eyebrow}</p>
      <h2 className="font-display text-4xl sm:text-5xl">{title}</h2>
      {sub && <p className="mt-5 text-lg leading-relaxed text-muted">{sub}</p>}
    </div>
  );
}
