import React from "react";

function About() {
  return (
    <div className="flex justify-center items-center  min-h-screen px-6 md:px-20 flex-col md:flex-row gap-12 w-full">
      {/* Left Section */}
      <div className="w-full md:w-1/2 md:m-0 m-2 p-6">
        <img src="/undraw_team_85hs.svg" alt="" className="w-2xl "/>
      </div>
      {/* Right Section */}
      <div className="w-full md:w-1/2 space-y-6">
      </div>
    </div>
  );
}

export default About;
