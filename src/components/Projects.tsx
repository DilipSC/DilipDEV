"use client";
import React from "react";
import { PinContainer } from "./3d-pin";

export function Projects() {
  return (
    <>
    
      {/* Heading */}
      <div id="projects"className="w-full text-center py-6 bg-gradient-to-br from-black to-gray-900 text-white">
        <h2 className="text-3xl font-bold tracking-tight text-slate-100">
          Projects
        </h2>
        
      

      {/* Cards Section */}
      <div className="h-auto w-full flex flex-row items-center justify-center gap-8 flex-wrap ">
        {/* Card 1: SIH */}
        <PinContainer
          title="Smart India Hackathon (SIH)"
          href="https://github.com/DilipSC/SIH.git"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem]">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              SIH
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                Took Part in SIH with my friends and developed a full stack web application.
              </span>
            </div>
          </div>
        </PinContainer>

        {/* Card 2: URL Shortener */}
        <PinContainer
          title="URL Shortener"
          href="https://github.com/DilipSC/URL-Shortener.git"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem]">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              URL Shortener
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                It&apos;s just a basic URL Shortener.Helps me out sometimes.
              </span>
            </div>
          </div>
        </PinContainer>

        {/* Card 3: Singapore Tourism Website */}
        <PinContainer
          title="Singapore Tourism Website"
          href="https://github.com/DilipSC/Singapore-Tourism.git"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem]">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              Singapore Tourism Website
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                Made a Serverless website with Firebase and React.
              </span>
            </div>
          </div>
        </PinContainer>

        
      </div>
    </div></>
  );
}
