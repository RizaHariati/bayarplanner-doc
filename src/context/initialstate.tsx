import { filepage_id } from "../data/filepage_id";
import { invoicepage_id } from "../data/invoicepage_id";
import { paymentpage_id } from "../data/paymentpage_id";
import { AppState } from "./interfaces";
const { sidebar_id } = require("../data/sidebar_id.ts");
const { homepage_id } = require("../data/homepage_id.ts");
export const initialState: AppState = {
  language: "id",
  sidebarContent: sidebar_id,
  openModal: { status: false, value: "" },
  homepageContent: homepage_id,
  invoiceContent: invoicepage_id,
  paymentContent: paymentpage_id,
  fileContent: filepage_id,
  pageContent: homepage_id,
  pageLocation: { category: "", page: "welcome" },
};
