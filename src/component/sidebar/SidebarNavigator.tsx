import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import { navigate } from "gatsby";

import { useGlobalContext } from "../../context/AppProvider";

type Props = {};

const SidebarNavigator = (props: Props) => {
  const {
    setPageLocation,
    state: { sidebarContent },
  } = useGlobalContext();

  return (
    <div className="sidebar-container ">
      <div>
        {Object.keys(sidebarContent).map((item: string, index: number) => {
          const { title, link, icon, content } = sidebarContent[item];
          return (
            <div key={index}>
              <div>
                <button
                  className="text-mainDrk flex gap-2 items-center "
                  onClick={() => {
                    console.log(item);
                    setPageLocation("", item);
                    navigate(link);
                  }}
                >
                  <FontAwesomeIcon icon={icon} />
                  <h3>{title}</h3>
                </button>
              </div>
              {content && (
                <div
                  className={`pl-6 transition-all overflow-hidden ${
                    location.pathname === link ? " h-fit " : "h-0"
                  }`}
                >
                  {Object.keys(content!).map((contentItem, contentIndex) => {
                    return (
                      <button
                        className="w-full hover:text-txDrk2 active:text-txDrk3 transition-all text-left"
                        onClick={() => {
                          setPageLocation(contentItem, item);
                        }}
                        key={contentIndex}
                      >
                        {content[contentItem]}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="text-sm text-center flex flex-col leading-4">
        <a
          className="text-mainDrk hover:font-bold transition-all"
          href="https://www.freepik.com/free-vector/hand-drawn-flat-design-salam-illustration_22640873.htm#query=hijab&position=49&from_view=search&track=sph"
        >
          Image byFreepik
        </a>
        <a
          href="https://www.ichacodes.com/"
          className="text-mainDrk hover:font-bold transition-all underline hover:text-mainDrkHover"
        >
          Bayarplanner by Riza Hariati for IchaCodes copyright &copy;
          {new Date().getFullYear()}
        </a>
      </div>
    </div>
  );
};

export default SidebarNavigator;
