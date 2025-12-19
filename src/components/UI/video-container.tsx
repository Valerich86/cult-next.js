"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

interface VideoContainerProps {
  src: string;
  className?: string;
}

export default function VideoContainer({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const isInView = useInView(ref, { amount: 0.3 });

  useEffect(() => {
    const video = ref.current;
    if (isInView && video) {
      video?.play().catch(console.warn);
      video.playbackRate = 0.4;
    } else {
      video?.pause();
    }
  }, [isInView]);

  return (
    <motion.video
      ref={ref}
      className="absolute w-full h-[90vh] rounded-xl shadow-lg opacity-40 object-cover"
      muted
      loop
      playsInline
      // src={src}
    >
      <source src={src} type="video/mp4" />
      {/* Резервный контент — отобразится, если видео не поддерживается */}
      <div className="flex flex-col items-center justify-center text-white p-4 bg-black/50">
        <p className="text-lg mb-2">Видео недоступно</p>
        <p className="text-sm">
          Ваш браузер не поддерживает воспроизведение видео.
        </p>
        <a
          href={src}
          download="video.mp4"
          className="mt-3 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
        >
          Скачать видео
        </a>
      </div>
    </motion.video>
  );
}
