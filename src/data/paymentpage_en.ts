import { PageDataType } from "../context/types.d";
export const paymentpage_en: PageDataType = {
  check: {
    title: "Check Payment List",
    list: [
      {
        text: "To see the payment list,first click <span>Payment</span> button on the main menu",
        img: "",
      },
      {
        text: "On the main calendar you can see the whole list. Pick one of the date of payment list that you are going to pay. If you click on a date with multiple item, you will see payment item list.",
        img: "",
      },
      {
        text: "If you clik on a date with only one item you will see a Payment for one item form",
        img: "",
      },
      {
        text: "Ont the side column you will see all the items you haven't pay for a month. If you click <span>Pay</span> button you will see the payment list for that day.",
        img: "",
      },
      {
        text: "If you click on the button with the price tag, you will see a payment for one item option",
        img: "",
      },
    ],
    opening: [
      "Payment list is on the Main Calendar and on sidebar, below the small calendar.",
    ],
    closing: [""],
  },
  daypayment: {
    title: "Payment List Form",
    list: [
      {
        text: "If you want to mark payment on all the items on the list for that day only you can pick the <span>payment date</span> ",
        img: "",
      },
      {
        text: "And then click <span>Pay All</span>",
        img: "",
      },
      {
        text: "If you're only going to pay one item, click <span>Pay</span> and then it will show you the Payment for One item option",
        img: "",
      },
    ],
    opening: [
      "<span>Payment List Form</span> can be opened by clicking date on Main Calendar or by clicking <span>Pay</span> button on the Sidebar. You can pay items per day or pay just one item by clicking <span>Pay</span> button",
    ],
    closing: [""],
  },
  itempaymentSameID: {
    title: "Same Registration ID Payment",
    list: [
      {
        text: "If you want to add more items to pay (under the same Registration ID) click on the date on the top",
        img: "",
      },
      {
        text: "Select the date you want to add",
        img: "",
      },
      {
        text: "Select payment date",
        img: "",
      },
      {
        text: "Click <span>Pay</span>",
        img: "",
      },
    ],
    opening: [""],
    closing: [""],
  },
  itempaymentmultiple: {
    title: "Multiple Item Payment",
    list: [
      {
        text: "To pay the <span>whole</span> item under the same registration ID with your selected item, first, select the payment date",
        img: "",
      },
      {
        text: "And then click <span>Pay All </span>button",
      },
    ],
    opening: [""],
    closing: [""],
  },
  itempaymentsingle: {
    title: "Single Item Payment",
    list: [
      {
        text: "To pay the <span>only one</span> item  first, select the payment date",
        img: "",
      },
      {
        text: "And then click <span>Pay </span>button",
      },
    ],
    opening: [
      "For Pay Item Option, you can pay for only one selected item, adding more dates to pay or pay the whole items that have the same registriationID with your earlier chosen item",
    ],
    closing: [""],
  },
};
