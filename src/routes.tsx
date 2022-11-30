import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/projects' element={<Projects />}></Route>
    </Routes>
  );
}
