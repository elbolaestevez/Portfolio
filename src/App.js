import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { translatorwords } from "./context/translator";
import { useState, useEffect } from "react";
import Translation from "../src/data/datatranslator.json";

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
    <div>
      <translatorwords.Provider value={Translator}>
        <Navbar />

        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </translatorwords.Provider>
    </div>
  );
}

export default App;
