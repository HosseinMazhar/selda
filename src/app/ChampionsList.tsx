"use client";
import { useEffect } from "react";
import Image from "next/image";
import { InfoCircle, UserTick } from "iconsax-reactjs";
import AnimatedDiv from "@/components/FeaturesWrapper";

interface ChampionsCardProps {
  ImageSrc: string;
  number: string;
  name: string;
  score: string;
  signUpdate: string;
  benefits: string;
  favCoin: string;
}

const ChampionsListCard = ({
  ImageSrc,
  number,
  name,
  score,
  signUpdate,
  benefits,
  favCoin,
}: ChampionsCardProps) => {
  return (
    <div className="w-full min-w-[1200px] gap-[16px] min-h-[76px] grid grid-cols-12 mb-[16px]">
      <AnimatedDiv from="right">
        <div className="col-span-1 w-full flex justify-start items-start h-full">
          <Image
            src={ImageSrc}
            width={76}
            height={76}
            alt="cup"
            className="rounded-2xl"
          />
        </div>
      </AnimatedDiv>
      <div className="col-span-11 w-full min-h-[76px] grid grid-cols-14 gap-[10px] bg-white rounded-md font-kalameh">
        <div className="w-full col-span-1 h-full flex justify-center items-center">
          <div className="size-[34px] rounded-full bg-[#8D50BE] flex justify-center items-center text-white">{number}</div>
        </div>
        <div className="w-full col-span-2 h-full flex justify-center items-center">{name}</div>
        <div className="w-full col-span-2 h-full flex justify-center items-center">امتیاز: {score}</div>
        <div className="w-full col-span-3 h-full flex justify-center items-center">تاریخ عضویت: {signUpdate}</div>
        <div className="w-full col-span-3 h-full flex justify-center items-center">مجموع سود برداشتی: {benefits} $</div>
        <div className="w-full col-span-3 h-full flex justify-center items-center">جفت ارز محبوب: {favCoin}</div>
      </div>
    </div>
  );
};

export default function ChampionsList() {
  useEffect(() => {
    const vScroll = document.getElementById("champions-v-scroll");
    if (!vScroll) return;

    // ---- Slow auto-scroll down (vertical) ----
    const speed = 2; // px per frame (lower = slower)
    let raf = 0;

    const tick = () => {
      if (vScroll.scrollTop < vScroll.scrollHeight - vScroll.clientHeight) {
        vScroll.scrollTop += speed;
        raf = requestAnimationFrame(tick);
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          cancelAnimationFrame(raf);
          if (entry.isIntersecting) raf = requestAnimationFrame(tick);
          else vScroll.scrollTop = 0;
        });
      },
      { threshold: 0.3 }
    );
    io.observe(vScroll);

    // ---- Vertical drag-to-scroll on the OUTER (vertical) scroller ----
    let isDown = false;
    let startY = 0;
    let startTop = 0;

    const onDown = (e: MouseEvent) => {
      isDown = true;
      vScroll.classList.add("dragging");
      startY = e.pageY - vScroll.getBoundingClientRect().top;
      startTop = vScroll.scrollTop;
    };
    const onLeaveUp = () => {
      isDown = false;
      vScroll.classList.remove("dragging");
    };
    const onMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const y = e.pageY - vScroll.getBoundingClientRect().top;
      const walk = (y - startY) * 1.5; // drag multiplier
      vScroll.scrollTop = startTop - walk;
    };

    vScroll.addEventListener("mousedown", onDown);
    vScroll.addEventListener("mouseleave", onLeaveUp);
    vScroll.addEventListener("mouseup", onLeaveUp);
    vScroll.addEventListener("mousemove", onMove);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      vScroll.removeEventListener("mousedown", onDown);
      vScroll.removeEventListener("mouseleave", onLeaveUp);
      vScroll.removeEventListener("mouseup", onLeaveUp);
      vScroll.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="w-full flex justify-center items-center flex-col lg:px-[76px] px-[16px] bg-[#F0F2F3] pt-[75px]">
      <div className="w-full flex justify-end items-end font-kalameh font-extrabold text-4xl gap-[16px] pb-[16px] lg:pb-[40px]">
        <InfoCircle
          size="35"
          color="#8D50BE"
          variant="Bold"
          className="size-[25px] lg:size-[35px]"
        />
        <h1 className="text-[#8D50BE] text-2xl">نفرات برتر هفته</h1>
        <UserTick color="#8D50BE" className="size-[35px] lg:size-[64px]" />
      </div>

      {/* OUTER: vertical scroller (scrollbar hidden) */}
      <div
        id="champions-v-scroll"
        className="pt-[30px] w-full h-[285px] overflow-y-auto overflow-x-hidden hide-vert-scrollbar cursor-grab"
        dir="rtl"
      >
        {/* INNER: horizontal scroller (scrollbar visible) */}
        <div className="w-full overflow-x-auto overflow-y-visible">
          <ChampionsListCard ImageSrc="/champions/1.png" name="رامین.م" number="1" score="1200" signUpdate="1403/02" benefits="3220" favCoin="BTCUSD" />
          <ChampionsListCard ImageSrc="/champions/2.png" name="علی.م" number="2" score="1200" signUpdate="1403/02" benefits="3220" favCoin="BTCUSD" />
          <ChampionsListCard ImageSrc="/champions/3.png" name="رضا.ک" number="3" score="1200" signUpdate="1403/02" benefits="3220" favCoin="BTCUSD" />
          <ChampionsListCard ImageSrc="/champions/4.png" name="حسین.م" number="4" score="1200" signUpdate="1403/02" benefits="3220" favCoin="BTCUSD" />
          <ChampionsListCard ImageSrc="/champions/5.png" name="شهرام.د" number="5" score="1200" signUpdate="1403/02" benefits="3220" favCoin="BTCUSD" />
          <ChampionsListCard ImageSrc="/champions/6.png" name="فاطمه.م" number="6" score="1200" signUpdate="1403/02" benefits="3220" favCoin="BTCUSD" />
        </div>
      </div>
    </div>
  );
}
