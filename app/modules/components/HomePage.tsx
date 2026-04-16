import { Button } from "@/components/ui/button";
import { FileDown, Mail } from "lucide-react";
import React from "react";

function HomePage() {
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-32">
        {/* Right Text Div */}
        <div className="w-full md:w-1/2  flex flex-col justify-center gap-6 text-center md:text-left">
          <div className="space-y-4">
            <p className="text-sm text-amber-300 tracking-widest ">
              KRISH SHARMA
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hello, my name's <span>krish</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-zinc-500 dark:text-zinc-400 ">
              Full Stack Developer focused on building modern and scalable web
              apps.{" "}
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
        <div className="w-full md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0"></div>
      </div>
    </>
  );
}

export default HomePage;
