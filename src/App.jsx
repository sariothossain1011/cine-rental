import React, { Fragment, useState } from "react";

import { MovieContext, ThemeContext } from "./context/index.js";
import { Toaster } from "react-hot-toast";
import Page from "./Page.jsx";
export default function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ cartData, setCartData }}>
         <Page/>
        </MovieContext.Provider>
      </ThemeContext.Provider>
      <Toaster />
    </>
  );
}
