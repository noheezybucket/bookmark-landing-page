import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const TabsComponent = () => {
  const data = [
    {
      label: "Simple Bookmarking",
      value: "bookmark",
      title: "Bookmark in one click",
      desc: `Organize your bookmarks however you like. Our simple drag-and-dro interface gives you complete control over how you manage your favourite sites.`,
      img: 1,
    },
    {
      label: "Speedy Searching",
      value: "search",
      title: "Intelligent search",
      desc: `Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.`,
      img: 2,
    },
    {
      label: "Easy Sharing",
      value: "sharing",
      title: "Share your bookmarks",
      desc: `Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.`,
      img: 3,
    },
  ];

  return (
    <Tabs value="bookmark">
      <TabsHeader className="bg-white w-1/2 mx-auto">
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            className="mx-3 hover:text-primary-bis  duration-150 ease-in-out"
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc, img, title }) => (
          <TabPanel
            key={value}
            value={value}
            className="flex items-center justify-center gap-11 pt-16"
          >
            <div className="w-[45%]">
              <img
                src={require("../assets/illustration-features-tab-" +
                  img +
                  ".svg")}
                alt="alt"
              />
            </div>
            <div className="space-y-4 w-[45%]">
              <h2 className="text-2xl font-bold">{title}</h2>
              <p>{desc}</p>
              <button className="hero-btn-1">More info</button>
            </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default TabsComponent;
