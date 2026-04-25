"use client";

import { ThemeToogle } from "@/components/theme-toogle";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function NavBar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });

  const navItems = [
    { name: "Home", link: "#home", id: "home" },
    { name: "About", link: "#about", id: "about" },
    { name: "Project", link: "#project", id: "project" },
    { name: "Skill", link: "#skill", id: "skill" },
  ];

  const itemRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "#home";

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
    const timeout = setTimeout(() => {
      const el = itemRefs.current[active];
      if (el) {
        setPillStyle({
          left: el.offsetLeft,
          width: el.offsetWidth,
        });
      }
    }, 50); // small delay

    return () => clearTimeout(timeout);
  }, [active]);

  return (
    <div className="fixed top-10 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center bg-white/5 px-6 py-3 rounded-full backdrop-blur-md border border-white/20 shadow-lg">
        <Link href="/">
          <h1 className="text-xl font-bold bg-amber-300 text-black rounded-full p-2 cursor-pointer">
            &lt;/&gt;
          </h1>
        </Link>

        <h1 className="pr-6 text-xl font-bold">KRISH</h1>

        <div className="hidden md:flex ml-6 relative  items-center">
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
          <div className="hidden md:block bg-amber-300 px-3 py-2 rounded-2xl text-black">
            <a href="#contactUs">ContactUs</a>
          </div>
          <span className="text-zinc-300 dark:text-zinc-700">|</span>

          <ThemeToogle />

          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
            onClickCapture={() => setOpen(false)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-4 space-y-3">
          {navItems.map((item) => (
            <a
              href={item.link}
              key={item.id}
              onClick={() => setOpen(false)}
              className={`block px-4 py-2 rounded-lg ${
                active === item.id ? "bg-white/10 " : "hover:bg-white/5"
              }`}
            >
              {item.name}
            </a>
          ))}
          <a href="#contactUs" className="pl-4">
            ContactUs
          </a>
        </div>
      )}
    </div>
  );
}

export default NavBar;
