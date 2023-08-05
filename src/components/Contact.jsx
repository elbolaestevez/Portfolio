import React, { useContext, useEffect } from "react";
import { translatorwords } from "../context/translator";

const Contact = () => {
  const { content } = useContext(translatorwords);

  return (
    <div
      name="contact"
      className="w-full h-full bg-[#0a192f]  mt-12 flex justify-center items-center p-20"
      id="contact"
    >
      <form
        method="POST"
        action="https://getform.io/f/80e3c0d5-b03d-45f7-ba01-17b0a77140ac"
        className="flex flex-col max-w-[600px] w-full "
        data-aos={"zoom-in"}
        data-aos-offset="300"
      >
        <div className=" text-center mb-8	">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            {content.contact}
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          {content.submit}
        </button>
      </form>
    </div>
  );
};

export default Contact;
