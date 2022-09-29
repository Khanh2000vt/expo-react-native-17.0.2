import { ICommunityAPI } from "@model";

function getDeleteItem(list: ICommunityAPI[], item: ICommunityAPI) {
  let index = list.indexOf(item);
  return [...list.slice(0, index), ...list.slice(index + 1)];
}

function getAddITem(list: ICommunityAPI[], item: ICommunityAPI) {
  return list.concat(item);
}

export { getDeleteItem, getAddITem };
