import { PageDataType } from "../context/types.d";
export const homepage_en: PageDataType = {
  register: {
    title: "Register Name",
    list: [
      { text: "Click username button", img: "" },
      { text: "Enter your name", img: "" },
      {
        text: "Choose new avatar by selecting one of the pictures available",
        img: "",
      },
    ],
    opening: [
      "Your name will be used as your database filename. Bayarplanner can't be used without it",
    ],
    closing: [""],
  },
  input: {
    title: "New Data",
    list: [
      {
        text: "On main menu choose <span>Calendar</span>",
        img: "",
      },
      {
        text: "Click any date in the Main Calender. Chose the date where the transaction activity will be held. One new item can use up to two months.",
        img: "",
      },
      {
        text: "Input title and description. Title and description will create a new category, so the title name must be unique and can be used later when entering the same data in other date. One category can have different price",
        img: "",
      },
      {
        text: "If you input the price for each day, it will be automatically multiply to total ",
        img: "",
      },
      {
        text: "If you input the total price, it will be automatically divided by the number of day this schedule is registrated in.",
        img: "",
      },
      {
        text: "Pick expense if you are planning on spending money. Pick income if you are going to receive money",
        img: "",
      },
      {
        text: "Pick payment date, should you choose to pay right away. The maximum date you can choose is the date you choose when you click the calendar.",
        img: "",
      },
    ],
    opening: [
      "The smallest unit in BayarPlanner schedulling is <span>daily</span> unit. For example, under weekly shopping category, you can put in your shopping total instead of all of the shopping item.",
      "For each category, you can use it with different prices",
    ],
    closing: [""],
  },
  edit: {
    title: "Edit Data",
    list: [
      {
        text: "On main menu choose <span>Calendar</span>",
        img: "",
      },
      {
        text: "Click edit button, next to the items you are going to edit.",
        img: "",
      },
      {
        text: "You will be directed to list of items you can edit. Pick one by clicking the <span>Edit</span> button",
        img: "",
      },
      {
        text: "Transaction that's already been paid will have adding date option. Click Add to registration, and select the dates you want to add ",
        img: "",
      },
      {
        text: "Edit title and description. Title must be unique, so you can't change description without changing the title",
        img: "",
      },
      {
        text: "Edit number for each item, or edit total number. You can have different number for the same category",
        img: "",
      },
      {
        text: "<span>Edit Category for all data </span> option can only be clicked when title or description is changed.",
        img: "",
      },
      {
        text: "After everything is set click <span>Edit</span> button",
        img: "",
      },
    ],
    opening: [
      "You can edit one item and you can also edit the entire category for the item you choose",
    ],
    closing: [""],
  },
  delete: {
    title: "Delete Data",
    list: [
      {
        text: "On main menu choose <span>Calendar</span>",
        img: "",
      },
      {
        text: "On the sidebar under the calendar, click the trash button next to the item you are going to delete",
        img: "",
      },
      {
        text: "You will see a list of items you can delete on the day you choose. You can check and uncheck the little box next to items you are going to delete that day",
        img: "",
      },
      {
        text: " If you want to delete the whole item under the same registration id, click the <span>All</span> button",
        img: "",
      },
      {
        text: "To delete data in that day only, click <span>Delete All</span> button",
        img: "",
      },
    ],
    opening: ["You can delete data per day or per category"],
    closing: [""],
  },
};
