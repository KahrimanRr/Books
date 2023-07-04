import React from "react";
import "./App.css";
import { NavBar } from "./layouts/NavbarAndFooter/Navbar";

import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { Homepage } from "./layouts/HomePage/Homepage";

export const App = () => {
  return (
    <div>
      <NavBar />
      <Homepage />
      <Footer />
    </div>
  );
};
