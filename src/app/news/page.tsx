import Sidebar from "@/components/UI/sidebar";
import Headline from "@/components/UI/headline";
import { headline, text1 } from "@/lib/text/news";
import Decor from "@/components/UI/decor";
import Subtitle from "@/components/UI/subtitle";
import ImageContainer from "@/components/UI/image-container";
import BigtextContainer from "@/components/UI/bigtext-container";
import { baseUrl, bucketName, getObjects } from "@/lib/vk-cloud";
import NewsSection from "@/components/news-section";

interface NewsItemProps {
  subtitle?: string;
  text: string;
  folder: string;
}

export default function News() {
  const NewsItem = async ({ subtitle, text, folder }: NewsItemProps) => {
    const images = await getObjects(folder);

    return (
      <section className="w-full min-h-screen">
        {subtitle && <Subtitle text={subtitle} />}
        <NewsSection folder={folder} storageUrl={`${baseUrl}/${bucketName}`}/>
        <BigtextContainer text={text} />
      </section>
    );
  };

  return (
    <div className="content" id="news">
      <Sidebar containerId={"news"} scrollable />

      <Decor />

      <Headline text={headline} />

      <NewsItem
        subtitle="Главная и единственная новость на данный момент"
        text={text1}
        folder={`news-1`}
      />
    </div>
  );
}
