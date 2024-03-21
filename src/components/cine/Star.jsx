import React from "react";
import { FaStar } from "react-icons/fa";
const Star = ({ value }) => {
  const stars = Array(value).fill(FaStar);
  return (
    <>
      {stars.map((star, index) => {
        return <FaStar key={index} size={22} className=" text-orange-300" />;
      })}
    </>
  );
};

export default Star;
