export default function BackgroundLedger() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, #B8934A 0px, #B8934A 1px, transparent 1px, transparent 40px)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}
