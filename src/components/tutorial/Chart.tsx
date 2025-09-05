import { Line1, Line2, Line3 } from "../icon/svg/TutorialLines";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import CountUp from "../Countup";

interface ChartProps {
  onAnimationEnd?: () => void;
}

const Chart = ({ onAnimationEnd }: ChartProps) => {
  const chartRef = useRef<SVGPathElement>(null);
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

  // Listen for animation end
  useEffect(() => {
    if (!chartRef.current) return;

    const handleAnimationEnd = () => {
      if (onAnimationEnd) onAnimationEnd();
    };

    const path = chartRef.current;
    path.addEventListener("animationend", handleAnimationEnd);

    return () => path.removeEventListener("animationend", handleAnimationEnd);
  }, [onAnimationEnd, animate]);

  return (
    <div className="relative w-full h-[600px] lg:h-[800px] min-h-[450px] lg:min-h-[650px] flex flex-col justify-start items-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_#3C3073_29%,_#815EB4_64%,_#C68BF6_99%)]" />
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
            <div className="flex gap-[14px] items-center">
              {animate ? (
                <p className="text-2xl text-[#3EC175] font-bold">
                  $<CountUp end={11600} duration={2500} />.
                </p>
              ) : (
                <div className="w-[117px]"></div>
              )}
              <p dir="rtl" className="text-sm dark:text-white">
                موجودی:
              </p>
            </div>
            <div className="flex flex-col justify-center items-center lg:items-end gap-[14px]">
              {/* روز / ماه */}
              <div className="flex gap-[14px] font-kalameh">
                <div
                  className={`px-[29px] py-[4px] border border-[#333333] dark:border-white rounded-2xl flex justify-center items-center cursor-pointer transition-colors font-bold dark:text-white text-black`}
                >
                  روز
                </div>
                <div
                  className={`px-[29px] py-[4px] border border-[#333333] dark:border-white rounded-2xl flex justify-center items-center cursor-pointer transition-colors text-gray-500 dark:text-white`}
                >
                  ماه
                </div>
              </div>
              <div className="flex gap-[14px] font-kalameh flex-col lg:flex-row">
                <div
                  className={`px-[29px] py-[4px] text-white rounded-2xl flex justify-center items-center cursor-pointer transition-colors bg-[#4AC1FF]`}
                >
                  موجودی
                </div>
                <div
                  className={`px-[29px] py-[4px] text-white rounded-2xl flex justify-center items-center cursor-pointer transition-colors bg-[#4AC1FF]/55`}
                >
                  تعداد معاملات
                </div>
              </div>
            </div>
          </div>
          <div ref={containerRef} className="relative w-full mt-[20px]">
            <Image
              src="/chart.png"
              width={800}
              height={400}
              alt="chart"
              className="w-full object-contain"
            />

            {/* Large screen chart */}
            <div className="absolute w-[754px] h-[377px] right-0 top-0 hidden lg:block">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 754 377"
                preserveAspectRatio="none"
              >
                <path
                  ref={chartRef}
                  d="M0 380 C200 200, 400 380, 600 200 C700 150, 800 100, 800 100"
                  stroke="#909090"
                  strokeWidth="3"
                  fill="none"
                  className={`chart-line ${animate ? "animate-draw" : ""}`}
                />
              </svg>
            </div>

            {/* Small screen chart */}
            <div className="absolute w-[245px] h-[123px] right-0 top-0 lg:hidden">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 245 123"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 123 C70 70, 140 132, 200 70 C240 50, 268 30, 245 30"
                  strokeWidth="2"
                  fill="none"
                  stroke="#909090"
                  className={`chart-line ${animate ? "animate-draw" : ""}`}
                />
              </svg>
            </div>
            {animate && (
              <>
                <div
                  className={`absolute lg:w-[40px] w-[25px] aspect-square bg-[#FEB235] top-[60px] right-[35px] lg:top-[185px] lg:right-[140px] rounded-full ${
                    animate ? "chart-dot-anim" : ""
                  }`}
                />
                <div
                  className={`absolute lg:w-[100px] text-sm lg:text-lg text-[#FEB235] w-[50px] h-[20px] lg:h-[40px] bg-white top-[35px] right-[35px] lg:top-[130px] lg:right-[140px] rounded-full flex justify-center items-center ${
                    animate ? "badge-anim" : ""
                  }`}
                >
                  11,600^
                </div>
                <Image
                  src={"/tutorialCoins/1.png"}
                  alt="badge"
                  width={175}
                  height={175}
                  className={`absolute hidden lg:block -top-[210px] -left-[230px] ${
                    animate ? "coin-enter-left" : ""
                  }`}
                  style={{ animationDelay: "1.5s" }}
                />

                <Image
                  src={"/tutorialCoins/2.png"}
                  alt="badge"
                  width={157}
                  height={157}
                  className={`absolute hidden lg:block -top-[90px] -left-[180px] ${
                    animate ? "coin-enter-left" : ""
                  }`}
                  style={{ animationDelay: "1s" }}
                />

                <Image
                  src={"/tutorialCoins/3.png"}
                  alt="badge"
                  width={157}
                  height={157}
                  className={`absolute hidden lg:block top-[30px] -left-[240px] ${
                    animate ? "coin-enter-left" : ""
                  }`}
                  style={{ animationDelay: "0.5s" }}
                />

                <Image
                  src={"/tutorialCoins/4.png"}
                  alt="badge"
                  width={157}
                  height={157}
                  className={`absolute hidden lg:block top-[150px] -left-[180px] ${
                    animate ? "coin-enter-left" : ""
                  }`}
                  style={{ animationDelay: "0.8s" }}
                />

                <Image
                  src={"/tutorialCoins/5.png"}
                  alt="badge"
                  width={157}
                  height={157}
                  className={`absolute hidden lg:block top-[270px] -left-[220px] ${
                    animate ? "coin-enter-left" : ""
                  }`}
                  style={{ animationDelay: "1.2s" }}
                />

                <Image
                  src={"/tutorialCoins/6.png"}
                  alt="badge"
                  width={175}
                  height={175}
                  className={`absolute hidden lg:block -top-[210px] -right-[230px] ${
                    animate ? "coin-enter-right" : ""
                  }`}
                  style={{ animationDelay: "1.3s" }}
                />

                <Image
                  src={"/tutorialCoins/7.png"}
                  alt="badge"
                  width={157}
                  height={157}
                  className={`absolute hidden lg:block -top-[90px] -right-[180px] ${
                    animate ? "coin-enter-right" : ""
                  }`}
                  style={{ animationDelay: "1.5s" }}
                />

                <Image
                  src={"/tutorialCoins/8.png"}
                  alt="badge"
                  width={157}
                  height={157}
                  className={`absolute hidden lg:block top-[30px] -right-[240px] ${
                    animate ? "coin-enter-right" : ""
                  }`}
                  style={{ animationDelay: "1s" }}
                />

                <Image
                  src={"/tutorialCoins/9.png"}
                  alt="badge"
                  width={157}
                  height={157}
                  className={`absolute hidden lg:block top-[150px] -right-[180px] ${
                    animate ? "coin-enter-right" : ""
                  }`}
                  style={{ animationDelay: "1.7s" }}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
