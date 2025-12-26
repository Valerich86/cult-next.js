import { verifySession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import FileUploadForm from '@/components/file-uploads-form';

export const metadata: Metadata = {
  title: "/Админ/Загрузка фото",
};

export default async function UploadsPage() {
  const isAdmin = await verifySession();
  if (!isAdmin) redirect("/admin/login");
  return (
    <FileUploadForm />
  )
}
