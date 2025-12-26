"use client";

import { desc3, desc4 } from "@/lib/text/admin";
import { useState } from "react";

export type Master = {
  name: string;
  folder: string;
};

export const masters = [
  { name: "Андрей", folder: "tan" },
  { name: "Соня", folder: "sonya" },
  { name: "Артур", folder: "arthur" },
];

export default function FileUploadForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [targetFolder, setTargetFolder] = useState<string>(masters[0].folder);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState<string[]>([]);

  // Обработчик выбора файлов
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
      setError("");
      setSuccess([]);
    }
  };

  // Отправка формы
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (files.length === 0) {
      setError("Выберите хотя бы один файл");
      return;
    }

    if (targetFolder.trim().length === 0) {
      setError("Выберите папку");
      return;
    }

    setIsLoading(true);
    setError("");
    setSuccess([]);

    try {
      const formData = new FormData();
      // Добавляем все файлы в FormData
      files.forEach((file) => {
        formData.append("files", file);
      });
      formData.append("targetFolder", targetFolder);

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
      setTargetFolder(masters[0].folder);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="content flex justify-center pt-20">
      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-1/3 sm:w-2/3 flex flex-col justify-center gap-5"
      >
        <div className="mb-4">
          <label className="mb-4 font-medium text-secondary flex gap-1">
            Выбери мастера <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full border border-gray-300 rounded px-3 py-2 text-secondary"
            onChange={(e) => setTargetFolder(e.target.value)}
            value={targetFolder}
          >
            {masters.map((item, i) => (
              <option
                key={i}
                value={item.folder}
                className="text-primary"
              >
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="mb-4 font-medium text-secondary flex gap-1">
            Выбери файлы <span className="text-red-500">*</span>
          </label>
            <p className="text-xs text-secondary">{desc3}</p>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-secondary cursor-pointer"
            accept="image/*" // Ограничиваем типы файлов
          />
        </div>

        {files.length > 0 && (
          <div className="mb-4 p-3 bg-gray-100 rounded">
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
          <div className="mb-4 p-3 bg-red-100 text-red-700 border border-red-300 rounded">
            {error}
          </div>
        )}

        {success.length > 0 && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 border border-green-300 rounded">
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
          disabled={isLoading}
          className={`px-4 py-2 rounded text-white cursor-pointer w-full ${
            isLoading ? "bg-gray-400" : "bg-peachy2 hover:bg-peachy1"
          }`}
        >
          {isLoading ? "Загружается..." : "Загрузить файлы"}
        </button>
        <span className="text-red-500 italic text-xs">* - обязательно заполнить</span>
        <p className="text-xs text-secondary">{desc4}</p>
      </form>
    </div>
  );
}
