"use client";

import Loading from "@/components/UI/loading";
import { MdDelete } from "react-icons/md";
import { useState, useEffect } from "react";
import ImageContainer from "./UI/image-container";
import Editor from "./UI/editor/editor";

export default function UpdateNewsForm({
  storageUrl,
  id,
}: {
  storageUrl: string;
  id: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ title: "", content: "" });
  const [photos, setPhotos] = useState([]);
  const [files, setFiles] = useState<File[]>([]);
  const [success, setSuccess] = useState<string[]>([]);
  const [message, setMessage] = useState<string | null>(null);
  const [targetFolder, setTargetFolder] = useState(id);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  useEffect(() => {
    fetchNews();
    fetchPhotos();
  }, []);

  const fetchNews = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/news/${id}`);
      const { title, content } = await response.json();
      setForm({ title: title, content: content });
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPhotos = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/storage/news${id}`);
      if (!response.ok) {
        throw new Error("Не удалось загрузить фотографии");
      }
      const result = await response.json();
      setPhotos(result);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDone = () => {
    window.location.href = "/admin/news";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setIsLoading(true);
    setError("");
    console.log("submit");
    try {
      const response = await fetch(`/api/news/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) setMessage("Текст успешно изменён.");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  // Обработчик выбора файлов
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
      setError("");
      setSuccess([]);
    }
  };

  // Отправка формы
  const handleFileUploads = async (e: React.FormEvent) => {
    if (!targetFolder) return;
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess([]);
    try {
      const formData = new FormData();
      // Добавляем все файлы в FormData
      files.forEach((file) => {
        formData.append("files", file);
      });
      formData.append("targetFolder", "news/" + targetFolder);

      const response = await fetch("/api/storage", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Ошибка загрузки файла");
      }

      const result = await response.json();
      setSuccess(result.uploadedFiles);
      setFiles([]);
      await fetchPhotos();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeletePhoto = async () => {
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
      await fetchPhotos();
    } catch (error) {
      console.error("Delete error:", error);
      alert(`Error: ${error}`);
    } finally {
      setIsDeleting(false);
      setSelectedPhoto(null);
      setDeleteModalIsOpen(false);
    }
  };

  if (isLoading || (form.title === "" && form.content === "")) {
    return (
      <div className="content">
        <Loading />
      </div>
    );
  }

  return (
    <div className="content flex flex-col gap-y-20 items-center overflow-y-scroll py-20">
      <form
        onSubmit={handleSubmit}
        className={`w-full flex flex-col items-center gap-5`}
      >
        <div className="w-full">
          <label className="mb-1 font-medium text-secondary flex gap-1">
            Текущий заголовок: <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 text-secondary"
            onChange={(e) => {
              setForm({ ...form, title: e.target.value });
              setMessage(null);
            }}
            value={form.title}
            required
          />
        </div>

        <div className="w-full">
          <label className="mb-1 font-medium text-secondary flex gap-1">
            Текущий контент: <span className="text-red-500">*</span>
          </label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2 text-secondary"
            value={form.content}
            onChange={(e) => {setForm({ ...form, content: e.target.value }); setMessage(null);}}
            placeholder="минимум 10 символов"
            required
            rows={20}
            cols={60}
            minLength={10}
          />
          {/* <Editor
            content={form.content}
            onChange={(newContent) =>
              setForm((prev) => ({ ...prev, content: newContent }))
            }
          /> */}
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`px-4 py-2 rounded text-white cursor-pointer w-full bg-peachy2 hover:bg-peachy1`}
        >
          {"Исправить"}
        </button>
        {message && <strong className="text-green-500">{message}</strong>}
      </form>

      {!isLoading &&
        !error &&
        photos.length > 0 &&
        photos.map((photo, index) => (
          <div
            key={index} //Уникальный ключ
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
                onClick={handleDeletePhoto}
                disabled={isDeleting}
              >
                Удалить
              </button>
            </div>
          </div>
        </>
      )}

      <form
        onSubmit={handleFileUploads}
        className={`w-full flex flex-col items-center gap-5`}
      >
        <div className="w-full">
          <label className="mb-1 font-medium text-secondary flex gap-1">
            {photos.length === 3
              ? "Чтобы добавить фото, удали старое"
              : `Можно добавить ${3 - photos.length} фото`}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            multiple
            max={3 - photos.length}
            disabled={isLoading || photos.length === 3}
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-secondary cursor-pointer"
            accept="image/*" // Ограничиваем типы файлов
          />
        </div>

        {files.length > 0 && (
          <div className="p-3 bg-gray-100 rounded">
            <p className="text-sm">
              <strong>Выбрано файлов:</strong> {files.length}
            </p>
            <ul className="mt-2 list-disc pl-5 text-sm">
              {files.map((file) => (
                <li key={file.name}>
                  {file.name} ({(file.size / 1024).toFixed(1)} КБ)
                </li>
              ))}
            </ul>
          </div>
        )}

        {error && (
          <div className="p-3 bg-red-100 text-red-700 border border-red-300 rounded">
            {error}
          </div>
        )}

        {success.length > 0 && (
          <div className="p-3 bg-green-100 text-green-700 border border-green-300 rounded">
            <p>
              <strong>Загружено успешно:</strong>
            </p>
            <ul className="mt-2 list-disc pl-5">
              {success.map((url) => (
                <li key={url}>
                  <a
                    href={url}
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    {url}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading || photos.length === 3}
          className={`px-4 py-2 rounded text-white cursor-pointer w-full bg-peachy2 hover:bg-peachy1
          `}
        >
          {"Добавляем изображения"}
        </button>
      </form>

      <button
        disabled={isLoading}
        onClick={handleDone}
        className={`px-4 py-2 rounded text-white cursor-pointer w-full bg-peachy2 hover:bg-peachy1`}
      >
        {"Готово"}
      </button>

      <span className="text-red-500 italic text-xs">
        * - обязательно заполнить
      </span>
    </div>
  );
}
