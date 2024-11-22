'use client'


import { HoverEffect } from "./hover-effect";

export function Skill() {
    return (

      <div id="skills" className=" mx-auto bg-gradient-to-br from-gray-900 to-black p-4 text-white px-32">
        <h2 className='text-center mt-6 font-bold text-4xl'>Skills and TechStack</h2>
        <HoverEffect items={projects} />
      </div>
    );
  }
  
  export const projects = [
    { title: "C", image: "https://pngimg.com/uploads/letter_c/letter_c_PNG22.png", link: "#" },
    { title: "C++", image: "https://codeprogramming.org/wp-content/uploads/2022/01/C-Logo.wine_.png", link: "#" },
    { title: "TypeScript", image: "https://logospng.org/download/typescript/typescript-4096.png", link: "#" },
    { title: "JavaScript", image: "https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-0.png", link: "#" },
    { title: "Next.js", image: "https://indava.com/sites/default/files/styles/featured_item/public/2020-07/1_neext.png?itok=ux94pOlX", link: "#" },
    { title: "Express.js", image: "https://vectorified.com/images/express-js-icon-20.png", link: "#" },
    { title: "React", image: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png", link: "#" },
    { title: "Flask", image: "https://www.skillmentors.in/assets/img/courses/flask.png", link: "#" },
    { title: "MongoDB", image: "https://pluspng.com/img-png/logo-mongodb-png-mongodb-1600.png", link: "#" },
    { title: "Firebase", image: "https://pluspng.com/img-png/firebase-logo-png-firebase-logo-png-transparent-amp-svg-vector-pluspng-2400x3291.png", link: "#" },
    { title: "GitHub", image: "https://pngimg.com/uploads/github/github_PNG40.png", link: "#" },
    { title: "TailwindCSS", image: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/tailwindcss.png", link: "#" },
    { title: "Vercel", image: "https://flow-public.nimbuspop.com/flow-apps/vercel.png", link: "#" },
    { title: "Pyhton", image: "https://www.josemanuelgilperez.com/wp-content/uploads/2015/08/Python-logo-notext.svg_.png", link: "#" },
    { title: "Postman", image: "https://iconape.com/wp-content/png_logo_vector/postman.png", link: "#" },
  ];
  