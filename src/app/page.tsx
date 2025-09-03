import ChampionsCard from "@/components/champions/Champions";
import Features from "@/components/features/Features";
import Landing from "@/components/landingPage/Landing";
import Toturial from "@/components/landingPage/Toturial";
import UsersFeedback from "@/components/usersFeedback/UsersFeedback";
import Video from "@/components/video/Video";
import { InfoCircle, UserTick } from "iconsax-reactjs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-start items-start">
      <Landing />
      <div className="w-full relative">
        <Toturial />
        <div className="absolute inset-0 w-full h-[30px] lg:h-[40px] bg-[#F0F2F3] z-40 top-[570px] lg:top-[760px] [clip-path:ellipse(50%_100%_at_50%_100%)]"></div>
      </div>
      <Features />
      <Video />
      <UsersFeedback />
      <ChampionsCard />
      <div className="w-full flex justify-center items-center flex-col lg:px-[76px] px-[16px] bg-[#F0F2F3] pt-[75px]">
        <div className="w-full flex justify-end items-end font-kalameh font-extrabold text-4xl gap-[16px]">
          <InfoCircle size="35" color="#8D50BE" variant="Bold" />
          <h1 className="text-[#8D50BE]">نفرات برتر هفته</h1>
          <UserTick size="64" color="#8D50BE" />
        </div>
        <div
          className="pt-[30px] w-full overflow-x-auto flex flex-col gap-[16px]"
          dir="rtl"
        >
          <div className="w-full min-w-[1200px] gap-[16px] min-h-[76px] grid grid-cols-12 span-[16px]">
            <div className="col-span-1 w-full flex justify-start items-start h-full">
              <Image
                src="/champions/1.png"
                width={76}
                height={76}
                alt="cup"
                className="rounded-2xl"
              />
            </div>
            <div className="col-span-11 w-full min-h-[76px] grid grid-cols-14 gap-[10px] bg-white rounded-md">
              <div className="w-full col-span-1 h-full flex justify-center items-center"></div>
              <div className="w-full col-span-2 h-full flex justify-center items-center"></div>
              <div className="w-full col-span-2 h-full flex justify-center items-center"></div>
              <div className="w-full col-span-3 h-full flex justify-center items-center"></div>
              <div className="w-full col-span-3 h-full flex justify-center items-center"></div>
              <div className="w-full col-span-3 h-full flex justify-center items-center"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
