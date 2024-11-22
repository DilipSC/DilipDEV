"use client";
import React from "react";
import { ContainerScroll } from "./container-scroll-animation";
import Image from "next/image";

export function Resume() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black p-4 text-white">
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Get to know about me more through my<br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  RESUME
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`https://i.ibb.co/4dtzg2P/Screenshot-2024-11-22-233649.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </div>
  );
}
