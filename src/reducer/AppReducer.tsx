import { AppState } from "../context/interfaces";

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

  if (action.type === "SET_LANGUAGE") {
    const language = action.payload;
    return {
      ...state,
      language,
    };
  }

  if (action.type === "SWITCH_LANGUAGE") {
    const language = state.language === "id" ? "en" : "id";

    return {
      ...state,
      language,
    };
  }
  return state;
};
