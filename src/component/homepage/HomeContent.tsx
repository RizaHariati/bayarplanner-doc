import React from "react";
import { useGlobalContext } from "../../context/AppProvider";
import HTMLReactParser from "html-react-parser";

type Props = {
  id: string;
};

const HomeContent = ({ id }: Props) => {
  const {
    state: { homepageContent },
  } = useGlobalContext();

  return (
    <div className="mb-2 pb-2 border-b w-full" id={id}>
      <h2>{homepageContent[id].title}</h2>
      {homepageContent[id].opening ? (
        <div className="bg-pink-100">
          {homepageContent[id].opening?.map((item, index: number) => {
            return <p key={index}>{HTMLReactParser(item)}</p>;
          })}
        </div>
      ) : (
        <div></div>
      )}
      <div>
        <ul className=" list-disc list-inside">
          {homepageContent[id].list.map(
            (value: { text: string; img?: string }, index: number) => {
              return <li key={index}>{HTMLReactParser(value.text)}</li>;
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default HomeContent;
