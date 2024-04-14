import React, { forwardRef } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
import logo from '../assets/logo.jpg'
import {useDispatch} from 'react-redux'
import { toogle } from "../store/generalSlice.js";

const Navbar = forwardRef(function (props,ref) {
  const dispatch = useDispatch()
  const [isActive, setIsActive] = useState(false);
  const showMenu = () =>{
    setIsActive(!isActive)
    dispatch(toogle())
  }
  const hideMenu = () =>{
    setIsActive(!isActive)
    dispatch(toogle())
  }
  return (
    <div className="bg-[#212832] h-14 flex items-center text-white justify-between" ref={ref}>
      <div className="ml-2">
        <img src={logo} alt="logo" className="h-8"/>
      </div>
      <div className="hidden sm:block">
        <ul className="flex gap-10 cursor-pointer">
          <li>
            <NavLink
            style={{ fontSize: '14px', padding: '8px 20px' }}
              to=""
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-[#4cb5f9] bg-[#283643] rounded-lg"
                  : " w-[100%] hover:text-[#4cb5f9]"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
            style={{ fontSize: '14px', padding: '8px 20px' }}
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-[#4cb5f9] bg-[#283643] rounded-lg"
                  : "hover:text-[#4cb5f9]"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
            style={{ fontSize: '14px', padding: '8px 20px' }}
              to="/acheivements"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-[#4cb5f9] bg-[#283643] rounded-lg"
                  : "hover:text-[#4cb5f9]"
              }
            >
              Our Acheivements
            </NavLink>
          </li>
          <li>
            <NavLink
            style={{ fontSize: '14px', padding: '8px 20px' }}
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-[#4cb5f9] bg-[#283643] rounded-lg"
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
          <RxHamburgerMenu onClick={showMenu}/>
        </div>
        <div className={isActive?'block mr-2':'hidden'}>
          <MdOutlineCancel onClick={hideMenu}/>
        </div>
      </div>
    </div>
  );
}
)
export default Navbar;
