import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="navbar-container sticky">
      <div className="navbar">
        <div className="logo">
          <a href="https://bayarplanner.com/">
            <h3 className=" cursor-pointer text-txLit1 hover:text-txDrk2 active:text-txLit2">
              Dokumentasi BayarPlanner
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
