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

      <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full">
        <img
          className="w-6/12 mx-auto pb-1.5 mb-10"
          src={Santi}
          alt="HTML icon"
        />

        <h2 className="text-4xl pt-3 mx-auto sm:text-5xl font-bold text-[#ccd6f6]">
          Full Stack Developer.
        </h2>
        <p className=" mx-auto text-[#8892b0] py-4 max-w-[700px]"></p>
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
