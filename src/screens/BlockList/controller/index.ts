export const handleRemoveById = (itemRemove: any, list: any[]) => {
  return list.filter((item) => item.id !== itemRemove.id);
};
