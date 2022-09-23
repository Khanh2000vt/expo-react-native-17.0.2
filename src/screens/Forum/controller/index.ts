const getActionLike = (likeRedux: any[], userRedux: any, item: any) => {
  let result = false;
  const postIndexById = likeRedux.findIndex(
    (likeItem) => likeItem.post_id === item.id
  );
  if (postIndexById !== -1 && likeRedux[postIndexById].data.length !== 0) {
    result = likeRedux[postIndexById].data.some(
      (like: any) => like.user_id === userRedux.user_id.toString()
    );
  }
  return result;
};
export { getActionLike };
