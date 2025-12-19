import Sidebar from "@/components/UI/sidebar";
import ImageContainer from "@/components/UI/image-container";
import { getGallery } from "@/lib/images";
import Subtitle from "@/components/UI/subtitle";
import Decor from "@/components/UI/decor";
import { headline, block1, block2, block3, block4 } from "@/lib/text/gallery";
import Headline from "@/components/UI/headline";
import TextContainer from "@/components/UI/text-container";

export default async function Gallery() {
  const tan_gallery = await getGallery("tan");
  const sonya_gallery = await getGallery("sonya");
  const arthur_gallery = await getGallery("arthur");

  const GalleryItem = ({
    i,
    master,
    filename,
  }: {
    i: number;
    master: string;
    filename: string;
  }) => {
    return (
      <div className="relative w-36 h-28" key={i}>
        <ImageContainer
          src={`/${master}/${filename}`}
          delay={i / 25}
          rotate={Math.floor(Math.random() * 21) - 10}
          containerId="gallery"
          animateOnce
        />
      </div>
    );
  };

  return (
    <div className="content" id="gallery">
      <Decor count={5}/>
      <Sidebar containerId="gallery" scrollable />

      <Headline text={headline}/>

      <Subtitle text={"Работы Андрея"} />
      <TextContainer text={block1}/>
      <div className="w-full flex justify-between flex-wrap pt-20">
        {tan_gallery?.map((item, i) => (
          <GalleryItem key={i} i={i} master="tan" filename={item} />
        ))}
      </div>

      <Subtitle text={"Работы Сони"} />
      <TextContainer text={block2}/>
      <div className="w-full flex justify-between flex-wrap pt-20">
        {sonya_gallery?.map((item, i) => (
          <GalleryItem key={i} i={i} master="sonya" filename={item} />
        ))}
      </div>

      <Subtitle text={"Работы Артура"} />
      <TextContainer text={block3}/>
      <div className="w-full flex justify-between flex-wrap pt-20">
        {arthur_gallery?.map((item, i) => (
          <GalleryItem key={i} i={i} master="arthur" filename={item} />
        ))}
      </div>
    </div>
  );
}
