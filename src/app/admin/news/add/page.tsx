import AddNewsForm from '@/components/add-news-form'
import { verifySession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "/Админ/Добавление новости",
};

export default async function AddNewsPage() {
  const isAdmin = await verifySession();
  if (!isAdmin) redirect("/admin/login");
  return (
    <AddNewsForm />
  )
}
