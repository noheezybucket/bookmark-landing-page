import React from "react";
import bookmark from "../assets/logo-bookmark.svg";

const Navbar = () => {
  return (
    <header className="section-w-set py-5">
      <nav className="flex justify-between">
        <div>
          <a href="###">
            <img src={bookmark} alt="bookmark navigation bar" />
          </a>{" "}
        </div>

        <ul className="flex flex-row items-center gap-10">
          <li className="navli">
            <a href="###">FEATURES</a>
          </li>
          <li className="navli">
            <a href="###">PRICING</a>
          </li>
          <li className="navli">
            <a href="###">CONTACT</a>
          </li>
          <li>
            <a href="###" className="navli-login">
              LOGIN
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
