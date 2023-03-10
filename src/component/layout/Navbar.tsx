import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "../../context/AppProvider";
import { StaticImage } from "gatsby-plugin-image";

type Props = {};

const Navbar = (props: Props) => {
  const {
    switchLanguage,
    translate,
    state: { language },
  } = useGlobalContext();
  const handleClick = () => {
    switchLanguage();
  };

  return (
    <div className="navbar-container absolute top-0 ">
      <div className="navbar">
        <div className="logo">
          <div className=" rounded-full overflow-hidden h-8 w-8 bg-txLit2 hover:bg-white active:bg-txLit2 cursor-pointer">
            <StaticImage
              src="../../images/bayarplanner-logo.png"
              alt="bayarplanner-logo"
              className="h-full"
              placeholder="dominantColor"
              loading="eager"
            />
          </div>
          <a
            href="https://bayarplanner.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className=" hidden sm:block cursor-pointer text-txLit1 hover:text-white transition-all active:text-txLit2">
              {translate("titles", "webtitle")}
            </h3>
          </a>
        </div>
        <button className="navbar-btn" onClick={handleClick}>
          <FontAwesomeIcon icon={faLanguage} className="text-txLit1 text-xl" />
          <p className="transition-all">
            {language === "id" ? "English" : "Indonesia"}{" "}
          </p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
