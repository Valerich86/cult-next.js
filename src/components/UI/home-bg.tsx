"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HomeBGImage() {
  return (
    <motion.div
      className={`bg-[url('/technical/metall.png')] bg-cover w-full h-full absolute top-0 left-0`}
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // viewport={{ once: true }}
      // transition={{
      //   opacity: { duration: 5, delay: 5 },
      // }}
      // animate={{ x: [-5, 5, -5, 5, 0] }}
      // transition={{
      //   duration: 0.1,
      //   repeat: 90,
      //   repeatType: "reverse",
      //   ease: "easeInOut",
      //   repeatDelay: 0,
      // }}
    ></motion.div>
  );
}
