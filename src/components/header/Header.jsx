import React, { useContext, useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { MdLightMode } from "react-icons/md";
import { PiShoppingCartBold } from "react-icons/pi";
import Logo from "../../assets/logo.svg";
import CartDetails from "../cine/CartDetails";
import { MovieContext, ThemeContext } from "../../context";
import { FaMoon } from "react-icons/fa";
const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const { cartData, setCartData } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleCartMovie =(event,movieId)=>{
    event.stopPropagation()
    const newCartMovie = cartData.filter((item)=>item.id !== movieId);
    setCartData(newCartMovie)
    if(newCartMovie.length === 0){
      setShowCart(false)
    }
  }

  return (
    <header>
      {showCart && <CartDetails onClose={() => setShowCart(false)} onDeleteCart={handleCartMovie} />}

      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <IoIosNotifications size={22} className=" text-green-400" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={()=>setDarkMode(darkMode => !darkMode)}
            >{
              darkMode ?<MdLightMode size={22} className=" text-green-400" /> :<FaMoon size={22} className=" text-green-400" />

            }
              
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              {cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {cartData.length}
                </span>
              )}
              <PiShoppingCartBold
                size={22}
                onClick={() => setShowCart(true)}
                className=" text-green-400"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
