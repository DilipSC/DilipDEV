'use client';

import { HoverEffect } from "./hover-effect";

export function Skill() {
  return (
    <div
      id="skills"
      className="mx-auto bg-gradient-to-br from-gray-900 to-black p-4 text-white px-32"
    >
      <h2 className="text-center mt-6 font-bold text-4xl">
        Skills and TechStack
      </h2>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  { title: "C", image: "/c.png", link: "#" },
  { title: "C++", image: "/cpp.png", link: "#" },
  { title: "TypeScript", image: "/TS.png", link: "#" },
  { title: "JavaScript", image: "/JS.png", link: "#" },
  { title: "Next.js", image: "/Next.png", link: "#" },
  { title: "Express.js", image: "/ExpressJS.png", link: "#" },
  { title: "React", image: "/React.png", link: "#" },
  { title: "Flask", image: "/flask.png", link: "#" },
  { title: "MongoDB", image: "/MongoDB.png", link: "#" },
  { title: "Firebase", image: "/firebase.png", link: "#" },
  { title: "GitHub", image: "/github.png", link: "#" },
  { title: "TailwindCSS", image: "/Tailwind.png", link: "#" },
  { title: "Vercel", image: "/vercel.png", link: "#" },
  { title: "Python", image: "/Py.png", link: "#" },
  { title: "Postman", image: "/postman.png", link: "#" },
];
