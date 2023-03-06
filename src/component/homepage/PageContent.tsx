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

  return (
    <div className="mb-2 pb-2 border-b w-full" id={id}>
      <h2>{pageContent[id].title} </h2>
      {/* {pageContent[id].opening ? (
        <div className="bg-blue-100">
          {pageContent[id].opening?.map((item, index: number) => {
            return <p key={index}>{HTMLReactParser(item)}</p>;
          })}
        </div>
      ) : (
        <div></div>
      )}
      <div>
        <ul className=" list-disc list-inside">
          {pageContent[id].list.map(
            (value: { text: string; img?: string }, index: number) => {
              return <li key={index}>{HTMLReactParser(value.text)}</li>;
            }
          )}
        </ul>
      </div> */}
    </div>
  );
};

export default PageContent;
