import { createSignal } from "olova";
import JavaScript from "/icons/javascript.svg";
import TypeScript from "/icons/typescript.svg";
import React from "/icons/react.svg";
import Node from "/icons/node.svg";
import HTML from "/icons/html.svg";
import CSS from "/icons/css.svg";
import Vue from "/icons/vue.svg";
import Next from "/icons/next.svg";
import Linux from "/icons/linux.svg";
import Git from "/icons/git.svg";

const Skills = () => {
  const [skills] = createSignal([
    {
      name: "JavaScript",
      icon: JavaScript,
    },
    {
      name: "TypeScript",
      icon: TypeScript,
    },
    {
      name: "React",
      icon: React,
    },
    {
      name: "Node.js",
      icon: Node,
    },
    {
      name: "HTML5",
      icon: HTML,
    },
    {
      name: "CSS3",
      icon: CSS,
    },
    {
      name: "Vue.js",
      icon: Vue,
    },
    {
      name: "Next.js",
      icon: Next,
    },
    {
      name: "Linux",
      icon: Linux,
    },
    {
      name: "Git",
      icon: Git,
    },
  ]);

  return (
    <section className="bg-[#000000]/80 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4">
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
            My Skills
          </h1>
        </div>
        {/* Skill Cards with Marquee Effect */}
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee">
            {skills().map((skill, index) => (
              <div
                key={index}
                className="inline-block flex flex-col items-center p-6 bg-[#1e1e1e]/50 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl hover:shadow-[#2d2b42]/30 transition duration-300 ease-in-out transform hover:-translate-y-1 mx-2"
              >
                <img
                  src={skill.icon || "/placeholder.svg"}
                  alt={skill.name}
                  className="w-16 h-16 mb-4"
                />
                <p className="text-sm font-semibold text-center">
                  {skill.name}
                </p>
              </div>
            ))}
            {/* Duplicate the icons for seamless looping */}
            {skills().map((skill, index) => (
              <div
                key={`duplicate-${index}`}
                className="inline-block flex flex-col items-center p-6 bg-[#1e1e1e]/50 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl hover:shadow-[#2d2b42]/30 transition duration-300 ease-in-out transform hover:-translate-y-1 mx-2"
              >
                <img
                  src={skill.icon || "/placeholder.svg"}
                  alt={skill.name}
                  className="w-16 h-16 mb-4"
                />
                <p className="text-sm font-semibold text-center">
                  {skill.name}
                </p>
              </div>
            ))}
            {/* Duplicate the icons for seamless looping */}
            {skills().map((skill, index) => (
              <div
                key={`duplicate-${index}`}
                className="inline-block flex flex-col items-center p-6 bg-[#1e1e1e]/50 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl hover:shadow-[#2d2b42]/30 transition duration-300 ease-in-out transform hover:-translate-y-1 mx-2"
              >
                <img
                  src={skill.icon || "/placeholder.svg"}
                  alt={skill.name}
                  className="w-16 h-16 mb-4"
                />
                <p className="text-sm font-semibold text-center">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
