import { IFilter } from "../model";

const handleCaseFilter = (
  debounce: string,
  members: any[],
  filter: IFilter
): any[] => {
  let result: any[] = members;
  try {
    if (debounce || !!filter.minAge || !!filter.maxAge || filter.gender) {
      if (debounce) {
        result = members.filter((member) => {
          return (
            member.name.toLowerCase().indexOf(debounce.toLowerCase()) !== -1
          );
        });
      }
      if (!!filter.minAge) {
        result = members.filter((member) => {
          return member.age >= filter?.minAge;
        });
      }
      if (!!filter.maxAge) {
        result = members.filter((member) => {
          return member.age <= filter?.maxAge;
        });
      }
      if (filter.gender) {
        let isMale = filter.gender === "male";
        result = members.filter((member) => {
          return member.gender === isMale;
        });
      }
    }
    return result;
  } catch (e) {
    return [];
  }
};

export { handleCaseFilter };
