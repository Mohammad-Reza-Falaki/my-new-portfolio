"use client";

import Link from "next/link";
import { useState } from "react";

import Marquee from "../../public/components/marquee";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-primary" : "bg-white"
      } text-white`}
    >
      <header className="bg-blue-950 backdrop-blur-md border-b border-white/20 shadow-md z-50">
        <div className="flex justify-between p-3 md:p-6">
          <div>
            <h1 className="text-xl md:text-3xl">Mohammadreza Falaki</h1>
            <p className="text-[15px] md:text-xl">
              Master Student at Sharif University of Technology
            </p>
          </div>
          <button
            className="bg-secondary text-black cursor-pointer dark:text-white bg-sky-200 dark:bg-sky-500 p-2 w-[100px] md:w-[150px] rounded-full"
            onClick={toggleDarkMode}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </header>
      <div className="flex flex-col items-center justify-center mt-20">
        <h2 className="text-5xl text-center md:text-7xl leading-tight font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Welcome to My Portfolio.
        </h2>
        <p className="mb-4 text-center text-2xl text-black dark:text-[#6943ff] font-bold">
          Explore my projects, experience, and contact me!
        </p>
        <div className="flex mt-8 flex-col text-center md:flex-row gap-3">
          <Link href="/projects">
            <button className="bg-[#ff9500] font-semibold text-xl cursor-pointer hover:bg-[#ffa500] transition-colors duration-200 p-2 rounded-xl">
              Projects
            </button>
          </Link>
          <Link href="/experience">
            <button className="bg-green-500 font-semibold text-xl cursor-pointer hover:bg-green-800 transition-colors duration-200 p-2 rounded-xl">
              Experience
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-[#c54df5] font-semibold text-xl cursor-pointer hover:bg-yellow-800 transition-colors duration-200 p-2 rounded-xl">
              Contact
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-5 text-center">
        <Marquee />
      </div>
      <div>
        <footer className="text-center text-sm py-10 text-gray-500 dark:text-gray-400">
          Designed and developed with{" "}
          <span className="text-red-500 text-lg">♥</span> by{" "}
          <strong className="bg-sky-100 p-0.5 md:p-1 rounded text-gray-600 hover:bg-sky-300 transition-colors duration-200">
            Mohammadreza Falaki
          </strong>{" "}
          using Next.js, Tailwind CSS, and TypeScript — 2025
        </footer>
      </div>
    </div>
  );
}
