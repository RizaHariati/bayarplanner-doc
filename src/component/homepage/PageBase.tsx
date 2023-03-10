import HTMLReactParser from "html-react-parser";
import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../../context/AppProvider";
import PageContent from "./PageContent";

type Props = {};

const PageBase = (props: Props) => {
  const {
    state: {
      sidebarContent,
      pageLocation: { category, page },
    },
  } = useGlobalContext();

  // const ref: React.LegacyRef<HTMLDivElement> | undefined = useRef(null);
  useEffect(() => {
    // console.log(Object.values(ref.current!.lastElementChild!.children));

    const divElement = document.getElementById(`page${page}`)!;

    if (category !== "") {
      for (
        let index = 0;
        index < divElement.lastElementChild!.children.length;
        index++
      ) {
        const element = divElement?.lastElementChild!.children[index];
        if (element.getAttribute("id") === category) {
          element.scrollIntoView({
            block: "nearest",
          });
        }
      }
    } else {
      setTimeout(() => {
        divElement.firstElementChild?.scrollIntoView({
          block: "nearest",
        });
      }, 50);
    }
  }, [category, page]);

  if (!sidebarContent || Object.keys(sidebarContent).length < 1)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  else {
    if (
      sidebarContent[page].content &&
      Object.keys(sidebarContent[page].content!).length > 0
    ) {
      return (
        <div className="page-base-container  " id={`page${page}`}>
          <h1 className="pt-5">{sidebarContent[page]!.title!}</h1>
          <div className="page-opening">
            {sidebarContent[page].opening?.map((item, index) => {
              return <p key={index}>{HTMLReactParser(item)}</p>;
            })}
          </div>
          <div className="h-fit">
            {Object.keys(sidebarContent[page].content!).map(
              (item: string, index: number) => {
                return <PageContent key={index} id={item} />;
              }
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
  }
};

export default PageBase;
