"use client";
import { useEffect, useRef, useState } from "react";

const Line = () => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [played, setPlayed] = useState(false); // ensures it plays once

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !played && pathRef.current) {
          setPlayed(true);
          const length = pathRef.current.getTotalLength();
          pathRef.current.style.strokeDasharray = length.toString();
          pathRef.current.style.strokeDashoffset = length.toString();

          pathRef.current.animate(
            [
              { strokeDashoffset: length },
              { strokeDashoffset: 0 }
            ],
            {
              duration: 7000, // 15 seconds
              fill: "forwards",
              easing: "linear",
            }
          );
        }
      },
      {
        threshold: 0.5, // triggers when half of the div is visible
      }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [played]);

  return (
    <div ref={containerRef} className="mt-[40px]">
      <svg
        width="1085"
        height="213"
        viewBox="0 0 1085 213"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          d="M1.8252 212.647C8.57559 180.92 18.4926 149.895 27.8662 118.866C35.9187 92.2091 50.5683 68.8487 73.8208 52.8272C90.192 41.547 116.707 32.5276 131.519 49.4231C145.227 65.0586 156.442 82.9827 167.602 100.484C184.21 126.527 206.052 151.135 233.471 165.927C256.172 178.174 287.87 187.695 313.976 184.734C330.713 182.836 341.719 156.246 350.229 144.566C368.532 119.448 388.73 96.9446 410.992 75.379C425.57 61.2562 439.96 50.6353 458.138 41.2534C483.133 28.3529 516.285 32.4171 541.367 42.9554C573.268 56.3593 597.672 81.7666 623.319 103.973C632.519 111.939 642.929 118.486 654.041 123.461C668.917 130.122 678.554 124.531 691.315 115.632C731.863 87.3548 771.668 57.9292 812.329 29.8498C848.48 4.88461 902.84 -9.52824 942.959 14.7018C978.875 36.3939 1002.83 69.9853 1029 101.845C1042.57 118.376 1054.86 135.92 1068.48 152.396C1073.38 158.31 1079.05 163.392 1083.29 169.756"
          stroke="#333333"
          strokeOpacity="0.27"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
};

export default Line;