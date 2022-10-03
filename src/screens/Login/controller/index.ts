import { IUserAPI } from "@model";
import { IFormikLogin } from "../LoginScreen";

export const getLogin = (value: IFormikLogin, user: IUserAPI) => {
  return user.email === value.email && user.password === value.password;
};
