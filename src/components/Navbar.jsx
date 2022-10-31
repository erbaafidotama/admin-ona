import React from "react";
import { Link } from "react-router-dom";
import {BsBell} from "react-icons/bs"

function Button({ text, bg, padding }) {
  return (
    <div>
      <button
        className={`
          ${padding || "px-6 py-2"} text-sm font-semibold uppercase
          rounded-sm text-white transition ${bg}`}
      >
        <span>{text}</span>
      </button>
    </div>
  );
}

function Search() {
  return (
      <div className="relative w-[1000px]">
        <input
          type="search"
          id="search-dropdown"
          className="rounded-lg block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-300 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder='Coba ketikkan "Diskusi"'
          required
        />
        <button
          type="submit"
          className="absolute top-0 right-0 p-2.5 text-sm font-medium text-gray-500 bg-gray-200 rounded-r-lg border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
  );
}

function Navbar() {
  return (
    <div className="flex flex-row justify-between px-12 py-2 bg-white border-b border-b-gray-200">
      <div className="mt-2">OnanMedia</div>
      <div>
      <Search />
      </div>
      <div className="mt-2">
        <div className="flex">
        <BsBell className="w-6 h-6 mr-4"/>
        <div className="border-r border-r-black"></div>
        <img className="w-6 h-6 ml-4 rounded-full" src="https://picsum.photos/200" alt="Rounded avatar"></img>
        <div className="ml-3">Steven Agus</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
