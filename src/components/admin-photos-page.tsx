"use client";

import { MdDelete } from "react-icons/md";
import Loading from "@/components/UI/loading";
import { useState } from "react";
import ImageContainer from "@/components/UI/image-container";
import Link from "next/link";
import { masters, Master } from "./file-uploads-form";

export default function PhotosPage({ storageUrl }: { storageUrl: string }) {
  const [photos, setPhotos] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [selectedMaster, setSelectedMaster] = useState<Master | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function getPhotos(folder: string, master: Master) {
    setError(null); // Очищаем предыдущую ошибку
    setIsLoading(true);
    setSelectedMaster(master); //Отмечаем выбранного мастера

    try {
      const response = await fetch(`/api/storage/${folder}`);

      if (!response.ok) {
        throw new Error("Не удалось загрузить фотографии");
      }

      const result = await response.json();
      setPhotos(result);
    } catch (err) {
      console.error("Ошибка загрузки фотографий:", err);
      setError("Не удалось загрузить фотографии. Попробуйте ещё раз.");
      setPhotos([]); //Очищаем список при ошибке
    } finally {
      setIsLoading(false);
    }
  }

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await fetch("/api/storage", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ objectKey: selectedPhoto }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to delete object");
      }

      alert("Изображение успешно удалено!");
      getPhotos(selectedMaster!.folder, selectedMaster!);
    } catch (error) {
      console.error("Delete error:", error);
      alert(`Error: ${error}`);
    } finally {
      setIsDeleting(false);
      setSelectedPhoto(null);
      setDeleteModalIsOpen(false);
    }
  };

  return (
    <div className="flex flex-wrap pt-10">
      {/* Левая панель — выбор мастера */}
      <div className="w-full lg:w-1/3 relative">
        <div className="w-full flex flex-col gap-y-5 lg:fixed">
          {masters.map((item) => (
            <button
              key={item.folder}
              className={`admin-button w-50 ${
                selectedMaster === item
                  ? "border-2 border-secondary"
                  : "border-none"
              }`}
              onClick={() => getPhotos(item.folder, item)}
              disabled={isLoading}
            >
              {item.name}
            </button>
          ))}
          <Link className="admin-button w-50" href={"/admin/uploads"}>
            Загрузить новые фото
          </Link>
        </div>
      </div>

      {/* Правая панель — отображение фотографий */}
      <div className="w-full lg:w-2/3 flex justify-between flex-wrap gap-y-10">
        {isLoading && <Loading />}

        {error && (
          <div className="text-red-500 text-center w-full py-4">{error}</div>
        )}

        {!isLoading && !error && photos.length === 0 && selectedMaster && (
          <div className="text-gray-500 text-center w-full py-4">
            Фотографии для этого мастера пока не загружены
          </div>
        )}

        {!isLoading && !error && photos.length > 0 && (
          <div className="text-secondary text-center w-full py-4">
            Фотографии {selectedMaster?.name}
          </div>
        )}
        {!isLoading &&
          !error &&
          photos.length > 0 &&
          photos.map((photo, index) => (
            <div
              key={`${selectedMaster}-${photo}-${index}`} //Уникальный ключ
              className="relative"
            >
              <div className="relative w-32 h-36 mb-4">
                <ImageContainer
                  src={`${storageUrl}/${photo}`}
                  rotate={0} //Убираем Math.random() для стабильности
                  containerId="gallery"
                  animateOnce
                />
              </div>
              <p className="text-xs text-secondary w-32 text-center">{photo}</p>
              <div
                onClick={() => {
                  setSelectedPhoto(photo);
                  setDeleteModalIsOpen(!deleteModalIsOpen);
                }}
                className="text-red-500 absolute -top-3 -right-3 cursor-pointer hover:opacity-80 active:scale-80"
              >
                <MdDelete />
              </div>
            </div>
          ))}
      </div>

      {/* модальное окно удаления фото */}
      {deleteModalIsOpen && (
        <>
          <div className="w-screen h-screen bg-red-500 opacity-40 absolute top-0 left-0"></div>
          <div className="absolute w-5/6 lg:w-1/3 sm:w-2/3 h-1/2 rounded-2xl px-10 bg-primary left-[50%] -translate-x-[50%] z-10 flex flex-col justify-around items-center">
            <p className="text-secondary text-center">
              {!isDeleting &&
                `Ты уверен, что хочешь удалить фото "${selectedPhoto}"?`}
              {isDeleting && `Удаляю изображение...`}
            </p>
            <div className="flex w-full justify-around">
              <button
                className="admin-button w-25"
                style={{ backgroundColor: "gray" }}
                onClick={() => {
                  setSelectedPhoto(null);
                  setDeleteModalIsOpen(false);
                }}
                disabled={isDeleting}
              >
                Отмена
              </button>
              <button
                className="admin-button w-25"
                style={{ backgroundColor: "red" }}
                onClick={handleDelete}
                disabled={isDeleting}
              >
                Удалить
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
