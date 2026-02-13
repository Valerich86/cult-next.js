import { Metadata } from "next";
import Link from "next/link";
import { GiSheikahEye } from "react-icons/gi";
import Sidebar from "@/components/UI/sidebar";
import Headline from "@/components/UI/headline";
import ImageContainer from "@/components/UI/image-container";
import studio from "../../../public/studio/studio.webp";
import studio_2 from "../../../public/studio/studio-2.webp";
import studio_3 from "../../../public/studio/studio-3.webp";
import studio_4 from "../../../public/studio/studio-4.webp";
import studio_5 from "../../../public/studio/studio-5.webp";
import tan from "../../../public/studio/tan.png";
import tan_2 from "../../../public/studio/tan-2.webp";
import tan_3 from "../../../public/studio/tan-3.webp";
import tan_4 from "../../../public/studio/tan-4.webp";
import tan_5 from "../../../public/studio/tan-5.webp";
import tan_6 from "../../../public/studio/tan-6.webp";
import sonya from "../../../public/studio/sonya.png";
import sonya_2 from "../../../public/studio/sonya-2.webp";
import sonya_3 from "../../../public/studio/sonya-3.webp";
import sonya_4 from "../../../public/studio/sonya-4.webp";
import sonya_5 from "../../../public/studio/sonya-5.webp";
import arthur from "../../../public/studio/arthur.png";
import arthur_2 from "../../../public/studio/arthur-2.webp";
import arthur_3 from "../../../public/studio/arthur-3.webp";
import tattoo_tan_1 from "../../../public/tan/tattoo-tan-1.webp";
import tattoo_tan_2 from "../../../public/tan/tattoo-tan-2.webp";
import tattoo_tan_3 from "../../../public/tan/tattoo-tan-3.webp";
import tattoo_tan_4 from "../../../public/tan/tattoo-tan-4.webp";
import tattoo_tan_5 from "../../../public/tan/tattoo-tan-5.webp";
import tattoo_tan_6 from "../../../public/tan/tattoo-tan-6.webp";
import tattoo_tan_7 from "../../../public/tan/tattoo-tan-7.webp";
import tattoo_tan_8 from "../../../public/tan/tattoo-tan-8.webp";
import tattoo_sonya_1 from "../../../public/sonya/tattoo-sonya-1.webp";
import tattoo_sonya_2 from "../../../public/sonya/tattoo-sonya-2.webp";
import tattoo_sonya_3 from "../../../public/sonya/tattoo-sonya-3.webp";
import tattoo_sonya_4 from "../../../public/sonya/tattoo-sonya-4.webp";
import tattoo_sonya_5 from "../../../public/sonya/tattoo-sonya-5.webp";
import tattoo_sonya_6 from "../../../public/sonya/tattoo-sonya-6.webp";
import tattoo_sonya_7 from "../../../public/sonya/tattoo-sonya-7.webp";
import tattoo_sonya_8 from "../../../public/sonya/tattoo-sonya-8.webp";
import tattoo_arthur_1 from "../../../public/arthur/tattoo-arthur-1.webp";
import tattoo_arthur_2 from "../../../public/arthur/tattoo-arthur-2.webp";
import tattoo_arthur_3 from "../../../public/arthur/tattoo-arthur-3.webp";
import tattoo_arthur_4 from "../../../public/arthur/tattoo-arthur-4.webp";
import tattoo_arthur_5 from "../../../public/arthur/tattoo-arthur-5.webp";
import tattoo_arthur_6 from "../../../public/arthur/tattoo-arthur-6.webp";
import tattoo_arthur_7 from "../../../public/arthur/tattoo-arthur-7.webp";
import tattoo_arthur_8 from "../../../public/arthur/tattoo-arthur-8.webp";
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
  subtitle5,
  caption,
} from "@/lib/text/about";
import TextContainer from "@/components/UI/text-container";
import Subtitle from "@/components/UI/subtitle";
import Decor from "@/components/UI/decor";
import VideoContainer from "@/components/UI/video-container";
import BigtextContainer from "@/components/UI/bigtext-container";
import Socials from "@/components/UI/socials";
import { getFiles } from "@/lib/images";
import GetConsultation from "@/components/get-consultation";

export const metadata: Metadata = {
  title: "О нас",
  description: "О студии: опыт, принципы и мастера. Мы создаём безопасные и уникальные татуировки с 2010 года. Посмотрите портфолио и получите консультацию уже сегодня."
};

export default async function About() {
  // const tanStaticTattoos = await getFiles("tan");
  // const sonyaStaticTattoos = await getFiles("sonya");
  // const arthurStaticTattoos = await getFiles("arthur");
  const tanStaticTattoos = [tattoo_tan_1, tattoo_tan_2, tattoo_tan_3, tattoo_tan_4, tattoo_tan_5, tattoo_tan_6, tattoo_tan_7, tattoo_tan_8];
  const sonyaStaticTattoos = [tattoo_sonya_1, tattoo_sonya_2, tattoo_sonya_3, tattoo_sonya_4, tattoo_sonya_5, tattoo_sonya_6, tattoo_sonya_7, tattoo_sonya_8];
  const arthurStaticTattoos = [tattoo_arthur_1, tattoo_arthur_2, tattoo_arthur_3, tattoo_arthur_4, tattoo_arthur_5, tattoo_arthur_6, tattoo_arthur_7, tattoo_arthur_8];

  return (
    <div className="content" id="about">
      <Sidebar containerId={"about"} previous="/" />

      <Decor />

      <Headline text={headline1} />

      {/* секция "Студия"  */}
      <section className="min-h-screen w-full flex flex-wrap items-center justify-center mb-48">
        <Subtitle text={subtitle1} />
        <BigtextContainer text={cult0} />
        {/* <div className="text-block">
          <TextContainer text={cult3} delay={0} />
          <TextContainer text={cult2} optionalStyles=" -ml-5" delay={0.1} />
          <TextContainer text={cult1} optionalStyles=" ml-5" delay={0.2} />
        </div> */}
        <div className="image-block mt-48 sm:mt-24">
          <ImageContainer
            src={studio_5}
            optionalStyles="-top-20 -left-30"
            delay={0}
            rotate={-3}
            containerId="about"
          />
          <ImageContainer
            src={studio_3}
            optionalStyles=" -left-10"
            delay={0.1}
            rotate={3}
            containerId="about"
          />
          <ImageContainer
            src={studio_4}
            optionalStyles="top-20 left-10"
            delay={0.2}
            rotate={6}
            containerId="about"
          />
          <ImageContainer
            src={studio_2}
            optionalStyles="top-40 left-15"
            delay={0.3}
            rotate={12}
            containerId="about"
          />
          <ImageContainer
            src={studio}
            optionalStyles="top-60"
            delay={0.3}
            rotate={15}
            containerId="about"
          />
        </div>
      </section>

      <Headline text={headline2} />


      {/* секция "Андрей"  */}
      <section className="min-h-screen w-full flex flex-wrap items-center justify-center">
        <Subtitle text={subtitle2} />
        <div className="image-block">
          <ImageContainer
            src={tan_2}
            optionalStyles="left-30"
            delay={0}
            rotate={3}
            containerId="about"
          />
          <ImageContainer
            src={tan_3}
            optionalStyles="top-20 left-10"
            delay={0.1}
            rotate={-2}
            containerId="about"
          />
          <ImageContainer
            src={tan_4}
            optionalStyles="top-30 -left-10"
            delay={0.2}
            rotate={-6}
            containerId="about"
          />
          <ImageContainer
            src={tan_5}
            optionalStyles="top-45 -left-20"
            delay={0.3}
            rotate={-9}
            containerId="about"
          />
          <ImageContainer
            src={tan_6}
            optionalStyles="top-60 -left-30"
            delay={0.4}
            rotate={-11}
            containerId="about"
          />
          <ImageContainer
            src={tan}
            optionalStyles="top-75 -left-40"
            delay={0.5}
            rotate={-14}
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
                src={item}
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
            optionalStyles="absolute right-[5%] top-[5%] text-end"
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
            src={sonya_2}
            optionalStyles="-top-20 -left-30"
            delay={0}
            rotate={-3}
            containerId="about"
          />
          <ImageContainer
            src={sonya_3}
            optionalStyles=" -left-10"
            delay={0.1}
            rotate={3}
            containerId="about"
          />
          <ImageContainer
            src={sonya_4}
            optionalStyles="top-20 left-20"
            delay={0.2}
            rotate={9}
            containerId="about"
          />
          <ImageContainer
            src={sonya}
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
                src={item}
                delay={i / 10}
                rotate={Math.floor(Math.random() * 21) - 10}
                containerId="about"
              />
            </div>
          ))}
        </div>
        <div className="relative w-screen h-screen mt-52">
          <VideoContainer src="/video/sonya.webm" position=""/>
          <BigtextContainer
            text={sonya5}
            optionalStyles="absolute right-[5%] top-[5%] text-end"
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
            src={arthur_3}
            optionalStyles="left-30"
            position="top"
            delay={0}
            rotate={3}
            containerId="about"
          />
          <ImageContainer
            src={arthur_2}
            optionalStyles="top-30 left-5"
            delay={0.3}
            rotate={-3}
            containerId="about"
          />
          <ImageContainer
            src={arthur}
            optionalStyles="top-60 -left-20"
            delay={0.6}
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
                src={item}
                delay={i / 10}
                rotate={Math.floor(Math.random() * 21) - 10}
                containerId="about"
              />
            </div>
          ))}
        </div>
        <div className="relative w-screen h-screen mt-52">
          <VideoContainer src="/video/arthur-2.webm" position="top"/>
          <BigtextContainer
            text={arthur5}
            optionalStyles="absolute right-[5%] top-[5%] text-end"
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
      <GetConsultation subtitle={subtitle5} caption={caption}/>
    </div>
  );
}
