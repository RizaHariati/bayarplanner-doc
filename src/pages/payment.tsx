import React from "react";
import Sidebar from "../component/layout/Sidebar";
import { useGlobalContext } from "../context/AppProvider";

type Props = {};

const Payment = (props: Props) => {
  const {
    state: { sidebarContent },
  } = useGlobalContext();
  return (
    <Sidebar>
      <div>
        <div>
          <h1>{sidebarContent["payment"].title}</h1>
          {sidebarContent["payment"].opening?.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </div>
    </Sidebar>
  );
};

export default Payment;
