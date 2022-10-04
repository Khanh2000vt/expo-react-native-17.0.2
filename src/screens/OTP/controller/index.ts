import { SCREEN } from "@constant/index";

export const getNameNextNavigation = (type: number) => {
  if (type === 1) {
    return SCREEN.ACCOUNTS_SNS;
  } else {
    return SCREEN.RESET_PASSWORD;
  }
};

export const getRandomCodeOTP = (): string => {
  return (Math.floor(Math.random() * (9999 - 1000)) + 1000).toString();
};
