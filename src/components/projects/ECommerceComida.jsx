import React, { useContext } from "react";
import { translatorwords } from "../../context/translator";
import Home from "../../assets/projects/HomeE-Commerce.png";
import Productos from "../../assets/projects/Productos-E-Commerce.png";
import Carrito from "../../assets/projects/Carrito-E-commerce-png.png";
import Calificaiones from "../../assets/projects/Calificaciones.png";
import Detalle from "../../assets/projects/DetalleE-Commerce.png";
import Admin from "../../assets/projects/admin Productos E-commerce.png";
import Pedidos from "../../assets/projects/PedidosEcommerce.png";
const ECommerceComida = () => {
  const { setC, setL, language, content } = useContext(translatorwords);

  return (
    <div className="w-full h-full pt-16 bg-[#0a192f]">
      <div className="mb-36 mt-20">
        <img
          className="w-4/5 mx-auto sm:w-2/5 mx-auto"
          src={Home}
          alt="HTML icon"
        />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4 text-2x1 text-white text-justify font-serif sm:text-2xl">
            {content.ehome}
          </p>
        </div>
      </div>
      <div className="mb-36 mt-20">
        <img
          className="w-4/5 mx-auto sm:w-2/5 mx-auto"
          src={Productos}
          alt="HTML icon"
        />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4 text-2x1 text-white text-justify font-serif sm:text-2xl">
            {content.eproductos}
          </p>
        </div>
      </div>
      <div className="mb-36 mt-20">
        <img
          className="w-4/5 mx-auto sm:w-2/5 mx-auto"
          src={Detalle}
          alt="HTML icon"
        />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4 text-2x1 text-white text-justify font-serif sm:text-2xl">
            {content.edetalle}
          </p>
        </div>
      </div>
      <div className="mb-36 mt-20">
        <img
          className="w-4/5 mx-auto sm:w-2/5 mx-auto"
          src={Carrito}
          alt="HTML icon"
        />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4 text-2x1 text-white text-justify font-serif sm:text-2xl">
            {content.ecarrito}
          </p>
        </div>
      </div>

      <div className="mb-36 mt-20">
        <img
          className="w-4/5 mx-auto sm:w-2/5 mx-auto"
          src={Pedidos}
          alt="HTML icon"
        />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4 text-2x1 text-white text-justify font-serif sm:text-2xl">
            {content.epedidos}
          </p>
        </div>
      </div>
      <div className="mb-36 mt-20">
        <img
          className="w-4/5 mx-auto sm:w-2/5 mx-auto"
          src={Calificaiones}
          alt="HTML icon"
        />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4 text-2x1 text-white text-justify font-serif sm:text-2xl">
            {content.ecalificaciones}
          </p>
        </div>
      </div>

      <div className=" mt-20">
        <img
          className="w-4/5 mx-auto sm:w-2/5 mx-auto"
          src={Admin}
          alt="HTML icon"
        />
        <div className=" w-2/4  mx-auto ">
          <p className="text-2x1 text-white text-justify font-serif sm:text-2xl">
            {content.eadmin}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ECommerceComida;
