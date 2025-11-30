import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Product from "./component/Product.jsx";
import Home from "./component/Home.jsx";
import ProductDetails from "./component/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      {
        path: "/product",
        Component: Product,
      },
      {
        path: "/productDetails/:producId", Component: ProductDetails
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="min-h-screen bg-amber-50">
      <RouterProvider router={router} />,
    </div>
  </StrictMode>
);
