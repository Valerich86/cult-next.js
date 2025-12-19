import { GiEvilEyes } from "react-icons/gi";
import Sidebar from "@/components/UI/sidebar";
import Headline from "@/components/UI/headline";
import { headline, subtitle1, subtitle2, capture, info } from "@/lib/text/contacts";
import Socials from "@/components/UI/socials";
import Decor from "@/components/UI/decor";
import BigtextContainer from "@/components/UI/bigtext-container";
import MyLogo from "@/components/UI/my-logo";
import { font_capture } from "@/lib/fonts";

export default function Contacts() {
  return (
    <div className="content" id="contacts">
      <Sidebar containerId={"contacts"} scrollable />

      <Decor count={1} />

      <Headline text={headline} />

      {/* получить консультацию */}
      <section className="w-full h-screen flex flex-col justify-evenly ">
        <h1 className="text-xl text-secondary md:text-2xl text-left">
          {subtitle2}
        </h1>
        <p className="text-secondary">{capture}</p>
        <a
          href="https://vk.me/cult_perm"
          target="_blank"
          aria-label="consultation"
          className="w-full"
        >
          <div className="bg-secondary flex w-full md:w-72 py-3 rounded-full justify-center items-center">
            <span className="text-peachy2 flex justify-between w-[90%] items-center animate-pulse">
              <span>Получить</span> <GiEvilEyes size={70} /> консультацию
            </span>
          </div>
        </a>
      </section>

      {/* соцсети */}
      <section className="w-full min-h-screen py-20 flex flex-col justify-center gap-y-20">
        <Socials
          name="CULT"
          vk_href="https://vk.link/cult_perm"
          tg_href="https://vk.com/away.php?to=https%3A%2F%2Ft.me%2Fcult_perm"
          inst_href="https://vk.com/away.php?to=https%3A%2F%2Fwww.instagram.com%2Fcult_perm%2F"
          phone_href="tel:+79630173055"
          phone="+7(963)017-30-55"
        />
        <Socials
          name="Андрей"
          vk_href="https://vk.com/id90911293"
          tg_href="https://t.me/tancult"
          inst_href="https://www.instagram.com/andrey_tan?igsh=MTR3cjcyaWVheXJvZg%3D%3D&utm_source=qr"
          yt_href="https://youtube.com/@cultperm"
          phone_href="tel:+79630173055"
          phone="+7(963)017-30-55"
        />
        <Socials
          name="Соня"
          vk_href="https://vk.com/id33149904"
          // tg_href="https://t.me/tancult"
          // inst_href="https://www.instagram.com/andrey_tan?igsh=MTR3cjcyaWVheXJvZg%3D%3D&utm_source=qr"
          // yt_href="https://youtube.com/@cultperm"
          // phone_href="tel:+79630173055"
          // phone="+7(963)017-30-55"
        />
        <Socials
          name="Артур"
          vk_href="https://vk.com/id638396972"
          tg_href="https://vk.com/away.php?utf=1&to=https%3A%2F%2Ft.me%2Feckerttattoo"
          // inst_href="https://www.instagram.com/andrey_tan?igsh=MTR3cjcyaWVheXJvZg%3D%3D&utm_source=qr"
          // yt_href="https://youtube.com/@cultperm"
          // phone_href="tel:+79630173055"
          // phone="+7(963)017-30-55"
        />
      </section>

      {/* интерактивная карта */}
      <section className="w-full min-h-screen flex flex-col justify-center gap-y-20">
        <h1 className="text-xl text-secondary md:text-2xl text-left">
          {subtitle1}
        </h1>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A4fc762a2faeae833170d060d0b03b5a1474a375acda93739316fc98b5e1522ab&amp;source=constructor"
          width="100%"
          height="418"
          className="rounded-2xl"
        ></iframe>
      </section>

      {/* футер */}
      <section className="w-full min-h-screen flex flex-col justify-center gap-y-20">
        <BigtextContainer text={info} />
        <div className="flex items-center gap-x-10">
          <span
            className={`${font_capture.className} text-xl lg:text-2xl text-secondary`}
          >
            Разработчик сайта:{" "}
          </span>
          <MyLogo />
        </div>
      </section>
    </div>
  );
}
