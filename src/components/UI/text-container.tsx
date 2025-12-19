"use client";

import { motion } from "framer-motion";
import { font_default } from "@/lib/fonts";

interface TextContainerProps {
  text: string;
  optionalStyles?: string;
  delay?: number;
}

export default function TextContainer({
  text,
  optionalStyles="",
  delay=0,
}: TextContainerProps) {

  return (
    <div
      className={`w-full lg:w-4/5 h-auto p-3 flex justify-center 
        items-center overflow-hidden rounded-xl z-20 shadow-2xl 
        shadow-black bg-brown ${optionalStyles}`}
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: delay }}
      >
        <p
          className={`${font_default.className} text-sm text-secondary lg:text-xl`}
        >
          {text}
        </p>
      </motion.div>
    </div>
  );
}
