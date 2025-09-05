"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";
import Diagnostics from "../tutorial/Diagnosics";
import Chart from "../tutorial/Chart";

const TutorialSlides = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const handleChartAnimationEnd = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="relative w-full">
      <div className="absolute top-0 left-0 w-screen h-[5px] bg-[#FEB235]/20 overflow-hidden z-40">
        <div className="moving-gradient h-full w-[500px]"></div>
      </div>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 100000000, disableOnInteraction: false }}
        className="w-full h-[600px] lg:h-[800px]"
      >
        <SwiperSlide>
          <Chart onAnimationEnd={handleChartAnimationEnd} />
        </SwiperSlide>

        <SwiperSlide>
          <Diagnostics />
        </SwiperSlide>
      </Swiper>
      <div className="absolute top-[50px] w-full h-fit flex justify-center items-center z-40 font-kalameh text-white">
        <p>ژورنال معاملاتی و گزارش های شخصی سازی شده</p>
      </div>
    </div>
  );
};

export default TutorialSlides;
