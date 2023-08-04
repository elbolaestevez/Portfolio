import React, { useContext } from "react";
import { translatorwords } from "../context/translator";
import Contact from "./Contact";
const About = () => {
  const { setC, setL, language, content } = useContext(translatorwords);
  return (
    <div
      name="about"
      className="w-full h-full pt-5 bg-[#0a192f] text-gray-300 sm:mt-20 mb-40 "
      id="about"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full ">
          <div className="justify-center text-center pb-8 pl-4">
            <p className="text-2xl sm:text-4xl font-bold inline border-b-4 border-pink-600">
              {content.about}
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-base sm:text-right sm:text-2xl font-bold">
            <p>{content.hola}</p>
          </div>
          <div>
            <p className="text-base sm:text-lg font-style: italic sm:base">
              {content.aboutme}
            </p>
          </div>
          <div className="text-base sm:text-right sm:text-2xl font-bold">
            <p>Experiencia:</p>
          </div>
          <div>
            <p className="text-base sm:text-lg font-style: italic sm:base">
              {content.aboutme2}
            </p>
            <p className="text-base sm:text-lg font-style: italic sm:base">
              {content.aboutme3}
            </p>
            <p className="text-base sm:text-lg font-style: italic sm:base">
              {content.aboutme4}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
