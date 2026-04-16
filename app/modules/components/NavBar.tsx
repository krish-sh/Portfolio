"use client";

import { ThemeToogle } from "@/components/theme-toogle";
import React, { useEffect, useRef, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

function NavBar() {
  const [active, setActive] = useState("home");
  const [loading, setLoading] = useState(true);

  const navItems = [
    { name: "Home", link: "#home", id: "home" },
    { name: "About", link: "#about", id: "about" },
    { name: "Project", link: "#project", id: "project" },
    { name: "Skill", link: "#skill", id: "skill" },
    { name: "ContactUs", link: "#contactUs", id: "contactUs" },
  ];

  const itemRefs = useRef({});
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const el = itemRefs.current[active];
    if (el) {
      setPillStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [active]);

  // ✅ LOADING
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) {
    return (
      <Skeleton className="fixed top-10 left-1/2 -translate-x-1/2">
        <Skeleton className="flex items-center bg-white/5 px-6 py-3 rounded-full backdrop-blur-md border border-white/20 shadow-lg animate-pulse">
          <Skeleton className="w-10 h-10 rounded-full" />
          <Skeleton className="w-20 h-5 ml-3" />
          <Skeleton className="flex ml-6 gap-3">
            <Skeleton className="w-16 h-8 rounded-full" />
            <Skeleton className="w-16 h-8 rounded-full" />
            <Skeleton className="w-16 h-8 rounded-full" />
            <Skeleton className="w-16 h-8 rounded-full" />
          </Skeleton>
          <Skeleton className="w-20 h-8 rounded-full ml-6" />
        </Skeleton>
      </Skeleton>
    );
  }

  return (
    <div className="fixed top-10 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center bg-white/5 px-6 py-3 rounded-full backdrop-blur-md border border-white/20 shadow-lg">
        <Link href="/">
          <h1 className="text-xl font-bold bg-amber-300 text-black rounded-full p-2 cursor-pointer">
            &lt;/&gt;
          </h1>
        </Link>

        <h1 className="pr-6 text-xl font-bold">KRISH</h1>

        <div className="relative flex items-center">
          <div
            className="absolute top-0 h-full bg-white/10 border border-white/20 rounded-full transition-all duration-300"
            style={{
              left: pillStyle.left,
              width: pillStyle.width,
            }}
          />

          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              ref={(el) => (itemRefs.current[item.id] = el)}
              className="relative z-10 px-4 py-2 mx-1"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 ml-4">
          <span className="text-zinc-300 dark:text-zinc-700">|</span>
          <ThemeToogle />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
