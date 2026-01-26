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
      <NavigationBar />
      <AnimatedCapture />
      <AnimatedLogo />
    </div>
  );
}
