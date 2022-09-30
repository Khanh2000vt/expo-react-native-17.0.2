import { SCREEN } from "@constant/index";

export const getNameNextNavigation = (type: number) => {
  if (type === 1) {
    return SCREEN.ACCOUNTS_SNS;
  } else {
    return SCREEN.SUCCESSFULLY;
  }
};
