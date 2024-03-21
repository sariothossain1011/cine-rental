import React, { Fragment, useContext, useState } from "react";
import Img01 from "../../assets/movie-1.png";
import { MdCardTravel } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { getMovieUrl } from "../../utility/cine-utility";
import Star from "./Star";
import MovieDetailsModal from "./MovieDetailsModal";
import { MovieContext } from "../../context";
import toast from "react-hot-toast";
const MovieCard = ({ movies }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { state, dispatch } = useContext(MovieContext);

const handleAddToCart = (event, movie) => {
  event.stopPropagation();

  const found = state.cartData.find((item) => item.id === movie.id);

  if (!found) {
    dispatch({
      type:"ADD_TO_CART",
      payload:{...movie}
    });
    toast.success(`${movie.title} has been added successfully`);
    setShowModal(false);
  } else {
    toast.error(`The movie ${movie.title} has been added to the cart already!`);
  }
};



  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };
  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  return (
    <>
      {movies.map((movie) => {
        return (
          <Fragment key={movie.id}>
            {showModal && (
              <MovieDetailsModal
                movie={selectedMovie}
                onClose={handleModalClose}
                onClickAddToCart={handleAddToCart}
              />
            )}

            <figure
         
              className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
            >
              {" "}
              <a href="#" onClick={() => handleMovieSelection(movie)}>
                <img
                  className="w-full object-cover h-96"
                  src={getMovieUrl(movie.cover)}
                  alt={movie.title}
                />
                <figcaption className="pt-4">
                  <h3 className="text-xl mb-1">{movie.title}</h3>
                  <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
                  <div className="flex items-center space-x-1 mb-5">
                    <Star value={movie.rating} />
                  </div>
                  <button
                    className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                    href="#"
                    onClick={(e) => handleAddToCart(e, movie)}
                  >
                    <MdCardTravel size={20} />
                    <span>${movie.price} | Add to Cart</span>
                  </button>
                </figcaption>
              </a>
            </figure>
          </Fragment>
        );
      })}
    </>
  );
};
export default MovieCard;
