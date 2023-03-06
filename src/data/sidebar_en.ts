import {
  faBook,
  faCoins,
  faFile,
  faHand,
} from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-regular-svg-icons";
import { SidebarType } from "../context/types.d";

export const sidebar_en: SidebarType = {
  welcome: {
    title: "Welcome",
    link: "/",
    icon: faHand,
    opening: [
      "BayarPlanner was made to help you record your financial transactions and arrange your schedule based on those transactions. Therefore the smallest unit ini this app is day instead of product item.",
      "Hope this app helps you manage your life better!",
    ],
  },

  start: {
    title: "Start Planning",
    link: "/start/",
    icon: faFlag,
    content: {
      register: "Register Name",
      input: "New Data",
      edit: "Edit Data",
      delete: "Delete Data",
    },
    opening: [
      "BayarPlanner was made to help you record your financial transactions and arrange your schedule based on those transactions. Therefore the smallest unit ini this app is day instead of product item.",
      "Hope this app helps you manage your life better!",
    ],
  },

  payment: {
    title: "Payment",
    link: "/payment/",
    icon: faCoins,
    content: {
      check: "Payment List",
      payment: "Pembayaran",
      invoice: "Kwitansi",
      file: "Manajemen File",
    },
    opening: [
      "BayarPlanner was made to help you record your financial transactions and arrange your schedule based on those transactions. Therefore the smallest unit ini this app is day instead of product item.",
      "Hope this app helps you manage your life better!",
    ],
  },

  invoice: {
    title: "Invoice",
    link: "/invoice/",
    icon: faBook,
    content: {
      start: "Mulai",
      payment: "Pembayaran",
      invoice: "Kwitansi",
      file: "Manajemen File",
    },
    opening: [
      "Invoice calendar is based on your payment date.",
      "Invoice can be downloaded in JPG form, and form more than one items can also be downloaded in PDF or excel ",
    ],
  },

  file: {
    title: "File Management",
    link: "/file/",
    icon: faFile,
    content: {
      start: "File name",
      payment: "Look at file",
      invoice: "Kwitansi",
      file: "Manajemen File",
    },
    opening: [
      "BayarPlanner was made to help you record your financial transactions and arrange your schedule based on those transactions. Therefore the smallest unit ini this app is day instead of product item.",
      "Hope this app helps you manage your life better!",
    ],
  },
};
