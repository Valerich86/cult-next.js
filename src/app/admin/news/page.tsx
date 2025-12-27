import NewsPage from "@/components/admin-news-page";
import { Metadata } from "next";
import { verifySession } from "@/lib/auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/UI/sidebar";

export const metadata: Metadata = {
  title: "/Админ/Новости",
};

export default async function Photos() {
  const isAdmin = await verifySession();
  if (!isAdmin) redirect("/admin/login");
  
  return (
    <div className="content" id="admin-news">
      <Sidebar containerId="admin-news"/>
      <h1 className={`text-secondary text-xl mt-10`}>
        На этой странице можно добавлять, удалять и редактировать новости.
      </h1>
      <NewsPage />
    </div>
  );
}
