import Landing from "@/components/landingPage/Landing";
import Toturial from "@/components/landingPage/Toturial";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-start items-start">
      <Landing />
      <Toturial />
    </main>
  );
}
