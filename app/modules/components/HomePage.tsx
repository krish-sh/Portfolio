"use client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { FileDown, Mail } from "lucide-react";
import React, { useEffect, useState } from "react";

function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20">
        {/* Right Text Skeleton */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 pt-32">
          <div className="space-y-4">
            {/* Name */}
            <Skeleton className="h-4 w-32 bg-zinc-200 dark:bg-zinc-800/40" />

            {/* Heading */}
            <Skeleton className="h-10 md:h-14 w-3/4 bg-zinc-200 dark:bg-zinc-800/40" />
            <Skeleton className="h-10 md:h-14 w-1/2 bg-zinc-200 dark:bg-zinc-800/40" />

            {/* Subheading */}
            <Skeleton className="h-6 w-full bg-zinc-200 dark:bg-zinc-800/40" />
            <Skeleton className="h-6 w-5/6 bg-zinc-200 dark:bg-zinc-800/40" />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Skeleton className="h-16 w-52 rounded-full bg-zinc-200 dark:bg-zinc-800/40" />
            <Skeleton className="h-16 w-52 rounded-full bg-zinc-200 dark:bg-zinc-800/40" />
          </div>
        </div>

        {/* Left Image Skeleton */}
        <div className="w-full md:w-1/2 flex justify-center md:h-[600px] relative items-end">
          {/* Glow Circle */}
          <div className="absolute w-[320px] h-[320px] md:w-[500px] md:h-[500px] bg-zinc-300/20 dark:bg-zinc-700/30 rounded-full blur-3xl"></div>

          {/* Image Placeholder */}
          <Skeleton className="relative z-10 w-[320px] h-[400px] md:w-[450px] md:h-[500px] rounded-full " />

          {/* Floating Dots */}
          <div className="absolute top-10 right-10">
            <Skeleton className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-800/40" />
          </div>

          <div className="absolute bottom-10 left-10">
            <Skeleton className="w-2 h-2 rounded-full bg-zinc-200 dark:bg-zinc-800/40" />
          </div>

          <div className="absolute bottom-44 left-50">
            <Skeleton className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-800/40" />
          </div>

          <div className="absolute top-1/2 left-0">
            <Skeleton className="w-2 h-2 rounded-full bg-zinc-200 dark:bg-zinc-800/40" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 ">
        {/* Right Text Div */}
        <div className="w-full md:w-1/2  flex flex-col justify-center gap-6 text-center md:text-left pt-32">
          <div className="space-y-4">
            <p className="text-sm text-amber-300 tracking-widest ">
              KRISH SHARMA
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hello, my name's <span>krish</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-zinc-500 dark:text-zinc-400 ">
              Full Stack Developer focused on building modern and scalable web
              application.{" "}
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button className="px-9 py-7 text-xl bg-amber-400 text-black rounded-full  shadow-md hover:scale-105 transition-all duration-300">
              <Mail size="80" />
              <a href="#contactUs"> ContactUs</a>
            </Button>
            <Button className="px-9 py-7 text-xl  border border-white/10 backdrop-blur-md hover:bg-white/10 rounded-full  transition-all duration-300">
              <FileDown size={52} strokeWidth={1.5} />
              <a href="/KrishSharmaCV.pdf"> Download CV</a>
            </Button>
          </div>
        </div>
        {/* Left Image Div */}
        <div className="w-full md:w-1/2 flex justify-center  md:h-[600px] relative items-end   ">
          <div className="absolute w-[320px] h-[320px] md:w-[500px] md:h-[500px] bg-amber-300 rounded-full blur-3xl"></div>
          <img
            src="/image.png"
            alt="profile"
            className="realtive z-10 w-[320px] md:w-[450px] object-cover translate-y-45"
          />
          <div className=" absolute top-10 right-10 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>

          <div className="absolute bottom-10 left-10 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-44 left-50 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>

          <div className="absolute top-1/2 left-0 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
