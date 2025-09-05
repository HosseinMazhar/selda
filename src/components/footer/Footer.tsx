import { Facebook, Instagram, Youtube } from "iconsax-reactjs";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-4 bg-[#333333] font-kalameh text-white py-[30px] gap-[36px] px-[16px] lg:px-[56px]">
      <div className="col-span-1 w-full flex flex-col justify-start items-end lg:items-center">
        <div className="w-fit flex flex-col justify-start gap-[16px] items-end">
          <Link href={"/"} className="font-bold text-xl">
            درباره ما
          </Link>
        </div>
      </div>
      <div className="col-span-1 w-full flex flex-col justify-start items-end lg:items-center gap-[16px]">
        <div className="w-fit flex flex-col justify-start gap-[16px] items-end">
          <Link href={"/"} className="font-bold text-xl mb-[20px]">
            سوالات متدوال
          </Link>
          <Link href={"/"}>ارزیابی پلن ها</Link>
          <Link href={"/"}>قوانین آزمون ها</Link>
          <Link href={"/"}>پلتفرم معاملاتی</Link>
          <Link href={"/"}>مدیریت حساب ها</Link>
          <Link href={"/"}>برنامه ها و سایر خدمات</Link>
        </div>
      </div>
      <div className="col-span-1 w-full flex flex-col justify-start items-end lg:items-center gap-[16px]">
        <div className="w-fit flex flex-col justify-start gap-[16px] items-end">
          <Link href={"/"} className="font-bold text-xl mb-[20px]">
            تماس با ما
          </Link>
          <Link href={"/"}>
            <Facebook />
          </Link>
          <Link href={"/"}>
            <Youtube />
          </Link>
          <Link href={"/"}>
            <Instagram />
          </Link>
        </div>
      </div>
      <div className="col-span-1 w-full flex flex-col justify-start items-end lg:items-baseline-last">
        <div className="w-fit flex flex-col justify-start gap-[16px] items-end">
          <Link href={"/"} className="font-bold text-xl">
            وبلاگ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
