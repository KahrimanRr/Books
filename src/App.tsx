import React from "react";
import "./App.css";
import { NavBar } from "./layouts/NavbarAndFooter/Navbar";

import { LibraryServices } from "./layouts/HomePage/components/LibraryServices";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { Homepage } from "./layouts/HomePage/Homepage";

export const App = () => {
  return (
    <div>
      <NavBar />
      <Homepage />
      <LibraryServices />
      <Footer />
    </div>
  );
};
