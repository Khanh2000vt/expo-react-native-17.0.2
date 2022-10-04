import { IUserAPI } from "@model";
import { IFormikLogin } from "../LoginScreen";

export const getLogin = (value: IFormikLogin, user: IUserAPI) => {
  if (user.email === null || user.password === null) {
    return false;
  } else {
    return (
      user.email.toLowerCase() === value.email.toLowerCase() &&
      user.password === value.password
    );
  }
};
