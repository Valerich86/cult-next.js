import UpdateNewsForm from "@/components/admin-news-update";
import { baseUrl, bucketName } from "@/lib/vk-cloud";
import { verifySession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "/Админ/Новости/Редактирование",
};

export default async function UpdateNewsPage(props: {
  params: Promise<{ id: string }>;
}) {
  const isAdmin = await verifySession();
  if (!isAdmin) redirect("/admin/login");

  const {id} = await props.params;
  return (
    <UpdateNewsForm storageUrl={`${baseUrl}/${bucketName}`} id={id}/>
  )
}
