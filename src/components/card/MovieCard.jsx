import React from 'react'
import Img01 from "../../assets/movie-1.png"
import { MdCardTravel } from "react-icons/md";
import { FaStar } from "react-icons/fa";
const MovieCard = () => {
  return (
    <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
    <img className="w-full object-cover" src={Img01} alt="" />
    <figcaption className="pt-4">
      <h3 className="text-xl mb-1">Iron Man</h3>
      <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
      <div className="flex items-center space-x-1 mb-5">
        <FaStar size={22} className=' text-orange-300'/>
        <FaStar size={22} className=' text-orange-300'/>
        <FaStar size={22} className=' text-orange-300'/>
        <FaStar size={22} className=' text-orange-300'/>
        <FaStar size={22} className=' text-orange-300'/>
      </div>
      <a
        className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
        href="#"
      >
        <MdCardTravel size={20}/>
        <span>$100 | Add to Cart</span>
      </a>
    </figcaption>
  </figure>
  )
}
export default MovieCard 