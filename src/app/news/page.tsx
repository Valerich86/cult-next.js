import Sidebar from "@/components/UI/sidebar";
import Headline from "@/components/UI/headline";
import Decor from "@/components/UI/decor";
import { baseUrl, bucketName } from "@/lib/vk-cloud";
import { Metadata } from "next";
import NewsList from "../../components/news-list";

export const metadata: Metadata = {
  title: "Новости/",
  description: "Что нового в тату-студии: анонсы мероприятий, обзоры стилей и эксклюзивные акции. Оставайтесь на волне тату‑культуры — читайте наши новости!"
};

export default function News() {
  return (
    <div className="content" id="news">
      <Sidebar containerId={"news"} previous="/" />

      <Decor />

      <Headline text={"Мы не газета. Но новости есть. Новости, которые не стираются"} />

      <NewsList storageUrl={`${baseUrl}/${bucketName}`} />
    </div>
  );
}
