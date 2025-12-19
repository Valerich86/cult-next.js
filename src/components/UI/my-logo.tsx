"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export default function MyLogo() {
  const ref = useRef<HTMLVideoElement>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (err) {
        console.warn("Автовоспроизведение заблокировано", err);
      }
    };

    if (isInView) {
      playVideo();
    }

    // Остановить на последнем кадре
    const handleEnded = () => {
      video.currentTime = video.duration || 0; // Убедимся, что стоит на конце
      video.pause();
    };

    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, [isInView]);

  return (
    <motion.video
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-32 lg:w-43 h-auto rounded-xl opacity-90"
      muted // Важно: без muted автовоспроизведение может не сработать
      playsInline // Для iOS
      preload="metadata"
    >
      <source src={"/video/my-logo.mp4"} type="video/mp4" />
      Ваш браузер не поддерживает видео.
    </motion.video>
  );
}
