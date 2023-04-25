import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FiMail } from "react-icons/fi";
import { Slide } from "react-awesome-reveal";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  // for form inputs, used mainly to clear the from
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // for button, to ensure button cannot be spammed, sending multiple messages
  const [buttonPressed, setButtonPressed] = useState(false);

  // Toast message for the emailjs promise
  const notify = (promise) =>
    toast.promise(
      promise,
      {
        loading: "Sending...",
        success: "Message has been sent successfully!",
        error: "Error while sending message",
      },
      {
        style: {
          minWidth: "250px",
        },
      }
    );

  //values of emailjs from .env file
  const service_ID = import.meta.env.VITE_SERVICE_ID;
  const template_ID = import.meta.env.VITE_TEMPLATE_ID;
  const public_Key = import.meta.env.VITE_PUBLIC_KEY;

  // css in a const for easier editing, as multiple elements use these
  const divInputCSS = "flex border-2 border-slate-500 mb-2";
  const inputCSS =
    "w-full border-0 outline-0 text-white bg-transparent py-2 px-2";
  const spanInputCSS =
    "bg-slate-700 w-12 flex items-center justify-center text-xl";

  // sends an email to my email
  const sendEmail = (e) => {
    e.preventDefault();

    setButtonPressed(true);
    const sendForm = emailjs.sendForm(
      service_ID,
      template_ID,
      "#form",
      public_Key
    );
    notify(sendForm);

    sendForm.then(
      (result) => {
        console.log(result.text);
        resetForm();
        setButtonPressed(false);
      },
      (error) => {
        console.log(error.text);
        setButtonPressed(false);
      }
    );
  };

  // resets the form
  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex-1">
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <Slide direction="right">
        <form
          id="form"
          onSubmit={sendEmail}
          className="bg-slate-900 p-3.5 rounded-xl"
        >
          <div className={divInputCSS}>
            <span className={spanInputCSS}>
              <CgProfile />
            </span>
            <input
              required
              type="text"
              name="user_name"
              placeholder="Contact Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputCSS}
            />
          </div>
          <div className={divInputCSS}>
            <span className={spanInputCSS}>
              <MdAlternateEmail />
            </span>
            <input
              required
              type="email"
              name="user_email"
              placeholder="Contact Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputCSS}
            />
          </div>
          <div className={divInputCSS}>
            <span
              className={`bg-slate-700 w-12 flex items-start justify-center pt-2 text-xl`}
            >
              <FiMail />
            </span>
            <textarea
              required
              cols="30"
              name="message"
              rows="10"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={inputCSS}
            ></textarea>
          </div>
          <div className="flex flex-col items-center justify-center">
            <button
              type="submit"
              disabled={buttonPressed}
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
