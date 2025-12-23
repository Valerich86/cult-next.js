"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface DecorProps {
  count?:number;
  maxSize?:number;
}

export default function Decor({count=2, maxSize=15}:DecorProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Устанавливаем только на клиенте
  }, []);

  if (!isClient) {
    return (
      <div className="absolute top-0 left-0 w-screen h-screen pointer-events-none" />
    );
  }

  const DecorItem = ({ bg }: { bg: string }) => {
    const size = Math.floor(Math.random() * maxSize);
    return (
      <div
        className={`absolute ${bg} rounded-full opacity-100`}
        style={{
          left: `${Math.floor(Math.random() * 100)}vw`,
          top: `${Math.floor(Math.random() * 100)}vh`,
          width: `${size}px`,
          height: `${size}px`,
        }}
      />
    );
  };

  return (
    <motion.div
      className="absolute top-0 left-0 opacity-90 w-screen h-screen pointer-events-none -z-10"
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.1,
        delay: 0.5
      }}
    >
      {Array.from({ length: count }, (_, i) => (
        <div key={i}>
          <DecorItem bg="bg-secondary" />
          <DecorItem bg="bg-peachy1" />
          <DecorItem bg="bg-peachy2" />
          <DecorItem bg="bg-black" />
          <DecorItem bg="bg-brown" />
          <DecorItem bg="bg-green-900" />
        </div>
      ))}
    </motion.div>
  );
}
