import React from "react";
import Sidebar from "../component/layout/Sidebar";
import { useGlobalContext } from "../context/AppProvider";

type Props = {};

const Invoice = (props: Props) => {
  const {
    state: { sidebarContent },
  } = useGlobalContext();
  return (
    <Sidebar>
      <div>
        <div>
          <h1>{sidebarContent["invoice"].title}</h1>
          {sidebarContent["invoice"].opening?.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </div>
    </Sidebar>
  );
};

export default Invoice;
