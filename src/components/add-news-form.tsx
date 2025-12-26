"use client";

import { desc1, desc2 } from "@/lib/text/admin";
import { useState } from "react";
import Editor from "./UI/editor/editor";

export default function AddNewsForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    title: "",
    content: "<p>Начните писать здесь...</p>",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [success, setSuccess] = useState<string[]>([]);
  const [targetFolder, setTargetFolder] = useState<string | undefined>(
    undefined
  );

  const handleDone = () => {
    setForm({ title: "", content: "" });
    setTargetFolder(undefined);
    window.location.href = "/admin/news";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch("/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const newId: string = (await response.json()).id;
      setTargetFolder(newId.toString());
      setForm({ title: "", content: "" });
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
      setTargetFolder("");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="content flex flex-col gap-y-20 items-center overflow-y-scroll py-20">
      <form
        onSubmit={handleSubmit}
        className={`${
          !targetFolder ? "opacity-100" : "opacity-30"
        } w-full lg:w-1/3 sm:w-2/3 flex flex-col items-center gap-5`}
      >
        <div className="w-full">
          <label className="font-medium text-secondary flex gap-1">
            Придумай заголовок: <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 text-secondary"
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            value={form.title}
            required
          />
        </div>

        <div className="w-full">
          <label className="mb-4 font-medium text-secondary flex gap-1">
            Введи текст новости: <span className="text-red-500">*</span>
          </label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2 text-secondary"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            placeholder="минимум 10 символов"
            required
            rows={8}
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
          disabled={isLoading || targetFolder !== undefined}
          className={`px-4 py-2 rounded text-white cursor-pointer w-full bg-peachy2 hover:bg-peachy1`}
        >
          {"Добавляем новость"}
        </button>
      </form>

      <form
        onSubmit={handleFileUploads}
        className={`${
          targetFolder ? "opacity-100" : "opacity-30"
        } w-full lg:w-1/3 sm:w-2/3 flex flex-col items-center gap-5`}
      >
        <div className="w-full">
          <label className="mb-4 font-medium text-secondary flex gap-1">
            Выбери изображения (до 3-х файлов .jpg, .png, .webp){" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            multiple
            max={3}
            disabled={targetFolder === undefined}
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
          disabled={isLoading || targetFolder === undefined}
          className={`px-4 py-2 rounded text-white cursor-pointer w-full bg-peachy2 hover:bg-peachy1
          `}
        >
          {isLoading ? "Загружается..." : "Добавляем изображения"}
        </button>
      </form>

      <button
        disabled={isLoading}
        onClick={handleDone}
        className={`px-4 py-2 rounded text-white cursor-pointer w-full lg:w-1/3 sm:w-2/3 bg-peachy2 hover:bg-peachy1`}
      >
        {"Готово"}
      </button>

      <span className="text-red-500 italic text-xs">
        * - обязательно заполнить
      </span>
      <p className="text-xs text-secondary w-full lg:w-1/3 sm:w-2/3">{desc2}</p>
    </div>
  );
}
