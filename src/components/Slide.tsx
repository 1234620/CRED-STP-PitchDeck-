import { motion } from "framer-motion";
import type { Slide as SlideType } from "../data/slides";
import CreditGauge from "./CreditGauge";
import VideoEmbed from "./VideoEmbed";
import BackgroundNumeral from "./BackgroundNumeral";
import { CRED_DRAVID_VIDEO_ID } from "../data/slides";

interface Props {
  slide: SlideType;
}

export default function Slide({ slide }: Props) {
  const isHookMedia = slide.variant === "hookMedia";

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-16 text-center overflow-hidden"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
    >
      {slide.eyebrow && <BackgroundNumeral value={slide.eyebrow} />}

      {isHookMedia && (
        <>
          <img
            src={`https://img.youtube.com/vi/${CRED_DRAVID_VIDEO_ID}/maxresdefault.jpg`}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-25 grayscale"
            aria-hidden
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(12,12,13,0.55) 0%, rgba(12,12,13,0.75) 55%, rgba(12,12,13,0.95) 100%)",
            }}
          />
        </>
      )}

      <div className="relative z-10 flex flex-col items-center">
        {slide.concept && (
          <div className="flex items-center gap-3 mb-6 font-mono text-[12px] tracking-[0.25em] text-brass">
            {slide.eyebrow && <span className="text-bonemute">{slide.eyebrow}</span>}
            <span>{slide.concept}</span>
          </div>
        )}

        <h1 className="font-display text-bone text-[clamp(1.9rem,5vw,3.4rem)] leading-[1.15] max-w-4xl font-normal">
          {slide.headline}
        </h1>

        {slide.support && (
          <p className="mt-6 font-mono text-[13px] md:text-sm tracking-wide text-bonemute">
            {slide.support}
          </p>
        )}

        {slide.variant === "gauge" && (
          <div className="flex justify-center w-full">
            <CreditGauge />
          </div>
        )}

        {slide.variant === "videoClose" && (
          <div className="mt-8 w-full max-w-md">
            <VideoEmbed videoId={CRED_DRAVID_VIDEO_ID} />
          </div>
        )}
      </div>
    </motion.div>
  );
}
