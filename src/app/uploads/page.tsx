"use client";

import { useState } from "react";

export default function FileUploadForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [targetFolder, setTargetFolder] = useState<string>("");
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

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Ошибка загрузки файла");
      }

      const result = await response.json();
      setSuccess(result.uploadedFiles); // Список успешных URL
      setFiles([]); // Очищаем выбор
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto py-20">
      <div className="mb-4">
        <label className="block mb-2 font-medium text-secondary">
          Папка сохранения в VK Cloud
        </label>
        <input
          value={targetFolder}
          onChange={(e) => setTargetFolder(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 text-secondary"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium text-secondary">
          Выберите файл:
        </label>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="w-full border border-gray-300 rounded px-3 py-2 text-secondary cursor-pointer"
          accept="image/*, .pdf, .docx, .xlsx" // Ограничиваем типы файлов
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
          <p><strong>Загружено успешно:</strong></p>
          <ul className="mt-2 list-disc pl-5">
            {success.map((url) => (
              <li key={url}>
                <a href={url} target="_blank" className="text-blue-500 hover:underline">
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
    </form>
  );
}
