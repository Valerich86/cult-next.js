"use client";

import { CgClose } from "react-icons/cg";
import { AiOutlineUp } from "react-icons/ai";
import { useRouter } from "next/navigation";

interface SidebarProps {
  containerId: string;
  scrollable?: boolean;
}

export default function Sidebar({ containerId, scrollable=true }: SidebarProps) {
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
    <div className="fixed flex flex-col justify-between right-[5%] top-1/2 -translate-y-1/2 z-50 h-4/5 items-center">
      <span
        className="text-peachy1 flex justify-center items-center cursor-pointer hover:animate-spinOnce animate-pulse"
        onClick={() => {
          if (containerId === "about") router.replace("/");
          else router.back();
        }}
      >
        <CgClose size={30} />
      </span>
      {scrollable && (
        <span
          className="text-peachy1 flex justify-center items-center cursor-pointer hover:animate-iconTopHover animate-pulse"
          onClick={returnToTop}
        >
          <AiOutlineUp size={30} />
        </span>
      )}
    </div>
  );
}
