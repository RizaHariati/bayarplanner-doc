import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { GatsbyImageProps, IGatsbyImageData } from "gatsby-plugin-image";

export type ProjectType = {
  id: string;
  url: string;
  title: string;
  slug: string;
  description: string[];
  mainProgram: string;
  dependencies: string;
};

export type ImageType = {
  gatsbyImageData: any;
  original: { src: string };
};

export type PortfolioImageType = {
  monitor?: IGatsbyImageData;
  screenPhone?: IGatsbyImageData;
  mainphone?: IGatsbyImageData;
  logo?: IGatsbyImageData;
};
export type AllImageType = {
  iconImage?: IGatsbyImageData;
  iconLink?: IGatsbyImageData;
  profilePicSmall?: IGatsbyImageData;
  magnifying?: IGatsbyImageData;
};

export type PortfolioType = {
  [key: string]: PortfolioImageType;
};

export type ShowModalType = {
  status: boolean;
  value: string;
};

export type SidebarType = {
  [key: string]: {
    title: string;
    link: string;
    icon: IconProp;
    content?: { [key: string]: any };
    opening?: string[];
  };
};

export type PageDataContentType = {
  title: string;
  list: { text: string; img?: string }[];
  opening?: string[];
  closing?: string[];
};
export type PageDataType = {
  [key: string]: PageDataContentType;
};

export type ImageImportType = {
  title: string;
  gatsbyImageData: IGatsbyImageData;
};
export type ContentfulImageType = {
  category: string;
  image: ImageImportType;
};
