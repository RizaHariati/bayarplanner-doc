import React from "react";
import SidebarNavigator from "../sidebar/SidebarNavigator";
import Layout from "./Layout";

type Props = { children: React.ReactNode };

const Sidebar = ({ children }: Props) => {
  return (
    <Layout>
      <div className="grid grid-cols-12 w-full h-full pt-12">
        <SidebarNavigator />
        <div className=" col-span-9 w-full h-full px-3 overflow-y-hidden pb-20">
          {children}
        </div>
      </div>
    </Layout>
  );
};

export default Sidebar;
