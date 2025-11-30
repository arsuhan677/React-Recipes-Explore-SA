import React from "react";
// import { useTodoStore } from './stores/todoStore'
import { Outlet } from "react-router";
import Header from "./Header";

export default function App() {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
}
