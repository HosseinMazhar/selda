import ChampionsCard from "@/components/champions/Champions";
import Features from "@/components/features/Features";
import Landing from "@/components/landingPage/Landing";
import Toturial from "@/components/landingPage/Toturial";
import UsersFeedback from "@/components/usersFeedback/UsersFeedback";
import Video from "@/components/video/Video";
import ChampionsList from "../components/championsList/ChampionsList";
import Line from "@/components/usersPath/Line";
import LandingCircles from "@/components/usersPath/LoadingCircles";

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
      <div className="w-full relative bg-[#F0F2F3] flex justify-start items-start">
        <div className="absolute w-full inset-0 z-10 items-end flex h-full justify-end -top-[400px] bg-[url('/video/line.png')] bg-contain bg-right bg-no-repeat"></div>
        <div className="absolute w-full h-[300px] lg:h-[700px] inset-0 z-0 items-end bg-gradient-to-b from-[#F0F2F3] via-[#90CAF9]/30 to-[#FFFFFF]/6 -top-[50px] lg:-top-[250px]"></div>
        <LandingCircles />
      </div>
    </main>
  );
}
