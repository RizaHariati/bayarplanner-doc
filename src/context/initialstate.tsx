import { AppState } from "./interfaces";
const { sidebar_id } = require("../data/sidebar_id.ts");
export const initialState: AppState = {
  language: "id",
  sidebarContent: sidebar_id,
  openModal: { status: false, value: "" },
};
