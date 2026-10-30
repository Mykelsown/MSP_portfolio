// Thin decorative flow lines, after the hairline curves in the reference design.
export default function Curves({ className = "", variant = "a" }) {
  const paths =
    variant === "a"
      ? [
          "M-20 40 C 120 10, 180 160, 320 120 S 520 60, 640 180",
          "M-20 70 C 140 40, 170 200, 330 150 S 540 110, 640 230",
          "M300 -20 C 280 80, 380 140, 360 260 S 420 420, 520 460",
        ]
      : [
          "M640 30 C 520 60, 460 -10, 340 60 S 120 140, -20 90",
          "M120 -20 C 160 90, 60 160, 120 280 S 260 420, 200 480",
        ];

  return (
    <svg
      className={`pointer-events-none absolute ${className}`}
      viewBox="0 0 620 460"
      fill="none"
      aria-hidden="true"
    >
      {paths.map((d) => (
        <path key={d} d={d} stroke="var(--line)" strokeWidth="1" opacity="0.7" />
      ))}
    </svg>
  );
}
