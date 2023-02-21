import React from "react";
import Homepage from "../component/homepage/Homepage";
import Layout from "../component/layout/Layout";
import Sidebar from "../component/sidebar/Sidebar";

type Props = {};

const index = (props: Props) => {
  return (
    <Layout>
      <div className="grid grid-cols-12 w-full h-full">
        <Sidebar />
        <Homepage />
      </div>
    </Layout>
  );
};

export default index;
