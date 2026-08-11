const size = 22;

function Corner({ className }: { className: string }) {
  return (
    <div className={`fixed w-[${size}px] h-[${size}px] pointer-events-none z-20 ${className}`}>
      <svg width={size} height={size} viewBox="0 0 22 22" fill="none">
        <path d="M0 0 H22 M0 0 V22" stroke="#B8934A" strokeWidth="1" opacity="0.55" />
      </svg>
    </div>
  );
}

export default function CornerFrame() {
  return (
    <>
      <Corner className="top-4 left-4 md:top-6 md:left-6" />
      <div className="fixed top-4 right-4 md:top-6 md:right-6 pointer-events-none z-20 rotate-90">
        <svg width={size} height={size} viewBox="0 0 22 22" fill="none">
          <path d="M0 0 H22 M0 0 V22" stroke="#B8934A" strokeWidth="1" opacity="0.55" />
        </svg>
      </div>
      <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 pointer-events-none z-20 -rotate-90">
        <svg width={size} height={size} viewBox="0 0 22 22" fill="none">
          <path d="M0 0 H22 M0 0 V22" stroke="#B8934A" strokeWidth="1" opacity="0.55" />
        </svg>
      </div>
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 pointer-events-none z-20 rotate-180">
        <svg width={size} height={size} viewBox="0 0 22 22" fill="none">
          <path d="M0 0 H22 M0 0 V22" stroke="#B8934A" strokeWidth="1" opacity="0.55" />
        </svg>
      </div>
    </>
  );
}
