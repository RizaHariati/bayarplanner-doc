import * as React from "react";
import { AppProvider } from "./context/AppProvider";
import "./styles/index.css";
type Props = {
  children: JSX.Element | JSX.Element[];
};

const WrapRootElement = ({ children }: Props) => (
  <AppProvider>
    <div className="bg-pink-300">{children}</div>
  </AppProvider>
);

export default WrapRootElement;
