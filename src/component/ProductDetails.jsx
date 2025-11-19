import React, { useState } from "react";
import { useLocation, useParams } from "react-router";

function ProductDetails(props) {
  const { state } = useLocation();
  const [toggleOption, setToggleOption] = useState("");
  const product = state;
  const ingredients = state.ingredients;
  const steps = state.steps;
  // console.log(ingredients);
  // console.log(steps.state);
  return (
    <div>
      <div className="card card-side bg-white rounded-2xl overflow-hidden my-12 shadow-sm container mx-auto flex space-x-10">
        <div className="w-1/2">
          <img className="w-full" src={product.img} alt={product.title} />
          {/* <img
            className="w-full object-cover"
            src={product.img}
            alt={product.title}
          /> */}
        </div>

        <div className="card-body w-1/2 py-10">
          <h4 className="text-lg uppercase text-green-500 mb-4">
            recipes{" "}
            <span className="text-lg uppercase text-green-500">
              # [{product.id}]
            </span>
          </h4>
          <h2 className="card-title text-3xl font-semibold mb-4">
            {product.title}
          </h2>
          <p className="mb-6 text-lg text-gray-600">{product.description}</p>

          <div className="card-actions justify-end space-x-4">
            <button onClick={() => setToggleOption("ing")} className="btn btn-sm text-gray-800 hover:text-cyan-500 rounded-full border py-2 px-5 hover:border-cyan-500 font-semibold cursor-pointer">
              View ingredients
            </button>
            <button onClick={() => setToggleOption("step")} className="btn btn-sm text-gray-800 hover:text-cyan-500 rounded-full border py-2 px-5 hover:border-cyan-500 font-semibold cursor-pointer">
              View steps
            </button>
            <button className="bg-cyan-500 hover:bg-cyan-400 py-3 px-6 rounded-full text-black cursor-pointer font-semibold">
              Quick view
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl p-10 shadow-lg border border-white">
          <div className="space-x-12 text-lg">
            <button
              className="cursor-pointer font-medium text-gray-600 hover:text-gray-900"
              onClick={() => setToggleOption("ing")}
            >
              Ingredients
            </button>
            <button
              className="cursor-pointer font-medium text-gray-600 hover:text-gray-900"
              onClick={() => setToggleOption("step")}
            >
              Steps
            </button>
          </div>
          <div className="border-b border-gray-300 p-4"></div>
          {toggleOption === "ing" && (
            <div className="">
              {ingredients.map((ing) => {
                return (
                  <div className="bg-gray-50 border border-gray-300 p-3 rounded-md mt-6">
                    <div className="">
                      <p>{ing}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {toggleOption === "step" &&  (
            <div className="">
              {steps.map((step) => {
                return (
                  <div className="bg-gray-50 border border-gray-300 p-3 rounded-md mt-6">
                    <div>
                      <p>{step}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}         
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
