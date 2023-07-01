import React from "react";
import "./App.css";
import { NavBar } from "./layouts/NavbarAndFooter/Navbar";
import { ExploreTopBooks } from "./layouts/HomePage/ExploreTopBooks";

function App() {
  return (
    <div>
      <NavBar />
      <ExploreTopBooks />;
    </div>
  );
}

export default App;
