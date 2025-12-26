"use client";

import { font_default } from "@/lib/fonts";
import { motion } from "framer-motion";

interface BigtextContainerProps {
  text: string;
  optionalStyles?: string;
}

export default function BigtextContainer({
  text,
  optionalStyles = "",
}: BigtextContainerProps) {
  return (
    <motion.div
      className={`w-full min-h-screen flex items-center ${optionalStyles}`}
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0,
      }}
    >
      <pre
        className={`whitespace-pre-wrap text-secondary ${font_default.className} text-lg lg:text-xl`}
      >
        {text}
      </pre>
    </motion.div>
  );
}
