import { IImage, IUserAPI } from "@model";

export const isPostEmpty = (
  textTitle: string,
  textBody: string,
  images: IImage[]
) => {
  return (
    (!textTitle || textTitle.trim().length === 0) &&
    (!textBody || textBody.trim().length === 0) &&
    images.length === 0
  );
};

export const getNewPost = (
  textTitle: string,
  textBody: string,
  images: IImage[],
  user: IUserAPI
) => {
  if (isPostEmpty(textTitle, textBody, images)) {
    console.log("di vao day");
    return undefined;
  } else {
    const dateCreate = new Date();
    const newPost = {
      id_user: user.id,
      createdAt: dateCreate.toISOString(),
      title: textTitle,
      body: textBody,
      image: images.length === 0 ? "" : images[0].uri,
      id: "0",
    };
    console.log("di vao 2: ", newPost);
    return newPost;
  }
};

export const getNewArrayImage = (images: IImage[], item: IImage) => {
  return images.filter((image) => image !== item);
};
