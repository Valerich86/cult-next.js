"use client";

import { useState, useEffect } from "react";
import ImageContainer from "./UI/image-container";
import Loading from "./UI/loading";

export default function NewsSection({
  folder,
  storageUrl,
}: {
  folder: string;
  storageUrl: string;
}) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const response = await fetch(`/api/storage/${folder}`);
      throw new Error('Сервис временно недоступен');
      if (response.ok) {
        const result = await response.json();
        setPhotos(result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (photos.length === 0) {
    return <Loading />;
  }

  return (
    <div className={`w-full h-[80vh] relative`}>
      {photos.map((item, i) => (
        <div
          key={i}
          className={`w-full sm:w-1/2 h-100 absolute`}
          style={{
            left: `${i * 50}px`,
            top: `${i * 10}px`,
          }}
        >
          <ImageContainer
            src={`${storageUrl}/${item}`}
            delay={i / 10}
            rotate={Math.floor(Math.random() * 21) - 10}
            containerId="news"
          />
        </div>
      ))}
    </div>
  );
}
