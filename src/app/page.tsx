import NavigationBar from "@/components/UI/navigation-bar";
import AnimatedCaption from "@/components/UI/animated-caption";
import AnimatedLogo from "@/components/UI/animated-logo";
import { Metadata } from "next";
import Decor from "@/components/UI/decor";

export const metadata: Metadata = {
  title: "Главная",
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Decor />
      <NavigationBar />
      <AnimatedCaption />
      <AnimatedLogo />
    </div>
  );
}
