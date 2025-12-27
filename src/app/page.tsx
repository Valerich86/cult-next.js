import NavigationBar from "@/components/UI/navigation-bar";
import AnimatedCapture from "@/components/UI/animated-capture";
import AnimatedLogo from "@/components/UI/animated-logo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная/",
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
