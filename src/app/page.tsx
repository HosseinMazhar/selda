import ChampionsCard from "@/components/champions/Champions";
import Features from "@/components/features/Features";
import Landing from "@/components/landingPage/Landing";
import Toturial from "@/components/landingPage/Toturial";
import UsersFeedback from "@/components/usersFeedback/UsersFeedback";
import Video from "@/components/video/Video";
import ChampionsList from "./ChampionsList";

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
      <ChampionsList />
    </main>
  );
}
