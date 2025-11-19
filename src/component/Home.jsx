import React from "react";
import { NavLink } from "react-router";

function Home(props) {
  return (
    <div className="bg-white border border-white shadow-sm container mx-5 sm:mx-auto py-8 px-5 sm:px-10 my-12 rounded-2xl">
  <div className="mb-6 sm:mb-10">
    <p className="text-[18px] sm:text-[20px] uppercase text-green-400 mb-2 sm:mb-4">Welcome</p>
    <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold mb-4">
      Discover new dishes step by step
    </h2>
    <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
      Browse curated recipes, open quick views, and dive into ingredients or
      cooking steps without leaving the page. <br /> Perfect for learning
      the basics of React Router.
    </p>
  </div>
  <div>
    <NavLink to={"/product"}>
      <button className="bg-green-600 hover:bg-green-500 shadow-lg shadow-green-500 py-3 px-5 sm:py-3.5 sm:px-6 rounded-full cursor-pointer text-white text-base sm:text-lg w-full sm:w-auto">
        Explore Recipes
      </button>
    </NavLink>
  </div>
</div>

  );
}

export default Home;
