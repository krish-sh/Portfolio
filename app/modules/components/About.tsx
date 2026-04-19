"use client";

import { motion } from "framer-motion";
import React from "react";

function About() {
  return (
    <div className="flex justify-center items-center  min-h-screen px-6 md:px-20 md:mt-0 mt-6 flex-col md:flex-row gap-12 w-full">
      {/* Left Section */}
      <div className="w-full md:w-1/2 md:m-0 m-2 p-6 hidden md:flex">
        <img src="/undraw_team_85hs.svg" alt="" className="w-2xl " />
      </div>
      {/* Right Section */}
      <div className="w-full md:w-1/2 space-y-6 flex flex-col  ">
        <h1 className="font-bold text-3xl tracking-widest text-center md:text-start text-amber-300 ">
          About Me
        </h1>
        <p className="  dark:text-zinc-400 text-zinc-900 leading-relaxed">
          I’m Krish Sharma, a BCA student at Swami Swatantranand College,
          Dinanagar, Punjab, with a strong interest in building modern web
          applications and understanding how systems work behind the scenes
        </p>
        <p className="text-zinc-900 dark:text-zinc-400 leading-relaxed">
          I started my coding journey by learning web development through Udemy,
          where I built a solid foundation in frontend and backend technologies,
          along with basics of Docker, PostgreSQL, and both SQL and NoSQL
          databases. Over time, I shifted my focus from just learning to
          actually building real-world projects.
        </p>
        <p className="text-zinc-900 dark:text-zinc-400 leading-relaxed">
          In 2025, I completed a{" "}
          <span className="bg-amber-300 text-black p-1">
            3-month internship
          </span>{" "}
          as a Full Stack Developer, where I worked on multiple projects and
          gained practical experience in developing complete applications.
        </p>
        <p className="text-zinc-900 dark:text-zinc-400 leading-relaxed">
          My mindset is simple — stay consistent, focus on goals, and
          continuously improve. I believe in adapting to new technologies and
          learning whatever is required to grow and contribute effectively.
        </p>
        <p className="text-zinc-900 dark:text-zinc-400 leading-relaxed">
          Currently, I’m also focusing on{" "}
          <span className="bg-amber-300 p-1 text-black">
            Data Structures and Algorithms
          </span>{" "}
          to strengthen my problem-solving skills and become a better developer.
        </p>
        <p className="text-zinc-900 dark:text-zinc-400 leading-relaxed">
          I’m looking forward to opportunities where I can contribute, learn,
          and give my 100% while growing in the tech industry.
        </p>
      </div>
    </div>
  );
}

export default About;
