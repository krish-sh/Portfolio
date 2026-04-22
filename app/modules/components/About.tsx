"use client";

import { Database, LayoutGrid, Monitor, Smartphone } from "lucide-react";
import React from "react";

function About() {
  return (
    <div className="min-h-screen px-6 md:px-20 md:py-50 py-32  ">
      <div className="mb-16">
        <h1 className="md:text-3xl text-2xl  font-bold mb-6 md:mb-10 ">
          Experience
        </h1>
        <h3 className="md:text-lg  text-xlfont-semibold">
          Web Development Internship - Unified Mentor
        </h3>
        <p className="text-sm text-gray-400 mt-1">Aug/2025 - Oct/2025</p>
        <p className="text-gray-500 mt-4 mb-4 ">
          During my internship at Unified Mentor, I had the opportunity to work
          on a variety of projects that allowed me to apply and expand my web
          development skills.
        </p>
        <a
          href="/UM intern certificate.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          View Certificate
        </a>
      </div>
      {/* what i Do */}
      <div className="md:mt-25 mt-0">
        <h2 className="text-2xl md:text-3xl font-bold md:mb-15 mb-10">
          What I do?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 ">
          <div className="space-y-4 p-6 rounded-xl hover:bg-zinc-800/5 hover:shadow-md    border border-gray-50/10 backdrop-blur-md py-8 px-4 hover:scale-105 transition-all duration-300">
            <LayoutGrid className="w-10 h-10 text-blue-500" />
            <h3 className="text-lg font-semibold">Frontend Development</h3>
            <p className="text-gray-600 text-sm">
              Building responsive and interactive user interfaces using React,
              Next.js and modern CSS.{" "}
            </p>
          </div>

          <div className="space-y-4 p-6 rounded-xl hover:bg-zinc-800/5 hover:shadow-md    border border-gray-50/10 backdrop-blur-md py-8 px-4 hover:scale-105 transition-all duration-300">
            <Database className="w-10 h-10 text-blue-500" />
            <h3 className="text-lg font-semibold">Backend Development</h3>
            <p className="text-gray-600 text-sm">
              Developing REST APIs and server-side logic using Node.js and
              Express.{" "}
            </p>
          </div>

          <div className="space-y-4 p-6 rounded-xl hover:bg-zinc-800/5 hover:shadow-md    border border-gray-50/10 backdrop-blur-md py-8 px-4 hover:scale-105 transition-all duration-300">
            <Monitor className="w-10 h-10 text-blue-500" />
            <h3 className="text-lg font-semibold">
              Full-Stack Web Application
            </h3>
            <p className="text-gray-600 text-sm">
              Creating complete web applications from frontend to backend with
              database integration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
