import Sidebar from "@/components/UI/sidebar";
import Headline from "@/components/UI/headline";
import { headline } from "@/lib/text/news";
import Decor from "@/components/UI/decor";
import { baseUrl, bucketName } from "@/lib/vk-cloud";
import { Metadata } from "next";
import NewsList from "../../components/news-list";

export const metadata: Metadata = {
  title: "Новости/",
};

export default function News() {
  return (
    <div className="content" id="news">
      <Sidebar containerId={"news"} scrollable />

      <Decor />

      <Headline text={headline} />

      <NewsList storageUrl={`${baseUrl}/${bucketName}`} />
    </div>
  );
}
