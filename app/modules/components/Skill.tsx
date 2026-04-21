import React from "react";

function Skill() {
  const skills = [
    { name: "Html", icon: "devicon-html5-plain colored" },
    { name: "CSS 3", icon: "devicon-css3-plain colored" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
    { name: "TypeScript", icon: "devicon-typescript-original colored" },
    { name: "React.js", icon: "devicon-react-original colored" },
    { name: "Next.js", icon: "devicon-nextjs-plain " },
    { name: "Git", icon: "devicon-git-plain colored " },
    { name: "GitHub", icon: "devicon-github-original " },
    { name: "NodeJS", icon: "devicon-nodejs-plain colored" },
    { name: "Express", icon: "devicon-express-original" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "Prisma", icon: "devicon-prisma-original " },
    { name: "MySQL", icon: "devicon-mysql-original colored" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
    { name: "Docker", icon: "devicon-docker-plain colored" },
  ];
  return (
    <div className="min-h-screen px-6 md:px-20 md:py-35 py-20   ">
      <h2 className="text-3xl font-bold mb-16 text-center  ">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center gap-3 hover:scale-110 transition-transform duration-300">
            <i className={`${skill.icon} text-7xl`}></i>
            <p className="text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
