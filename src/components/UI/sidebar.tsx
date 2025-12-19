"use client";

import { CgClose } from "react-icons/cg";
import { AiOutlineUp } from "react-icons/ai";
import { useRouter } from "next/navigation";

interface SidebarProps {
  containerId: string;
  scrollable: boolean;
}

export default function Sidebar({ containerId, scrollable }: SidebarProps) {
  const router = useRouter();

  // const returnToTop = () => {
  //   document
  //     .getElementById(containerId)
  //     ?.scrollTo({ top: 0, behavior: "smooth" });
  // };
  const returnToTop = () => {
    const element = document.getElementById(containerId) || window;

    const scrollToTop = () => {
      const position =
        element instanceof Window ? window.pageYOffset : element.scrollTop;

      if (position > 0) {
        requestAnimationFrame(() => {
          if (element instanceof Window) {
            window.scrollBy({ top: -Math.max(1, Math.floor(position / 10)) });
          } else {
            element.scrollTop =
              position - Math.max(1, Math.floor(position / 10));
          }
          scrollToTop();
        });
      }
    };

    scrollToTop();
  };

  return (
    <div className="fixed flex flex-col justify-between right-[5%] top-1/2 -translate-y-1/2 z-50 h-4/5 items-center">
      <span
        className="text-peachy1 flex justify-center items-center cursor-pointer hover:animate-spin"
        onClick={() => {
          if (containerId === "about") router.replace("/");
          else router.back();
        }}
      >
        <CgClose size={30} />
      </span>
      {scrollable && (
        <span
          className="text-peachy1 flex justify-center items-center cursor-pointer hover:animate-iconTopHover"
          onClick={returnToTop}
        >
          <AiOutlineUp size={30} />
        </span>
      )}
    </div>
  );
}
