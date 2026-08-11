import { motion, AnimatePresence } from "framer-motion";

interface Props {
  note: string;
  visible: boolean;
}

export default function PresenterNotes({ note, visible }: Props) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          className="fixed left-0 right-0 bottom-16 md:bottom-20 flex justify-center px-6 pointer-events-none"
        >
          <div className="max-w-xl border border-line bg-ink/95 px-5 py-4">
            <p className="font-mono text-[10px] tracking-widest text-brass mb-2">
              SAY (press N to hide)
            </p>
            <p className="font-mono text-[13px] leading-relaxed text-bonemute">{note}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
