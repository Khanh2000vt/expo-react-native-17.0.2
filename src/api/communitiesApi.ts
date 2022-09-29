import { IRequestAPI } from "@model";
import axiosClient from "./axiosClient";

const CommunitiesApi = {
  getAll: () => {
    const url = "/communities";
    return axiosClient.get(url);
  },
  getParams: (params: IRequestAPI) => {
    const url = "/communities";
    return axiosClient.get(url, { params });
  },
};
export default CommunitiesApi;
