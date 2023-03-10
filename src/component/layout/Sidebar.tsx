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
      className="sidebar-slide-container "
      style={slide ? { left: "0%" } : { left: "-100%" }}
    >
      <SidebarContent pathname={pathname} />
    </div>
  );
};

type SideIcons = { pathname: string };
const SidebarIcons = ({ pathname }: SideIcons) => {
  const { slideOut } = useGlobalContext();
  return (
    <div className="sidebar-icons-container" onClick={() => slideOut()}>
      <SidebarContent pathname={pathname} />
    </div>
  );
};
