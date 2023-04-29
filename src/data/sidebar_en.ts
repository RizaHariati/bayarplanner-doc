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
      map: "map",
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
      check: "Check Payment List",
      daypayment: "Payment List",
      itempaymentSameID: "Same Registration ID Payment",
      itempaymentmultiple: "Multiple Item Payment",
      itempaymentsingle: "Single Item Payment",
    },
    opening: [
      "Payment list consists of all of the scheduled transactions that haven't got paid. When the schedule's color is red, that means it's already behind schedule",
    ],
  },
  invoice: {
    title: "Invoice",
    link: "/invoice/",
    icon: faBook,
    content: {
      invoicemultiple: "Print multiple data",
      invoicesingle: "Print single data",
    },
    opening: [
      "Invoice calendar is based on your payment date. So it can be different from your Schedule and Payment Calendar ",
    ],
  },

  file: {
    title: "File Management",
    link: "/file/",
    icon: faFile,
    content: {
      savingData: "Saving Data",
      uploadingData: "Uploading Data",
      clearingData: "Clean Data Browser",
      addData: "Add other data",
      deleteUser: "Delete User",
    },
    opening: [
      "All of the data will be temporarily saved on your browser. After editing you should <span>save your data to your hard drive</span> or there's a big chance it will be deleted from your browser. This is by design so your data can be secured",
      "You can delete the data from your browser, but to clean your hard drive, you have to do it manually.",
    ],
  },
};
