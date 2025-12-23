
import "./globals.css";
import { font_default } from "@/lib/fonts";
import PageTransition from "./pageTransition";
import Footer from "@/components/UI/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" style={{scrollBehavior: "smooth"}}>
      <body className={`${font_default.className} antialiased bg-[url('/technical/metall-lighter.webp')] xl:bg-[url('/technical/metall.webp')] bg-cover overflow-hidden`}>
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
