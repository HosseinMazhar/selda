"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import { useState } from "react";
import Image from "next/image";
import { Line1, Line2, Line3 } from "../icon/svg/TutorialLines";

const TutorialSlides = () => {
  const [period, setPeriod] = useState<"روز" | "ماه">("ماه");
  const [chartType, setChartType] = useState<"موجودی" | "تعداد معاملات">(
    "موجودی"
  );

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      className="w-full h-[600px] lg:h-[800px]"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="relative w-full h-[600px] lg:h-[800px] min-h-[450px] lg:min-h-[650px] flex flex-col justify-start items-center">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,_#3C3073_29%,_#815EB4_64%,_#C68BF6_99%)]" />
          <div className="absolute inset-0 w-full h-[5px] bg-[#FEB235] top-0" />
          <div className="absolute inset-0 left-0 top-[30%]">
            <Line1 />
          </div>
          <div className="absolute inset-0 left-0 top-0">
            <Line2 />
          </div>
          <div className="absolute inset-0 top-[64%] left-[14%]">
            <Line3 />
          </div>
          <div className="absolute inset-0 flex w-full h-[600px] lg:h-[800px] justify-center items-center">
            <div className="w-[300px] p-[16px] lg:w-[900px] lg:p-[32px] bg-white dark:bg-neutral-800 rounded-2xl flex flex-col justify-center items-center">
              <h1 className="text-2xl font-kalameh font-bold text-[#2B3742] dark:text-white">
                روند معاملات
              </h1>
              <div className="w-full flex flex-col justify-center lg:flex-row lg:justify-between items-center gap-[15px] lg:gap-[0px] mt-[20px] lg:mt-[0px] font-kalameh">
                {/* موجودی */}
                <div className="flex gap-[14px] items-center">
                  <p className="text-2xl text-[#3EC175] font-bold">$000,000.</p>
                  <p dir="rtl" className="text-sm dark:text-white">
                    موجودی:
                  </p>
                </div>

                {/* انتخاب روز / ماه + نوع نمودار */}
                <div className="flex flex-col justify-center items-center lg:items-end gap-[14px]">
                  {/* روز / ماه */}
                  <div className="flex gap-[14px] font-kalameh">
                    {["روز", "ماه"].map((item) => (
                      <div
                        key={item}
                        onClick={() => setPeriod(item as "روز" | "ماه")}
                        className={`px-[29px] py-[4px] border border-[#333333] dark:border-white rounded-2xl flex justify-center items-center cursor-pointer transition-colors
                          ${
                            period === item
                              ? "font-bold dark:text-white text-black"
                              : "text-gray-500 dark:text-white"
                          }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* موجودی / تعداد معاملات */}
                  <div className="flex gap-[14px] font-kalameh flex-col lg:flex-row">
                    {["موجودی", "تعداد معاملات"].map((item) => (
                      <div
                        key={item}
                        onClick={() =>
                          setChartType(item as "موجودی" | "تعداد معاملات")
                        }
                        className={`px-[29px] py-[4px] text-white rounded-2xl flex justify-center items-center cursor-pointer transition-colors
                          ${
                            chartType === item
                              ? "bg-[#4AC1FF]"
                              : "bg-[#4AC1FF]/55"
                          }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Image
                src={"/chart.png"}
                width={800}
                height={400}
                alt="chart"
                className="w-full object-contain mt-[20px]"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="relative w-full h-[600px] lg:h-[800px] min-h-[450px] h- lg:min-h-[650px] flex flex-col justify-start items-center bg-yellow-500">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,_#2B5B9D_0%,_#3C3073_32%,_#C68BF6_100%)]" />
          <div className="absolute inset-0 w-full h-[5px] bg-[#FEB235] top-0" />
          <div className="absolute inset-0 w-full flex flex-col justify-start lg:pt-[80px] pt-[32px] items-center">
            <div className="w-full flex flex-col-reverse gap-[20px] justify-start items-center lg:items-start lg:flex-row lg:justify-between lg:px-[105px] px-[32px]">
              <Image
                width={300}
                height={300}
                className="lg:w-[615px] w-[250px] object-contain"
                src={"/resultreport.png"}
                alt="chart"
              />
              <div className="flex flex-col justify-start items-center lg:items-end font-kalameh text-white">
                <h1 className="lg:text-3xl text-lg font-bold">گزارش عملکرد</h1>
                <h3
                  className="lg:pt-[50%] pt-[15px] lg:text-2xl text-md"
                  dir="rtl"
                >
                  درصد پیشرفت: 67%
                </h3>
              </div>
            </div>
            <div className="w-full flex h-full p-[32px] lg:p-[50px] lg:pt-[16px] flex-col justify-between items-center lg:flex-row lg:mt-[30px] mt-[16px]">
              <div className="w-full h-full flex flex-col justify-around items-center lg:flex-row bg-white rounded-2xl">
                <Image
                  width={300}
                  height={300}
                  className="lg:w-[400px] w-[250px] object-contain"
                  src={"/disadvantagecapacity.png"}
                  alt="chart"
                />
                <div className="flex flex-col justify-center items-center gap-[5px]">
                  <p className="font-kalameh lg:text-xl">میزان دراوداون کلی مصرف شده</p>
                  <Image
                    width={300}
                    height={300}
                    className="lg:w-[400px] w-[250px] object-contain"
                    src={"/drawdown.png"}
                    alt="chart"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default TutorialSlides;
