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
    <pre
      className={`whitespace-pre-wrap text-secondary text-lg lg:text-xl ${font_default.className} ${optionalStyles}`}
    >
      {text}
    </pre>
  );
}
