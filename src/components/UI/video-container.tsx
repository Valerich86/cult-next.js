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
      className="absolute w-full h-[90vh] rounded-xl shadow-lg opacity-30 object-cover"
      muted
      loop
      playsInline
      src={src}
    />
  );
}
