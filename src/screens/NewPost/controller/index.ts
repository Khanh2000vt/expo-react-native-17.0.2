import { IImage } from "@model";

export const getNewPost = (
  textTitle: string,
  textBody: string,
  images: IImage[],
  user: any
) => {
  if (
    (!textTitle || textTitle.trim().length === 0) &&
    (!textBody || textBody.trim().length === 0) &&
    images.length === 0
  ) {
    return undefined;
  } else {
    const dateCreate = new Date();
    const newPost = {
      name: user.name,
      avatar: user.avatar,
      createdAt: dateCreate.toISOString(),
      title: textTitle,
      body: textBody,
      likes: 0,
      replies: 0,
      image: images[0],
    };
    return newPost;
  }
};

export const getNewArrayImage = (images: IImage[], item: IImage) => {
  return images.filter((image) => image !== item);
};
