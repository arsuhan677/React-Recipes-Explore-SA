import React from "react";
// import { useTodoStore } from './stores/todoStore'
import { Outlet } from "react-router";
import Header from "./component/Nav/Header";
import Footer from "./component/Nav/Footer";

export default function App() {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>
      <div className="">
        {/* <Footer /> */}
      </div>
    </div>
  );
}
