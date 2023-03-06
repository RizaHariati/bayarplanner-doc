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
  const ref: React.LegacyRef<HTMLDivElement> | undefined = useRef(null);
  // useEffect(() => {
  //   // console.log(Object.values(ref.current!.lastElementChild!.children));
  //   const divElement = document.getElementById(`page${page}`)!;
  //   for (
  //     let index = 0;
  //     index < divElement.lastElementChild!.children.length;
  //     index++
  //   ) {
  //     const element = divElement?.lastElementChild!.children[index];
  //     if (element.getAttribute("id") === category) {
  //       element.scrollIntoView({
  //         block: "nearest",
  //         behavior: "smooth",
  //       });
  //     }
  //   }
  // }, [category, page]);

  return (
    <div
      className="w-full overflow-y-scroll pb-20 h-screen scroll-smooth"
      ref={ref}
      id={`page${page}`}
    >
      <h1>{sidebarContent[page].title}</h1>
      <div>
        {sidebarContent[page].opening?.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
      <div className="h-fit">
        {sidebarContent[page].content ? (
          Object.keys(sidebarContent[page].content!).map(
            (item: string, index: number) => {
              return <PageContent key={index} id={item} />;
            }
          )
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default PageBase;
