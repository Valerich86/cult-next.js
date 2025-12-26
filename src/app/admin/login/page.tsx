"use client";

import { FormEvent, useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb"; 

export default function Login() {
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: password }),
      });
      if (response.ok) {
        window.location.href = "/admin";
      } else if (response.status == 406) {
        setError((await response.json()).error);
      } else {
        setError("Вообще не знаю, что за ошибка!");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col mt-[20vh] items-center gap-y-5">
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-64 h-12 p-5 rounded bg-secondary"
          required
          placeholder="введите пароль"
        />
        {error && (
          <p className="mt-10 text-red-400 text-center">{error}</p>
        )}
        <button type="submit" className="admin-button mt-10 w-64">
          {isLoading ? <TbFidgetSpinner size={50} color="gray" className="animate-spin"/> : "Войти"}
        </button>
      </form>
    </div>
  );
}
