"use client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { FileDown, Mail } from "lucide-react";
import React, { useEffect, useState } from "react";

function HomePage() {
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
              Full Stack Developer | Building Scalable Web Application
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button className="px-9 py-7 text-xl bg-amber-300 text-black rounded-full  shadow-md hover:scale-105 transition-all duration-300">
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
          <div className="absolute w-[200px]   h-[200px] md:w-[500px]  md:h-[500px] bg-amber-300 rounded-full blur-3xl"></div>
          <img
            src="/image.png"
            alt="profile"
            className="realtive z-10 w-[200px] md:w-[450px] object-cover translate-y-3 sm:translate-y-10 md:translate-y-44"
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
