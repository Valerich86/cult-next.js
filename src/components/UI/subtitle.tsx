import { font_accent } from "@/lib/fonts";

export default function Subtitle({ text }: { text: string }) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <h1
        className={`${font_accent.className} text-2xl text-center text-secondary md:text-3xl xl:text-4xl`}
      >
        {text}
      </h1>
    </div>
  );
}
