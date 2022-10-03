import { Password, TypePassword } from "../enum";
import * as Yup from "yup";

export interface IFormikChange {
  current: string;
  new: string;
  confirm: string;
}
const initialValues = {
  current: "",
  new: "",
  confirm: "",
};

const validationSchema = Yup.object({
  current: Yup.string().required("Required"),
  new: Yup.string()
    .required("No new password provided")
    .min(6, "Password is too short - should be 8 chars minimum.")
    .test(
      "match",
      "The new password is the same as the current password",
      function (passwordConfirm) {
        return passwordConfirm !== this.parent.current;
      }
    ),
  // .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  confirm: Yup.string()
    .required("No password confirm provided")
    .test("match", "Password do not match", function (passwordConfirm) {
      return passwordConfirm === this.parent.new;
    }),
});

export { initialValues, validationSchema };
