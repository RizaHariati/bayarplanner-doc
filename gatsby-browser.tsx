import React from "react";
import type { GatsbyBrowser } from "gatsby";
import "./src/styles/index.css";

import WrapRootElement from "./src/wrap-root-element";

const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({ element }) => {
  return <WrapRootElement>{element}</WrapRootElement>;
};

export { wrapRootElement };
