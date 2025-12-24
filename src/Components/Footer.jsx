import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <div className="text-lg font-semibold text-gray-900">Addis Hotel</div>
          <div className="mt-2 text-sm text-gray-600">
            Comfort & hospitality in the city center.
          </div>
        </div>

        <div className="flex flex-col">
          <div className="font-medium text-gray-900 text-sm">Explore</div>
          <nav className="mt-3 flex flex-col gap-2 text-sm">
            <Link to="/rooms" className="text-gray-600 hover:text-gray-900">
              Rooms
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-gray-900">
              Services
            </Link>
          </nav>
        </div>

        <div className="flex flex-col items-start">
          <div className="font-medium text-gray-900 text-sm">Contact</div>
          <div className="mt-2 text-sm text-gray-600">info@addishotel.com</div>
          <div className="text-sm text-gray-600">+251 11 123 4567</div>

          <div className="mt-4 flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-center">
          <div>
            &copy; {new Date().getFullYear()} Addis Hotel. All rights reserved.
          </div>
          <div className="mt-2 sm:mt-0 flex gap-4">
            <Link to="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link to="/terms" className="hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
