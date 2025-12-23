'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="sync">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: "0" }}
        // exit={{ opacity: 0, x: "-100%" }}
        transition={{duration: 0.3}}
        className="w-screen h-screen overflow-x-hidden"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
