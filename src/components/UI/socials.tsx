import { FaInstagram, FaPhone } from "react-icons/fa";
import { RiTelegramFill, RiYoutubeFill } from "react-icons/ri";
import { FaVk } from "react-icons/fa";

interface SocialsProps {
  name: string;
  inst_href?: string;
  tg_href?: string;
  vk_href?: string;
  yt_href?: string;
  phone?: string;
  phone_href?: string;
}

export default function Socials({
  name,
  inst_href = undefined,
  tg_href = undefined,
  vk_href = undefined,
  yt_href = undefined,
  phone = undefined,
  phone_href = undefined,
}: SocialsProps) {
  return (
    <div className="flex gap-x-20 flex-wrap items-center">
      <p className="text-secondary text-xl lg:text-2xl">{name}</p>
      <div className="flex flex-wrap p-10 gap-10 justify-center items-center text-xl lg:text-2xl">
        {inst_href && (
          <a href={inst_href} target="_blank" aria-label="Instagram">
            <FaInstagram className="hover:text-[#E1306C] text-[#833AB4] transition-colors" size={50}/>
          </a>
        )}
        {tg_href && (
          <a href={tg_href} target="_blank" aria-label="Telegram">
            <RiTelegramFill className="hover:text-[#ff6f61] text-[#85b2ff] transition-colors" size={50}/>
          </a>
        )}
        {vk_href && (
          <a href={vk_href} target="_blank" aria-label="ВКонтакте">
            <FaVk className="hover:text-secondary text-[#4680C2] transition-colors" size={50}/>
          </a>
        )}
        {yt_href && (
          <a href={vk_href} target="_blank" aria-label="ВКонтакте">
            <RiYoutubeFill className="hover:text-secondary text-[#FF0000] transition-colors" size={50}/>
          </a>
        )}
        {phone && (
          <a href={phone_href} target="_blank" aria-label="Телефон">
            <FaPhone className="hover:text-secondary text-peachy1 transition-colors" size={35}/>
          </a>
        )}
      </div>
    </div>
  );
}
