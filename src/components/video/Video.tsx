const Video = () => {
  return (
    <div className="w-full lg:pt-[100px] pt-[75px] bg-[#F0F2F3] dark:bg-neutral-800 flex flex-col justify-center items-center relative gap-[16px] lg:gap-[32px]">
      <h1 className="font-kalameh text-xl font-bold text-center px-[16px] dark:text-white">
        از شروع چالش تا کسب سود چگونه است؟
      </h1>
      <div className="absolute w-full inset-0 z-0 items-end flex h-full justify-center top-[200px]">
        <svg
          width="1372"
          height="359"
          viewBox="0 0 1372 359"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_g_3311_3134)">
            <path
              d="M5 333.5C24.2181 307.576 52.0873 264.152 92.0839 309.514C200.995 433.035 234.277 254.181 298.961 309.514C440.42 430.522 485.015 41.5164 607.582 188.281C844.285 471.714 958.372 -47.5809 1218.04 83.0588C1333.68 141.236 1288.13 5 1378 5"
              stroke="#8D50BE"
              strokeOpacity="0.6"
              strokeLinecap="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_g_3311_3134"
              x="0.5"
              y="0.5"
              width="1382"
              height="358"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feTurbulence
                type="fractalNoise"
                baseFrequency="2 2"
                numOctaves="3"
                seed="5514"
              />
              <feDisplacementMap
                in="shape"
                scale="8"
                xChannelSelector="R"
                yChannelSelector="G"
                result="displacedImage"
                width="100%"
                height="100%"
              />
              <feMerge result="effect1_texture_3311_3134">
                <feMergeNode in="displacedImage" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>
      <div className="w-[90%] max-w-[800px] bg-[#292D32] p-0 rounded-2xl shadow-lg flex justify-center items-center relative z-10">
        <video
          className="w-full max-w-[800px] rounded-2xl shadow-lg relative z-10"
          controls
          poster="/video/background.png"
        >
          <source src="/your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;
