import { div } from "framer-motion/client";
import React from "react";
import { Button } from "../../../components/ui/button";

function Project() {
  const projects = [
    {
      name: "Project 1",
      description: "Description",
      image: "#",
      LiveLink: "#",
      GitHubLink: "#",
    },
    {
      name: "Project 2",
      description: "Description",
      image: "#",
      LiveLink: "#",
      GitHubLink: "#",
    },
    {
      name: "Project 3",
      description: "Description",
      image: "#",
      LiveLink: "#",
      GitHubLink: "#",
    },
    {
      name: "Project 4",
      description: "Description",
      image: "#",
      LiveLink: "#",
      GitHubLink: "#",
    },
  ];
  return (
    <div className="min-h-screen px-6 md:px-20 py-20 ">
      <div className="text-center mt-14">
        <h1 className="text-3xl md:text-5xl font-bold">My Projects</h1>
      </div>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md p-4 hover:scale-105 transition-all duration-300">
            {/* Image */}
            <div className="h-40 bg-zinc-800 rounded-xl mb-4">
              {project.image}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold">{project.name}</h3>

            {/* Description */}
            <p className="text-sm text-zinc-400 mt-2">{project.description}</p>

            {/* Buttons */}
            <div className="flex gap-3 mt-4">
              <Button href={project.LiveLink}>Live</Button>
              <Button href={project.GitHubLink}>GitHub</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
