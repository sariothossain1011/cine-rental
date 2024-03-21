import React, { useContext } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Sidebar from "./components/header/Siderbar";
import MovieList from "./components/movieList/MovieList";
import { ThemeContext } from "./context";
const Page = () => {
    const{darkMode}= useContext(ThemeContext);
  return (
    <div className={`h-full w-full ${darkMode ? "dark":""}`}>
        <Header />
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
        <Footer />
    </div>
  );
};

export default Page;
