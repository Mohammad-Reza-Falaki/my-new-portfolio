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
      <div className="flex justify-between p-10">
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
      <div className="flex flex-col items-center justify-center mt-30">
        <h2 className="text-xl mb-4 text-teal-600">Welcome to My Portfolio.</h2>
        <p className="mb-4 text-white">
          Explore my projects, experience, and contact me!
        </p>
        <div className="flex gap-3">
          <Link href="/projects">
            <button className="bg-blue-600 hover:bg-blue-800 transition-colors duration-200 p-2 rounded">
              Projects
            </button>
          </Link>
          <Link href="/experience">
            <button className="bg-green-600 hover:bg-green-800 transition-colors duration-200 p-2 rounded">
              Experience
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-yellow-600 hover:bg-yellow-800 transition-colors duration-200 p-2 rounded">
              Contact
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-5 text-center">
        <Marquee />
      </div>
      <div>
        <footer className="text-center text-sm py-20 text-gray-500 dark:text-gray-400">
          Designed and developed with <span className="text-red-500">♥</span> by{" "}
          <strong className="bg-sky-100 p-1 rounded text-gray-600 hover:bg-sky-300 transition-colors duration-200">
            Mohammadreza Falaki
          </strong>{" "}
          using Next.js, Tailwind CSS, and TypeScript — 2025
        </footer>
      </div>
    </div>
  );
}
