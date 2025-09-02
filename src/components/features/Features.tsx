import AnimatedDiv from "../FeaturesWrapper";
import SandClock from "../icon/SandClock";
import BookIcon from "../icon/BookIcon";
import TypingText from "../TypingText";
import Swiper from "./Swiper";

const Features = () => {
  return (
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
            className="border border-black rounded-xl p-8 font-kalameh w-[300px] lg:w-[350px] md:mt-[50px] xl:mt-[0px] h-[275px]"
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
  );
};

export default Features;
