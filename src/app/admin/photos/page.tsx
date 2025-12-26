import PhotosPage from "@/components/admin-photos-page";
import { baseUrl, bucketName } from "@/lib/vk-cloud";
import { Metadata } from "next";
import { verifySession } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "/Админ/Фотографии",
};

export default async function Photos() {
  const isAdmin = await verifySession();
  if (!isAdmin) redirect("/admin/login");
  
  return (
    <div className="content">
      <h1 className={`text-secondary text-xl mt-10`}>
        На этой странице можно добавлять новые фото тату на сайт либо удалять
        старые.
      </h1>
      <PhotosPage storageUrl={`${baseUrl}/${bucketName}`} />
    </div>
  );
}
