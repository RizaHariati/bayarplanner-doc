import React from "react";
import { useGlobalContext } from "../../context/AppProvider";
import SidebarContent from "../sidebar/SidebarContent";
import SidebarNavigator from "../sidebar/SidebarNavigator";
import Layout from "./Layout";

type Props = { children: React.ReactNode; pathname: string };

const Sidebar = ({ children, pathname }: Props) => {
  return (
    <Layout>
      <div className="sidebar-controller">
        <SidebarSlide pathname={pathname} />
        <SidebarIcons pathname={pathname} />
        <SidebarNavigator pathname={pathname} />
        <div className="page-container">{children}</div>
      </div>
    </Layout>
  );
};

export default Sidebar;

type SideProps = { pathname: string };

const SidebarSlide = ({ pathname }: SideProps) => {
  const { slide } = useGlobalContext();
  return (
    <div
      className="h-screen flex flex-col bg-fillLit fixed z-20 w-full top-0 sm:hidden transition-all"
      style={slide ? { left: "0%" } : { left: "-100%" }}
    >
      <div className=" h-16"></div>
      <div className="sidebar-slide-container ">
        <SidebarContent pathname={pathname} />
      </div>
    </div>
  );
};

type SideIcons = { pathname: string };
const SidebarIcons = ({ pathname }: SideIcons) => {
  const { slideOut } = useGlobalContext();
  return (
    <div className="h-screen flex flex-col fixed z-30 w-9 top-0 left-0 sm:hidden bg-fillLit ">
      <div className=" h-16"></div>
      <div className="sidebar-icons-content" onClick={() => slideOut()}>
        <SidebarContent pathname={pathname} />
      </div>
    </div>
  );
};
