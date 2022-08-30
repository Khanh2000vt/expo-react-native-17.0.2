function getDeleteItem(list: any[], item: any) {
  let index = list.indexOf(item);
  return [...list.slice(0, index), ...list.slice(index + 1)];
}

function getAddITem(list: any[], item: any) {
  let temp = list;
  temp.push(item);
  return temp;
}

export { getDeleteItem, getAddITem };
