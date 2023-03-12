import React from "react";
import Tab from "./Tab";

const Features = () => {
  return (
    <section className="section-w-set py-[90px]">
      <div>
        <div className="text-center text-neutral-bis w-[45%] mx-auto space-y-4">
          <h2 className="section-title">Features</h2>
          <p className="text-neutral">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
      </div>
      <Tab />
    </section>
  );
};

export default Features;
