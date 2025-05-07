"use client";

import Link from "next/link";
import { useState } from "react";

import Marquee from "./components/marquee";

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
      <header className="bg-blue-950 backdrop-blur-md border-b rounded-b-xl border-white/20 shadow-md z-50">
        <div className="flex justify-between p-6">
          <div>
            <h1 className="text-3xl">Mohammadreza Falaki</h1>
            <p className="text-xl">
              Master Student at Sharif University of Technology
            </p>
          </div>
          <button
            className="bg-secondary text-black bg-sky-200 p-2 rounded"
            onClick={toggleDarkMode}
          >
            Toggle Dark/Light Mode
          </button>
        </div>
      </header>
      <div className="flex flex-col items-center justify-center mt-20">
        <h2 className="text-4xl text-center md:text-5xl leading-tight font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Welcome to My Portfolio.
        </h2>
        <p className="mb-4 text-[#924802] font-bold">
          Explore my projects, experience, and contact me!
        </p>
        <div className="flex flex-col text-center md:flex-row gap-3">
          <Link href="/projects">
            <button className="bg-[#ff9500] font-semibold cursor-pointer hover:bg-[#ffa500] transition-colors duration-200 p-2 rounded">
              Projects
            </button>
          </Link>
          <Link href="/experience">
            <button className="bg-green-500 font-semibold cursor-pointer hover:bg-green-800 transition-colors duration-200 p-2 rounded">
              Experience
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-[#c54df5] font-semibold cursor-pointer hover:bg-yellow-800 transition-colors duration-200 p-2 rounded">
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
          Designed and developed with <span className="text-red-500">♥</span> by{" "}
          <strong className="bg-sky-100 p-0.5 md:p-1 rounded text-gray-600 hover:bg-sky-300 transition-colors duration-200">
            Mohammadreza Falaki
          </strong>{" "}
          using Next.js, Tailwind CSS, and TypeScript — 2025
        </footer>
      </div>
    </div>
  );
}
