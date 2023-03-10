import { createContext } from "react";
import { AppState } from "./interfaces";

export type AppContextProps = {
  dispatch: ({ type }: { type: string; payload?: any }) => void;
  state: AppState;
  slide: boolean;
  setCloseModal: () => void;
  translate: (string1: string, string2: string) => string;
  setPageLocation: (category: string, page: string) => void;
  switchLanguage: () => void;
  slideOut: () => void;
  slideIn: () => void;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);
