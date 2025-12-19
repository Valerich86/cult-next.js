import Sidebar from "@/components/UI/sidebar";
import Headline from "@/components/UI/headline";
// import { headline, subtitle1, info } from "@/lib/text/contacts";
import Socials from "@/components/UI/socials";
import Decor from "@/components/UI/decor";
import BigtextContainer from "@/components/UI/bigtext-container";
import Subtitle from "@/components/UI/subtitle";

export default function News() {
  return (
    <div className="content" id="news">
      <Sidebar containerId={"news"} scrollable />

      <Decor count={20} maxSize={40}/>

      <Headline text={"Новости здесь"} />
      

      {/* новость */}
      <section className="w-full min-h-screen ">
        <Subtitle text=""/>
      </section>
    </div>
  );
}
