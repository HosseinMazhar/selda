import type { Metadata } from "next";
import "./globals.css";
import SeldaIcon from "@/components/icon/SeldaIcon";
import ThemeToggle from "@/components/navbar/ThemeToggle";
import { Global, HamburgerMenu } from "iconsax-reactjs";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "سلدا",
  description: "فقط کافیه شروع کنی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
