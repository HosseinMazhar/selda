"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import CountUp from "../Countup";

export default function ChampionsCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full relative flex flex-col justify-start items-center bg-[#F0F2F3] dark:bg-neutral-800 font-kalameh pt-[80px] lg:px-[76px] px-[16px]">
      <div className="w-full flex justify-center">
        <p className="font-extrabold text-4xl text-[#8D50BE]">نفرات برتر ماه</p>
      </div>

      <div className="w-full xl:h-[350px] h-fit flex flex-col-reverse gap-[16px] xl:gap-[0px] xl:flex-row justify-between items-center relative perspective-1000 mt-[40px]">
        {/* desktop cards */}
        <div className="w-[695px] relative h-[350px] lg:flex lg:items-center hidden group">
          {/* left sliding card */}
          <div className="absolute cursor-pointer w-[211px] h-[350px] rounded-2xl transition-all duration-700 ease-in-out left-0 group-hover:left-[300px] flex justify-center items-center">
            <div className="w-[211px] h-[235px] rounded-2xl bg-gradient-to-b from-[#8D50BE]/10 dark:from-[#8D50BE] to-[#90CAF9]/10 dark:to-[#90CAF9] shadow-md flex flex-col justify-between items-center py-[16px]">
              <p className="text-[#8D50BE] font-bold text-lg dark:text-white">2100</p>
              <Image src="/champions/2.png" width={149} height={137} alt="cup" />
              <p className="text-sm">Amirali Akbari</p>
            </div>
          </div>

          {/* right sliding card */}
          <div className="absolute cursor-pointer w-[165px] h-[350px] rounded-2xl transition-all duration-700 ease-in-out left-0 group-hover:left-[530px] flex justify-center items-center">
            <div className="w-[165px] h-[191px] rounded-2xl bg-gradient-to-b from-[#8D50BE]/10 dark:from-[#8D50BE] to-[#90CAF9]/10 dark:to-[#90CAF9] shadow-md flex flex-col justify-between items-center py-[16px]">
              <p className="text-[#8D50BE] font-bold dark:text-white">2100</p>
              <Image src="/champions/3.png" width={112} height={103} alt="cup" />
              <p className="text-xs">Amirali Akbari</p>
            </div>
          </div>

          {/* flip card in middle */}
          <div className="w-[281px] h-[320px] cursor-pointer perspective group">
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              {/* front */}
              <div className="absolute w-full h-full backface-hidden rounded-2xl bg-gradient-to-b from-[#8D50BE] to-[#0077C2] flex flex-col justify-between items-center px-[45px] py-[18px]">
                <p className="text-white text-lg font-bold">?</p>
                <Image src="/champions/cup.png" width={191} height={191} alt="cup" />
                <p className="text-[#333333]">who is it ?</p>
              </div>
              {/* back */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-b from-[#8D50BE]/10 dark:from-[#8D50BE] to-[#90CAF9]/10 dark:to-[#90CAF9] shadow-md flex flex-col justify-between items-center py-[16px]">
                <p className="text-[#8D50BE] font-bold text-2xl dark:text-white">2100</p>
                <Image src="/champions/1.png" width={191} height={191} alt="cup" />
                <p className="text-lg">Amirali Akbari</p>
              </div>
            </div>
          </div>
        </div>

        {/* mobile fallback (unchanged) */}
        <div className="w-full flex flex-col gap-[16px] md:hidden">
          <div className="w-full flex justify-start items-center gap-[30px]">
            <Image src="/champions/1.png" width={149} height={137} alt="cup" />
            <div className="flex flex-col justify-start items-start gap-[5px]">
              <p className="text-[#8D50BE] font-bold text-lg">2100</p>
              <p className="text-sm dark:text-white">Amirali Akbari</p>
            </div>
          </div>
          <div className="w-full flex justify-start items-center gap-[30px]">
            <Image src="/champions/2.png" width={149} height={137} alt="cup" />
            <div className="flex flex-col justify-start items-start gap-[5px]">
              <p className="text-[#8D50BE] font-bold text-lg">1100</p>
              <p className="text-sm dark:text-white">Amirali Akbari</p>
            </div>
          </div>
          <div className="w-full flex justify-start items-center gap-[30px]">
            <Image src="/champions/3.png" width={149} height={137} alt="cup" />
            <div className="flex flex-col justify-start items-start gap-[5px]">
              <p className="text-[#8D50BE] font-bold text-lg">1000</p>
              <p className="text-sm dark:text-white">Amirali Akbari</p>
            </div>
          </div>
        </div>

        {/* stats section */}
        <div
          ref={containerRef}
          className="flex flex-col h-full justify-center items-center gap-[20px] xl:w-[calc(100%-750px)] w-full font-kalameh"
        >
          <div className="w-full px-[22px] py-[19px] rounded-2xl flex justify-between items-center bg-gradient-to-b from-[#8D50BE]/10 dark:from-[#8D50BE] to-[#90CAF9]/10 dark:to-[#90CAF9] shadow-md">
            {animate && <CountUp end={1204} />}
            <p>تعداد کل کاربرها</p>
          </div>
          <div className="w-full px-[22px] py-[19px] rounded-2xl flex justify-between items-center bg-gradient-to-b from-[#8D50BE]/10 dark:from-[#8D50BE] to-[#90CAF9]/10 dark:to-[#90CAF9] shadow-md">
            {animate && (
              <p dir="rtl" className="w-[60px] text-left shrink-0">
                <CountUp end={47} /> روز
              </p>
            )}
            <p className="text-right">میانگین تعداد روز معامله گران موفق تا رسیدن به تارگت</p>
          </div>
        </div>
      </div>
    </div>
  );
}
