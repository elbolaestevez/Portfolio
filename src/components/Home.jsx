import React, { useContext, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { translatorwords } from "../context/translator";
import Santi from "../assets/perfil.png";
import Typed from "typed.js";

const Home = () => {
  const { setL, language, content } = useContext(translatorwords);

  useEffect(() => {
    const typed = new Typed("#name", {
      strings: ["Full Stack Developer"],
      typeSpeed: 150,
      backSpeed: 150,
      startDelay: 400,
      backDelay: 2000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div
      name="home"
      className="w-full h-screen pt-16 bg-[#0a192f] mb-4 sm:mb-40"
      id="home"
    >
      <div className="mt-5 pr-8 flex justify-end">
        <select
          className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={language}
          onChange={(e) => {
            setL(e.target.value);
          }}
        >
          <option>english</option>
          <option>spanish</option>
        </select>
      </div>

      <div className=" mx-auto flex flex-col justify-center ">
        <img
          className="w-6/12 mx-auto pb-1.5 mb-10 sm:w-3/12 md:w-3/12 lg:w-2/12 sm:mt-12	mt-20"
          src={Santi}
          alt="HTML icon"
        />

        <p className=" mx-auto text-[#8892b0] py-4"></p>
        <div className="mb-16 group">
          <h1 className="mb-1 font-mono text-3xl  text-gray-100 sm:text-6xl text-center">
            <br className="block sm:hidden" />
            <span id="name" className="text-secondary"></span>
            👋
            <span className="box-border sm:inline-block w-1 h-10 ml-2 -mb-2 bg-white sm:-mb-4 sm:h-16 animate-cursor will-change-transform"></span>
          </h1>
        </div>
        <div>
          <a className="w-full bg-yellow-300" href="#work">
            <button className="mx-auto text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              {content.viewWork}

              <span className=" group-hover:rotate-90 duration-300 ">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
