import React from "react";
import { NavLink } from "react-router";

function Home(props) {
  return (
    <div className="bg-white border border-white shadow-sm container mx-auto py-10 p-10 my-12 rounded-2xl">
      <div className="">
        <p className="text-[20px] uppercase text-green-400 mb-4">wellcome</p>
        <h2 className="text-5xl font-bold mb-4">
          Discover new dishes step by step
        </h2>
        <p className="text-xl text-gray-600 mb-6">
          Browse curated recipes, open quick views, and dive into ingredients or
          cooking steps without leaving the page. <br /> Perfect for learning
          the basics of React Router.
        </p>
      </div>
      <div className="">
        <NavLink to={"/product"} >
        <button className="bg-green-600 hover:bg-green-500 shadow-lg shadow-green-500 py-3.5 px-6 rounded-full cursor-pointer text-white text-lg">Explore Recipes</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
