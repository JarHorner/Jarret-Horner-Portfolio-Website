import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FiMail } from "react-icons/fi";
import { Slide } from "react-awesome-reveal";

const Contact = () => {
  return (
    <Slide direction="right">
      <form>
        <div className="name">
          <span>
            <CgProfile />
          </span>
          <input type="text" placeholder="Fullname..." />
        </div>
        <div className="email">
          <span>
            <MdAlternateEmail />
          </span>
          <input type="email" placeholder="Email..." />
        </div>
        <div className="message">
          <span className="messageIcon">
            <FiMail />
          </span>
          <textarea cols="30" rows="10" placeholder="Message..."></textarea>
        </div>
        <button>Submit</button>
      </form>
    </Slide>
  );
};

export default Contact;
