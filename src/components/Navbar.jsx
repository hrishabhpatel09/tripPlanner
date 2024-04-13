import React, { forwardRef } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
import logo from '../assets/logo.jpg'

const Navbar = forwardRef(function (props,ref) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="bg-gray-800 h-14 flex items-center text-white justify-between sm:" ref={ref}>
      <div className="ml-2">
        <img src={logo} alt="logo" className="h-8"/>
      </div>
      <div className="hidden sm:block">
        <ul className="flex gap-10 cursor-pointer">
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-[#4cb5f9]"
                  : "hover:text-[#4cb5f9]"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-[#4cb5f9]"
                  : "hover:text-[#4cb5f9]"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/acheivements"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-[#4cb5f9]"
                  : "hover:text-[#4cb5f9]"
              }
            >
              Our Acheivements
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-[#4cb5f9]"
                  : "hover:text-[#4cb5f9]"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex">
        <div className={isActive?'hidden':'block mr-2 sm:hidden'}>
          <RxHamburgerMenu onClick={()=>setIsActive(!isActive)}/>
        </div>
        <div className={isActive?'block mr-2':'hidden'}>
          <MdOutlineCancel onClick={()=>setIsActive(!isActive)}/>
        </div>
      </div>
    </div>
  );
}
)
export default Navbar;
