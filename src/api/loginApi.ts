import axiosClient from "./axiosClient";

const LoginApi = {
  getAll: () => {
    const url = "/login/10";
    return axiosClient.get(url);
  },
};
export default LoginApi;
