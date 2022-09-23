import { IRequestAPI } from "@model";
import axiosClient2th from "./axiosClient2";

const url = "/log";
const LogApi = {
  getAll: (params: IRequestAPI) => {
    return axiosClient2th.get(url, {
      params,
    });
  },
};
export default LogApi;
