import WorkIm from "../assets/projects/Movietmdb.png";
import RealEst from "../assets/projects/Productos-E-Commerce.png";
import Itesa from "../assets/projects/itesahome.png";
import Tinder from "../assets/projects/Tinder2.png";
import Staffys from "../assets/projects/staffysdelivery.png";

export const data = [
  {
    id: 1,
    name: "Movietmdb",
    description:
      "Agregar peliculas a favoritos extraidas de la api de la tmdb. Como plus extraje comentarios sacados con webscrapping usando puppeteer.(Postgress, Sequelize, React) (1 Proyecto)",
    descriptionenglish:
      "Add movies to favorites extracted from the tmdb api. As a plus, comments were extracted using web scraping with puppeteer. (Postgres, Sequelize, React) (Project 1)",
    image: WorkIm,
    github: "https://github.com/elbolaestevez/MoviesTmdb",
    live: "https://drive.google.com/file/d/1mjAGbEX316CuJ7W-a3O2-GI68TLGKAdi/view?usp=share_link",
  },
  {
    id: 2,
    name: "E-CommerceComidas",
    description:
      "Un ecommerce de un restaurante que vende comida. (Postgres, Sequelize, React), (2 Proyecto)",
    descriptionenglish:
      "An ecommerce for a restaurant that sells food. (Postgres, Sequelize, React) (Project 2)",
    image: RealEst,
    github: "https://github.com/elbolaestevez/Como-en-casa",
    live: "https://drive.google.com/file/d/1KtUqWKfR5q-PfEfqu3g9IcqMrYKHCkJ8/view?usp=share_link",
  },
  {
    id: 3,
    name: "ItesaBlockchain",
    description:
      "Creamos un token con remix y lo subimos a la blockchain de ethereum. Al recomendar personas se nos autogeneran tokens en la metamask.(Postgress, Sequelize, React, Remix para crear el token, metamask y ethers para leer la blockchain) (3 Proyecto)",
    descriptionenglish:
      "We created a token with Remix and uploaded it to the Ethereum blockchain. When recommending people, tokens are self-generated in the Metamask. (Postgres, Sequelize, React, Remix for creating the token, Metamask, and Ethers for reading the blockchain) (Project 3)",
    image: Itesa,
    github: "https://github.com/elbolaestevez/Itesa-viral-p5",
    live: "https://drive.google.com/file/d/1dxpVGhuuzONl0JJdek2kxgNqra4B8Qld/view?usp=share_link",
  },
  {
    id: 4,
    name: "TinderMusic",
    description:
      "Cree un tinder para que aparezcan las personas con los mismos gustos musicales y peliculas.(Mongo, Nextjs, tailwindcss) (4 Proyecto)",
    descriptionenglish:
      "Create a tinder for people with the same music and movie tastes to appear. (Mongo, Nextjs, Tailwindcss) (Project 4)",
    image: Tinder,
    github: "https://github.com/elbolaestevez/MelodiUs/tree/main/tinder",
    live: "https://drive.google.com/file/d/1UWnZxhrSZk0JhtQgI6Jd14Je27rl13DT/view?usp=share_link",
  },
  {
    id: 5,
    name: "StaffisDelivery",
    description:
      "Cree una aplicacion para celulares que consisten en entregar pedidos, hay un administrador que crear los paquetes y un delivery quien entrega estos pedidos.(Nextjs,Typescript, Mongo, tailwind, Docker y Aws),(5 proyecto)",
    descriptionenglish:
      "Create a mobile application for delivering orders. There is an administrator who creates the packages, and a delivery person who delivers these orders. (Nextjs, Typescript, Mongo, Tailwind, Docker, and AWS) (Project 5)",
    image: Staffys,
    github: "https://github.com/elbolaestevez/staffys-delivery-client",
    live: "https://drive.google.com/file/d/1UxS8D3zUAEFO4zsYwoMno2T-SrpQpb8D/view?usp=sharing",
  },
];
