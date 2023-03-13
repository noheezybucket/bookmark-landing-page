import React from "react";
import chrome from "../assets/logo-chrome.svg";
import firefox from "../assets/logo-firefox.svg";
import opera from "../assets/logo-opera.svg";

const Extensions = () => {
  return (
    <section className="w-10/12  mx-auto py-10 space-y-8 mb-32 mt-24">
      <div className="text-center  text-neutral-bis lg:w-[60%] mx-auto space-y-4">
        <h2 className="section-title">Download the extension</h2>
        <p className="text-neutral">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <div className="flex gap-4 flex-row flex-wrap justify-between items-center ">
        {/* google firefox */}
        <div className="extensionBox">
          <img src={chrome} alt="chrome extension" />
          <div>
            <h3>Add to Chrome</h3>
            <p>Minimum version 62</p>
          </div>
          <span></span>
          <button className="extensionBtn">Add & Install Extension</button>
        </div>

        {/* firefox */}
        <div className="extensionBox relative top-10">
          <img src={firefox} alt="firefox extension" />
          <div>
            <h3>Add to Firefox</h3>
            <p>Minimum version 55</p>
          </div>
          <span></span>
          <button className="extensionBtn">Add & Install Extension</button>
        </div>

        {/* Opera */}
        <div className="extensionBox relative top-20">
          <img src={opera} alt="opera extension" />
          <div>
            <h3>Add to Opera</h3>
            <p>Minimum version 46</p>
          </div>
          <span></span>
          <button className="extensionBtn">Add & Install Extension</button>
        </div>
      </div>
    </section>
  );
};

export default Extensions;
