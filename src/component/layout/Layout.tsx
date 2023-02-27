import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="main-layout-container">
      <div className="main-layout">
        <Navbar />
        <div className="p-3 h-full w-full"> {children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
