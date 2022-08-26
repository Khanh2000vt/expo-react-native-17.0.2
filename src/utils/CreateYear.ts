import { useMemo } from "react";

const createYear = new Date().getFullYear();
const ListYear = (): { label: string; value: string }[] => {
  const array = [...Array(100).keys()].map((x) => {
    let temp = "" + (createYear - x);
    return {
      label: temp,
      value: temp,
    };
  });
  return array;
};
export { ListYear };
