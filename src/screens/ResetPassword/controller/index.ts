import { IValidate } from "../ResetPasswordScreen";

export const getValidateNewPassword = (password: string): IValidate => {
  if (password.length === 0) {
    return {
      error: true,
      message: "Required",
    };
  } else if (password.length < 6 && password.length !== 0) {
    return {
      error: true,
      message: "Password must be at least 6 characters",
    };
  } else {
    return {
      error: false,
      message: undefined,
    };
  }
};

export const getValidateConfirmPassword = (
  confirm: string,
  current: string
) => {
  if (confirm.length === 0) {
    return {
      error: true,
      message: "Required",
    };
  } else if (confirm !== current && confirm.length !== 0) {
    return {
      error: true,
      message: "The new password is the same as the current password",
    };
  } else {
    return {
      error: false,
      message: undefined,
    };
  }
};
