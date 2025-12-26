import { verifySession } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "/Админ",
};

const buttons = [
  { name: "Фото", href: "/admin/photos" },
  { name: "Новости", href: "/admin/news" },
];

export default async function Admin() {
  const isAdmin = await verifySession();
  if (!isAdmin) redirect("/admin/login");

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-y-5">
      {buttons.map((item, i) => (
        <Link href={item.href} key={i}>
          <div className="admin-button w-50">{item.name}</div>
        </Link>
      ))}
    </div>
  );
}
