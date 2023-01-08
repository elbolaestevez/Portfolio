import React, { useContext } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { translatorwords } from "../context/translator";
import Santi from "../assets/Santi.png";
const Home = () => {
  const { setC, setL, language, content } = useContext(translatorwords);
  console.log(language);
  return (
    <div name="home" className="w-full h-screen pt-16 bg-[#0a192f]" id="home">
      <div className="mt-5">
        <select
          className="block mx-auto  p-2  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={language}
          onChange={(e) => {
            setL(e.target.value);
          }}
        >
          <option>english</option>
          <option>spanish</option>
        </select>
      </div>

      <div className="max-w-[1000px] mx-auto flex flex-col justify-center ">
        <img
          className="w-6/12 mx-auto pb-1.5 mb-10 md:w-4/12 md:mt-12	mt-20"
          src={Santi}
          alt="HTML icon"
        />

        <p className=" mx-auto text-[#8892b0] py-4 max-w-[700px]"></p>
        <header className="mb-16 group">
          <h1 className="mb-1 font-mono text-4xl text-gray-100 md:text-6xl text-center">
            <br className="block md:hidden" />
            <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform text-center">
              FullStack Developer
            </span>
            👋
            <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
          </h1>
        </header>
        <div>
          <button className="mx-auto text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <a href="#work">{content.viewWork}</a>
            <span className=" group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
