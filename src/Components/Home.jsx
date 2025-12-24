import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Hero from "./Hero.jsx";

import HotelsList from "./HotelList.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Featured Hotels
          </h2>
          <HotelsList />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
