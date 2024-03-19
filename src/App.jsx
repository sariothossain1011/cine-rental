import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Sidebar from "./components/header/Siderbar";
import MovieList from "./components/movieList/MovieList";

export default function App() {
  return (
    <>
      <div className="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
        <Header />
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
        <Footer/>
      </div>
    </>
  );
}
