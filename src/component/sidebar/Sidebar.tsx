import { faSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className=" col-span-3 w-full h-full border-r border-borderColor p-3 ">
      <div>
        <div className="text-mainDrk flex gap-2 items-center">
          <FontAwesomeIcon icon={faSign} />
          <h3>Mulai</h3>
        </div>
      </div>
      <div className="px-3">
        <p>Register Nama</p>
        <p>Sidebar</p>
        <p>Sidebar</p>
      </div>
    </div>
  );
};

export default Sidebar;
