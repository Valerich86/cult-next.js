"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";


export default function AnimatedLogo() {
  const [isAnimated, setIsAnimated] = useState(false);

  // useEffect(() => {
  //   const animated = localStorage.getItem("animated");
  //   console.log(animated);
  //   if (!animated) {
  //     setIsAnimated (false);
  //     localStorage.setItem("animated", "true");
  //   }; 
  // }, []);

  return (
    <motion.div
      animate={{ x: [-2, 2, -2, 2, 0] }}
      transition={{
        duration: 0.1,
        repeat: 85,
        repeatType: "reverse",
        ease: "easeInOut",
        repeatDelay: 0,
      }}
      className="w-screen h-screen"
    >
      <div
        className={`${isAnimated ? "animate-alternativeBG" : "animate-logoShiningBG"} opacity-70 absolute top-0 left-0 w-full h-full flex justify-center items-center overflow-hidden`}
      >
        <Image
          src="/technical/logo-BG-2.webp"
          alt=""
          width={200}
          height={400}
          style={{ objectFit: "contain", height: "auto", width: "100%" }}
        />
      </div>
      <div
        className={`${isAnimated ? "animate-none" : "animate-logoShiningFG"} opacity-0 absolute top-0 -left-[5%] w-[110vw] h-full flex justify-center items-center overflow-hidden`}
      >
        <Image
          src="/technical/logo-FG-2.webp"
          alt=""
          width={200}
          height={400}
          style={{ objectFit: "contain", height: "auto", width: "100%" }}
        />
      </div>
    </motion.div>
  );
}
