import { Navigation } from "@constant/index";

export const getNameNextNavigation = (type: number) => {
  if (type === 1) {
    return Navigation.ACCOUNTS_SNS;
  } else if (type === 2) {
    return Navigation.SUCCESSFULLY;
  }
};
