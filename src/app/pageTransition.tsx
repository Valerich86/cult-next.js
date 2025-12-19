'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
          mass: 0.8,
        }}
        // transition={{ duration: 2, ease: "easeIn"}}
        className="w-screen h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
