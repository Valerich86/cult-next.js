import { GiSheikahEye } from "react-icons/gi";
import Sidebar from "@/components/UI/sidebar";
import Headline from "@/components/UI/headline";
import ImageContainer from "@/components/UI/image-container";
import {
  headline1,
  headline2,
  subtitle1,
  subtitle2,
  subtitle3,
  subtitle4,
  cult0,
  cult1,
  cult2,
  cult3,
  tan1,
  tan2,
  tan3,
  tan4,
  tan5,
  sonya1,
  sonya2,
  sonya3,
  sonya5,
  arthur1,
  arthur2,
  arthur3,
  arthur5,
} from "@/lib/text/about";
import TextContainer from "@/components/UI/text-container";
import Subtitle from "@/components/UI/subtitle";
import Decor from "@/components/UI/decor";
import Link from "next/link";
import VideoContainer from "@/components/UI/video-container";
import BigtextContainer from "@/components/UI/bigtext-container";
import Socials from "@/components/UI/socials";
import { getFiles } from "@/lib/images";

export default async function About() {
  const tanStaticTattoos = await getFiles("tan");
  const sonyaStaticTattoos = await getFiles("sonya");
  const arthurStaticTattoos = await getFiles("arthur");

  return (
    <div className="content" id="about">
      <Sidebar containerId={"about"} scrollable />

      <Decor />

      <Headline text={headline1} />

      {/* секция "Студия"  */}
      <section className="min-h-screen w-full flex flex-wrap items-center justify-center mb-48">
        <Subtitle text={subtitle1} />
        <div className="text-block">
          <TextContainer text={cult1} delay={0} />
          <TextContainer text={cult2} optionalStyles=" -ml-5" delay={0.1} />
          <TextContainer text={cult3} optionalStyles=" ml-5" delay={0.2} />
        </div>
        <div className="image-block mt-48 sm:mt-0">
          <ImageContainer
            src="/studio/studio-5.webp"
            optionalStyles="-top-20 -left-30"
            delay={0}
            rotate={-3}
            containerId="about"
          />
          <ImageContainer
            src="/studio/studio-3.webp"
            optionalStyles=" -left-10"
            delay={0.1}
            rotate={3}
            containerId="about"
          />
          <ImageContainer
            src="/studio/studio-4.webp"
            optionalStyles="top-20 left-10"
            delay={0.2}
            rotate={6}
            containerId="about"
          />
          <ImageContainer
            src="/studio/studio-2.webp"
            optionalStyles="top-40 left-15"
            delay={0.3}
            rotate={12}
            containerId="about"
          />
          <ImageContainer
            src="/studio/studio.webp"
            optionalStyles="top-60"
            delay={0.3}
            rotate={15}
            containerId="about"
          />
        </div>
      </section>

      <Headline text={headline2} />

      <BigtextContainer text={cult0} />

      {/* секция "Андрей"  */}
      <section className="min-h-screen w-full flex flex-wrap items-center justify-center">
        <Subtitle text={subtitle2} />
        <div className="image-block">
          <ImageContainer
            src="/studio/tan-2.webp"
            optionalStyles="left-30"
            delay={0}
            rotate={3}
            containerId="about"
          />
          <ImageContainer
            src="/studio/tan-3.webp"
            optionalStyles="top-20 left-10"
            delay={0.1}
            rotate={-2}
            containerId="about"
          />
          <ImageContainer
            src="/studio/tan-4.webp"
            optionalStyles="top-30 -left-10"
            delay={0.2}
            rotate={-6}
            containerId="about"
          />
          <ImageContainer
            src="/studio/tan-5.webp"
            optionalStyles="top-45 -left-20"
            delay={0.3}
            rotate={-9}
            containerId="about"
          />
          <ImageContainer
            src="/studio/tan.png"
            optionalStyles="top-60 -left-30"
            delay={0.4}
            border
            rotate={-11}
            containerId="about"
          />
        </div>
        <div className="text-block top-48">
          <TextContainer text={tan1} delay={0} />
          <TextContainer text={tan2} optionalStyles="ml-5" delay={0.1} />
          <TextContainer text={tan3} optionalStyles="ml-10" delay={0.2} />
          <TextContainer text={tan4} optionalStyles="-ml-5" delay={0.3} />
        </div>
        <div className="mt-80 w-full flex gap-10 items-center">
          <h1 className="text-xl text-secondary md:text-2xl text-left">
            Работы Андрея
          </h1>
          <Link
            href={`/gallery/tan`}
            className="flex p-3 rounded-full bg-secondary justify-around items-center"
          >
            <span className="text-peachy2 flex items-center animate-pulse">
              Смотреть <GiSheikahEye size={30} /> все
            </span>
          </Link>
        </div>
        <div className="w-full flex justify-between flex-wrap pt-20">
          {tanStaticTattoos?.map((item, i) => (
            <div className="relative w-36 h-28 lg:w-32" key={i}>
              <ImageContainer
                src={`/tan/${item}`}
                delay={i / 10}
                rotate={Math.floor(Math.random() * 21) - 10}
                containerId="about"
              />
            </div>
          ))}
        </div>
        <div className="relative w-screen h-screen mt-52">
          <VideoContainer src="/video/tan.mp4" />
          <BigtextContainer
            text={tan5}
            optionalStyles="justify-end items-start w-1/2 px-10 pt-10"
          />
        </div>
        <div className="w-full mt-[20vh]">
          <Socials
            name="Контакты Андрея"
            vk_href="https://vk.com/id90911293"
            tg_href="https://t.me/tancult"
            inst_href="https://www.instagram.com/andrey_tan?igsh=MTR3cjcyaWVheXJvZg%3D%3D&utm_source=qr"
            yt_href="https://youtube.com/@cultperm"
            phone_href="tel:+79630173055"
            phone="+7(963)017-30-55"
          />
        </div>
      </section>

      {/* секция "Соня"  */}
      <section className="min-h-screen w-full flex flex-wrap items-center justify-center ">
        <Subtitle text={subtitle3} />
        <div className="text-block">
          <TextContainer text={sonya1} delay={0} />
          <TextContainer text={sonya2} optionalStyles=" -ml-5" delay={0.1} />
          <TextContainer text={sonya3} optionalStyles=" ml-5" delay={0.2} />
        </div>
        <div className="image-block mt-48 sm:mt-0">
          <ImageContainer
            src="/studio/sonya-2.webp"
            optionalStyles="-top-20 -left-30"
            delay={0}
            rotate={-3}
            containerId="about"
          />
          <ImageContainer
            src="/studio/sonya-3.webp"
            optionalStyles=" -left-10"
            delay={0.1}
            rotate={3}
            containerId="about"
          />
          <ImageContainer
            src="/studio/sonya-4.webp"
            optionalStyles="top-20 left-20"
            delay={0.2}
            rotate={9}
            containerId="about"
          />
          <ImageContainer
            src="/studio/sonya.png"
            optionalStyles="top-40 left-30"
            delay={0.3}
            rotate={15}
            border
            containerId="about"
          />
        </div>
        <div className="mt-80 w-full flex gap-10 items-center">
          <h1 className="text-xl text-secondary md:text-2xl text-left">
            Работы Сони
          </h1>
          <Link
            href={`/gallery/sonya`}
            className="flex p-3 rounded-full bg-secondary justify-around items-center"
          >
            <span className="text-peachy2 flex items-center animate-pulse">
              Смотреть <GiSheikahEye size={30} /> все
            </span>
          </Link>
        </div>
        <div className="w-full flex justify-between flex-wrap pt-20">
          {sonyaStaticTattoos?.map((item, i) => (
            <div className="relative w-36 h-28 lg:w-32" key={i}>
              <ImageContainer
                src={`/sonya/${item}`}
                delay={i / 10}
                rotate={Math.floor(Math.random() * 21) - 10}
                containerId="about"
              />
            </div>
          ))}
        </div>
        <div className="relative w-screen h-screen mt-52">
          <VideoContainer src="/video/tan.mp4" />
          <BigtextContainer
            text={sonya5}
            optionalStyles="justify-end items-start w-1/2 px-10 pt-10"
          />
        </div>
        <div className="w-full mt-[20vh]">
          <Socials name="Контакты Сони" vk_href="https://vk.com/id33149904" />
        </div>
      </section>

      {/* секция "Артур"  */}
      <section className="min-h-screen w-full flex flex-wrap items-center justify-center ">
        <Subtitle text={subtitle4} />
        <div className="image-block">
          <ImageContainer
            src="/studio/arthur-2.webp"
            optionalStyles="left-30"
            delay={0}
            rotate={3}
            containerId="about"
          />
          <ImageContainer
            src="/studio/arthur.png"
            optionalStyles="top-60 -left-20"
            delay={0.3}
            rotate={-9}
            border
            containerId="about"
          />
        </div>
        <div className="text-block top-48">
          <TextContainer text={arthur1} delay={0} />
          <TextContainer text={arthur2} optionalStyles="ml-5" delay={0.1} />
          <TextContainer text={arthur3} optionalStyles="-ml-2" delay={0.2} />
        </div>
        <div className="mt-80 w-full flex gap-10 items-center">
          <h1 className="text-xl text-secondary md:text-2xl text-left">
            Работы Артура
          </h1>
          <Link
            href={`/gallery/arthur`}
            className="flex p-3 rounded-full bg-secondary justify-around items-center"
          >
            <span className="text-peachy2 flex items-center animate-pulse">
              Смотреть <GiSheikahEye size={30} /> все
            </span>
          </Link>
        </div>
        <div className="w-full flex justify-between flex-wrap pt-20">
          {arthurStaticTattoos?.map((item, i) => (
            <div className="relative w-36 h-28 lg:w-32" key={i}>
              <ImageContainer
                src={`/arthur/${item}`}
                delay={i / 10}
                rotate={Math.floor(Math.random() * 21) - 10}
                containerId="about"
              />
            </div>
          ))}
        </div>
        <div className="relative w-screen h-screen mt-52">
          <VideoContainer src="/video/tan.mp4" />
          <BigtextContainer
            text={arthur5}
            optionalStyles="justify-end items-start w-1/2 px-10 pt-10"
          />
        </div>
        <div className="w-full mt-[20vh]">
          <Socials
            name="Контакты Артура"
            vk_href="https://vk.com/id638396972"
            tg_href="https://vk.com/away.php?utf=1&to=https%3A%2F%2Ft.me%2Feckerttattoo"
          />
        </div>
      </section>
    </div>
  );
}
