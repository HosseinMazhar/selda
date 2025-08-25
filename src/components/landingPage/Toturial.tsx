import { Line1, Line2, Line3 } from "../icon/svg/TutorialLines";

const Toturial = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-start items-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_#3C3073_29%,_#815EB4_64%,_#C68BF6_99%)]" />
      <div className="absolute inset-0 w-full h-[5px] bg-[#FEB235] top-0" />
      <div className="absolute inset-0 left-0 top-[30%]">
        <Line1 />
      </div>
      <div className="absolute inset-0 left-0 top-0">
        <Line2 />
      </div>
      <div className="absolute inset-0 top-[64%] left-[14%]">
        <Line3 />
      </div>
      <div className="absolute inset-0 flex w-full h-screen justify-center items-center">
      </div>
    </div>
  );
};

export default Toturial;
