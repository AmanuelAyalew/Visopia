import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import herobanner from "../assets/herobanner.webp";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];
  return (
    <div>
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  src={herobanner}
                  alt="Logo"
                  className="h-10 w-auto object-contain"
                />
              </Link>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="text-gray-700 hover:text-blue-600 px-2 py-1 text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex md:items-center md:space-x-3">
              <Link
                to="/profile"
                className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
              >
                <FaUserCircle className="text-2xl" />
                <span>Profile</span>
              </Link>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
                className="p-2 inline-flex items-center justify-center rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {open ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {open && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1 border-t">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Profile;
