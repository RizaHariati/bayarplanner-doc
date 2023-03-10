import { navigate, PageProps } from "gatsby";
import React, { useEffect } from "react";
import PageBase from "../component/homepage/PageBase";
import Sidebar from "../component/layout/Sidebar";
import { useGlobalContext } from "../context/AppProvider";

const Start = ({ location: { pathname } }: PageProps) => {
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
      <Sidebar pathname={pathname}>
        <PageBase />
      </Sidebar>
    );
  }
};

export default Start;
