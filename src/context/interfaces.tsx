import { PageDataType, ShowModalType, SidebarType } from "./types.d";

export interface AppState {
  language: string;
  sidebarContent: SidebarType;
  openModal: ShowModalType;
  homepageContent: PageDataType;
  invoiceContent: PageDataType;
  paymentContent: PageDataType;
  fileContent: PageDataType;
  pageContent: PageDataType;
  pageLocation: { category: ""; page: "welcome" };
}
