import { ShowModalType, SidebarType } from "./types.d";

export interface AppState {
  language: string;
  sidebarContent: SidebarType;
  openModal: ShowModalType;
}
