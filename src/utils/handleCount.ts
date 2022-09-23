export const findPostById = (post: any, list: any[]) => {
  const postById = list.find((item) => item.post_id === post.id);
  if (postById === undefined) {
    throw new Error("Find return undefined");
  } else {
    return postById;
  }
};

export const findIndexPostById = (post: any, list: any[]) => {
  const index = list.findIndex((item) => item.post_id === post.id);
  return index;
};

export const countAmount = (post: any, listData: any[]) => {
  try {
    const postById = findPostById(post, listData);
    return postById.data.length;
  } catch (err) {
    return 0;
  }
};
