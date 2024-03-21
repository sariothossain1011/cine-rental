import React, { Fragment, useReducer, useState } from "react";

import { MovieContext, ThemeContext } from "./context/index.js";
import { Toaster } from "react-hot-toast";
import Page from "./Page.jsx";
import { cartReducer, initailState } from "./reducer/CartReducer.js";
export default function App() {
  // const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  const [state, dispatch] = useReducer(cartReducer, initailState);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
          <Toaster />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
