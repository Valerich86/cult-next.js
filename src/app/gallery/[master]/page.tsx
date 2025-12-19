import Sidebar from "@/components/UI/sidebar";
import ImageContainer from "@/components/UI/image-container";
import { getGallery } from "@/lib/images";
import Subtitle from "@/components/UI/subtitle";
import Decor from "@/components/UI/decor";

export default async function Gallery(props: {
  params: Promise<{ master: string }>;
}) {
  const { master } = await props.params;
  const gallery = await getGallery(master);
  const subtitle = master === "tan" ? "Работы Андрея" :  master === "sonya" ? "Работы Сони" : "Работы Артура";

  if (!master) {
    return <div>Все фото</div>;
  }

  return (
    <div className="content" id="gallery">
      <Decor count={3}/>
      <Sidebar containerId="gallery" scrollable/>
      <Subtitle text={subtitle}/>
      <div className="w-full flex justify-between flex-wrap pt-20">
        {gallery?.map((item, i) => (
          <div className="relative w-36 h-28" key={i}>
            <ImageContainer
              src={`/${master}/${item}`}
              delay={i / 25}
              rotate={Math.floor(Math.random() * 21) - 10}
              containerId="gallery"
              animateOnce
            />
          </div>
        ))}
      </div>
    </div>
  );
}
