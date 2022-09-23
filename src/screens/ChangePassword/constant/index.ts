import { Password, TypePassword } from "../enum";
import * as Yup from "yup";

const arrayInput = [
  {
    id: 1,
    title: Password.CURRENT,
    type: TypePassword.CURRENT,
  },
  {
    id: 2,
    title: Password.NEW,
    type: TypePassword.NEW,
  },
  {
    id: 3,
    title: Password.CONFIRM,
    type: TypePassword.CONFIRM,
  },
];

const initialValues = {
  current: "",
  new: "",
  confirm: "",
};

const validationSchema = Yup.object({
  current: Yup.string().required("Required"),
  new: Yup.string()
    .required("No new password provided.")
    .min(6, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  confirm: Yup.string()
    .required("No password confirm provided.")
    .test("match", "Password do not match", function (passwordConfirm) {
      return passwordConfirm === this.parent.new;
    }),
});

export { arrayInput, initialValues, validationSchema };
