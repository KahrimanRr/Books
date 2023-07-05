import React from "react";
import "./App.css";
import { NavBar } from "./layouts/NavbarAndFooter/Navbar";

import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { Homepage } from "./layouts/HomePage/Homepage";
import { SearchBooksPage } from "./layouts/SearchBooksPage/SearchBooksPage";
import { Route } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <NavBar />
      <Route path="/">
        <Homepage />
      </Route>
      <Route path="/search">
        <SearchBooksPage />
      </Route>
      <Footer />
    </div>
  );
};
