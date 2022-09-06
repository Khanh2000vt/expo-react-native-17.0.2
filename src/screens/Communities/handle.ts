import dataTest from "./data.json";
function getFindCommunity(value: string): any[] {
  let data = dataTest;
  if (value === "") {
    return data;
  } else {
    return data.filter((item) => {
      return item.title.indexOf(value) !== -1;
    });
  }
}

export { getFindCommunity };
