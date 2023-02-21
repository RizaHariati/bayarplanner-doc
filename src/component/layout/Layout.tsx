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
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
