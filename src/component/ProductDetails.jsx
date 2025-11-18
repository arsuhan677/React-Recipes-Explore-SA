import React from "react";

function ProductDetails(props) {
  return (
    <div>
      <div className="card card-side bg-white rounded-2xl overflow-hidden my-12 shadow-sm container mx-auto flex space-x-10">
        <div className="w-1/2">
          <img
            className="w-full object-cover"
            src="images (2).jpeg"
            alt="Movie"
          />
        </div>

        <div className="card-body w-1/2 py-10">
          <h4 className="text-lg uppercase text-green-500 mb-4">
            recipes <span className="text-lg uppercase text-green-500">#3</span>
          </h4>
          <h2 className="card-title text-3xl font-semibold mb-4">
            New movie is released!
          </h2>
          <p className="mb-6 text-lg text-gray-600">
            Click the button to watch on Jetflix app.
          </p>

          <div className="card-actions justify-end space-x-4">
            <button className="btn btn-sm text-gray-800 hover:text-cyan-500 rounded-full border py-2 px-5 hover:border-cyan-500 font-semibold cursor-pointer">
              View ingredients
            </button>
            <button className="btn btn-sm text-gray-800 hover:text-cyan-500 rounded-full border py-2 px-5 hover:border-cyan-500 font-semibold cursor-pointer">
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
            <button className="cursor-pointer font-medium text-gray-600 hover:text-gray-900">Ingredients</button>
            <button className="cursor-pointer font-medium text-gray-600 hover:text-gray-900">Steps</button>
          </div>
          <div className="border-b border-gray-300 p-4"></div>
          <div>wkjhdfn;scjx</div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
