import Sidebar from "@/components/UI/sidebar";
import ImageContainer from "@/components/UI/image-container";
import Subtitle from "@/components/UI/subtitle";
import Decor from "@/components/UI/decor";
import { baseUrl, bucketName } from "@/lib/vk-cloud";
import GallerySection from "@/components/gallery-section";
import { Metadata } from "next";

export async function generateMetadata(props: {
  params: Promise<{ master: string }>;
}): Promise<Metadata> {
  const { master } = await props.params;
  const text =
    master === "tan"
      ? "Портфолио Андрея"
      : master === "sonya"
      ? "Портфолио Сони"
      : "Портфолио Артура";

  return {
    title: `Галерея | ${text}`,
    description: `${text}. Посмотрите реальные работы тату-мастера и запишитесь к нему на сеанс.`,
  };
}

export default async function Gallery(props: {
  params: Promise<{ master: string }>;
}) {
  const { master } = await props.params;
  const subtitle =
    master === "tan"
      ? "Работы Андрея"
      : master === "sonya"
      ? "Работы Сони"
      : "Работы Артура";

  return (
    <div className="content" id="gallery">
      <Decor />
      <Sidebar containerId="gallery" previous="/about" />
      <Subtitle text={subtitle} />
      <GallerySection master={master} storageUrl={`${baseUrl}/${bucketName}`} />
    </div>
  );
}
