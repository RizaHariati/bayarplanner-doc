import React from "react";
import { useGlobalContext } from "../../context/AppProvider";
import HTMLReactParser from "html-react-parser";

type Props = {
  id: string;
};

const PageContent = ({ id }: Props) => {
  const {
    state: { pageContent },
  } = useGlobalContext();

  if (!pageContent[id] || Object.keys(pageContent[id]).length < 1) {
    return <div>Loading</div>;
  } else {
    if (pageContent[id].opening && pageContent[id].opening!.length > 0) {
      return (
        <div className="mb-2 pb-2 border-b w-full" id={id}>
          <h2>{pageContent[id].title} </h2>

          <div className=" bg-mainDrkActive bg-opacity-10">
            {pageContent[id].opening!.map((item, index: number) => {
              return <p key={index}>{HTMLReactParser(item)}</p>;
            })}
          </div>

          <div>
            <ul className=" list-disc list-inside">
              {pageContent[id].list.map(
                (value: { text: string; img?: string }, index: number) => {
                  return <li key={index}>{HTMLReactParser(value.text)}</li>;
                }
              )}
            </ul>
          </div>
        </div>
      );
    } else {
      return <div>satunya</div>;
    }
  }
};

export default PageContent;
