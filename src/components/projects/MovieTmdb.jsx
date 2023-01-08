import React, { useContext } from "react";
import { translatorwords } from "../../context/translator";
import DetalleMovie from "../../assets/projects/DetalleMovie.png";
import HomeMovie from "../../assets/projects/homeMovie.png";
import Registro from "../../assets/projects/registroMovie.png";
import Favoritos from "../../assets/projects/favoritosMovie.png";
import Movietmbd2 from "../../assets/projects/Movietmdb.png";
const MovieTmdb = () => {
  const { setC, setL, language, content } = useContext(translatorwords);

  return (
    <div className="w-full h-full pt-16 bg-[#0a192f] mb-20">
      <div className="mb-36 mt-20">
        <img
          className="w-4/5 mx-auto sm:w-2/5 mx-auto"
          src={HomeMovie}
          alt="HTML icon"
        />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4 text-2x1 text-white text-justify font-serif sm:text-4xl">
            {content.mhome}
          </p>
        </div>
      </div>
      <div className="mb-36 mt-20">
        <img
          className="w-4/5 mx-auto sm:w-2/5 mx-auto"
          src={DetalleMovie}
          alt="HTML icon"
        />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4 text-2x1 text-white text-justify font-serif sm:text-4xl">
            {content.mdetalle}
          </p>
        </div>
      </div>

      <div className="mb-36 mt-20">
        <img
          className="w-4/5 mx-auto sm:w-2/5 mx-auto"
          src={Favoritos}
          alt="HTML icon"
        />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4 text-2x1 text-white text-justify font-serif sm:text-4xl">
            {content.mfavoritos}
          </p>
        </div>
      </div>
      <div className="mb-36 mt-20">
        <img
          className="w-4/5 mx-auto sm:w-2/5 mx-auto"
          src={Registro}
          alt="HTML icon"
        />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4 text-2x1 text-white text-justify font-serif sm:text-4xl">
            {content.mregistro}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieTmdb;
