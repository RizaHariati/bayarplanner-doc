import React from "react";

import { useGlobalContext } from "../../context/AppProvider";
import SidebarContent from "./SidebarContent";
type Props = { pathname: string };
const SidebarNavigator = ({ pathname }: Props) => {
  const {
    state: { sidebarContent },
  } = useGlobalContext();
  if (!sidebarContent || Object.keys(sidebarContent).length < 1) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  } else {
    return (
      <div className="sidebar-container  ">
        <SidebarContent pathname={pathname} />
        <div className="text-sm text-center  flex-col leading-4 hidden sm:flex">
          <a
            className="text-mainDrk hover:font-bold transition-all"
            href="https://www.freepik.com/free-vector/hand-drawn-flat-design-salam-illustration_22640873.htm#query=hijab&position=49&from_view=search&track=sph"
          >
            Image byFreepik
          </a>
          <a
            href="https://www.ichacodes.com/"
            className="text-mainDrk hover:font-bold transition-all underline hover:text-mainDrkHover"
          >
            Bayarplanner by Riza Hariati for IchaCodes copyright &copy;
            {new Date().getFullYear()}
          </a>
        </div>
      </div>
    );
  }
};

export default SidebarNavigator;
