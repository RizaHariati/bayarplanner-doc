import { graphql, navigate, PageProps } from "gatsby";
import React, { useEffect } from "react";
import PageBase from "../component/homepage/PageBase";
import Sidebar from "../component/layout/Sidebar";
import { useGlobalContext } from "../context/AppProvider";

const Start = ({ location: { pathname }, data }: PageProps) => {
  const result: any = data;

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
        <PageBase
          contentfulImage={result.allContentfulBayarplannerDocData.nodes}
        />
      </Sidebar>
    );
  }
};

export default Start;

export const result = graphql`
  query MyStart {
    allContentfulBayarplannerDocData(filter: { type: { eq: "start" } }) {
      nodes {
        category
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
          title
        }
      }
    }
  }
`;
