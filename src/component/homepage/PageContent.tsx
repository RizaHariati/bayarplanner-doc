import React from "react";
import { useGlobalContext } from "../../context/AppProvider";
import HTMLReactParser from "html-react-parser";
import { ImageImportType } from "../../context/types.d";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

type Props = {
  id: string;
  imageList: ImageImportType[] | undefined;
};

const PageContent = ({ id, imageList }: Props) => {
  const {
    state: { pageContent, language },
  } = useGlobalContext();

  if (!pageContent[id] || Object.keys(pageContent[id]).length < 1) {
    return <div>Loading</div>;
  } else {
    if (pageContent[id].opening && pageContent[id].opening!.length > 0) {
      return (
        <div className="mb-2 pb-2 border-b w-full" id={id}>
          <h2>{pageContent[id].title} </h2>

          <div className=" bg-mainDrkActive bg-opacity-10 mb-2">
            {pageContent[id].opening!.map((item, index: number) => {
              return <p key={index}>{HTMLReactParser(item)}</p>;
            })}
          </div>

          <div>
            <div className=" ">
              {pageContent[id].list.map(
                (value: { text: string; img?: string }, index: number) => {
                  let imageFind = null;

                  if (imageList && imageList.length > 0) {
                    imageFind = imageList.find((item: ImageImportType) => {
                      if (id === "map") {
                        return item.title.split("-")[2] === language;
                      } else {
                        return (
                          item.title.split("-")[2] === (index + 1).toString()
                        );
                      }
                    });
                  }

                  return (
                    <div key={index} className="w-full ">
                      <p className="w-full list-item list-circle list-outside">
                        &#9900;&nbsp;&nbsp;{HTMLReactParser(value.text)}
                      </p>
                      {imageFind && (
                        <div className="w-full object-cover object-center max-w-md mx-auto mb-2 rounded-md overflow-hidden border shadow-md">
                          <GatsbyImage
                            image={getImage(imageFind!.gatsbyImageData!)!}
                            alt={imageFind?.title || "bayarplanner"}
                            objectPosition="center"
                            objectFit="cover"
                            style={{ width: "100%" }}
                            loading="lazy"
                          />
                        </div>
                      )}
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      );
    } else {
      return <div>satunya</div>;
    }
  }
};

export default PageContent;
