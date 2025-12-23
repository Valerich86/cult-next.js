import NavigationBar from "@/components/UI/navigation-bar";
import AnimatedCapture from "@/components/UI/animated-capture";
import AnimatedLogo from "@/components/UI/animated-logo";

export default function Home() {
  if (process.env.NEXT_PUBLIC_KILL_SWITCH === "true") {
    throw new Error("Приложение временно отключено");
  }
  return (
    <>
      <NavigationBar />
      <AnimatedCapture />
      <AnimatedLogo />
    </>
  );
}
