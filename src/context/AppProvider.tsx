import React, { useContext, useReducer } from "react";
import { appReducer } from "../reducer/AppReducer";
import { AppContext } from "./AppContext";
import { initialState } from "./initialstate";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const setCloseModal = () => {
    dispatch({
      type: "CLOSE_MODAL",
    });
  };

  const setOpenModal = (value: string) => {
    dispatch({
      type: "OPEN_MODAL",
      payload: value,
    });
  };

  const value = {
    state,
    dispatch,

    setCloseModal,
    setOpenModal,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
