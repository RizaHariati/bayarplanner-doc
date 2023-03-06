import React, { useEffect } from "react";
import Sidebar from "../component/layout/Sidebar";
import { useGlobalContext } from "../context/AppProvider";
import PageBase from "../component/homepage/PageBase";
import { navigate, PageProps } from "gatsby";

const Payment = ({ location: { pathname } }: PageProps) => {
  const {
    state: {
      pageLocation: { page },
    },
  } = useGlobalContext();

  useEffect(() => {
    if (pathname !== "/" + page + "/") {
      navigate("/");
    }
  }, []);

  if (pathname !== "/" + page + "/") return <div></div>;
  else {
    return (
      <Sidebar>
        <PageBase />
      </Sidebar>
    );
  }
};

export default Payment;
