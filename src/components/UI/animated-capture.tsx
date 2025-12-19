"use client";
import { motion } from "framer-motion";
import { font_capture } from "@/lib/fonts";

export default function AnimatedCapture() {
  const capture = ["Студия", "татуировки", "и", "лазерного", "удаления", "."];

  return (
    <div className="flex flex-wrap gap-x-2 lg:gap-x-5 justify-center items-center absolute w-[90vw] z-30 top-[55vh] left-1/2 -translate-x-[50%] md:top-[60vh] md:w-1/3 lg:top-[65vh] ">
      {capture.map((word, index) => (
        <motion.div
          key={index}
          className={`${font_capture.className} text-secondary tracking-widest text-md lg:text-xl xl:text-2xl`}
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
