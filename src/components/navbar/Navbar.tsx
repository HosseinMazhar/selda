"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { CloseCircle, Global, HamburgerMenu } from "iconsax-reactjs";
import SeldaIcon from "../icon/SeldaIcon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["صفحه اصلی", "سوالات متداول", "داشبورد", "چالش ها و قوانین"];

  return (
    <>
      <nav className="absolute h-[83px] left-0 w-full z-40 top-[36px] flex justify-between gap-[13px] lg:px-[39px] px-[12px]">
        <div className="w-fit lg:w-[382px] h-full flex gap-[13px]">
          <ThemeToggle />
          <div className="w-[42px] h-[42px] lg:w-[83px] lg:h-[83px] rounded-2xl bg-[#D8D0DF]/55 flex justify-center items-center transition-colors hover:bg-[#D8D0DF]/75 cursor-pointer">
            <Global color="#0E4891" className="size-[22px] lg:size-[39px]" />
          </div>
          <div className="w-fit h-fit lg:w-[190px] lg:h-[83px] rounded-2xl bg-[#D8D0DF]/55 flex justify-center items-center transition-colors hover:bg-[#D8D0DF]/75">
            <span className="cursor-pointer px-[17px] py-[9px] rounded-2xl font-kalameh select-none">
              ورود و ثبت نام
            </span>
          </div>
        </div>

        {/* Large screens links */}
        <div
          dir="rtl"
          className="hidden lg:flex w-[calc(100%-382px)] h-full rounded-2xl bg-[#D8D0DF]/55 px-[6px] justify-start items-center xl:gap-[41px] lg:gap-[16px]"
        >
          <div className="size-[73px] shrink-0">
            <SeldaIcon />
          </div>
          {links.map((link) => (
            <span
              key={link}
              className="text-right cursor-pointer px-[17px] py-[9px] rounded-2xl border-2 hover:border-white border-transparent transition font-kalameh"
            >
              {link}
            </span>
          ))}
        </div>

        {/* Small screens hamburger */}
        <div
          className="lg:hidden w-[42px] h-[42px] rounded-2xl bg-[#D8D0DF]/55 flex justify-center items-center transition-colors hover:bg-[#D8D0DF]/75 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <HamburgerMenu color="#0E4891" className="size-[22px]" />
        </div>
      </nav>

      {/* Right-side slider */}
      <div
        className={`fixed top-0 right-0 h-full w-[250px] bg-white dark:bg-neutral-800 shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <CloseCircle
          className="absolute top-[10px] right-[10px] dark:text-white"
          onClick={() => setIsOpen(false)}
        />
        <div className="w-full flex justify-center items-center mt-[40px]">
          <SeldaIcon />
        </div>
        <div className="relative w-full h-full flex flex-col justify-start py-[24px] px-[16px]">
          {links.map((link) => (
            <span
              key={link}
              className="text-right cursor-pointer px-[17px] py-[9px] rounded-2xl dark:text-white font-kalameh"
            >
              {link}
            </span>
          ))}
        </div>
      </div>

      {/* Overlay when open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-70 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
