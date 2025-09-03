"use client"
import { useEffect, useRef, useState } from "react";
import Line from "@/components/usersPath/Line";

export default function LandingCircles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const top = containerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 100) { // start animation a bit before fully visible
        setShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check immediately on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="w-full h-fit flex flex-col justify-start items-center z-20">
      <div className="mt-[20px] md:mt-[100px] lg:mt-[350px] h-fit relative pb-[100px] scale-[25%] md:scale-50 lg:scale-100">
        <div className="w-full flex justify-center items-center absolute -top-[300px]">
          <h1 className="font-bold text-6xl lg:text-2xl text-black font-kalameh pt-[100px] z-20">
            مسیر کاربر
          </h1>
        </div>

        {/* Line */}
        <Line />

        {/* Circles */}
        <div className={`size-[260px] bg-[#B084D4] rounded-full absolute -top-[40px] circle flex justify-center items-center text-center text-white font-kalameh font-bold text-xl ${show ? "show" : ""}`} style={{transitionDelay: '2s'}}>آشنایی با چالش ها و قوانین</div>
        <div className={`size-[168px] bg-[#00BFFF] rounded-full absolute left-[250px] top-[150px] circle flex justify-center items-center text-center text-white font-kalameh font-bold text-xl ${show ? "show" : ""}`} style={{transitionDelay: '5s'}}>انتخاب چالش</div>
        <div className={`size-[114px] bg-[#BA68C8] rounded-full absolute left-[440px] top-[30px] circle flex justify-center items-center text-center text-white font-kalameh font-bold text-xl ${show ? "show" : ""}`} style={{transitionDelay: '7.5s'}}>پرداخت</div>
        <div className={`size-[200px] bg-[#A781C6] rounded-full absolute left-[550px] top-[120px] circle flex justify-center items-center text-center text-white font-kalameh font-bold text-xl ${show ? "show" : ""}`} style={{transitionDelay: '9s'}}>ترید در اکانت</div>
        <div className={`size-[293px] bg-[#3598D6] rounded-full absolute left-[740px] -top-[130px] circle flex justify-center items-center text-center text-white font-kalameh font-bold text-xl ${show ? "show" : ""}`} style={{transitionDelay: '12s'}}>پاس کردن چالش ها</div>
        <div className={`size-[156px] bg-[#52BE80] rounded-full absolute left-[1000px] top-[160px] circle flex justify-center items-center text-center text-white font-kalameh font-bold text-xl ${show ? "show" : ""}`} style={{transitionDelay: '14s'}}>واریز سود به کاربر</div>
        <p className="absolute font-bold font-kalameh bottom-[50px] -left-[20px] text-2xl ">شروع</p>
      </div>
    </div>
  );
}