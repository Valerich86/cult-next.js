import { GiEvilEyes } from "react-icons/gi";

interface GetConsultationProps {
  subtitle: string;
  caption?: string;
}

export default function GetConsultation({
  subtitle,
  caption="",
}: GetConsultationProps) {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center gap-y-10 text-center">
      <h1 className="text-xl text-secondary md:text-2xl">
        {subtitle}
      </h1>
      <p className="text-secondary">{caption}</p>
      <a
        href="https://vk.me/cult_perm"
        target="_blank"
        aria-label="consultation"
        className="bg-secondary flex w-full md:w-72 py-3 rounded-full justify-center items-center"
      >
          <span className="text-peachy2 flex justify-between w-[90%] items-center animate-pulse">
            <span>Получить</span> <GiEvilEyes size={70} /> консультацию
          </span>
      </a>
    </section>
  );
}
