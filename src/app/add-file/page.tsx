"use client";

import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef } from "react";

export default function AvatarUploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const inputDirRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  return (
    <>
      <h1>Upload Your Avatar</h1>

      <form
        className="flex flex-col w-screen h-screen justify-center items-center gap-10"
        onSubmit={async (event) => {

          if (!inputFileRef.current?.files) {
            throw new Error("No file selected");
          }

          const file = inputFileRef.current.files[0];
          const targetDir = inputDirRef.current?.value || "";

          const response = await fetch(
            `/api/storage?filename=${encodeURIComponent(
              file.name
            )}&targetDir=${encodeURIComponent(targetDir)}`,
            {
              method: "POST",
              body: file,
            }
          );

          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(
              `Upload failed: ${errorData.message || response.statusText}`
            );
          }

          const newBlob = (await response.json()) as PutBlobResult;
          console.log(newBlob)
          setBlob(newBlob);
        }}
      >
        <fieldset className="flex flex-col">
          <label htmlFor="file" className="text-secondary">Выберите файл:</label>
          <input
            className="bg-secondary w-75 h-12 rounded-2xl px-2 cursor-pointer hover:opacity-95"
            name="file"
            ref={inputFileRef}
            type="file"
            accept="image/jpeg, image/png, image/webp"
            required
          />
        </fieldset>
        <fieldset className="flex flex-col">
        <label htmlFor="file" className="text-secondary">Директория для сохранения:</label>
        <input
          className="bg-secondary w-75 h-12 rounded-2xl px-2"
          name="targetDir"
          ref={inputDirRef}
          type="text"
          required
        />
        </fieldset>
        <button type="submit" className="bg-peachy2 w-75 h-12 text-secondary rounded-2xl mt-5 cursor-pointer hover:bg-peachy1 hover:text-primary">
          Загрузить
        </button>
      </form>
      {blob && (
        <div className="bg-secondary ">
          Blob url: <a href={blob.url}>{blob.url}</a>
        </div>
      )}
    </>
  );
}
