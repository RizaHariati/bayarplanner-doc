import { createContext } from "react";
import { AppState } from "./interfaces";

export type AppContextProps = {
  dispatch: ({ type }: { type: string; payload?: any }) => void;
  state: AppState;

  setCloseModal: () => void;
  setOpenModal: (value: string) => void;
  translate: (string1: string, string2: string) => string;
  setLanguage: (lang: string) => void;
  switchLanguage: () => void;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);
