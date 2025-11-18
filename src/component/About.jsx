import React, { useState } from "react";
import { NavLink } from "react-router";

function About(props) {
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    { id: 1, title: "Burgger", description: "This is the first product description.", img: "images (2).jpeg" },
    { id: 2, title: "Product Two", description: "This is the second product description.", img: "images (3).jpeg" },
    { id: 3, title: "Product Three", description: "This is the third product description.", img: "images (3).jpeg" },
    { id: 4, title: "Product Three", description: "This is the third product description.", img: "images (3).jpeg" },
    { id: 5, title: "Product Three", description: "This is the third product description.", img: "images (2).jpeg" },
    { id: 6, title: "Product Three", description: "This is the third product description.", img: "images (3).jpeg" },
  ];

  // Filter products by ID if query is a number, otherwise by title
  const filteredProducts = searchQuery
    ? products.filter((p) => {
        const isNumber = !isNaN(searchQuery);
        if (isNumber) {
          return p.id === Number(searchQuery.trim());
        } else {
          return p.title.toLowerCase().includes(searchQuery.trim().toLowerCase());
        }
      })
    : products;

    const handleSearch = () => {
        setSearchQuery(query);
    }

  return (
    <div>
      {/* Search Section */}
      <div className="bg-white container mx-auto items-center justify-between flex border-b border-white shadow-md p-6 my-12 rounded-2xl">
        <div>
          <h2 className="text-2xl font-medium">Recipes</h2>
          <p className="text-gray-600">
            Browse and search for recipes. Click one to see the details.
          </p>
        </div>
        <div className="flex items-center gap-3 p-3">
          <div className="flex items-center w-80 border border-gray-300 rounded-full px-4 py-3 shadow-sm">
            <input
              type="text"
              placeholder="Search recipes by ID or title..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 outline-none text-sm"
            />
          </div>
          <button onClick={handleSearch} className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 cursor-pointer rounded-full text-sm font-medium">
          Search
        </button>
        </div>
      </div>

      {/* Product Cards */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {filteredProducts.map((product) => (
          <NavLink key={product.id} to={`/productdetail/ 
            ${product.id}
          `}
          >
            <div className="rounded-xl card bg-base-100 shadow-sm overflow-hidden">
              <img className="w-full" 
              src={product.img} 
              alt={product.title} 
              />
              <div className="card-body p-4">
                <h2 className="card-title text-2xl font-medium mb-2">{product.title}</h2>
                <p className="mb-2">{product.description}</p>
                <div className="card-actions justify-end">
                  <button className="text-blue-600 font-medium cursor-pointer">
                    View details →
                  </button>
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default About;
