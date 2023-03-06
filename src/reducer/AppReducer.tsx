import { AppState } from "../context/interfaces";
import { PageDataType, SidebarType } from "../context/types.d";
import { homepage_id } from "../data/homepage_id";
import { sidebar_en } from "../data/sidebar_en";
import { sidebar_id } from "../data/sidebar_id";
import { homepage_en } from "../data/homepage_en";
import { invoicepage_id } from "../data/invoicepage_id";
import { paymentpage_id } from "../data/paymentpage_id";
import { filepage_id } from "../data/filepage_id";

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
  if (action.type === "SET_CATEGORY") {
    const { category, page } = action.payload;
    let pageContent = state.homepageContent;
    if (!category) {
      if (page === "payment") {
        pageContent = state.paymentContent;
      } else if (page === "invoice") {
        pageContent = state.invoiceContent;
      } else if (page === "start") {
        pageContent = state.homepageContent;
      } else {
        pageContent = state.fileContent;
      }
    }
    return {
      ...state,
      pageContent,
      pageLocation: { category, page },
    };
  }
  if (action.type === "SWITCH_LANGUAGE") {
    const language = state.language === "id" ? "en" : "id";
    let sidebarContent: SidebarType = sidebar_id;
    let homepageContent: PageDataType = homepage_id;
    let invoiceContent: PageDataType = invoicepage_id;
    let paymentContent: PageDataType = paymentpage_id;
    let fileContent: PageDataType = filepage_id;

    if (state.language === "id") {
      sidebarContent = sidebar_en;
      homepageContent = homepage_en;
      invoiceContent = homepage_en;
      paymentContent = homepage_en;
      fileContent = homepage_en;
    }

    return {
      ...state,
      language,
      sidebarContent,
      homepageContent,
    };
  }
  return state;
};
