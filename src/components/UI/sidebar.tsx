"use client";

import { CgClose } from "react-icons/cg";
import { AiOutlineUp } from "react-icons/ai";
import { useRouter } from "next/navigation";

interface SidebarProps {
  containerId: string;
  previous: string;
}

export default function Sidebar({ containerId, previous }: SidebarProps) {
  const router = useRouter();

  const returnToTop = () => {
    const element = document.getElementById(containerId) || window;
    const duration = 200;
    const start =
      element instanceof Window ? window.pageYOffset : element.scrollTop;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 2);
      const position = start * (1 - easeOut);

      if (element instanceof Window) {
        window.scrollTo(0, position);
      } else {
        element.scrollTop = position;
      }

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <>
      <span
        className={`
          text-peachy1 flex justify-center items-center 
          cursor-pointer hover:animate-spinOnce animate-pulse
          fixed z-50 right-[5%] top-[10%]`}
        onClick={() => {
          if (containerId === "about") router.replace("/");
          else router.back();
        }}
      >
        <CgClose size={30} />
      </span>
      <span
        className={`
            text-peachy1 flex justify-center items-center 
            cursor-pointer hover:animate-iconTopHover animate-pulse
            fixed z-50 right-[5%] bottom-[10%]`}
        onClick={returnToTop}
      >
        <AiOutlineUp size={30} />
      </span>
      <span
        className={`
            text-peachy1 flex justify-center items-center -rotate-90
            cursor-pointer hover:animate-iconTopHover animate-pulse
            fixed z-50 left-[5%] top-[10%]`}
        onClick={() => router.replace(previous)}
      >
        <AiOutlineUp size={30} />
      </span>
    </>
  );
}
