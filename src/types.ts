import { Entry } from "contentful";

export type ContentfulMedia = Entry<{
  title: string;
  description: string;
  file: {
    contentType: string;
    details: {
      image: { width: number; height: number };
      size: number;
    };
    fileName: string;
    url: string;
  };
}>;

export type Pet = Entry<{
  birthdate: string;
  breed: string;
  castrated: boolean;
  description: string;
  gender: Gender;
  name: string;
  specie: Specie;
  thumbnail: ContentfulMedia;
}>;

export type Specie = "cat" | "dog";

export type Gender = "male" | "female";
