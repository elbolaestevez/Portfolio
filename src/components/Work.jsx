import React, { useContext } from "react";
import { translatorwords } from "../context/translator";
import { data } from "../data/data.js";
import { Link } from "react-router-dom";
const Work = () => {
  const project = data;

  const { setC, setL, language, content } = useContext(translatorwords);
  return (
    <div
      name="work"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
      id="work"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center	">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 ">
            {content.work}
          </p>
          <p className="mt-8">
            (<b>Leer</b>:Si haces click en Code, te lleva a github y si haces
            click en el título te lleva a la descripción del proyecto(con todas
            sus fotos))
          </p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider hover:bg-sky-700 ">
                  <Link to={item.name}>{item.name}</Link>
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Video
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
