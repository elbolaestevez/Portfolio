import React, { useContext } from "react";
import { translatorwords } from "../../context/translator";
import Home from "../../assets/projects/itesahome.png";
import Login from "../../assets/projects/LoginItesa.png";
import Registro from "../../assets/projects/registroItesa.pg.png";
import FA from "../../assets/projects/2faItesa.png";
import ItesaMain from "../../assets/projects/Itesa.png";
import Token from "../../assets/projects/tokenItesa.png";
import Mail from "../../assets/projects/NodemailerItesa.png";

import Ranking from "../../assets/projects/ranking.png";
import Admin from "../../assets/projects/AdministradorDePremios.png";
import Milestone from "../../assets/projects/Milestone.png";

const Itesa = () => {
  const { setC, setL, language, content } = useContext(translatorwords);

  return (
    <div className="w-full  pt-16 bg-[#0a192f]">
      <div className="mb-36 mt-20 ">
        <img
          className="w-3/5 mx-auto sm:w-2/5 mx-auto  "
          src={Home}
          alt="HTML icon"
        />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4 text-2x1 text-white text-justify font-serif sm:text-2xl">
            Esta es la primera página que podemos ver en el proyecto. Para poder
            ir a nuestro home uno necesita registrarse, por lo tanto abajo se
            ven dos iconos para registrarse y luego loguiarse.
          </p>
        </div>
      </div>
      <div className="mb-36 mt-20">
        <img
          className="w-3/5 mx-auto sm:w-2/5 mx-auto"
          src={Login}
          alt="HTML icon"
        />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4 text-2x1 text-white text-justify font-serif sm:text-2xl">
            Acá el usuario se loguea a la página web, también puede tocar que se
            olvidó la contraseña, y le va a llegar un mail al usuario para
            recuperarla. También podemos visualizar lo que escribimos en la
            contraseña.
          </p>
        </div>
      </div>

      <div className="mb-36 mt-20">
        <img
          className="w-3/5 mx-auto sm:w-2/5 mx-auto"
          src={Registro}
          alt="HTML icon"
        />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4 text-2x1 text-white text-justify font-serif sm:text-2xl">
            Aca el usuario se regista a nuestra página y tiene un código de
            referido para aumentar los referidos del usuario que te recomienda.
          </p>
        </div>
      </div>
      <div className="mb-36 mt-20">
        <img
          className="w-3/5 mx-auto sm:w-2/5 mx-auto"
          src={FA}
          alt="HTML icon"
        />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4 text-2x1 text-white text-justify font-serif sm:text-2xl">
            Doble código de verificación que te llega por mail para hacer mas
            segura la página.
          </p>
        </div>
      </div>
      <div className="mb-36 mt-20">
        <img
          className="w-3/5 mx-auto sm:w-1/5 mx-auto"
          src={ItesaMain}
          alt="HTML icon"
        />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4 text-2x1 text-white text-justify font-serif sm:text-2xl">
            Esta es la página principal de nuestra página una vez loguiado. Acá
            podemos ver muchas cosas. En principio, tenemos el nombre de nuestro
            Token llamado"TukiTokens" con tu balance abajo. Tenemos la posición
            del ranking histórico. Los puntos totales son la cantidad de
            usuarios que referimos. Como tenemos distintas campañas, entonces en
            la campaña actual el 3 como dice ahí. Tenemos la cantidad de
            usuarios recomendados en la campaña actual. Como tenemos distintos
            premios por cantidad de referidos, nos dice que nos falta 3 para
            referir para recibir el próximo premio/milestone. Nos dice la
            cantidad total para el próximo premio, y la cantidad de tokens por
            reclamar, que en este caso es 0 para si llegamos al siguiente
            milestone vamos a tener tokens por reclamar.<br></br> Abajo tenemos
            la opción de compartir el código de referido, y la opción de comprar
            tokens. y más abajo tenemos nuestra navbar, para acceder a el
            ranking, a los premios por milestone, al admin(si es que sos admin)
            y el logout.
          </p>
        </div>
      </div>
      <div className="mb-36 mt-20">
        <img
          className="w-3/5 mx-auto sm:w-2/5 mx-auto"
          src={Token}
          alt="HTML icon"
        />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4 text-2x1 text-white text-justify font-serif sm:text-2xl">
            Cuando colocamos conectar billetera, se nos conecta con Metamask, en
            este caso al tener tokens por reclamar podemos reclamar y se nos va
            a agregar al balance.
          </p>
        </div>
      </div>
      <div className="mb-36 mt-20">
        <img
          className="w-3/5 mx-auto sm:w-2/5 mx-auto"
          src={Mail}
          alt="HTML icon"
        />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4 text-2x1 text-white text-justify font-serif sm:text-2xl">
            Acá vemos algunos de los mails que nos llega al mail, usando la
            librería nodemailer.
          </p>
        </div>
      </div>
      <div className="mb-36 mt-20">
        <img
          className="w-3/5 mx-auto sm:w-1/5 mx-auto"
          src={Ranking}
          alt="HTML icon"
        />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4 text-2x1 text-white text-justify font-serif sm:text-2xl">
            Acá podemos ver el ranking de los usuarios.
          </p>
        </div>
      </div>
      <div className="mb-36 mt-20">
        <img
          className="w-3/5 mx-auto sm:w-1/5 mx-auto"
          src={Admin}
          alt="HTML icon"
        />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4 text-2x1 text-white text-justify font-serif sm:text-2xl">
            Acá podemos modificar nuestros premios y borrarlos.
          </p>
        </div>
      </div>
      <div className="">
        <img
          className="w-3/5 mx-auto sm:w-1/5 mx-auto"
          src={Milestone}
          alt="HTML icon"
        />
        <div className=" w-2/4  mx-auto ">
          <p className=" text-2x1 text-white text-justify font-serif sm:text-2xl">
            Acá el usuario puede ver la cantidad de tokens por cantidad de
            referidos y el color verde son la que cumplió y en rojo las que no.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Itesa;
