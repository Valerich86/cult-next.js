import { verifySession } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { font_accent } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "/Админ",
};

const links = [
  { name: "Фото", href: "/admin/photos" },
  { name: "Новости", href: "/admin/news" },
  { name: "На главную", href: "/" },
];

export default async function Admin() {
  const isAdmin = await verifySession();
  if (!isAdmin) redirect("/admin/login");

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-y-10">
      {links.map((item, i) => (
        <Link href={item.href} key={i} className={`link ${font_accent.className}`}>
          {item.name}
        </Link>
      ))}
    </div>
  );
}
