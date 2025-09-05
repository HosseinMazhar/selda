import Image from "next/image";

const Diagnostics = () => {
  return (
    <div className="relative w-full h-[600px] lg:h-[800px] min-h-[450px] lg:min-h-[650px] flex flex-col justify-center items-center bg-yellow-500">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_#2B5B9D_0%,_#3C3073_32%,_#C68BF6_100%)]" />
      <div className="absolute h-[90%] inset-0 w-full flex flex-col justify-end lg:pt-[80px] pt-[32px] items-center">
        <div className="w-full flex flex-col-reverse gap-[5px] gl:gap-[20px] justify-start items-center lg:items-start lg:flex-row lg:justify-between lg:px-[105px] px-[32px]">
          <Image
            width={300}
            height={300}
            className="lg:w-[615px] w-[250px] object-contain"
            src={"/resultreport.png"}
            alt="chart"
          />
          <div className="flex flex-col justify-start items-center lg:items-end font-kalameh text-white">
            <h1 className="lg:text-3xl text-lg font-bold">گزارش عملکرد</h1>
            <h3 className="lg:pt-[50%] pt-[15px] lg:text-2xl text-md" dir="rtl">
              درصد پیشرفت: 67%
            </h3>
          </div>
        </div>
        <div className="w-full lg:max-h-[350px] flex h-[270px] px-[16px] lg:p-[20px] lg:pt-[16px] flex-col justify-between items-center lg:flex-row lg:mt-[30px] mt-[16px]">
          <div className="w-full h-full flex flex-col justify-around items-center lg:flex-row bg-white rounded-2xl">
            <Image
              width={300}
              height={300}
              className="lg:w-[400px] w-[250px] object-contain"
              src={"/disadvantagecapacity.png"}
              alt="chart"
            />
            <div className="flex flex-col justify-center items-center gap-[5px]">
              <p className="font-kalameh lg:text-xl">
                میزان دراوداون کلی مصرف شده
              </p>
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
  );
};

export default Diagnostics;
