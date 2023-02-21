import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlagUsa } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-regular-svg-icons";
import { useGlobalContext } from "../../context/AppProvider";

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
    <div className="navbar-container sticky">
      <div className="navbar">
        <div className="logo">
          <a href="https://bayarplanner.com/">
            <h3 className=" cursor-pointer text-txLit1 hover:text-txDrk2 active:text-txLit2">
              {translate("titles", "webtitle")}
            </h3>
          </a>
        </div>
        <button className="navbar-btn" onClick={handleClick}>
          <FontAwesomeIcon icon={language === "id" ? faFlagUsa : faFlag} />
          <p className="transition-all">
            {language === "id" ? "English" : "Indonesia"}{" "}
          </p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
