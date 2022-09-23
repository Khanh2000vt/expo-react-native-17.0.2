function getFindCommunity(value: string, list: any[]): any[] {
  let data = list;
  if (value === "" || value === undefined) {
    return [...data];
  } else {
    return data
      .filter((item) => {
        return item.title.toLowerCase().indexOf(value.toLowerCase()) !== -1;
      })
      .sort((a, b) => {
        return a.title.indexOf(value) - b.title.indexOf(value);
      });
  }
}

export { getFindCommunity };
