import Sidebar from "@/components/UI/sidebar";
import Subtitle from "@/components/UI/subtitle";
import Decor from "@/components/UI/decor";
import { headline, block1, block2, block3, block4 } from "@/lib/text/gallery";
import Headline from "@/components/UI/headline";
import TextContainer from "@/components/UI/text-container";
import GallerySection from "@/components/gallery-section";
import { baseUrl, bucketName } from "@/lib/vk-cloud";

export default async function Gallery() {

  return (
    <div className="content" id="gallery">
      <Decor />
      <Sidebar containerId="gallery" scrollable />

      <Headline text={headline}/>

      <Subtitle text={"Работы Андрея"} />
      <TextContainer text={block1}/>
      <GallerySection master="tan" storageUrl={`${baseUrl}/${bucketName}`}/>

      <Subtitle text={"Работы Сони"} />
      <TextContainer text={block2}/>
      <GallerySection master="sonya" storageUrl={`${baseUrl}/${bucketName}`}/>

      <Subtitle text={"Работы Артура"} />
      <TextContainer text={block3}/>
      <GallerySection master="arthur" storageUrl={`${baseUrl}/${bucketName}`}/>
    </div>
  );
}
