import React, { useState } from "react";
import bookmark from "../assets/logo-bookmark.svg";
import hamburger from "../assets/icon-hamburger.svg";
import closeBtn from "../assets/icon-close.svg";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const open =
    "flex flex-col text-center font-bold py-10  bg-white absolute top-20 w-full gap-5 block";
  const close = "hidden";

  return (
    <header className="pt-10 relative lg:hidden mx-auto section-w-set">
      <nav className="flex justify-between">
        <div>
          <img src={bookmark} alt="manage" />
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            setIsMenuOpen((prev) => !prev);
          }}
        >
          {isMenuOpen ? (
            <img src={closeBtn} alt="close menu" />
          ) : (
            <img src={hamburger} alt="hamburger menu" />
          )}
        </div>

        <ul className={isMenuOpen ? open : close}>
          <li>
            <a href="###">Pricing</a>
          </li>
          <li>
            <a href="###">Product</a>
          </li>
          <li>
            <a href="###">About Us</a>
          </li>
          <li>
            <a href="###">Careers</a>
          </li>
          <li>
            <a href="###">Community</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MobileHeader;
