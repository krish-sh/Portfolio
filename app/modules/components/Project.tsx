import { Button } from "../../../components/ui/button";
import Link from "next/link";

function Project() {
  const projects = [
    {
      name: "Vibe Code Editor",
      description: `A Code Editor Application. that work  like the vs Code Editor But the main  thing in the application is when wanted to work any library like React,NextJs,Express any other it installed just choose any one of these and start work. Main thik is it have built in Ai assistant that help you to write code.`,
      image: "#",
      LiveLink: "#",
      GitHubLink: "https://github.com/krish-sh/playground_code_editor",
    },
    {
      name: "Habit Tracker",
      description:
        "A habit tracker application that helps users build and maintain positive habits and shown them in a graphical format to track their progress and stay motivated. remove,delete and edit habits from the list.",
      image: "/habit-tracker.png",
      LiveLink: "https://habit-tracker-seven-beta.vercel.app/",
      GitHubLink: "https://github.com/krish-sh/Habit-Tracker",
    },
    {
      name: "Background Remover",
      description:
        "A background remover application that allows users to easily remove backgrounds from images,providing a simple and efficient way to create transparent backgrounds for various purposes.",
      image: "/Bg-remover.png",
      LiveLink: "https://bg-remover-s4ew.vercel.app/",
      GitHubLink: "https://github.com/krish-sh/bg-remover",
    },
    {
      name: "Weather App",
      description:
        "A weather application that provides real-time weather information for any location. It features a user-friendly interface, allowing users to search for cities and view current weather conditions. The app also includes a 5-day forecast, displaying temperature trends and weather icons",
      image: "/Weather.png",
      LiveLink: "https://weather-react-tawny.vercel.app/",
      GitHubLink: "https://github.com/krish-sh/Weather-React",
    },
  ];
  return (
    <div className="min-h-screen px-6 md:px-20 py-20  ">
      <div className="text-center mt-14">
        <h1 className="text-3xl md:text-5xl font-bold">My Projects</h1>
      </div>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-zinc-400/10  border border-gray-50/5 rounded-2xl backdrop-blur-md py-8 px-4 hover:scale-105 transition-all duration-300"
          >
            {/* Image */}
            <div className="h-60 bg-zinc-800 rounded-xl mb-4">
              <img
                src={project.image}
                alt={project.name}
                className="object-fit w-full h-full"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold">{project.name}</h3>

            {/* Description */}
            <p className="text-sm text-zinc-400 mt-2">{project.description}</p>

            {/* Buttons */}
            <div className="flex gap-3 mt-4">
              <Button
                asChild
                className="bg-amber-700 rounded-xl hover:bg-amber-600 text-white  "
              >
                <Link href={project.LiveLink}>Live</Link>
              </Button>
              <Button
                asChild
                className="border bg-black/5 dark:bg-white/5 border-gray-50/5 rounded-xl"
              >
                <Link href={project.GitHubLink}>GitHub</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
