const Swiper = () => {
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
};

export default Swiper;
