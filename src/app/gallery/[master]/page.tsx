import Sidebar from "@/components/UI/sidebar";
import ImageContainer from "@/components/UI/image-container";
import Subtitle from "@/components/UI/subtitle";
import Decor from "@/components/UI/decor";
import {baseUrl, bucketName, getObjects} from "@/lib/vk-cloud";
import GallerySection from "@/components/gallery-section";

export default async function Gallery(props: {
  params: Promise<{ master: string }>;
}) {
  const { master } = await props.params;
  const subtitle = master === "tan" ? "Работы Андрея" :  master === "sonya" ? "Работы Сони" : "Работы Артура";

  return (
    <div className="content" id="gallery">
      <Decor />
      <Sidebar containerId="gallery" scrollable/>
      <Subtitle text={subtitle}/>
      <GallerySection master={master} storageUrl={`${baseUrl}/${bucketName}`}/>
    </div>
  );
}
