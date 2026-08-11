interface Props {
  current: number;
  total: number;
}

export default function ProgressMeter({ current, total }: Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center gap-4 px-6 py-4 md:px-10">
      <div className="flex-1 flex gap-1">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className="h-[2px] flex-1 bg-line overflow-hidden"
            aria-hidden
          >
            <div
              className="h-full bg-brass transition-all duration-500 ease-out"
              style={{ width: i <= current ? "100%" : "0%" }}
            />
          </div>
        ))}
      </div>
      <span className="font-mono text-[11px] tracking-widest text-bonemute tabular-nums">
        {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
    </div>
  );
}
