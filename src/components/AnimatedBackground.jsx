// Ambient, dynamic backdrop: soft drifting color fields + a faint circuit-node
// grid. Everything here is fixed, behind content (-z-10) and pointer-events
// none, so it never competes with or obstructs page content. Colors are read
// from CSS custom properties, so they automatically shift with light/dark mode.
export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[var(--bg)] transition-colors duration-500" />

      <div className="absolute inset-0 node-grid opacity-[0.35]" />

      <div
        className="animate-drift-a absolute -top-32 -left-24 h-[32rem] w-[32rem] rounded-full blur-3xl"
        style={{ background: "var(--accent)", opacity: 0.16 }}
      />
      <div
        className="animate-drift-b absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background: "var(--accent-2)", opacity: 0.14 }}
      />
      <div
        className="animate-drift-c absolute bottom-[-8rem] left-1/4 h-[26rem] w-[26rem] rounded-full blur-3xl"
        style={{ background: "var(--signal)", opacity: 0.12 }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, transparent 0%, var(--bg) 78%)",
        }}
      />
    </div>
  );
}
