import Sidebar from "@/components/UI/sidebar";
import Headline from "@/components/UI/headline";
import { headline, text1 } from "@/lib/text/news";
import Decor from "@/components/UI/decor";
import Subtitle from "@/components/UI/subtitle";
import ImageContainer from "@/components/UI/image-container";
import BigtextContainer from "@/components/UI/bigtext-container";
import { baseUrl, bucketName, getObjects } from "@/lib/vk-cloud";

interface NewsItemProps {
  subtitle?: string;
  text: string;
  folder: string;
}

export default function News() {
  const NEWS_FOLDER = "news/";

  const NewsItem = async ({ subtitle, text, folder }: NewsItemProps) => {
    const images = await getObjects(folder);

    return (
      <section className="w-full min-h-screen">
        {subtitle && <Subtitle text={subtitle} />}
        {images && (
          <div className={`w-full h-[80vh] relative`}>
            {images.map((item, i) => (
              <div
                key={i}
                className={`w-full sm:w-1/2 h-100 absolute`}
                style={{
                  left: `${i * 50}px`,
                  top: `${i * 10}px`,
                }}
              >
                <ImageContainer
                  src={`${baseUrl}/${bucketName}/${item.Key}`}
                  delay={i / 10}
                  rotate={Math.floor(Math.random() * 21) - 10}
                  containerId="news"
                />
              </div>
            ))}
          </div>
        )}
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
        folder={`${NEWS_FOLDER}news-1`}
      />
    </div>
  );
}
