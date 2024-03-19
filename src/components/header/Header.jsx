import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import { MdLightMode } from "react-icons/md";
import { PiShoppingCartBold } from "react-icons/pi";
import { GrScorecard } from "react-icons/gr";
import Logo from "../../assets/logo.svg"
const Header = () => {
  return (
    <header>
		<nav className="container flex items-center justify-between space-x-10 py-6">
			<a href="index.html">
				<img src={Logo} width="139" height="26" alt="" />
			</a>

			<ul className="flex items-center space-x-5">
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<IoIosNotifications size={22} className=' text-green-400'/>
					</a>
				</li>
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                    <MdLightMode size={22} className=' text-green-400'/>
					</a>
				</li>
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                    <PiShoppingCartBold size={22} className=' text-green-400'/>
					</a>
				</li>
			</ul>
		</nav>
	</header>
  )
}

export default Header