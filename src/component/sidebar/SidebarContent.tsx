import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { navigate } from "gatsby";
import { useGlobalContext } from "../../context/AppProvider";

type Props = {
  pathname: string;
};

const SidebarContent = ({ pathname }: Props) => {
  const {
    setPageLocation,
    state: { sidebarContent },
  } = useGlobalContext();
  if (!sidebarContent || Object.keys(sidebarContent).length < 1) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  } else {
    return (
      <div className="">
        <div>
          {Object.keys(sidebarContent).map((item: string, index: number) => {
            const { title, link, icon, content } = sidebarContent[item];

            return (
              <div key={index} className="sidebar-content ">
                <button
                  className="text-mainDrk  gap-3 items-center justify-start mb-2 grid grid-cols-12 w-full col-span-12"
                  onClick={() => {
                    setPageLocation("", item);
                    navigate(link);
                  }}
                >
                  <div className=" w-9 h-9 flex items-center justify-center transition-all">
                    <FontAwesomeIcon
                      icon={icon}
                      className="text-xl sm:text-lg  text-mainDrk hover:text-mainDrkActive active:text-opacity-20 focus:text-opacity-70  col-span-1 w-full sm:w-fit  transition-all "
                    />
                  </div>
                  <h3 className="text-left font-medium  col-span-11 w-full pl-2">
                    {title}
                  </h3>
                </button>

                {index !== 0 && (
                  <div
                    className={`transition-all overflow-hidden col-start-3 col-span-10   ${
                      pathname === link ? " h-fit " : "h-0"
                    }`}
                  >
                    {Object.keys(content!).map((contentItem, contentIndex) => {
                      // console.log({ link, pathname });
                      return (
                        <button
                          className="w-full hover:text-txDrk1 hover:bg-mainDrk hover:bg-opacity-10 active:bg-opacity-0 active:text-txLit2 transition-all text-left text-txDrk2 capitalize "
                          onClick={() => {
                            setPageLocation(contentItem, item);
                          }}
                          key={contentIndex}
                        >
                          {content?.[contentItem]}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default SidebarContent;
