import React from "react";
import type { GatsbySSR } from "gatsby";
import "./src/styles/index.css";

import WrapRootElement from "./src/wrap-root-element";

const wrapRootElement: GatsbySSR["wrapRootElement"] = ({ element }) => {
  return <WrapRootElement>{element}</WrapRootElement>;
};

export { wrapRootElement };
