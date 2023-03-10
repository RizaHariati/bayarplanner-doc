import { navigate, PageProps } from "gatsby";
import React, { useContext, useState, useReducer } from "react";
import { appReducer } from "../reducer/AppReducer";
import { AppContext } from "./AppContext";
import { initialState } from "./initialstate";
const data_id = require("../data/data_id.json");
const data_en = require("../data/data_en.json");
interface Props {
  children: JSX.Element | JSX.Element[];
}

export const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [slide, setSlide] = useState(false);
  const switchLanguage = () => {
    dispatch({ type: "SWITCH_LANGUAGE" });
    dispatch({
      type: "SET_CATEGORY",
      payload: {
        category: state.pageLocation.category,
        page: state.pageLocation.page,
      },
    });
  };

  const slideOut = () => {
    setSlide(true);
  };
  const slideIn = () => {
    setSlide(false);
  };
  const translate = (key1: string, key2: string) => {
    let language = state.language;

    let langData: { [key1: string]: { [key2: string]: string } } = data_id;
    if (language === "id") {
      langData = data_id;
    } else if (language === "en") {
      langData = data_en;
    }
    return langData[key1][key2];
  };
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

  const setPageLocation = (category: string, page: string) => {
    slideIn();
    dispatch({
      type: "SET_CATEGORY",
      payload: { category, page },
    });
  };
  const value = {
    state,
    dispatch,
    setCloseModal,
    setOpenModal,
    translate,
    switchLanguage,
    setPageLocation,
    slide,
    slideOut,
    slideIn,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
