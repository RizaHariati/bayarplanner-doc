import React, { useRef, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="main-layout-container 0">
      <div className="main-layout">
        <Navbar />
        <div className="sidebar-pages-container">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
