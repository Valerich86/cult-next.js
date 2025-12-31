import NavigationBar from "@/components/UI/navigation-bar";
import AnimatedCapture from "@/components/UI/animated-capture";
import AnimatedLogo from "@/components/UI/animated-logo";
import { Metadata } from "next";
import VideoContainer from "@/components/UI/video-container";
import TextContainer from "@/components/UI/text-container";
import { NY } from "@/lib/text/about";

export const metadata: Metadata = {
  title: "Главная",
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      <TextContainer text={NY} optionalStyles="z-50 absolute" />
      <div className="w-screen h-screen flex justify-center pt-20">
        <VideoContainer src={"/video/NY.webm"} />
      </div>
      {/* <NavigationBar />
      <AnimatedCapture />
      <AnimatedLogo /> */}
    </div>
  );
}
