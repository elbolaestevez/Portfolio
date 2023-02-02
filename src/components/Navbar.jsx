import React, { useState, useContext } from "react";

import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { translatorwords } from "../context/translator";
import { BsFillPersonLinesFill } from "react-icons/bs";

// import { Link } from "react-scroll";
import { Link } from "react-router-dom";

import Santipdf from "../assets/Santiago2023.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const { setC, setL, language, content } = useContext(translatorwords);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <Link to="/" smooth={true} duration={500}>
          <p class="text-3xl sm:text-5xl font-bold text-[#ccd6f6]">
            SANTI ESTEVEZ
          </p>
        </Link>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <a href="#home" smooth={true} duration={500}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" smooth={true} duration={500}>
            {content.about}
          </a>
        </li>
        <li>
          <a href="#skills" smooth={true} duration={500}>
            {content.skills}
          </a>
        </li>
        <li>
          <a href="#work" smooth={true} duration={500}>
            {content.work}
          </a>
        </li>
        <li>
          <a href="#contact" smooth={true} duration={500}>
            {content.contact}
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <a
            href="#home"
            onClick={handleClick}
            to="#home"
            smooth={true}
            duration={500}
          >
            Home
          </a>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <a
            href="#about"
            onClick={handleClick}
            to="#about"
            smooth={true}
            duration={500}
          >
            About
          </a>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <a
            href="#skills"
            onClick={handleClick}
            to="#skills"
            smooth={true}
            duration={500}
          >
            Skills
          </a>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <a
            href="#work"
            onClick={handleClick}
            to="#work"
            smooth={true}
            duration={500}
          >
            Work
          </a>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <a
            href="#contact"
            onClick={handleClick}
            to="#contact"
            smooth={true}
            duration={500}
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="http://linkedin.com/in/santiago-estevez-a04298139"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/elbolaestevez"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={Santipdf}
            >
              Mi Cv <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
