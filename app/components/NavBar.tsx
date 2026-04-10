"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function NavBar() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return;
    <></>;
  }

  return (
    <>
      <div className="fixed top-10 left-1/2  -translate-x-1/2">
        <div className="flex items-center  gap-4 bg-white/5 max-h-screen px-6 py-3 rounded-full transition-all duration-300   backdrop-blur-md border border-white/20 shadow-lg">
          <h1 className="text-xl font-bold tracking-wide">&lt; /&gt;</h1>
          <div className="hover:bg-white/5   hover:px-4 hover:py-2 hover:rounded-full hover:backdrop-blur-md hover:border hover:border-white/20 hover:shadow-lg px-4 py-2">
            <Link href={"/"}>Home</Link>
          </div>
          <div className="hover:bg-white/5   hover:px-4 hover:py-2 hover:rounded-full hover:backdrop-blur-md hover:border hover:border-white/20 hover:shadow-lg px-4 py-2">
            <Link href={"/about"}>About</Link>
          </div>
          <div className="hover:bg-white/5   hover:px-4 hover:py-2 hover:rounded-full hover:backdrop-blur-md hover:border hover:border-white/20 hover:shadow-lg px-4 py-2">
            <Link href={"/project"}>Project</Link>
          </div>
          <div className="hover:bg-white/5   hover:px-4 hover:py-2 hover:rounded-full hover:backdrop-blur-md hover:border hover:border-white/20 hover:shadow-lg px-4 py-2">
            <Link href={"/skill"}>Skill</Link>
          </div>
          <div className="hover:bg-white/5   hover:px-4 hover:py-2 hover:rounded-full hover:backdrop-blur-md hover:border hover:border-white/20 hover:shadow-lg px-4 py-2">
            <Link href={"/contactUs"}>ContactUs</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
