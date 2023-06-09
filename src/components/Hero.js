import React from "react";
import hero from "../assets/illustration-hero.svg";

const Hero = () => {
  return (
    <section className="section-w-set pt-[120px]">
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-10  items-center w-full ">
        <div className="lg:w-1/2 space-y-5 text-center">
          <h1 className="text-4xl font-semibold text-neutral-bis">
            A Simple Bookmark Manager
          </h1>
          <p className="text-neutral">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="space-x-3 flex justify-center lg:justify-start">
            <button className="hero-btn-1">Get it on Chrome</button>
            <button className="hero-btn-2">Get it on Firefox</button>
          </div>
        </div>

        {/* <div className="relative before:content[''] before:absolute before:w-[500px] before:-z-10 before:h-[320px] before:rounded-l-[100%] before:-bottom-[20px] before:bg-transparent before:-right-[114px]"> */}
        <div>
          <img
            src={hero}
            alt="Hero section"
            className="relative lg:-right-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
