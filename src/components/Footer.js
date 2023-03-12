import React from "react";

import logo from "../assets/logo-bookmark-white.svg";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";

const Footer = () => {
  return (
    <footer>
      <div className="bg-primary py-[50px]">
        <div className="w-10/12 mx-auto text-white text-center space-y-5">
          <h3>35.000+ ALREADY JOINED</h3>
          <p className="text-3xl w-[35%] mx-auto">
            Stay up to date with what we're doing
          </p>
          <form className="space-x-4">
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="p-2 rounded text-sm w-[25%]"
            />
            <input
              type="submit"
              value="Contact Us"
              className="bg-primary-bis p-2 rounded text-sm"
            />
          </form>
        </div>
      </div>
      <div className="bg-neutral-bis">
        <div className="w-10/12 mx-auto flex justify-between items-center">
          <div className="py-6 space-x-11 flex">
            <img src={logo} alt="bookmark footer" />

            <ul className="flex text-white space-x-10">
              <li className="footerli">FEATURES</li>
              <li className="footerli">PRICING</li>
              <li className="footerli">CONTACT</li>
            </ul>
          </div>

          <div>
            <ul className="flex space-x-10 items-center">
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
