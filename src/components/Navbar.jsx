import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[50px] flex justify-between items-center px-4 bg-black text-gray-300">
      <div></div>
      <ul className="hidden md:flex gap-x-8">
        <li>
          <Link className="hover:underline" to="/" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline"
            to="/login"
            smooth={true}
            duration={500}
          >
            Login
          </Link>
        </li>
        {/* <li>
          <Link
            className="hover:underline"
            to="/main"
            smooth={true}
            duration={500}
          >
            Main
          </Link>
        </li> */}
        <li>
          <Link
            className="hover:underline"
            to="/form"
            smooth={true}
            duration={500}
          >
            Form
          </Link>
        </li>
      </ul>
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0f141c] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="/login" smooth={true} duration={500}>
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
