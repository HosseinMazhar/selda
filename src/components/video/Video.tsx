const Video = () => {
  return (
    <div className="w-full lg:pt-[100px] pt-[75px] bg-[#F0F2F3] dark:bg-neutral-800 flex flex-col justify-center items-center relative gap-[16px] lg:gap-[32px]">
      <h1 className="font-kalameh text-xl font-bold text-center px-[16px] dark:text-white">
        از شروع چالش تا کسب سود چگونه است؟
      </h1>
      <div className="absolute w-full inset-0 z-0 items-end flex h-full justify-end top-[200px] bg-[url('/video/line.png')] bg-cover bg-center bg-no-repeat"></div>
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
