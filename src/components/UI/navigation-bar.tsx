"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { font_accent } from "@/lib/fonts";

const Link1 = () => {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{
        opacity: { duration: 2, delay: 1.4 },
      }}
    >
      <Link className={`link ${font_accent.className}`} href="/contacts">
        Контакты
      </Link>
    </motion.div>
  );
};

const Link2 = () => {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{
        opacity: { duration: 2, delay: 0.8 },
      }}
    >
      <Link className={`link ${font_accent.className}`} href="/about">
        О нас
      </Link>
    </motion.div>
  );
};

const Link5 = () => {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{
        opacity: { duration: 2, delay: 1.1 },
      }}
    >
      <Link className={`link ${font_accent.className}`} href={"/news"}>
        Новости
      </Link>
    </motion.div>
  );
};

// const Link3 = () => {
//   return (
//     <motion.div
//     className="absolute left-[25vw] bottom-[20vh]"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: false }}
//       transition={{
//         opacity: { duration: 2, delay: 1.4 },
//       }}
//     >
//         <Link
//           className={linkStyle}
//           href={"/feedbacks"}
//         >
//           Отзывы
//         </Link>
//     </motion.div>
//   );
// };

const Link4 = () => {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{
        opacity: { duration: 2, delay: 0.5 },
      }}
    >
      <Link className={`link ${font_accent.className}`} href={"/gallery"}>
        Галерея
      </Link>
    </motion.div>
  );
};

export default function NavigationBar() {
  // useEffect(() => {
  //   if (window.location.pathname === "/") {
  //     throw new Error("Приложение временно недоступно");
  //   }
  // }, []);

  return (
    <div className="w-screen h-screen z-30 absolute top-0 left-0 flex justify-around items-center">
      <div className="w-[80vw] absolute top-3/5 left-1/2 transform -translate-x-1/2 flex justify-between items-center">
        <Link1 />
        <Link2 />
      </div>
      <div className="w-screen h-[65vh] flex flex-col justify-between items-center">
        <Link5 />
        <Link4 />
      </div>
    </div>
  );
}
