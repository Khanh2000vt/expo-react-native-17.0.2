import * as Yup from "yup";
interface IFormik {
  email: string;
  password: string;
  username: string;
  gender: string;
  birth_year: string;
  introduction: string;
}
export const initialValues: IFormik = {
  email: "",
  password: "",
  username: "",
  gender: "",
  birth_year: "",
  introduction: "",
};
export const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(6, "Password is too short - should be 6 chars minimum."),
  // .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  username: Yup.string()
    .required("No username provided.")
    .min(6, "Username is too short - should be 6 chars minimum.")
    .matches(/[a-zA-Z]/, "Username can only contain Latin letters."),
  gender: Yup.string().required("No gender provided."),
  birth_year: Yup.string().required("No birth year provided."),
});
