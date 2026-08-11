import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { slides } from "./data/slides";
import Slide from "./components/Slide";
import ProgressMeter from "./components/ProgressMeter";
import PresenterNotes from "./components/PresenterNotes";
import BackgroundLedger from "./components/BackgroundLedger";
import CornerFrame from "./components/CornerFrame";

export default function App() {
  const [current, setCurrent] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const startRef = useRef<number | null>(null);

  const next = useCallback(() => {
    setCurrent((c) => Math.min(c + 1, slides.length - 1));
  }, []);
  const prev = useCallback(() => {
    setCurrent((c) => Math.max(c - 1, 0));
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key.toLowerCase() === "n") {
        setShowNotes((v) => !v);
      } else if (e.key.toLowerCase() === "r") {
        setElapsed(0);
        setRunning(true);
        startRef.current = Date.now();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  useEffect(() => {
    if (current === 1 && !running) {
      setRunning(true);
      startRef.current = Date.now();
    }
  }, [current, running]);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      if (startRef.current) setElapsed((Date.now() - startRef.current) / 1000);
    }, 100);
    return () => clearInterval(id);
  }, [running]);

  return (
    <div
      className="relative w-screen h-screen bg-ink overflow-hidden select-none cursor-pointer"
      onClick={next}
    >
      <BackgroundLedger />
      <CornerFrame />
      <AnimatePresence mode="wait">
        <Slide key={current} slide={slides[current]} />
      </AnimatePresence>

      <PresenterNotes note={slides[current].notes} visible={showNotes} />

      <div
        className="fixed top-5 right-6 md:top-8 md:right-10 font-mono text-[11px] tracking-widest text-bonemute tabular-nums"
        onClick={(e) => e.stopPropagation()}
      >
        {running ? elapsed.toFixed(1) : "0.0"}s
        <span className="text-line mx-2">·</span>
        <span className="opacity-60">R reset · N notes</span>
      </div>

      <div onClick={(e) => e.stopPropagation()}>
        <ProgressMeter current={current} total={slides.length} />
      </div>

      <div className="fixed bottom-16 right-6 md:right-10 flex gap-2" onClick={(e) => e.stopPropagation()}>
        <button
          aria-label="Previous slide"
          onClick={prev}
          disabled={current === 0}
          className="px-2 py-1 font-mono text-xs text-bonemute border border-line disabled:opacity-30 hover:border-brass hover:text-brass transition-colors"
        >
          ←
        </button>
        <button
          aria-label="Next slide"
          onClick={next}
          disabled={current === slides.length - 1}
          className="px-2 py-1 font-mono text-xs text-bonemute border border-line disabled:opacity-30 hover:border-brass hover:text-brass transition-colors"
        >
          →
        </button>
      </div>
    </div>
  );
}
