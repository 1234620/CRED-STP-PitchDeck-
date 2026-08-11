interface Props {
  value: string;
}

export default function BackgroundNumeral({ value }: Props) {
  return (
    <div
      className="pointer-events-none absolute -z-0 select-none font-display text-bone"
      style={{
        fontSize: "min(60vw, 60vh)",
        opacity: 0.035,
        right: "-2vw",
        bottom: "-8vh",
        lineHeight: 1,
      }}
      aria-hidden
    >
      {value}
    </div>
  );
}
