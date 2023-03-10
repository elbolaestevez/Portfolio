import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { translatorwords } from "./context/translator";
import { useState, useEffect } from "react";
import Translation from "../src/data/datatranslator.json";
import { Route, Routes } from "react-router-dom";
import MovieTmdb from "./components/projects/MovieTmdb";
import ECommerceComida from "./components/projects/ECommerceComida";
import Itesa from "./components/projects/Itesa";
function App() {
  const [language, setLanguage] = useState("spanish");
  const [content, setContent] = useState({});
  const setL = (language) => {
    setLanguage(language);
  };
  const setC = (content) => {
    setContent(content);
  };
  const Translator = {
    setC,
    setL,
    content,
    language,
  };

  useEffect(() => {
    if (language === "english") {
      setContent(Translation.english);
    } else if (language === "spanish") {
      setContent(Translation.spanish);
    }
  }, [language]);

  return (
    <div className="bg-[#0a192f]">
      <translatorwords.Provider value={Translator}>
        <Navbar />
        <Routes>
          <Route
            element={[<Home />, <About />, <Skills />, <Work />, <Contact />]}
            path="/"
          />
          <Route element={<Itesa />} path="/ItesaBlockchain" />
          <Route element={<MovieTmdb />} path="/Movietmdb" />
          <Route element={<ECommerceComida />} path="/E-CommerceComidas" />
        </Routes>
      </translatorwords.Provider>
    </div>
  );
}

export default App;
