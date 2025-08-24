const Landing = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-start items-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_#030C16_17%,_#082A44_35%,_#154567_46%,_#1D5176_54%,_#255880_74%,_#3E5E7F_99%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_left,_#A684EB_0%,_rgba(176,132,212,0)_100%)]" />
      <div className="absolute inset-0 bg-[url('/landingPageSmallDevices.png')] lg:bg-[url('/landingPage.png')] bg-[length:100%_100%] bg-no-repeat" />

      {/* Dots */}
      <div className="absolute w-[15px] aspect-square bg-[#FEB235] rounded-full top-[50%] left-[20%] lg:left-[9%] shadow-[0_0_30px_10px_rgba(255,255,0,0.8)]"></div>
      <div className="absolute w-[20px] aspect-square bg-[#FEB235] rounded-full top-[30%] left-[92%] lg:left-[47%] shadow-[0_0_30px_10px_rgba(255,255,0,0.8)]"></div>
      <div className="absolute w-[25px] aspect-square bg-[#FEB235] rounded-full top-[70%] left-[25%] lg:left-[17%] shadow-[0_0_30px_10px_rgba(255,255,0,0.8)]"></div>
      <div className="absolute w-[30px] aspect-square bg-[#FEB235] rounded-full top-[80%] left-[15%] lg:left-[10%] shadow-[0_0_30px_10px_rgba(255,255,0,0.8)]"></div>
      <div className="absolute w-[25px] aspect-square bg-[#FEB235] rounded-full top-[44%] left-[55%] lg:left-[25%] animate-ping shadow-[0_0_30px_10px_rgba(255,255,0,0.8)]"></div>
      <div className="absolute w-[10px] aspect-square bg-[#FEB235] rounded-full top-[56%] left-[55%] lg:left-[34%] shadow-[0_0_30px_10px_rgba(255,255,0,0.8)]"></div>
      <div className="absolute w-[20px] aspect-square bg-[#FEB235] rounded-full top-[34%] left-[47%] lg:left-[21%] shadow-[0_0_30px_10px_rgba(255,255,0,0.8)]"></div>

      {/* CTA Section */}
      <div className="absolute inset-0 flex flex-col justify-center items-center top-[75%] gap-[20px] h-fit w-full">
        <h1 dir="rtl" className="text-white text-2xl font-kalameh">
          فقط کافیه شروع کنی!
        </h1>
        <button className="w-[182px] h-[68px] bg-white rounded-full border-black border-2 font-kalameh text-xl font-bold cursor-pointer text-[#7524B7]">
          مشاهده پلن ها
        </button>
      </div>
    </div>
  );
};

export default Landing;
