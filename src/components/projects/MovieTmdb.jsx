import React from "react";
import DetalleMovie from "../../assets/projects/DetalleMovie.png";
import HomeMovie from "../../assets/projects/homeMovie.png";
import Registro from "../../assets/projects/registroMovie.png";
import Favoritos from "../../assets/projects/favoritosMovie.png";
import Movietmbd2 from "../../assets/projects/Movietmdb.png";
const MovieTmdb = () => {
  return (
    <div className="w-full h-full pt-16 bg-[#0a192f]">
      <div className="mt-5"></div>
      <div>
        <img className="w-3/5 mx-auto" src={DetalleMovie} alt="HTML icon" />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4  text-white text-justify">
            Aca podemos ver el detalle de una pelicula que quiero seleccionar
            con su puntuacion, su titulo, y un detalle. Ademas también tenemos
            un botón viewMore donde al clickear se abre un texto con la critica
            de la pelicula que fue sacado a través de la libreria Puppeteer con
            Web Scraping.
          </p>
        </div>
      </div>
      <div>
        <img className="w-3/5 mx-auto" src={HomeMovie} alt="HTML icon" />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4  text-white text-justify">
            Esta es la pantalla de inicio, donde vemos un Carrousel con las
            mejores peliculas que van pasando automaticamente. Tenemos un
            navegador, donde nos lleva al Registro de la pagina, a los
            favoritos, a los usuarios registrados y al Home. Tambien tenemos dos
            inputs, una para peliculas y otra para series donde al colocar un
            nombre nos tira el cartel abajo con todas sus peliculas o series.
          </p>
        </div>
      </div>
      <div>
        <img className="w-3/5 mx-auto" src={Favoritos} alt="HTML icon" />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4  text-white text-justify">
            Aca podemos ver las peliculas favoritas de cada usuario, donde uno
            puede removerlas sin actualizar la pagina. Ademas al hacer click en
            el nombre te lleva al detalle de la pelicula
          </p>
        </div>
      </div>
      <div>
        <img className="w-3/5 mx-auto" src={Registro} alt="HTML icon" />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4  text-white text-justify">
            Aca podemos ver el detalle de una pelicula que quiero seleccionar
            con su puntuacion, su titulo, y un detalle. Ademas también tenemos
            un botón viewMore donde al clickear se abre un texto con la critica
            de la pelicula que fue sacado a través de la libreria Puppeteer con
            Web Scraping.
          </p>
        </div>
      </div>
      <div>
        <img className="w-3/5 mx-auto" src={Movietmbd2} alt="HTML icon" />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4  text-white text-justify">
            Aca podemos ver el detalle de una pelicula que quiero seleccionar
            con su puntuacion, su titulo, y un detalle. Ademas también tenemos
            un botón viewMore donde al clickear se abre un texto con la critica
            de la pelicula que fue sacado a través de la libreria Puppeteer con
            Web Scraping.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieTmdb;
