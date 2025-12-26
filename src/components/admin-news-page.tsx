"use client";

import Loading from "@/components/UI/loading";
import { useState, useEffect } from "react";
import Link from "next/link";

export type News = {
  id: number;
  title: string;
  content: string;
  published_at: string;
};

export default function NewsPage() {
  const [news, setNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    setIsLoading(true);
    try {
      const response = await fetch("/api/news");
      const result = await response.json();
      setNews(result);
    } catch (error) {
      setError("Не удалось загрузить новости. Ошибка: " + error);
    } finally {
      setIsLoading(false);
    }
  }

  const NewsItem = ({ item }: { item: News }) => {
    return (
      <Link href={`/admin/news/update/${item.id}`}>
        <div className="w-[90vw] lg:w-[50vw] flex flex-col gap-5 p-5 rounded-xl bg-secondary shadow-xl/20 shadow-primary text-sm hover:opacity-90">
          <strong>Новость id={item.id}. </strong>
          <p>
            <strong>Опубликовано: </strong>
            {new Date(item.published_at).toLocaleString().substring(0, 10)}
          </p>
          <p>
            <strong>Заголовок: </strong>
            {item.title}
          </p>
          <div>
            <strong>Контент: </strong>
            <p>{item.content.substring(0, 500) + "..."}</p>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="flex flex-wrap pt-10">
      <div className="w-full lg:w-1/3 relative">
        <div className="w-full flex flex-col gap-y-5 lg:fixed">
          <Link className="admin-button w-50" href={"/admin/news/add"}>
            Добавить новость
          </Link>
        </div>
      </div>

      {/* Правая панель — отображение новостей */}
      <div className="w-full lg:w-2/3 flex flex-col gap-y-10 items-center">
        {isLoading && <Loading />}

        {error && (
          <div className="text-red-500 text-center w-full py-4">{error}</div>
        )}

        {!isLoading && !error && news.length === 0 && (
          <div className="text-gray-500 text-center w-full py-4">
            Новостей пока нет...
          </div>
        )}

        {!isLoading && !error && news.length > 0 && (
          <div className="text-secondary text-center w-full py-4">
            Загружены следующие новости:
          </div>
        )}

        {!isLoading &&
          !error &&
          news.length > 0 &&
          news.map((item, index) => <NewsItem item={item} key={item.id} />)}
      </div>
    </div>
  );
}
