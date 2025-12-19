import { font_accent } from "@/lib/fonts";

export default function Headline ({text}:{text:string}) {
  return (
    <>
      <div className="flex flex-col justify-center w-full h-screen relative">
        <h1 className={`${font_accent.className} text-4xl w-9/12 text-secondary md:text-5xl xl:text-6xl z-10`}>{text}</h1>
      </div>
      <div className="w-full h-1 border-t-secondary border-t-2"></div>
    </>
  );
}