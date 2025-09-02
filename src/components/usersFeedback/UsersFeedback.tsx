import { AddSquare, Messages1 } from "iconsax-reactjs";
import Image from "next/image";

const UsersFeedback = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center lg:px-[76px] px-[16px] pt-[250px] bg-[#F0F2F3] gap-[27px] font-kalameh">
      <div className="w-full flex justify-between items-center px-[12px]">
        <p className="cursor-pointer text-[#333333]">نظرات بیشتر</p>
        <p className="font-bold text-xl">برخی از نظرات کاربران</p>
      </div>
      <div dir="rtl" className="w-full lg:h-[256px] grid grid-cols-9 gap-[16px] lg:gap-[0px]">
        <div className="col-span-9 lg:col-span-3 w-full h-full flex justify-center items-center">
          <div className="w-[calc(100%-24px)] h-[235px] rounded-3xl border border-black flex flex-col justify-start items-center relative">
            <div className="w-full flex justify-between px-[32px] py-[18px] items-center border-b">
              <div className="flex items-center gap-[10px]">
                <Messages1 />
                <p>نظرات من</p>
              </div>
              <div className="flex items-center gap-[10px]">
                <p>12/04/2025</p>
                <p>14:02</p>
              </div>
            </div>
            <p className="text-right p-[19px]">
              با آموزش هایی که توی وبلاگ بود تونستم به سود دهی برسم. مرسی بابت
              راهنمایی پشتیبانی
            </p>
            <div className="absolute flex flex-row-reverse gap-[10px] bottom-0 left-0 p-[19px]">
              <button className="w-[84px] h-[27px] rounded-md bg-[#0077C2]/23 flex justify-center items-center text-xs cursor-pointer">
                حذف نظر
              </button>
              <button className="w-[84px] h-[27px] rounded-md bg-[#8D50BE]/31 flex justify-center items-center text-xs cursor-pointer">
                ثبت
              </button>
              <AddSquare />
            </div>
          </div>
        </div>
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <div
              key={index}
              className="col-span-9 lg:col-span-2 w-full h-full flex justify-center items-center font-kalameh"
            >
              <div className="w-[calc(100%-24px)] lg:hover:w-full lg:hover:h-full h-[235px] bg-gradient-to-br from-[#8D50BE]/42 to-[#0077C2]/62 lg:hover:bg-gradient-to-br lg:hover:from-[#BF87EF] lg:hover:to-[#314B8D] rounded-3xl flex flex-col justify-start items-end p-[21px] transition-all duration-300">
                <div className="w-full flex gap-[16px] justify-start">
                  <Image
                    src={"/userFeedback/user.png"}
                    alt="user"
                    width={60}
                    height={60}
                    className="rounded-full shrink-0"
                  />
                  <div className="flex flex-col items-start justify-center">
                    <p className="font-bold text-sm ">ستایش احمدی</p>
                    <p className="text-xs ">02/04</p>
                  </div>
                </div>
                <p className=" pt-[25px]">
                  واقعا از این سایت راضی ام. یادگیری در کنار لذت بردن، حتما
                  پیشنهاد میکنم. ممنون از تیم خوبتون
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersFeedback;
