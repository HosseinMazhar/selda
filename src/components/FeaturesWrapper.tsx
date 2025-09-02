"use client"
import useScrollAnimation from "@/hooks/useScrollAnimation";

function AnimatedDiv({ children, from = "left" }: { children: React.ReactNode; from?: "left" | "right" }) {
  const ref = useScrollAnimation(from === "left" ? "slide-in-left" : "slide-in-right");
  return (
    <div ref={ref} className="opacity-0">
      {children}
    </div>
  );
}

export default AnimatedDiv;
