import React from "react";
import Homepage from "../component/homepage/Homepage";
import Sidebar from "../component/layout/Sidebar";

type Props = {};

const startpage = (props: Props) => {
  return (
    <Sidebar>
      <Homepage />
    </Sidebar>
  );
};

export default startpage;
