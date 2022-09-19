import axiosClient from "./axiosClient";

const LoginApi = {
  getAll: () => {
    const url = "/login/1";
    return axiosClient.get(url);
  },
};
export default LoginApi;
