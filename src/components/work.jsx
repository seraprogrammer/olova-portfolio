import { createSignal } from "olova";
import ProjectCard from "./ProjectCard";

export default function Work() {
  const [data, setData] = createSignal([
    {
      title: "Olova",
      description:
        "A lightweight JSX-based JavaScript framework with an ultra-fast reactivity system",
      features: [
        "Built a minimal yet powerful JavaScript framework with JSX support",
        "Implemented a lightweight and efficient reactivity system",
        "Created a simple API for component creation and state management",
        "Optimized for performance with minimal overhead",
        "Developed comprehensive documentation and examples",
      ],
      techStack: ["JavaScript", "JSX", "Vite", "Rollup", "Hyperscript"],
      image: "https://codervai.vercel.app/assets/olova-B0FjVVEL.png",
      link: "https://olova.js.org/",
    },
    {
      title: "Portfolio Website",
      description:
        "A sleek portfolio built with React and Tailwind CSS to showcase your skills, projects, and experience in a modern design.",
      features: [
        "Designed and implemented a modern, responsive portfolio website",
        "Created smooth animations and transitions using Framer Motion",
        "Implemented dark mode and theme customization",
        "Built reusable components with TypeScript and React",
        "Optimized performance and accessibility",
      ],
      techStack: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
      image:
        "https://camo.githubusercontent.com/c301dc3bbdc311c76cbbccc24d9beb3a2a84ec720eb868b640cb60e525afd324/68747470733a2f2f692e706f7374696d672e63632f446672356a4351702f53637265656e73686f742d323032352d30312d30322d3132303930312e706e67",
      link: "https://codervai.vercel.app/",
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-16 px-4 md:px-8">
      <div className="text-center">
        <h1
          className="inline-block text-2xl font-extrabold text-transparent mb-12 px-10 py-3 
            relative bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
            transform transition-all duration-500 hover:scale-105 hover:shadow-2xl
            before:content-[''] before:absolute before:top-0 before:left-1/2 
            before:-translate-x-1/2 before:h-[3px] before:w-[160px]
            before:bg-gradient-to-r before:from-transparent before:via-pink-500 before:to-transparent
            after:content-[''] after:absolute after:bottom-0 after:left-1/2 
            after:-translate-x-1/2 after:h-[3px] after:w-[160px]
            after:bg-gradient-to-r after:from-transparent after:via-pink-500 after:to-transparent
            hover:before:via-red-500 hover:after:via-red-500
            hover:before:w-[180px] hover:after:w-[180px]
            before:transition-all before:duration-500
            after:transition-all after:duration-500
            animate-bounce"
        >
          PROJECTS
        </h1>
      </div>
      <div className="max-w-7xl mx-auto space-y-16">
        {data().map((project, index) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
