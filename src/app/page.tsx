import Landing from "@/components/landingPage/Landing";
import Toturial from "@/components/landingPage/Toturial";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-start items-start">
      <Landing />
      <div className="w-full relative">
        <Toturial />
        <div className="absolute inset-0 w-full h-[30px] lg:h-[40px] bg-white z-40 top-[570px] lg:top-[760px] [clip-path:ellipse(50%_100%_at_50%_100%)]"></div>
      </div>
    </main>
  );
}
