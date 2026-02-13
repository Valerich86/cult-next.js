
import "./globals.css";
import { font_default } from "@/lib/fonts";
import PageTransition from "./pageTransition";
import Footer from "@/components/UI/footer";
import  WebVitals  from "@/components/web-vitals";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "CULT | %s",
    default: "CULT",
  },
  description: "CULT (Культ). Студия татуировки, г.Пермь"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" style={{scrollBehavior: "smooth"}}>
      <body className={`${font_default.className} antialiased bg-[url('/technical/metall-lighter.webp')] xl:bg-[url('/technical/metall.webp')] bg-cover overflow-hidden`}>
        <WebVitals />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
