"use client";

import { FaArrowRight } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
          <div className="w-screen h-screen absolute bg-red-600 animate-pulse left-0 top-0"></div>
      <div className="w-screen h-screen absolute p-10 flex flex-col justify-center items-center gap-y-10 z-50">
      <h2 className="text-2xl text-secondary">
        Если ты видишь это сообщение, значит миру грозит опасность!
      </h2>
      <div className="flex gap-3 text-secondary items-center text-2xl">
        <p>Срочно сообщи о проблеме сюда</p>
        <FaArrowRight size={30} />
        <a href={"tel:+79630173055"} target="_blank" aria-label="Телефон">
          <FaPhone
            className="hover:text-blue-500 text-blue-600 transition-colors ml-4"
            size={35}
          />
        </a>
      </div>
      <p className="text-gray-600">ERROR: {error.message}</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-blue-600 text-secondary rounded hover:bg-blue-500 cursor-pointer active:scale-99"
      >
        Попробовать снова
      </button>
    </div>
    </>
  );
}
