import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../../context/AppProvider";

import HomeContent from "./HomeContent";

type Props = {};

const Homepage = (props: Props) => {
  const {
    state: {
      sidebarContent,
      pageLocation: { category, page },
    },
  } = useGlobalContext();

  const ref: React.LegacyRef<HTMLDivElement> | undefined = useRef(null);
  useEffect(() => {
    // console.log(Object.values(ref.current!.lastElementChild!.children));
    const divElement = document.getElementById("something")!;
    for (
      let index = 0;
      index < divElement.lastElementChild!.children.length;
      index++
    ) {
      const element = divElement?.lastElementChild!.children[index];
      if (element.getAttribute("id") === category) {
        element.scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
      }
    }
  }, [category, page]);

  return (
    <div
      className="w-full overflow-y-scroll pb-20 h-screen scroll-smooth"
      ref={ref}
      id="something"
    >
      <h1>{sidebarContent["start"].title}</h1>
      <div>
        {sidebarContent["start"].opening?.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
      <div className="h-fit">
        {Object.keys(sidebarContent["start"].content!).map(
          (item: string, index: number) => {
            return <HomeContent key={index} id={item} />;
          }
        )}
      </div>
    </div>
  );
};

export default Homepage;
