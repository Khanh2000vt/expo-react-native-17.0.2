function createYear(yearNow: number): { label: string; value: string }[] {
  const array = [...Array(100).keys()].map((x) => {
    let temp = "" + (yearNow - x);
    return {
      label: temp,
      value: temp,
    };
  });
  return array;
}
export { createYear };
