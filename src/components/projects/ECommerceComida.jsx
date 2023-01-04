import React from "react";
import Home from "../../assets/projects/HomeE-Commerce.png";
import Productos from "../../assets/projects/Productos-E-Commerce.png";
import Carrito from "../../assets/projects/Carrito-E-commerce-png.png";
import Calificaiones from "../../assets/projects/Calificaciones.png";
import Detalle from "../../assets/projects/DetalleE-Commerce.png";
import Admin from "../../assets/projects/admin Productos E-commerce.png";
import Pedidos from "../../assets/projects/PedidosEcommerce.png";
const ECommerceComida = () => {
  return (
    <div className="w-full h-full pt-16 bg-[#0a192f]">
      <div className="mb-36 mt-20">
        <img className="w-2/5 mx-auto" src={Home} alt="HTML icon" />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4 text-4xl text-white text-justify font-style: italic">
            Este el home principal de la página donde vemos un carrouse donde
            van pasando las fotos de nuestros productos populares, como también
            mas abajo podemos ver estos mismos productos.
          </p>
        </div>
      </div>
      <div className="mb-36 mt-20">
        <img className="w-2/5 mx-auto" src={Productos} alt="HTML icon" />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4 text-4xl text-white text-justify font-style: italic">
            Aca podemos ver estos productos donde estan divididos por categoria
            que al clickear cualquier de ellas te lleva a esos productos. Uno
            puede ver la foto del producto, con su precio y su descripcion. Al
            clickear el producto te lleva a otra ruta con su detalle completo y
            la opcion de agregarla al carrito.
          </p>
        </div>
      </div>
      <div className="mb-36 mt-20">
        <img className="w-2/5 mx-auto" src={Detalle} alt="HTML icon" />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4 text-4xl text-white text-justify font-style: italic">
            Aca podemos ver el detalle del producto, y la opcion de agregarla al
            carrito
          </p>
        </div>
      </div>
      <div className="mb-36 mt-20">
        <img className="w-2/5 mx-auto" src={Carrito} alt="HTML icon" />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4 text-4xl text-white text-justify font-style: italic">
            Aca se encuentra el carrito donde el usuario decide si comprar o no.
            El usuario puede modificar las cantidades desde el carrito sin la
            necesidad de volver atras para agregarlos. EL tacho de basura
            elimina el producto con todas sus cantidades.Y se encuentra las dos
            opciones para realizar el pago. Una vez hecho el pedido el carrito
            se borra para que si el usuario al dia siguiente quiere comprar no
            ve estos productos en el carrito.
          </p>
        </div>
      </div>

      <div className="mb-36 mt-20">
        <img className="w-2/5 mx-auto" src={Pedidos} alt="HTML icon" />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4 text-4xl text-white text-justify font-style: italic">
            Aca podemos ver el historial de productos que hizo el usuario,
            ninguno de estos datos esta harcodeado, el id del pedido tiene en
            cuenta el ultimo pedido y se le suma uno para que quede correcto. Y
            todos esos datos como la fecha estan sacadas de la base de datos
            donde esta la tabla con esos registros.
          </p>
        </div>
      </div>
      <div className="mb-36 mt-20">
        <img className="w-2/5 mx-auto" src={Calificaiones} alt="HTML icon" />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4 text-4xl text-white text-justify font-style: italic">
            Aca el usuario puede calificar los productos que no fueron
            calificados. Luego ese puntaje se le suma al promedio del puntaje de
            ese producto. Tambien se le agrega un comentario para que quede
            registrado las opiniones del usuario.
          </p>
        </div>
      </div>

      <div className="mb-36 mt-20">
        <img className="w-2/5 mx-auto" src={Admin} alt="HTML icon" />
        <div className=" w-2/4  mx-auto ">
          <p className="my-4 text-4xl text-white text-justify font-style: italic">
            El administrador puede agregar, editar y borrar productos, como se
            puede ver aca al tocar el + que esta al lado de Carne, que solo se
            habilitado cuando el administador se loguea. No esta aca en la foto,
            pero el administrador puede hacer administrador a los usuarios y a
            su vez sacarle la administracion
          </p>
        </div>
      </div>
    </div>
  );
};

export default ECommerceComida;
