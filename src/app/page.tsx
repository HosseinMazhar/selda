import AnimatedDiv from "@/components/FeaturesWrapper";
import BookIcon from "@/components/icon/BookIcon";
import SandClock from "@/components/icon/SandClock";
import Landing from "@/components/landingPage/Landing";
import Toturial from "@/components/landingPage/Toturial";
import TypingText from "@/components/TypingText";

export function Swiper() {
  return (
    <div className="flex gap-[12px] h-[266px] scale-50 scale-y-50 md:scale-100 w-[600px] justify-center">
      <div className="first-swipe-anime w-[60px] h-full relative overflow-hidden rounded-4xl">
        <div className="absolute w-[444px] h-full bg-[url('/features/1.png')]"></div>
        <div className="first-vertical-badge-anime left-0 w-[60px] h-full rounded-4xl bg-white/20 backdrop-blur-md border border-white/30 absolute text-white font-kalameh flex justify-center items-center text-lg">
          <p className="transform -rotate-90 whitespace-nowrap">
            پتانسیل ترید خود را آزاد کنید
          </p>
        </div>
        <div className="first-horizontal-badge-anime -bottom-[60px] w-[444px] h-[60px] rounded-b-4xl bg-white/20 backdrop-blur-md border border-white/30 absolute text-white font-kalameh flex justify-center items-center text-lg">
          پتانسیل ترید خود را آزاد کنید
        </div>
      </div>
      <div className="second-swipe-anime w-[60px] h-full relative overflow-hidden rounded-4xl">
        <div className="absolute w-[444px] h-full bg-[url('/features/2.png')]"></div>
        <div className="second-vertical-badge-anime left-0 w-[60px] h-full rounded-4xl bg-white/20 backdrop-blur-md border border-white/30 absolute text-white font-kalameh flex justify-center items-center text-lg">
          <p className="transform -rotate-90 whitespace-nowrap">
            پتانسیل ترید خود را آزاد کنید
          </p>
        </div>
        <div className="second-horizontal-badge-anime -bottom-[60px] w-[444px] h-[60px] rounded-b-4xl bg-white/20 backdrop-blur-md border border-white/30 absolute text-white font-kalameh flex justify-center items-center text-lg">
          پتانسیل ترید خود را آزاد کنید
        </div>
      </div>
      <div className="third-swipe-anime w-[60px] h-full relative overflow-hidden rounded-4xl">
        <div className="absolute w-[444px] h-full bg-[url('/features/3.png')]"></div>
        <div className="third-vertical-badge-anime left-0 w-[60px] h-full rounded-4xl bg-white/20 backdrop-blur-md border border-white/30 absolute text-white font-kalameh flex justify-center items-center text-lg">
          <p className="transform -rotate-90 whitespace-nowrap">
            پتانسیل ترید خود را آزاد کنید
          </p>
        </div>
        <div className="third-horizontal-badge-anime -bottom-[60px] w-[444px] h-[60px] rounded-b-4xl bg-white/20 backdrop-blur-md border border-white/30 absolute text-white font-kalameh flex justify-center items-center text-lg">
          پتانسیل ترید خود را آزاد کنید
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-start items-start">
      <Landing />
      <div className="w-full relative">
        <Toturial />
        <div className="absolute inset-0 w-full h-[30px] lg:h-[40px] bg-[#F0F2F3] z-40 top-[570px] lg:top-[760px] [clip-path:ellipse(50%_100%_at_50%_100%)]"></div>
      </div>
      <div className="w-full flex flex-col justify-start items-center bg-[#F0F2F3] bg-cover bg-no-repeat bg-bottom xl:gap-[116px] gap-[16px] pt-[100px]">
        <div className="w-[80%] max-w-[1500px] flex flex-col justify-center items-center xl:flex-row lg:justify-around">
          <AnimatedDiv from="left">
            <Swiper />
          </AnimatedDiv>
          <AnimatedDiv from="right">
            <div className="text-[#8D50BE] lg:text-xl text-md gap-[10px] flex flex-col justify-center items-end font-kalameh md:mt-[25px] md:mb-[50px] ">
              <div className="flex items-center gap-[16px]">
                <p className="text-right font-kalameh lg:text-3xl text-xl  font-extrabold bg-gradient-to-tl from-[#6086A9] to-[#8D50BE] text-transparent bg-clip-text">
                  بدون محدودیت زمانی
                </p>
                <SandClock />
              </div>
              <div className="flex items-center gap-[16px]">
                <p className="text-right">
                  امکان باز گذاشتن معامله برای چندین روز
                </p>
                <div className="size-[12px] bg-[#8D50BE] rounded-full shrink-0"></div>
              </div>
              <div className="flex items-center gap-[16px]">
                <p className="text-right">واریزی سریع و آنی به کاربران</p>
                <div className="size-[12px] bg-[#8D50BE] rounded-full shrink-0"></div>
              </div>
              <div className="flex items-center gap-[16px]">
                <p className="text-right">امکان هج کردن معاملات </p>
                <div className="size-[12px] bg-[#8D50BE] rounded-full shrink-0"></div>
              </div>
              <div className="flex items-center gap-[16px]">
                <p className="text-right">کسب سود های قابل توجه</p>
                <div className="size-[12px] bg-[#8D50BE] rounded-full shrink-0"></div>
              </div>
            </div>
          </AnimatedDiv>
        </div>
        <div className="w-[80%] max-w-[1500px] flex flex-col-reverse justify-center items-center xl:flex-row lg:justify-around">
          <AnimatedDiv from="left">
            <div className="text-[#0077C2] lg:text-xl text-md gap-[10px] flex flex-col justify-center items-end font-kalameh md:mt-[25px] md:mb-[50px]">
              <div className="flex items-center gap-[16px]">
                <p className="text-right font-kalameh lg:text-3xl text-xl font-extrabold bg-gradient-to-tl from-[#6086A9] to-[#8D50BE] text-transparent bg-clip-text">
                  بدون نیاز به آزمون های ورودی
                </p>
                <BookIcon />
              </div>
              <div className="flex items-center gap-[16px]">
                <p className="text-right">
                  امکان انصراف از چالش به همراه پرداخت سود به کاربر
                </p>
                <div className="size-[12px] bg-[#0077C2] rounded-full shrink-0"></div>
              </div>
              <div className="flex items-center gap-[16px]">
                <p className="text-right">بدون محدودیت تعداد معامله</p>
                <div className="size-[12px] bg-[#0077C2] rounded-full shrink-0"></div>
              </div>
              <div className="flex items-center gap-[16px]">
                <p className="text-right">حد ضرر های متغیر</p>
                <div className="size-[12px] bg-[#0077C2] rounded-full shrink-0"></div>
              </div>
            </div>
          </AnimatedDiv>
          <AnimatedDiv from="right">
            <Swiper />
          </AnimatedDiv>
        </div>
        <div className="w-[80%] max-w-[1500px] flex flex-col justify-center items-center xl:flex-row lg:justify-around">
          <AnimatedDiv from="left">
            <Swiper />
          </AnimatedDiv>
          <AnimatedDiv from="right">
            <div
              dir="rtl"
              className="border border-black rounded-xl p-8 font-kalameh w-[300px] lg:w-[350px] md:mt-[50px]"
            >
              <h3 className="mb-3 text-lg font-bold flex gap-[8px] text-[#8D50BE]">
                <span>چرا</span>
                <span>سِلدا؟</span>
              </h3>
              <TypingText
                text={`"
            سلدا حاصل تجربه نخبگانی است که سال ها در بازارهای مالی فعال بوده اند
            و حالا این تجربه را با دانش و هوش خود آمیخته اند تا الگوریتمی را به 
            وجود آورند که معامله گران بتوانند با مدیریت سرمایه و با هزینه بسیار
            اندکی به سود های قابل توجهی دست  یابند."`}
              />
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </main>
  );
}
