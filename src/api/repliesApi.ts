import { IRequestAPI } from "@model";
import axiosClient2th from "./axiosClient2";

const RepliesApi = {
  getAll: (params: IRequestAPI) => {
    const url = "/replies";
    return axiosClient2th.get(url, { params });
  },
};
export default RepliesApi;
