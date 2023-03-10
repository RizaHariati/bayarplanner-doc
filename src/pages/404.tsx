import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import Layout from "../component/layout/Layout";
import Sidebar from "../component/layout/Sidebar";

const NotFoundPage: React.FC<PageProps> = ({
  location: { pathname },
}: PageProps) => {
  return (
    <Layout>
      <Sidebar pathname={pathname}>
        <div className="h-screen w-full flex items-center justify-center">
          <h2>Page not found - error 404</h2>
        </div>
      </Sidebar>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
