import React from "react";
import { Link } from "react-router-dom";
import herobanner from "../assets/herobanner.webp";

const Hero = () => {
  return (
    <section className="relative bg-gradient from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Experience <span className="text-blue-600">comfort</span> and
              hospitality
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl">
              Addis Hotel offers thoughtfully designed rooms, local flavors, and
              warm service. Relax, explore, and make lasting memories.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/book"
                className="inline-flex items-center px-5 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition"
              >
                Book a Room
              </Link>
              <Link
                to="/rooms"
                className="inline-flex items-center px-5 py-2 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-100 transition"
              >
                View Rooms
              </Link>
            </div>

            <ul className="mt-8 flex flex-wrap gap-4 text-sm text-gray-600">
              <li className="px-3 py-1 bg-white border rounded">Free Wi‑Fi</li>
              <li className="px-3 py-1 bg-white border rounded">
                24/7 Reception
              </li>
              <li className="px-3 py-1 bg-white border rounded">Breakfast</li>
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={herobanner}
                alt="Hotel interior"
                className="w-full h-72 sm:h-96 object-cover transform hover:scale-105 transition"
              />
            </div>
            <div className="absolute -bottom-6 left-6 bg-white rounded-lg shadow-md px-4 py-3 flex items-center gap-4">
              <div className="text-sm text-gray-700">From</div>
              <div className="text-xl font-semibold text-gray-900">$49</div>
              <Link
                to="/book"
                className="ml-4 text-sm text-blue-600 hover:underline"
              >
                Check availability
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
