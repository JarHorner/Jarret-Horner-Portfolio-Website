import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FiMail } from "react-icons/fi";
import { Slide } from "react-awesome-reveal";

const Contact = () => {
  const form = useRef();

  const emailJSConfig = {      
    service_ID: import.meta.env.VITE_SERVICE_ID,
    template_ID: import.meta.env.VITE_TEMPLATE_ID,
    public_Key: import.meta.env.VITE_PUBLIC_KEY,
  }

  const divInputCSS = "flex border-2 border-slate-500 mb-2";
  const inputCSS =
    "w-full border-0 outline-0 text-white bg-transparent py-2 px-2";
  const spanInputCSS =
    "bg-slate-700 w-12 flex items-center justify-center text-xl";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        emailJSConfig.service_ID, // Service ID
        emailJSConfig.template_ID, // Template ID
        '#form',
        emailJSConfig.public_Key, // Public key
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex-1">
      <Slide direction="right">
        <form
          ref={form}
          id='form'
          onSubmit={sendEmail}
          className="bg-slate-900 p-3.5 rounded-xl"
        >
          <div className={divInputCSS}>
            <span className={spanInputCSS}>
              <CgProfile />
            </span>
            <input type="text" placeholder="Full Name" className={inputCSS} />
          </div>
          <div className={divInputCSS}>
            <span className={spanInputCSS}>
              <MdAlternateEmail />
            </span>
            <input type="email" placeholder="Email" className={inputCSS} />
          </div>
          <div className={divInputCSS}>
            <span
              className={`bg-slate-700 w-12 flex items-start justify-center pt-2 text-xl`}
            >
              <FiMail />
            </span>
            <textarea
              cols="30"
              rows="10"
              placeholder="Message"
              className={inputCSS}
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              value="Send"
              className="w-28 h-10 bg-green-500 rounded-lg custom-smaller-shadow cursor-pointer hover:bg-green-600"
            >
              Submit
            </button>
          </div>
        </form>
      </Slide>
    </div>
  );
};

export default Contact;
