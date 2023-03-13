import React from "react";
import AccordionComponent from "./Accordion";

const FAQ = () => {
  return (
    <section className="section-w-set py-[50px]">
      <div className="w-full lg:w-[45%] mx-auto">
        <div className="text-center space-y-4">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="text-neutral">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>
        <div className="py-[20px]">
          <AccordionComponent />
        </div>
        <button className="hero-btn-1 flex mx-auto py-2 ">More info</button>
      </div>
    </section>
  );
};

export default FAQ;
