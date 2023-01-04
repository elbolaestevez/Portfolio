import React from "react";
import DetalleMovie from "../../assets/projects/DetalleMovie.png";
import HomeMovie from "../../assets/projects/homeMovie.png";
import Registro from "../../assets/projects/registroMovie.png";
import Favoritos from "../../assets/projects/favoritosMovie.png";
import Movietmbd2 from "../../assets/projects/Movietmdb.png";
const MovieTmdb = () => {
  return (
    <div className="w-full h-full pt-16 bg-[#0a192f] mb-20">
      <div className="mb-36 mt-20">
        <img className="w-2/5 mx-auto" src={HomeMovie} alt="HTML icon" />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4 text-4xl text-white text-justify font-style: italic">
            Esta es la pantalla de inicio, donde vemos un Carrousel con las
            mejores peliculas que van pasando automaticamente. Tenemos un
            navegador, donde nos lleva al Registro de la pagina, a los
            favoritos, a los usuarios registrados y al Home. Tambien tenemos dos
            inputs, una para peliculas y otra para series donde al colocar un
            nombre nos tira el cartel abajo con todas sus peliculas o series.
          </p>
        </div>
      </div>
      <div className="mb-36 mt-20">
        <img className="w-2/5 mx-auto" src={DetalleMovie} alt="HTML icon" />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4 text-4xl text-white text-justify font-style: italic">
            Aca podemos ver el detalle de una pelicula que quiero seleccionar
            con su puntuacion, su titulo, y un detalle. Ademas también tenemos
            un botón viewMore donde al clickear se abre un texto con la critica
            de la pelicula que fue sacado a través de la libreria Puppeteer con
            Web Scraping.
          </p>
        </div>
      </div>

      <div className="mb-36 mt-20">
        <img className="w-2/5 mx-auto" src={Favoritos} alt="HTML icon" />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4 text-4xl text-white text-justify font-style: italic">
            Aca podemos ver las peliculas favoritas de cada usuario, donde uno
            puede removerlas sin actualizar la pagina. Ademas al hacer click en
            el nombre te lleva al detalle de la pelicula
          </p>
        </div>
      </div>
      <div className="mb-36 mt-20">
        <img className="w-2/5 mx-auto" src={Registro} alt="HTML icon" />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4 text-4xl text-white text-justify font-style: italic">
            Aca el usuario de puede Loguiar a la pagina con su email y la
            contraseña. Simple, fue uno de mis primeros proyectos y al tocar
            Registrarse te lleva a otra ruta dónde podemos crear un usuario.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieTmdb;
