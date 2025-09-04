import { Subtitle } from "iconsax-reactjs";
import Image from "next/image";
import AnimatedDiv from "../FeaturesWrapper";

interface NewsCardProps {
  title: string;
  imageURL: string;
  imageTitle: string;
  description: string;
  date: string;
}

const NewsCard = ({
  title,
  imageURL,
  imageTitle,
  description,
  date,
}: NewsCardProps) => {
  return (
    <div className="w-full flex flex-col-reverse justify-start items-center lg:flex-row lg:justify-end lg:h-[272px] lg:gap-[55px] gap-[16px]">
      <AnimatedDiv from="left">
        <div className="w-full flex justify-start items-center flex-col-reverse max-w-[300px] lg:max-w-full gap-[16px] lg:flex-row lg:h-full lg:justify-between lg:gap-[100px]">
          <div className="w-full lg:w-[136px] h-fit lg:h-full flex justify-start items-end">
            <div className="flex flex-col items-start gap-[8px]">
              <div className="flex items-center gap-[8px]">
                <Subtitle />
                <p>{date}</p>
              </div>
              <button className="w-[136px] h-[48px] bg-[#00BFFF]/32 rounded-md flex justify-center items-center cursor-pointer">
                ادامه مطلب
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-start items-end gap-[16px]">
            <p className="text-right text-xl">{title}</p>
            <p className="text-right">{description}</p>
          </div>
        </div>
      </AnimatedDiv>
      <div className="w-fit h-fit relative shrink-0 overflow-hidden rounded-2xl">
        <Image
          src={imageURL}
          alt="news"
          width={426}
          height={272}
          className="w-[300px] h-[170px] xl:w-[426px] xl:h-[272px]"
        />
        <div className="w-full h-[63px] bg-white/20 backdrop-blur-md absolute bottom-0 flex justify-center items-center text-sm xl:text-lg text-white font-kalameh">
          {imageTitle}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
