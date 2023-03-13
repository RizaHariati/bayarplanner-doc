import React, { useEffect } from "react";
import Sidebar from "../component/layout/Sidebar";
import { useGlobalContext } from "../context/AppProvider";
import PageBase from "../component/homepage/PageBase";
import { graphql, navigate, PageProps } from "gatsby";

const Payment = ({ location: { pathname }, data }: PageProps) => {
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

export default Payment;
export const result = graphql`
  query MyPayment {
    allContentfulBayarplannerDocData(filter: { type: { eq: "payment" } }) {
      nodes {
        category
        image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: DOMINANT_COLOR
            width: 500
          )
          title
        }
      }
    }
  }
`;
