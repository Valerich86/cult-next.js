"use client";

import { useState, useEffect } from "react";
import ImageContainer from "./UI/image-container";
import Loading from "./UI/loading";

export default function GallerySection({ master, storageUrl }: { master: string, storageUrl:string }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const response = await fetch(`/api/storage/${master}`);
      if (response.ok) {
        const result = await response.json();
        setPhotos(result);
      }
    } catch (error) {
      console.error(error);
    }
  }

  if (photos.length === 0) {
    return (
      <Loading />
    );
  }

  return (
    <div className="w-full flex justify-between flex-wrap pt-20">
      {photos?.map((item, i) => (
        <div className="relative w-36 h-28" key={i}>
          <ImageContainer
            src={`${storageUrl}/${item}`}
            delay={i / 25}
            rotate={Math.floor(Math.random() * 21) - 10}
            containerId="gallery"
            animateOnce
          />
        </div>
      ))}
    </div>
  );
}
