import React, { useRef, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="main-layout-container ">
      <Navbar />
      <div className="h-14 w-full"></div>
      <div className="main-layout">
        <div className="sidebar-pages-container">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
