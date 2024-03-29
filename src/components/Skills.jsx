import React, { useContext } from "react";
import { translatorwords } from "../context/translator";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import PostgreSQL from "../assets/PostgreSQL.png";
import Mongo from "../assets/mongo.png";
import Web3 from "../assets/Web3.png";
import Metamask from "../assets/metamask.png";
import Ethereum from "../assets/ethereum.png";
import Tailwind from "../assets/tailwind.png";
import Nexjs from "../assets/Nextjs.png";
import Typescript from "../assets/typescript.png";
import Docker from "../assets/docker.png";
import Aws from "../assets/aws.png";

const Skills = () => {
  const { content } = useContext(translatorwords);
  return (
    <div
      name="skills"
      className="w-full bg-[#0a192f] text-gray-300 mb-40"
      id="skills"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="justify-center text-center mb-8	">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            {content.skills}
          </p>
        </div>

        <div
          className="w-full grid grid-cols-2 sm:grid-cols-4  gap-4 text-center py-8"
          data-aos-offset="400"
          data-aos="zoom-in"
        >
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">Html</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={Mongo} alt="HTML icon" />
            <p className="my-4">MONGO DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={PostgreSQL} alt="HTML icon" />
            <p className="my-4">POSTGRESQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={Typescript} alt="HTML icon" />
            <p className="my-4">Typescript</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={FireBase} alt="HTML icon" />
            <p className="my-4">FIREBASE</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={Web3} alt="HTML icon" />
            <p className="my-4">WEB3</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={Metamask} alt="HTML icon" />
            <p className="my-4">Metamask</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={Ethereum} alt="HTML icon" />
            <p className="my-4">Ethereum</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">Tailwind</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-16 mx-auto mt-5" src={Nexjs} alt="HTML icon" />
            <p className="my-4">Nextjs</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-16 mx-auto mt-5" src={Docker} alt="HTML icon" />
            <p className="my-4">Docker</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-16 mx-auto mt-5" src={Aws} alt="HTML icon" />
            <p className="my-4">Aws</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
