import { useState } from "react";

interface Props {
  videoId: string;
  className?: string;
}

export default function VideoEmbed({ videoId, className = "" }: Props) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className={`relative aspect-video w-full ${className}`}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="CRED — Great for the Good, ft. Rahul Dravid"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setPlaying(true);
      }}
      className={`relative aspect-video w-full group overflow-hidden border border-line ${className}`}
      aria-label="Play the CRED / Rahul Dravid ad"
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt="CRED ad still, ft. Rahul Dravid"
        className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-300"
      />
      <div className="absolute inset-0 bg-ink/25 group-hover:bg-ink/10 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-brass bg-ink/70 flex items-center justify-center group-hover:scale-105 transition-transform">
          <div
            className="w-0 h-0 ml-1"
            style={{
              borderTop: "9px solid transparent",
              borderBottom: "9px solid transparent",
              borderLeft: "14px solid #B8934A",
            }}
          />
        </div>
      </div>
    </button>
  );
}
