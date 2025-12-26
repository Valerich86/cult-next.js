"use client";

import { useState, useEffect } from "react";
import ImageContainer from "./UI/image-container";
import Loading from "./UI/loading";
import Subtitle from "./UI/subtitle";
import TextContainer from "./UI/text-container";
import BigtextContainer from "./UI/bigtext-container";
import type { News } from "./admin-news-page";
import HTMLTextContainer from "./UI/editor/HTML-text-container";

export default function NewsList({ storageUrl }: { storageUrl: string }) {
  const [news, setNews] = useState<News[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setError(undefined);
    try {
      const response = await fetch(`/api/news`);
      if (response.ok) {
        const result = await response.json();
        setNews(result);
      }
    } catch (error) {
      console.error(error);
      setError("Произошла ошибка получения данных.");
    }
  };

  const NewsItem = ({ item }: { item: News }) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      fetchImages();
    }, []);

    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/storage/news${item.id}`);
        if (response.ok) {
          const result = await response.json();
          setImages(result);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <section className="w-full min-h-screen">
        <Subtitle text={item.title} />
        <div className="w-full flex justify-center">
          <TextContainer
            text={
              "Опубликовано " + new Date(item.published_at).toLocaleDateString()
            }
          />
        </div>
        <div className={`w-full h-[80vh] relative mt-25`}>
          {isLoading && <Loading />}
          {images.length > 0 &&
            !isLoading &&
            images.map((item, i) => (
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
        <BigtextContainer text={item.content} />
        {/* <HTMLTextContainer content={item.content} /> */}
      </section>
    );
  };

  return (
    <div className="w-full flex flex-col gap-y-10 items-center">
      {error && (
        <div className="text-red-500 text-center w-full py-4">{error}</div>
      )}

      {!error && news.length === 0 && (
        <div className="text-gray-500 text-center w-full py-4">
          Новости ещё не опубликованы.
        </div>
      )}

      {!error &&
        news.length > 0 &&
        news.map((item, index) => <NewsItem item={item} key={item.id} />)}
    </div>
  );
}
