import React from "react";
import { NavLink } from "react-router";

function Header(props) {
  return (
    <div className="bg-white border-b border-white shadow-sm">
      {/* <div className="mt-10"></div> */}

      <div className="container mx-auto flex items-center justify-between p-3">
        <div>
          <NavLink to="/" end>
            <h1 className="text-xl sm:text-2xl text-green-600 font-medium">
              Recipe Explorer
            </h1>
          </NavLink>
        </div>

        {/* <div className=""> */}
        <div className="flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded px-3 py-2 transition font-semibold sm:text-lg ${
                isActive
                  ? "bg-emerald-100 text-emerald-700"
                  : "text-slate-600 hover:text-slate-900"
              }`
            }
            end
          >
            Home
            {/* <p className="text-xl">Home</p> */}
          </NavLink>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              `rounded px-3 py-2 transition font-semibold sm:text-lg ${
                isActive
                  ? "bg-emerald-100 text-emerald-700"
                  : "text-slate-600 hover:text-slate-900"
              }`
            }
            end
          >
            Recipes
          </NavLink>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Header;
