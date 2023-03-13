import React, { useState, useEffect } from "react";

import logo from "../assets/logo-bookmark-white.svg";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import error_icon from "../assets/icon-error.svg";

const REGX_MAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const Footer = () => {
  const [email, setemail] = useState("");
  const [error, seterror] = useState("");

  useEffect(() => {
    if (!REGX_MAIL.test(email) && email.length !== 0) {
      seterror("Whoops, make sure it's an email");
    } else {
      seterror("");
    }
  }, [email]);

  const handleSub = (e) => {
    e.preventDefault();
    alert(`Your mail : ${email}`);
  };

  return (
    <footer>
      <div className="bg-primary py-[50px]">
        <div className="lg:w-10/12 mx-auto text-white text-center space-y-5 px-6">
          <h3>35.000+ ALREADY JOINED</h3>
          <p className="text-3xl lg:w-[35%] mx-auto">
            Stay up to date with what we're doing
          </p>
          <form className="space-x-4 flex justify-center" onSubmit={handleSub}>
            <div
              className={`  ${
                error
                  ? "relative bg-primary-bis border-2 rounded border-primary-bis lg:w-[30%]"
                  : "relative bg-primary border-2 rounded border-primary lg:w-[30%]"
              }`}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="block p-2 rounded text-sm w-full text-black outline-none !important"
                onChange={(e) => setemail(e.target.value)}
              />
              {error ? (
                <>
                  <span className="absolute top-[7px] right-2">
                    <img src={error_icon} alt="error" />
                  </span>
                  <span className="block text-xs p-2 text-left italic">
                    {error}
                  </span>
                </>
              ) : (
                ""
              )}
            </div>

            <div>
              <input
                type="submit"
                value="Contact Us"
                className="bg-primary-bis p-2 px-4 rounded text-sm cursor-pointer hover:bg-white hover:text-primary-bis border-2 border-primary-bis duration-150"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="bg-neutral-bis p-6">
        <div className="w-10/12 mx-auto flex flex-col lg:flex-row justify-between  items-center gap-4 lg:gap-0">
          <div className="pb-6 lg:pb-0 lg:space-x-11 flex flex-col lg:flex-row justify-center  gap-6 lg:gap-0">
            <img src={logo} alt="bookmark footer" />

            <ul className="flex flex-col lg:flex-row text-white lg:space-x-10 text-center lg:text-left space-y-6 lg:space-y-0">
              <li className="footerli">FEATURES</li>
              <li className="footerli">PRICING</li>
              <li className="footerli">CONTACT</li>
            </ul>
          </div>

          <div>
            <ul className="flex space-x-10 lg:items-center">
              <li>
                <a href="###">
                  <img src={facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="###">
                  <img src={twitter} alt="twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
