import NavigationBar from "@/components/UI/navigation-bar";
import AnimatedCapture from "@/components/UI/animated-capture";
import AnimatedLogo from "@/components/UI/animated-logo";
import { Metadata } from "next";
import VideoContainer from "@/components/UI/video-container";
import TextContainer from "@/components/UI/text-container";

export const metadata: Metadata = {
  title: "Главная",
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="relative w-screen h-screen flex justify-center">
        <VideoContainer src={"/video/NY.webm"} />
        <TextContainer text="С новым годом!" optionalStyles="z-50 absolute top-40" />
      </div>
      {/* <NavigationBar />
      <AnimatedCapture />
      <AnimatedLogo /> */}
    </div>
  );
}
