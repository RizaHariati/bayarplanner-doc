import React from "react";
import Homepage from "../component/homepage/Homepage";
import Layout from "../component/layout/Layout";
import Sidebar from "../component/layout/Sidebar";
import { Link } from "gatsby";
import { useGlobalContext } from "../context/AppProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};

const index = (props: Props) => {
  const {
    state: { sidebarContent },
  } = useGlobalContext();
  return (
    <Sidebar>
      <div>
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
              return (
                <Link
                  to={sidebarContent[item].link}
                  className="index-btn"
                  key={index}
                >
                  <FontAwesomeIcon
                    icon={sidebarContent[item].icon}
                    className="text-xl"
                  />
                  <h3 className=" leading-5"> {sidebarContent[item].title}</h3>
                </Link>
              );
            })}
        </div>
      </div>
    </Sidebar>
  );
};

export default index;
