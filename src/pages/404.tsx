import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import Layout from "../component/layout/Layout";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="h-screen w-full flex items-center justify-center">
        <h2>Page not found - error 404</h2>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
