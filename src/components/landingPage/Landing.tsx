const Landing = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-start items-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_#030C16_17%,_#082A44_35%,_#154567_46%,_#1D5176_54%,_#255880_74%,_#3E5E7F_99%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_left,_#A684EB_0%,_rgba(176,132,212,0)_100%)]" />
      <div className="absolute inset-0 bg-[url('/landingPageSmallDevices.png')] lg:bg-[url('/landingPage.png')] bg-[length:100%_100%] bg-no-repeat" />
      <div
        className="absolute w-[15px] aspect-square bg-[#FEB235] rounded-full top-[50%] left-[20%] lg:left-[9%] dot-anim"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute w-[20px] aspect-square bg-[#FEB235] rounded-full top-[30%] left-[92%] lg:left-[47%] dot-anim"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute w-[25px] aspect-square bg-[#FEB235] rounded-full top-[70%] left-[25%] lg:left-[17%] dot-anim"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute w-[30px] aspect-square bg-[#FEB235] rounded-full top-[80%] left-[15%] lg:left-[10%] dot-anim"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute w-[25px] aspect-square bg-[#FEB235] rounded-full top-[44%] left-[55%] lg:left-[25%] dot-anim"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute w-[10px] aspect-square bg-[#FEB235] rounded-full top-[56%] left-[55%] lg:left-[34%] dot-anim"
        style={{ animationDelay: "1.2s" }}
      />
      <div
        className="absolute w-[20px] aspect-square bg-[#FEB235] rounded-full top-[34%] left-[47%] lg:left-[21%] dot-anim"
        style={{ animationDelay: "0.9s" }}
      />

      <div className="absolute inset-0 h-screen flex flex-col justify-center items-center lg:items-end px-[20px] lg:px-[96px]">
        <div className="w-full flex justify-center lg:justify-end items-center">
          <div className="relative w-[265px] lg:w-[100px] h-[50px] lg:h-[100px] overflow-hidden title-anime xs:title-anime-sm">
            <div className="w-[100px] lg:w-[246px] h-[50px] lg:h-[100px] absolute right-0">
              <h1 className="lg:text-8xl text-4xl font-kalameh font-bold bg-gradient-to-tl from-[#FFD288] via-[#EBDCBB] to-[#D8E6EE] text-transparent bg-clip-text">
                با سلدا
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center lg:justify-end items-center">
          <div className="relative w-[265px] lg:w-[100px] h-[100px] overflow-hidden subtitle-anime xs:subtitle-anime-sm">
            <div className="w-[260px] lg:w-[650px] h-[100px] absolute right-0">
              <p className="lg:text-6xl h-[100px] flex justify-center items-center text-2xl font-kalameh font-bold text-white [text-shadow:_2px_2px_6px_rgba(0,0,0,0.6)] lg:[text-shadow:none]">
                پتانسیل ترید خود را آزاد کنید
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="absolute inset-0 flex flex-col justify-center items-center top-[75%] gap-[20px] h-fit w-full">
        <h1 dir="rtl" className="text-white text-2xl font-kalameh">
          فقط کافیه شروع کنی!
        </h1>
        <button className="w-[182px] h-[68px] bg-white rounded-full border border-black font-kalameh text-xl font-bold cursor-pointer text-[#7524B7] hover:bg-[#7524B7] hover:text-white hover:shadow-[0_0_35px_10px_rgba(255,255,255,0.4)] transition-shadow duration-300">
          مشاهده پلن ها
        </button>
      </div>
    </div>
  );
};

export default Landing;
