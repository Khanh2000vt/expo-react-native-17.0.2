import { IUserAPI } from "@model";

export const getSubmitEmail = (
  value: {
    email: string;
  },
  user: IUserAPI
): boolean => {
  return user.email.toLowerCase() === value.email.toLowerCase();
};
