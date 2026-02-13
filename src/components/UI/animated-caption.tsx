"use client";
import { motion } from "framer-motion";
import { font_caption } from "@/lib/fonts";

export default function AnimatedCaption() {
  const caption = ["Студия", "татуировки.", "Пермь"];

  return (
    <div className="flex flex-wrap gap-x-2 lg:gap-x-5 justify-center items-center absolute w-[90vw] z-30 left-1/2 -translate-x-[50%] top-[55vh] sm:top-[65vh]">
      {caption.map((word, index) => (
        <motion.div
          key={index}
          className={`${font_caption.className} text-secondary tracking-widest text-md md:text-xl`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            opacity: { duration: 1, delay: 8 + index/5 },
          }}
        >
          {word}
        </motion.div>
      ))}
    </div>
  );
}
