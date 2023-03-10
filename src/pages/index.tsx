import React from "react";

import Sidebar from "../component/layout/Sidebar";
import { Link, navigate, PageProps } from "gatsby";
import { useGlobalContext } from "../context/AppProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const index = ({ location: { pathname } }: PageProps) => {
  const {
    setPageLocation,
    state: { sidebarContent },
  } = useGlobalContext();
  if (!sidebarContent || Object.keys(sidebarContent).length < 1) {
    return (
      <Sidebar pathname={pathname}>
        <h1>Loading</h1>
      </Sidebar>
    );
  } else {
    return (
      <Sidebar pathname={pathname}>
        <div className="pt-2">
          <div>
            <h1>{sidebarContent["welcome"].title}</h1>
            {sidebarContent["welcome"].opening?.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </div>
          <div className="index-btn-group">
            {Object.keys(sidebarContent)
              .slice(1)
              .map((item, index) => {
                const link = sidebarContent[item].link;
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setPageLocation("", item);
                      navigate(link);
                    }}
                    className="index-btn"
                  >
                    <div className="w-8 h-8 flex items-center justify-center ">
                      <FontAwesomeIcon
                        icon={sidebarContent[item].icon}
                        className="text-xl m-auto"
                      />
                    </div>
                    <h3 className=" leading-5">{sidebarContent[item].title}</h3>
                  </button>
                );
              })}
          </div>
        </div>
      </Sidebar>
    );
  }
};

export default index;
