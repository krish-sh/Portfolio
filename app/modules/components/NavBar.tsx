"use client";

import { ThemeToogle } from "@/components/theme-toogle";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
function NavBar() {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Project", path: "#project" },
    { name: "Skill", path: "#skill" },
  ];

  if (loading) {
    return (
      <Skeleton className="fixed top-10 left-1/2 -translate-x-1/2">
        <Skeleton
          className="
        flex items-center 
        bg-white/5 
        px-6 py-3 
        rounded-full 
        backdrop-blur-md 
        border border-white/20 
        shadow-lg
        animate-pulse
      "
        >
          <Skeleton className="w-10 h-10 rounded-full bg-white/20" />

          <Skeleton className="w-20 h-5 bg-white/20 rounded-md ml-2" />

          <Skeleton className="flex items-center">
            <Skeleton className="w-16 h-8 bg-white/20 rounded-full mx-2" />
            <Skeleton className="w-16 h-8 bg-white/20 rounded-full mx-2" />
            <Skeleton className="w-16 h-8 bg-white/20 rounded-full mx-2" />
            <Skeleton className="w-16 h-8 bg-white/20 rounded-full mx-2" />
          </Skeleton>

          <Skeleton className="w-24 h-8 bg-white/30 rounded-3xl mx-4 ml-6" />

          <Skeleton className="w-[1px] h-6 bg-white/20 mx-2" />

          <Skeleton className="w-8 h-8 bg-white/20 rounded-full ml-2" />
        </Skeleton>
      </Skeleton>
    );
  } else {
    return (
      <div className="fixed top-10 left-1/2 -translate-x-1/2">
        <div className="flex items-center bg-white/5 px-6 py-3 rounded-full backdrop-blur-md border border-white/20 shadow-lg">
          <h1 className="text-xl font-bold bg-amber-300 text-black rounded-full p-2">
            &lt;/&gt;
          </h1>

          <h1 className="pr-4 text-xl font-bold">KRISH</h1>

          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <div
                key={item.name}
                className={`
                px-4 py-2 mx-2 transition-all duration-300 cursor-pointer
                ${
                  isActive
                    ? "bg-white/10 rounded-full border border-white/20 shadow-lg"
                    : "hover:bg-white/5 hover:rounded-full hover:border hover:border-white/20 hover:shadow-lg"
                }
              `}
              >
                <Link href={item.path}>{item.name}</Link>
              </div>
            );
          })}

          <div className="px-4 py-2 mx-4 ml-6 bg-amber-300 text-black rounded-3xl">
            <Link href={"/contactUs"}>ContactUs</Link>
          </div>

          <div className="flex items-center gap-3 ml-4">
            <span className="text-zinc-300 dark:text-zinc-700">|</span>
            <ThemeToogle />
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
