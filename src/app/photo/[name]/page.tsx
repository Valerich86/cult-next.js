import Sidebar from "@/components/UI/sidebar";
import Image from "next/image";

export default async function Photo(props: { params: Promise<{ name: string }> }) {
  const {name} = await props.params;
  const imagePath = `/watermarked/${name}`;

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Sidebar containerId={"photo"} scrollable={false}/>
      <div className="w-3/4 h-11/12 flex justify-center items-center bg-primary border-4 rounded-2xl">
        <Image
          src={imagePath}
          alt=""
          width={400}
          height={300}
          className="w-full h-full object-contain lg:object-cover object-center"
        />
      </div>
    </div>
  );
}
