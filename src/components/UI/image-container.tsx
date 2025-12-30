"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Loading from "./loading";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ImageContainerProps {
  src: string | StaticImport;
  optionalStyles?: string;
  position?: string;
  rotate?: number;
  delay?: number;
  border?: boolean;
  animateOnce?: boolean;
  containerId: string;
}

export default function ImageContainer({
  src,
  optionalStyles = "",
  position = "center",
  delay = 0,
  border = true,
  animateOnce = false,
  rotate = 0,
  containerId,
}: ImageContainerProps) {
  const [fullscreen, setFullscreen] = useState(false);
  const [rotation, setRotation] = useState(rotate);
  const [curDelay, setCurDelay] = useState(delay);
  const [status, setStatus] = useState<"loading" | "loaded" | "error">(
    "loading"
  );

  const showCloser = () => {
    const container = document.getElementById(containerId);
    if (container) {
      if (!fullscreen) container.style.overflow = "hidden";
      else container.style.overflow = "";
    }
    setFullscreen(!fullscreen);
    setCurDelay(0);
    setRotation(rotation === 0 ? rotate : 0);
  };

  return (
    <>
      <motion.div
        className={`absolute w-full h-full flex justify-center ${
          fullscreen ? "cursor-zoom-out" : "cursor-zoom-in"
        } ${
          border ? "border-4 bg-primary shadow-2xl shadow-black" : ""
        } ${optionalStyles}`}
        onClick={showCloser}
        initial={{ x: 50, opacity: 0, scale: 1.05 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        viewport={{ once: animateOnce, amount: 0.4 }}
        animate={{
          width: fullscreen ? "100vw" : "",
          height: fullscreen ? "100vh" : "",
          position: fullscreen ? "fixed" : "",
          zIndex: fullscreen ? 60 : "",
          top: fullscreen ? 0 : "",
          left: fullscreen ? 0 : "",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          delay: curDelay,
        }}
        style={{ rotate: rotation }}
      >
        {status === "loading" && <Loading />}
        {status === "error" && <span>❌ Изображение не загрузилось</span>}
        <Image
          src={src}
          alt=""
          width={400}
          height={300}
          className={`h-full w-full ${
            fullscreen ? "object-contain" : "object-cover"
          } object-${position}`}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
        />
      </motion.div>
    </>
  );
}
