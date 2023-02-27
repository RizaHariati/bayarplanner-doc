import { AppState } from "../context/interfaces";
import { SidebarType } from "../context/types.d";
import { sidebar_en } from "../data/sidebar_en";
import { sidebar_id } from "../data/sidebar_id";

interface OpenModalAction {
  type: string;
  payload?: any;
}
export const appReducer = (state: AppState, action: OpenModalAction) => {
  if (action.type === "OPEN_MODAL") {
    const value = action.payload;
    return {
      ...state,
      openModal: { status: true, value },
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      openModal: { status: false, value: "" },
    };
  }

  if (action.type === "SWITCH_LANGUAGE") {
    const language = state.language === "id" ? "en" : "id";
    let sidebarContent: SidebarType = sidebar_id;

    if (state.language === "id") {
      sidebarContent = sidebar_en;
    }
    return {
      ...state,
      language,
      sidebarContent,
    };
  }
  return state;
};
