"use client";
import { useState } from "react";
import Image from "next/image";

export default function ChampionsCard() {
  const [move, setMove] = useState(false);

  return (
    <div className="w-full relative flex flex-col justify-start items-center bg-[#F0F2F3] font-kalameh pt-[80px] lg:px-[76px] px-[16px]">
      <div className="w-full flex justify-center">
        <p className="font-extrabold text-4xl text-[#8D50BE]">نفرات برتر ماه</p>
      </div>
      <div className="w-full xl:h-[307px] h-fit flex flex-col-reverse gap-[16px] xl:gap-[0px] xl:flex-row justify-between items-center relative perspective-1000 mt-[40px]">
        <div className="w-[695px] relative h-[307px] hidden md:block">
          <div
            onClick={() => setMove(!move)}
            className={`font-kalameh absolute cursor-pointer w-[211px] h-[307px] rounded-2xl bg-gradient-to-b flex flex-col justify-center items-center px-[45px] py-[18px]
          transition-all duration-700 ease-in-out
          ${move ? "left-[300px]" : "left-0"}`}
          >
            <div className="w-[211px] h-[235px] rounded-2xl bg-gradient-to-b from-[#8D50BE]/10 to-[#90CAF9]/10 shadow-md flex flex-col justify-between items-center py-[16px]">
              <p className="text-[#8D50BE] font-bold text-lg">2100</p>
              <Image
                src="/champions/2.png"
                width={149}
                height={137}
                alt="cup"
                className="rounded-2xl"
              />
              <p className="text-sm">Amirali Akbari</p>
            </div>
          </div>
          <div
            onClick={() => setMove(!move)}
            className={`font-kalameh absolute cursor-pointer w-[165px] h-[307px] rounded-2xl bg-gradient-to-b flex flex-col justify-center items-center px-[45px] py-[18px]
          transition-all duration-700 ease-in-out
          ${move ? "left-[530px]" : "left-0"}`}
          >
            <div className="w-[165px] h-[191px] rounded-2xl bg-gradient-to-b from-[#8D50BE]/10 to-[#90CAF9]/10 shadow-md flex flex-col justify-between items-center py-[16px]">
              <p className="text-[#8D50BE] font-bold text">2100</p>
              <Image
                src="/champions/3.png"
                width={112}
                height={103}
                alt="cup"
                className="rounded-2xl"
              />
              <p className="text-xs">Amirali Akbari</p>
            </div>
          </div>
          <div
            className="w-[281px] h-[307px] cursor-pointer perspective"
            onClick={() => setMove(!move)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                move ? "rotate-y-180" : ""
              }`}
            >
              <div className="absolute w-full h-full backface-hidden rounded-2xl bg-gradient-to-b from-[#8D50BE] to-[#0077C2] flex flex-col justify-between items-center px-[45px] py-[18px]">
                <p className="text-white text-lg font-bold">?</p>
                <Image
                  src="/champions/cup.png"
                  width={191}
                  height={191}
                  alt="cup"
                  className="rounded-2xl"
                />
                <p className="text-[#333333]">who is it ?</p>
              </div>
              <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-b from-[#8D50BE]/10 to-[#90CAF9]/10 shadow-md flex flex-col justify-between items-center py-[16px]">
                <p className="text-[#8D50BE] font-bold text-2xl">2100</p>
                <Image
                  src="/champions/1.png"
                  width={191}
                  height={191}
                  alt="cup"
                  className="rounded-2xl"
                />
                <p className="text-lg">Amirali Akbari</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-[16px] md:hidden">
          <div className="w-full flex justify-center items-center gap-[16px]">
            <Image
              src="/champions/1.png"
              width={149}
              height={137}
              alt="cup"
              className="rounded-2xl"
            />
            <div className="flex flex-col justify-start items-start gap-[5px]">
              <p className="text-[#8D50BE] font-bold text-lg">2100</p>
              <p className="text-sm">Amirali Akbari</p>
            </div>
          </div>
          <div className="w-full flex justify-center items-center gap-[16px]">
            <Image
              src="/champions/2.png"
              width={149}
              height={137}
              alt="cup"
              className="rounded-2xl"
            />
            <div className="flex flex-col justify-start items-start gap-[5px]">
              <p className="text-[#8D50BE] font-bold text-lg">1100</p>
              <p className="text-sm">Amirali Akbari</p>
            </div>
          </div>
          <div className="w-full flex justify-center items-center gap-[16px]">
            <Image
              src="/champions/3.png"
              width={149}
              height={137}
              alt="cup"
              className="rounded-2xl"
            />
            <div className="flex flex-col justify-start items-start gap-[5px]">
              <p className="text-[#8D50BE] font-bold text-lg">1000</p>
              <p className="text-sm">Amirali Akbari</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full justify-center items-center gap-[20px] xl:w-[calc(100%-900px)] w-full font-kalameh">
          <div className="w-full px-[22px] py-[19px] rounded-2xl flex justify-between items-center bg-gradient-to-b from-[#8D50BE]/10 to-[#90CAF9]/10 shadow-md">
            <p className="w-[60px] text-left">1204</p>
            <p>تعداد کل کاربرها</p>
          </div>
          <div className="w-full px-[22px] py-[19px] rounded-2xl flex justify-between items-center bg-gradient-to-b from-[#8D50BE]/10 to-[#90CAF9]/10 shadow-md">
            <p dir="rtl" className="w-[60px] text-left shrink-0">
              47 روز
            </p>
            <p className="text-right">
              میانگین تعداد روز معامله گران موفق تا رسیدن به تارگت
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
