import React, { useState } from "react";
import { NavLink, Outlet } from "react-router";

function Product(props) {
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      id: 1,
      title: "Burgger",
      description: "This is the first product description.",
      img: "/images/images (2).jpeg",
      ingredients: [
        "0Salt & pepper",
        "Fresh basil leaves",
        "1/4 cup olive oil",
        "2 cups cherry tomatoes",
        "1/4 cup olive oil",
        "2 cups cherry tomatoes",
      ],
      steps: [
        "0Toss pasta with sauce and basil, season to taste.",
        "Add tomatoes and simmer until softened.",
        "Sauté garlic in olive oil until fragrant.",
        "Cook pasta according to package instructions.",
        "Sauté garlic in olive oil until fragrant.",
        "Cook pasta according to package instructions.",
      ],
    },
    {
      id: 2,
      title: "Product Two",
      description: "This is the 2nd product description.",
      img: "/images/images (3).jpeg",
      ingredients: [
        "1Salt & pepper",
        "Fresh basil leaves",
        "1/4 cup olive oil",
        "2 cups cherry tomatoes",
        "1/4 cup olive oil",
        "2 cups cherry tomatoes",
      ],
      steps: [
        "1Toss pasta with sauce and basil, season to taste.",
        "Add tomatoes and simmer until softened.",
        "Sauté garlic in olive oil until fragrant.",
        "Cook pasta according to package instructions.",
        "Sauté garlic in olive oil until fragrant.",
        "Cook pasta according to package instructions.",
      ],
    },
    {
      id: 3,
      title: "Product Three",
      description: "This is the third product description.",
      img: "/images/images (3).jpeg",
      ingredients: [
        "2Salt & pepper",
        "Fresh basil leaves",
        "1/4 cup olive oil",
        "2 cups cherry tomatoes",
        "1/4 cup olive oil",
        "2 cups cherry tomatoes",
      ],
      steps: [
        "2Toss pasta with sauce and basil, season to taste.",
        "Add tomatoes and simmer until softened.",
        "Sauté garlic in olive oil until fragrant.",
        "Cook pasta according to package instructions.",
        "Sauté garlic in olive oil until fragrant.",
        "Cook pasta according to package instructions.",
      ],
    },
    {
      id: 4,
      title: "Product Three",
      description: "This is the third product description.",
      img: "/images/images (3).jpeg",
      ingredients: [
        "3Salt & pepper",
        "Fresh basil leaves",
        "1/4 cup olive oil",
        "2 cups cherry tomatoes",
        "1/4 cup olive oil",
        "2 cups cherry tomatoes",
      ],
      steps: [
        "3Toss pasta with sauce and basil, season to taste.",
        "Add tomatoes and simmer until softened.",
        "Sauté garlic in olive oil until fragrant.",
        "Cook pasta according to package instructions.",
        "Sauté garlic in olive oil until fragrant.",
        "Cook pasta according to package instructions.",
      ],
    },
    {
      id: 5,
      title: "Product Three",
      description: "This is the third product description.",
      img: "/images/images (2).jpeg",
      ingredients: [
        "4Salt & pepper",
        "Fresh basil leaves",
        "1/4 cup olive oil",
        "2 cups cherry tomatoes",
        "1/4 cup olive oil",
        "2 cups cherry tomatoes",
      ],
      steps: [
        "4Toss pasta with sauce and basil, season to taste.",
        "Add tomatoes and simmer until softened.",
        "Sauté garlic in olive oil until fragrant.",
        "Cook pasta according to package instructions.",
        "Sauté garlic in olive oil until fragrant.",
        "Cook pasta according to package instructions.",
      ],
    },
    {
      id: 6,
      title: "Product Three",
      description: "This is the third product description.",
      img: "/images/images (3).jpeg",
      ingredients: [
        "5Salt & pepper",
        "Fresh basil leaves",
        "1/4 cup olive oil",
        "2 cups cherry tomatoes",
        "1/4 cup olive oil",
        "2 cups cherry tomatoes",
      ],
      steps: [
        "5Toss pasta with sauce and basil, season to taste.",
        "Add tomatoes and simmer until softened.",
        "Sauté garlic in olive oil until fragrant.",
        "Cook pasta according to package instructions.",
        "Sauté garlic in olive oil until fragrant.",
        "Cook pasta according to package instructions.",
      ],
    },
    {
      id: 7,
      title: "Product Three",
      description: "This is the 7th product description.",
      img: "/images/images (3).jpeg",
      ingredients: [
        "5Salt & pepper",
        "Fresh basil leaves",
        "1/4 cup olive oil",
        "2 cups cherry tomatoes",
        "1/4 cup olive oil",
        "2 cups cherry tomatoes",
      ],
      steps: [
        "5Toss pasta with sauce and basil, season to taste.",
        "Add tomatoes and simmer until softened.",
        "Sauté garlic in olive oil until fragrant.",
        "Cook pasta according to package instructions.",
        "Sauté garlic in olive oil until fragrant.",
        "Cook pasta according to package instructions.",
      ],
    },
    {
      id: 8,
      title: "Product Three",
      description: "This is the 8th product description.",
      img: "/images/images (3).jpeg",
      ingredients: [
        "5Salt & pepper",
        "Fresh basil leaves",
        "1/4 cup olive oil",
        "2 cups cherry tomatoes",
        "1/4 cup olive oil",
        "2 cups cherry tomatoes",
      ],
      steps: [
        "5Toss pasta with sauce and basil, season to taste.",
        "Add tomatoes and simmer until softened.",
        "Sauté garlic in olive oil until fragrant.",
        "Cook pasta according to package instructions.",
        "Sauté garlic in olive oil until fragrant.",
        "Cook pasta according to package instructions.",
      ],
    },
  ];

  // Filter
  const filteredProducts = searchQuery
    ? products.filter((p) => {
        const isNumber = !isNaN(searchQuery);
        if (isNumber) {
          return p.id === Number(searchQuery.trim());
        } else {
          return p.title
            .toLowerCase()
            .includes(searchQuery.trim().toLowerCase());
        }
      })
    : products;

  const handleSearch = () => {
    setSearchQuery(query);
  };

  return (
    <div>
  {/* Search Section */}
  <div className="bg-white container mx-5 sm:mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-white shadow-md p-4 sm:p-10 my-8 sm:my-12 rounded-2xl gap-4 sm:gap-0">
    <div className="mb-4 sm:mb-0">
      <h2 className="text-xl sm:text-2xl font-medium">Recipes</h2>
      <p className="text-gray-600 text-sm sm:text-base">
        Browse and search for recipes. Click one to see the details.
      </p>
    </div>
    <div className="flex sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
      <div className="flex items-center w-full sm:w-80 border border-gray-300 rounded-full px-4 py-2 shadow-sm">
        <input
          type="text"
          placeholder="Search recipes title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 outline-none text-sm sm:text-base"
        />
      </div>
      <button
        onClick={handleSearch}
        className="bg-green-600 hover:bg-green-500 text-white sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium"
      >
        Search
      </button>
    </div>
  </div>

  {/* Product Cards */}
  <div className="container mx-5 sm:mx-auto grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 py-6 sm:py-10">
    {filteredProducts.map((product) => (
      <NavLink
        key={product.id}
        state={product}
        to={`/productDetails/${product.id}`}
      >
        <div className="rounded-xl card bg-white shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img
            className="w-full h-36 sm:h-56 md:h-60 object-cover"
            src={product.img}
            alt={product.title}
          />
          <div className="card-body p-4">
            <h2 className="card-title text-lg sm:text-xl md:text-2xl font-medium mb-2">
              {product.title}
            </h2>
            <p className="text-sm sm:text-base mb-2">{product.description}</p>
            <div className="card-actions justify-end">
              <button className="text-blue-600 font-medium text-sm sm:text-base cursor-pointer">
                View details →
              </button>
            </div>
          </div>
        </div>
      </NavLink>
    ))}
  </div>
  <Outlet />
</div>

  );
}

export default Product;
