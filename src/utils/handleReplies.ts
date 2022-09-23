export const findPost = (post: any, list: any[]) => {
  const postById = list.find((item) => item.post_id === post.id);
  if (postById === undefined) {
    throw new Error("Find return undefined");
  } else {
    return postById;
  }
};
