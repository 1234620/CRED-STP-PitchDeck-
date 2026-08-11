import { motion } from "framer-motion";

// Real CIBIL-style range, 300–900. CRED's threshold sits at 750.
const MIN = 300;
const MAX = 900;
const THRESHOLD = 750;
const thresholdPct = ((THRESHOLD - MIN) / (MAX - MIN)) * 100;

export default function CreditGauge() {
  return (
    <div className="w-full max-w-xl mt-10">
      <div className="flex justify-between font-mono text-[11px] tracking-widest text-bonemute mb-2">
        <span>{MIN}</span>
        <span>{MAX}</span>
      </div>
      <div className="relative h-[3px] bg-line rounded-none">
        {/* excluded range */}
        <motion.div
          className="absolute inset-y-0 left-0 bg-line"
          style={{ width: `${thresholdPct}%` }}
        />
        {/* qualified range, fills in on enter */}
        <motion.div
          className="absolute inset-y-0 bg-brass"
          style={{ left: `${thresholdPct}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${100 - thresholdPct}%` }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        />
        {/* threshold marker */}
        <motion.div
          className="absolute -top-[7px] w-[2px] h-[17px] bg-bone"
          style={{ left: `${thresholdPct}%` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        />
      </div>
      <motion.div
        className="mt-2 font-mono text-[11px] tracking-widest text-brass"
        style={{ marginLeft: `${thresholdPct}%` }}
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        750 — CRED's line
      </motion.div>
    </div>
  );
}
